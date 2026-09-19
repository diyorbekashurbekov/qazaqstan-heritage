import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import * as THREE from 'three';
import {
  Maximize2,
  Minimize2,
  RotateCcw,
  Volume2,
  VolumeX,
  Headphones,
  Pause,
  X,
  Navigation,
  ChevronLeft,
  ChevronRight,
  Compass,
  Info,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';
import type { HistoricalDestination, Language } from '../types/tourism';
import { ttsService, type TTSLanguage } from '../services/ttsService';
import {
  getMonumentChambers,
  type LivingChamber,
  type LivingHotspot,
} from '../data/monumentChambersData';

interface Monument3DViewerProps {
  destination: HistoricalDestination;
  language: Language;
  initialFocus?: string;
  onClose?: () => void;
  isModal?: boolean;
  className?: string;
  onOpenRoute?: () => void;
}

/**
 * Builds a cylindrical curved panoramic arc screen for the focal authentic photo.
 * Zero horizontal mirroring, zero inversion, zero stretching.
 */
function buildCurvedArcGeometry(radius: number, height: number, thetaArc: number, segments = 64) {
  const geo = new THREE.BufferGeometry();
  const positions: number[] = [];
  const uvs: number[] = [];
  const indices: number[] = [];

  for (let iy = 0; iy <= 1; iy++) {
    const v = 1 - iy; // iy=0 -> top (v=1), iy=1 -> bottom (v=0)
    const y = (0.5 - iy) * height;

    for (let ix = 0; ix <= segments; ix++) {
      const u = ix / segments; // ix=0 -> left (u=0), ix=segments -> right (u=1)
      const angle = (u - 0.5) * thetaArc;

      const x = radius * Math.sin(angle);
      const z = -radius * Math.cos(angle);

      positions.push(x, y, z);
      uvs.push(u, v);
    }
  }

  for (let ix = 0; ix < segments; ix++) {
    const a = ix;
    const b = ix + 1;
    const c = ix + segments + 1;
    const d = ix + segments + 2;

    // Normals face inward towards camera at (0, 0, 0)
    indices.push(a, c, b);
    indices.push(b, c, d);
  }

  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

export const Monument3DViewer: React.FC<Monument3DViewerProps> = ({
  destination,
  language,
  onClose,
  className = '',
  onOpenRoute,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Chambers registry
  const chambers: LivingChamber[] = useMemo(() => {
    const defaultUrl = destination.images[0]?.url || '/images/destinations/yasawi.jpg';
    return getMonumentChambers(destination.id, destination.name, defaultUrl);
  }, [destination.id, destination.name, destination.images]);

  const [currentChamberIndex, setCurrentChamberIndex] = useState<number>(0);
  const currentChamber = chambers[currentChamberIndex] || chambers[0];

  // States
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [isNarrating, setIsNarrating] = useState<boolean>(false);
  const [showStoryCard, setShowStoryCard] = useState<boolean>(true);
  const [activeHotspot, setActiveHotspot] = useState<LivingHotspot | null>(null);
  const [isLoadingTexture, setIsLoadingTexture] = useState<boolean>(true);
  const [zoomFov, setZoomFov] = useState<number>(56); // 25 (macro) to 75 (wide)
  const [compassHeading, setCompassHeading] = useState<number>(0);

  // Three.js References
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const ambientMeshRef = useRef<THREE.Mesh | null>(null);
  const screenMeshRef = useRef<THREE.Mesh | null>(null);
  const textureLoaderRef = useRef<THREE.TextureLoader | null>(null);
  const animFrameIdRef = useRef<number | null>(null);
  const currentArcAngleRef = useRef<number>(1.25);
  const currentArcHeightRef = useRef<number>(120);

  // Camera Look Angles with Damping (360 Drag)
  const lonRef = useRef<number>(0);
  const latRef = useRef<number>(0);
  const targetLonRef = useRef<number>(0);
  const targetLatRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);
  const previousPointerPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // 2D Screen Hotspots projected from 3D
  const [projectedHotspots, setProjectedHotspots] = useState<
    { hotspot: LivingHotspot; screenX: number; screenY: number; visible: boolean }[]
  >([]);

  // Web Audio Ambience
  const audioCtxRef = useRef<AudioContext | null>(null);
  const soundOscRef = useRef<OscillatorNode | null>(null);
  const soundGainRef = useRef<GainNode | null>(null);

  // 1. Web Audio Ambience Generator (Acoustic Chamber Resonance - 146.83 Hz)
  useEffect(() => {
    if (soundEnabled) {
      try {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        if (!audioCtxRef.current) {
          audioCtxRef.current = new AudioCtx();
        }
        if (audioCtxRef.current.state === 'suspended') {
          audioCtxRef.current.resume();
        }
        const ctx = audioCtxRef.current;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(146.83, ctx.currentTime);
        gain.gain.setValueAtTime(0.0001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.032, ctx.currentTime + 1.2);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();

        soundOscRef.current = osc;
        soundGainRef.current = gain;
      } catch (err) {
        console.warn('Audio ambience unavailable:', err);
      }
    } else {
      if (soundGainRef.current && audioCtxRef.current) {
        soundGainRef.current.gain.setValueAtTime(0.0001, audioCtxRef.current.currentTime);
        setTimeout(() => {
          soundOscRef.current?.stop();
          soundOscRef.current?.disconnect();
          soundOscRef.current = null;
        }, 200);
      }
    }

    return () => {
      if (soundOscRef.current) {
        soundOscRef.current.stop();
        soundOscRef.current.disconnect();
      }
    };
  }, [soundEnabled]);

  // 2. Google Arts & Culture Voice Narration via Web Speech API
  const stopNarration = useCallback(() => {
    ttsService.stop();
    setIsNarrating(false);
  }, []);

  const startNarration = useCallback(() => {
    const story = currentChamber.narratorStory[language];
    ttsService.preload().then(() => {
      setIsNarrating(true);
      ttsService.speak(
        story,
        language as TTSLanguage,
        () => setIsNarrating(false),
        () => setIsNarrating(false)
      );
    });
  }, [currentChamber, language]);

  const toggleNarration = () => {
    if (isNarrating) {
      stopNarration();
    } else {
      startNarration();
    }
  };

  // Auto-play narration when chamber changes or viewer opens
  useEffect(() => {
    // Small delay to allow scene to render and feel natural
    const timer = setTimeout(() => {
      startNarration();
    }, 800);
    return () => {
      clearTimeout(timer);
      stopNarration();
    };
  }, [currentChamberIndex, startNarration, stopNarration]);

  // 3. Initialize Three.js WebGL True 360 Panoramic Scene
  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 560;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x080a0e);
    sceneRef.current = scene;

    // Camera at Origin (0, 0, 0)
    const camera = new THREE.PerspectiveCamera(zoomFov, width / height, 0.1, 1000);
    camera.position.set(0, 0, 0);
    cameraRef.current = camera;

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    // Ambient 360-Degree Continuous Sphere (Covers Entire 360° Space - Zero Black)
    const ambientGeo = new THREE.SphereGeometry(140, 64, 32);
    // Invert U coordinate for natural, unmirrored view from inside
    const uvAttr = ambientGeo.attributes.uv;
    for (let i = 0; i < uvAttr.count; i++) {
      uvAttr.setX(i, 1 - uvAttr.getX(i));
    }
    uvAttr.needsUpdate = true;

    const ambientMat = new THREE.MeshBasicMaterial({
      side: THREE.BackSide,
      color: 0xffffff,
    });
    const ambientMesh = new THREE.Mesh(ambientGeo, ambientMat);
    // Align u=0.50 (front) directly with -Z
    ambientMesh.rotation.y = Math.PI * 0.5;
    scene.add(ambientMesh);
    ambientMeshRef.current = ambientMesh;

    // Focal Front Curved Screen Arc (Radius 100)
    const R = 100;
    const H = 120;
    const initialArc = Math.PI * 0.48;
    currentArcAngleRef.current = initialArc;
    currentArcHeightRef.current = H;

    const arcGeo = buildCurvedArcGeometry(R, H, initialArc, 64);
    const arcMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.FrontSide,
      transparent: true,
      opacity: 0.98,
    });
    const arcMesh = new THREE.Mesh(arcGeo, arcMat);
    scene.add(arcMesh);
    screenMeshRef.current = arcMesh;

    // Texture Loader
    const textureLoader = new THREE.TextureLoader();
    textureLoaderRef.current = textureLoader;

    // Load initial textures:
    // 1) 360 Panorama background covering all 360 degrees
    // 2) Focal front authentic photo
    setIsLoadingTexture(true);

    const panoUrl = currentChamber.pano360Url || currentChamber.imageUrl;
    textureLoader.load(
      panoUrl,
      (panoTex) => {
        panoTex.colorSpace = THREE.SRGBColorSpace;
        panoTex.minFilter = THREE.LinearFilter;
        ambientMat.map = panoTex;
        ambientMat.needsUpdate = true;
      },
      undefined,
      (err) => console.warn('Ambient 360 pano load fallback:', err)
    );

    textureLoader.load(
      currentChamber.imageUrl,
      (focalTex) => {
        focalTex.colorSpace = THREE.SRGBColorSpace;
        focalTex.minFilter = THREE.LinearFilter;
        focalTex.magFilter = THREE.LinearFilter;
        focalTex.generateMipmaps = false;

        const imgWidth = focalTex.image.naturalWidth || focalTex.image.width || 1024;
        const imgHeight = focalTex.image.naturalHeight || focalTex.image.height || 1024;
        const aspect = imgWidth / imgHeight;

        const thetaArc = Math.min(Math.PI * 0.92, Math.max(Math.PI * 0.42, (H * aspect) / R));
        currentArcAngleRef.current = thetaArc;

        if (arcMesh.geometry) arcMesh.geometry.dispose();
        arcMesh.geometry = buildCurvedArcGeometry(R, H, thetaArc, 64);

        arcMat.map = focalTex;
        arcMat.needsUpdate = true;
        setIsLoadingTexture(false);
      },
      undefined,
      (err) => {
        console.warn('Focal photo texture load error:', err);
        setIsLoadingTexture(false);
      }
    );

    // 4. Animation & Render Loop with Smooth Damping
    const forwardVec = new THREE.Vector3();
    const tempPos = new THREE.Vector3();

    const animate = () => {
      animFrameIdRef.current = requestAnimationFrame(animate);

      // Smooth inertia interpolation
      lonRef.current += (targetLonRef.current - lonRef.current) * 0.14;
      latRef.current += (targetLatRef.current - latRef.current) * 0.14;

      // Vertical tilt clamp (-75 to +75 degrees)
      latRef.current = Math.max(-75, Math.min(75, latRef.current));

      // Calculate 3D Target Vector
      const lonRad = THREE.MathUtils.degToRad(lonRef.current);
      const latRad = THREE.MathUtils.degToRad(latRef.current);
      const cosLat = Math.cos(latRad);

      const targetX = 100 * cosLat * Math.sin(lonRad);
      const targetY = 100 * Math.sin(latRad);
      const targetZ = -100 * cosLat * Math.cos(lonRad);

      if (cameraRef.current) {
        cameraRef.current.lookAt(targetX, targetY, targetZ);
        cameraRef.current.getWorldDirection(forwardVec);
      }

      // Live Compass State
      const normLon = ((lonRef.current % 360) + 360) % 360;
      setCompassHeading(Math.round(normLon));

      // Project 3D Hotspots to 2D Screen
      if (cameraRef.current && containerRef.current) {
        const cWidth = containerRef.current.clientWidth;
        const cHeight = containerRef.current.clientHeight;

        const thetaArc = currentArcAngleRef.current || 1.25;
        const arcH = currentArcHeightRef.current || 120;
        const currentHotspots = chambers[currentChamberIndex]?.hotspots || [];

        const projected = currentHotspots.map((hs) => {
          if (hs.is360Sphere) {
            // Full 360 spherical coordinates: hs.x = yaw degrees, hs.y = pitch degrees
            const yawRad = THREE.MathUtils.degToRad(hs.x);
            const pitchRad = THREE.MathUtils.degToRad(hs.y);
            const hsX = R * Math.cos(pitchRad) * Math.sin(yawRad);
            const hsY = R * Math.sin(pitchRad);
            const hsZ = -R * Math.cos(pitchRad) * Math.cos(yawRad);
            tempPos.set(hsX, hsY, hsZ);
          } else {
            // Front photo mapping: hs.x (0-100%), hs.y (0-100%)
            const angle = (hs.x / 100 - 0.5) * thetaArc;
            const hsX = R * Math.sin(angle);
            const hsY = (0.5 - hs.y / 100) * arcH;
            const hsZ = -R * Math.cos(angle);
            tempPos.set(hsX, hsY, hsZ);
          }

          const isVisible = tempPos.dot(forwardVec) > 0;
          const projectedVec = tempPos.clone().project(cameraRef.current!);

          const inView =
            isVisible &&
            projectedVec.z < 1 &&
            projectedVec.x >= -1.08 &&
            projectedVec.x <= 1.08 &&
            projectedVec.y >= -1.08 &&
            projectedVec.y <= 1.08;

          const screenX = (projectedVec.x * 0.5 + 0.5) * cWidth;
          const screenY = (-projectedVec.y * 0.5 + 0.5) * cHeight;

          return {
            hotspot: hs,
            screenX,
            screenY,
            visible: inView,
          };
        });

        setProjectedHotspots(projected);
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    animFrameIdRef.current = requestAnimationFrame(animate);

    // Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: w, height: h } = entry.contentRect;
        if (w > 0 && h > 0 && cameraRef.current && rendererRef.current) {
          cameraRef.current.aspect = w / h;
          cameraRef.current.updateProjectionMatrix();
          rendererRef.current.setSize(w, h);
        }
      }
    });
    resizeObserver.observe(container);

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
      resizeObserver.disconnect();
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      ambientGeo.dispose();
      ambientMat.dispose();
      arcMat.dispose();
    };
  }, []);

  // Update Textures on Chamber Change
  useEffect(() => {
    if (!screenMeshRef.current || !ambientMeshRef.current || !textureLoaderRef.current) return;
    setIsLoadingTexture(true);
    setActiveHotspot(null);

    // 1. Load Ambient 360 Panorama
    const panoUrl = currentChamber.pano360Url || currentChamber.imageUrl;
    textureLoaderRef.current.load(
      panoUrl,
      (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.minFilter = THREE.LinearFilter;
        const ambMat = ambientMeshRef.current!.material as THREE.MeshBasicMaterial;
        ambMat.map = tex;
        ambMat.needsUpdate = true;
      },
      undefined,
      (err) => console.warn('Pano 360 texture update error:', err)
    );

    // 2. Load Focal Front Photo
    textureLoaderRef.current.load(
      currentChamber.imageUrl,
      (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.minFilter = THREE.LinearFilter;
        tex.magFilter = THREE.LinearFilter;
        tex.generateMipmaps = false;

        const imgWidth = tex.image.naturalWidth || tex.image.width || 1024;
        const imgHeight = tex.image.naturalHeight || tex.image.height || 1024;
        const aspect = imgWidth / imgHeight;

        const R = 100;
        const H = 120;
        const thetaArc = Math.min(Math.PI * 0.92, Math.max(Math.PI * 0.42, (H * aspect) / R));
        currentArcAngleRef.current = thetaArc;

        const mesh = screenMeshRef.current!;
        if (mesh.geometry) mesh.geometry.dispose();
        mesh.geometry = buildCurvedArcGeometry(R, H, thetaArc, 64);

        const mat = mesh.material as THREE.MeshBasicMaterial;
        mat.map = tex;
        mat.needsUpdate = true;
        setIsLoadingTexture(false);
      },
      undefined,
      (err) => {
        console.warn('Failed to load chamber texture:', err);
        setIsLoadingTexture(false);
      }
    );
  }, [currentChamberIndex, currentChamber.imageUrl, currentChamber.pano360Url]);

  // Update FOV Zoom
  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.fov = zoomFov;
      cameraRef.current.updateProjectionMatrix();
    }
  }, [zoomFov]);

  // 5. Google Arts & Culture 360 Drag Interaction
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
    previousPointerPosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;

    const deltaX = e.clientX - previousPointerPosRef.current.x;
    const deltaY = e.clientY - previousPointerPosRef.current.y;
    previousPointerPosRef.current = { x: e.clientX, y: e.clientY };

    const sens = 0.22 * (zoomFov / 56);
    targetLonRef.current -= deltaX * sens;
    targetLatRef.current += deltaY * sens;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDraggingRef.current = false;
    (e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId);
  };

  // Zoom with Wheel
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setZoomFov((f) => Math.max(25, Math.min(75, f + e.deltaY * 0.05)));
  };

  const handleZoomIn = () => {
    setZoomFov((f) => Math.max(25, f - 10));
  };

  const handleZoomOut = () => {
    setZoomFov((f) => Math.min(75, f + 10));
  };

  const handleResetView = () => {
    targetLonRef.current = 0;
    targetLatRef.current = 0;
    setZoomFov(56);
  };

  const handleNextChamber = () => {
    if (currentChamberIndex < chambers.length - 1) {
      setCurrentChamberIndex(currentChamberIndex + 1);
      handleResetView();
    }
  };

  const handlePrevChamber = () => {
    if (currentChamberIndex > 0) {
      setCurrentChamberIndex(currentChamberIndex - 1);
      handleResetView();
    }
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  // Compass Cardinal Direction in Kazakh
  const getCompassDirection = (deg: number) => {
    if (deg >= 337.5 || deg < 22.5) return language === 'kk' ? 'Солтүстік' : 'North';
    if (deg >= 22.5 && deg < 67.5) return language === 'kk' ? 'Солт-Шығыс' : 'NE';
    if (deg >= 67.5 && deg < 112.5) return language === 'kk' ? 'Шығыс' : 'East';
    if (deg >= 112.5 && deg < 157.5) return language === 'kk' ? 'Оңт-Шығыс' : 'SE';
    if (deg >= 157.5 && deg < 202.5) return language === 'kk' ? 'Оңтүстік' : 'South';
    if (deg >= 202.5 && deg < 247.5) return language === 'kk' ? 'Оңт-Батыс' : 'SW';
    if (deg >= 247.5 && deg < 292.5) return language === 'kk' ? 'Батыс' : 'West';
    return language === 'kk' ? 'Солт-Батыс' : 'NW';
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden bg-black select-none ${
        isFullscreen ? 'fixed inset-0 z-50 h-screen rounded-none' : className || 'h-[580px] sm:h-[660px] rounded-3xl'
      }`}
    >
      {/* 1. THREE.JS 360 FULL-BLEED WEBGL CANVAS (Complete 360° Space - No Black) */}
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onWheel={handleWheel}
        className="relative w-full h-full cursor-grab active:cursor-grabbing overflow-hidden touch-none"
      >
        <canvas ref={canvasRef} className="w-full h-full block" />

        {/* Loading Indicator */}
        {isLoadingTexture && (
          <div className="absolute inset-0 bg-black/75 backdrop-blur-md flex flex-col items-center justify-center gap-3 z-30 pointer-events-none">
            <div className="w-11 h-11 rounded-full border-2 border-amber-400 border-t-transparent animate-spin" />
            <span className="text-stone-300 text-xs tracking-widest uppercase font-medium">
              {language === 'kk' ? '360° Виртуалды кеңістік жүктелуде...' : 'Loading 360° Environment...'}
            </span>
          </div>
        )}

        {/* 2. MINIMALIST GOOGLE ARTS & CULTURE HOTSPOT PINS (Front and 360°) */}
        {projectedHotspots.map(({ hotspot, screenX, screenY, visible }) => {
          if (!visible) return null;
          return (
            <div
              key={hotspot.id}
              style={{
                position: 'absolute',
                left: `${screenX}px`,
                top: `${screenY}px`,
                transform: 'translate(-50%, -50%)',
              }}
              className="pointer-events-auto z-20"
            >
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveHotspot(activeHotspot?.id === hotspot.id ? null : hotspot);
                }}
                className="relative group flex items-center justify-center cursor-pointer p-3 focus:outline-none"
                title={hotspot.title[language]}
              >
                {/* Google Pulsing Ring */}
                <span className="absolute w-10 h-10 rounded-full bg-amber-400/30 animate-ping" />
                <span className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border-2 border-amber-400/90 text-amber-300 flex items-center justify-center text-xs font-bold shadow-2xl group-hover:scale-125 group-hover:bg-amber-400 group-hover:text-black transition-all duration-200">
                  ✦
                </span>
                <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-xl bg-black/90 backdrop-blur-md text-white text-[11px] font-medium tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-amber-400/30 shadow-2xl">
                  {hotspot.title[language]}
                </span>
              </button>
            </div>
          );
        })}
      </div>

      {/* 3. TOP MINIMALIST GOOGLE ARTS & CULTURE BAR */}
      <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-4 pointer-events-none z-30">
        {/* Left: Monument Title & Chamber Details */}
        <div className="pointer-events-auto flex flex-col gap-1 max-w-[65%]">
          <div className="text-[11px] font-bold tracking-widest text-amber-400 uppercase drop-shadow-md">
            {destination.name[language]}
          </div>
          <h2 className="text-sm sm:text-base md:text-lg font-bold text-white drop-shadow-lg line-clamp-1">
            {currentChamber.name[language]}
          </h2>
          <div className="text-[10px] text-stone-300 font-medium drop-shadow-md flex items-center gap-1.5 flex-wrap">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-stone-300">
              {language === 'kk' ? 'Толық 360° Кеңістік' : 'Full 360° Environment'}
            </span>
            <span className="text-stone-500">•</span>
            <span className="text-amber-300 font-semibold">
              {compassHeading}° {getCompassDirection(compassHeading)}
            </span>
          </div>
        </div>

        {/* Right: Clean Minimal Controls */}
        <div className="pointer-events-auto flex items-center gap-1.5 p-1.5 rounded-full bg-black/65 backdrop-blur-xl border border-white/15 shadow-2xl">
          {/* Zoom In (+) */}
          <button
            type="button"
            onClick={handleZoomIn}
            disabled={zoomFov <= 25}
            className={`p-2 rounded-full transition-colors cursor-pointer ${
              zoomFov <= 25 ? 'text-stone-600 cursor-not-allowed' : 'text-stone-300 hover:text-white hover:bg-white/10'
            }`}
            title={language === 'kk' ? 'Үлкейту (Жақындату)' : 'Zoom in'}
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          {/* Zoom Out (-) */}
          <button
            type="button"
            onClick={handleZoomOut}
            disabled={zoomFov >= 75}
            className={`p-2 rounded-full transition-colors cursor-pointer ${
              zoomFov >= 75 ? 'text-stone-600 cursor-not-allowed' : 'text-stone-300 hover:text-white hover:bg-white/10'
            }`}
            title={language === 'kk' ? 'Кішірейту (Алыстату)' : 'Zoom out'}
          >
            <ZoomOut className="w-4 h-4" />
          </button>

          {/* Audio Ranger Voice Button */}
          <button
            type="button"
            onClick={toggleNarration}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all cursor-pointer ${
              isNarrating
                ? 'bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/30'
                : 'hover:bg-white/10 text-stone-200'
            }`}
            title={language === 'kk' ? 'Шұғыла гид баяндауы' : 'Audio Guide'}
          >
            {isNarrating ? <Pause className="w-3.5 h-3.5" /> : <Headphones className="w-3.5 h-3.5" />}
            <span className="text-xs hidden sm:inline">
              {isNarrating ? (language === 'kk' ? 'Тоқтату' : 'Stop') : language === 'kk' ? 'Гид' : 'Listen'}
            </span>
          </button>

          {/* Sound Ambience */}
          <button
            type="button"
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`p-2 rounded-full transition-colors cursor-pointer ${
              soundEnabled ? 'text-amber-400 bg-amber-400/15' : 'text-stone-400 hover:text-white hover:bg-white/10'
            }`}
            title={language === 'kk' ? 'Күмбез жаңғырығы' : 'Ambient sound'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Reset View */}
          <button
            type="button"
            onClick={handleResetView}
            className="p-2 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            title={language === 'kk' ? 'Бастапқы ортаға келтіру' : 'Reset view'}
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Route Planning */}
          {onOpenRoute && (
            <button
              type="button"
              onClick={onOpenRoute}
              className="p-2 rounded-full text-amber-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              title={language === 'kk' ? 'Маршрут құру' : 'Plan route'}
            >
              <Navigation className="w-4 h-4" />
            </button>
          )}

          {/* Fullscreen */}
          <button
            type="button"
            onClick={toggleFullscreen}
            className="p-2 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            title={language === 'kk' ? 'Толық экран' : 'Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Close if provided */}
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full text-stone-400 hover:text-red-400 hover:bg-red-400/10 transition-colors cursor-pointer ml-1"
              title={language === 'kk' ? 'Жабу' : 'Close'}
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* 4. GOOGLE ARTS & CULTURE STORY DRAWER (Bottom Left Ranger Card) */}
      {showStoryCard && (
        <div className="absolute bottom-20 left-4 max-w-sm sm:max-w-md w-[92%] p-4 rounded-2xl bg-black/75 backdrop-blur-xl border border-white/15 text-stone-200 shadow-2xl z-30 animate-fade-in pointer-events-auto">
          <div className="flex items-center justify-between gap-2 mb-2 pb-1.5 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-[10px] border border-amber-500/40">
                ✦
              </div>
              <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">
                {currentChamber.badge[language]}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setShowStoryCard(false)}
              className="p-1 text-stone-400 hover:text-white transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-xs text-stone-200 leading-relaxed font-light">
            {currentChamber.narratorStory[language]}
          </p>
        </div>
      )}

      {/* 5. HOTSPOT POPUP MODAL (Clean Slide-Up Card) */}
      {activeHotspot && (
        <div className="absolute top-20 right-4 max-w-sm w-[90%] sm:w-80 p-5 rounded-2xl bg-black/85 backdrop-blur-2xl border border-amber-400/30 text-white shadow-2xl z-40 animate-fade-in pointer-events-auto">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
              {activeHotspot.factBadge?.[language] || (language === 'kk' ? 'Тарихи жәдігер' : 'Historical Relic')}
            </div>
            <button
              type="button"
              onClick={() => setActiveHotspot(null)}
              className="p-1 rounded-full hover:bg-white/10 text-stone-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <h3 className="text-sm font-bold text-white mb-2 leading-snug">
            {activeHotspot.title[language]}
          </h3>
          <p className="text-xs text-stone-300 leading-relaxed font-light">
            {activeHotspot.desc[language]}
          </p>
        </div>
      )}

      {/* 6. BOTTOM GOOGLE ARTS & CULTURE CHAPTER TIMELINE NAVIGATION */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none z-30">
        {/* Left: Toggle Story Card if closed */}
        {!showStoryCard ? (
          <button
            type="button"
            onClick={() => setShowStoryCard(true)}
            className="pointer-events-auto px-3 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-stone-300 text-xs hover:text-white flex items-center gap-1.5 cursor-pointer shadow-lg"
          >
            <Info className="w-3.5 h-3.5 text-amber-400" />
            <span>{language === 'kk' ? 'Тарихы' : 'Story'}</span>
          </button>
        ) : (
          <div />
        )}

        {/* Center: Chapter Dots & Stops Selector */}
        <div className="pointer-events-auto flex items-center gap-2 p-1.5 rounded-full bg-black/75 backdrop-blur-xl border border-white/15 shadow-2xl">
          {/* Previous Chapter */}
          <button
            type="button"
            onClick={handlePrevChamber}
            disabled={currentChamberIndex === 0}
            className={`p-2 rounded-full transition-colors ${
              currentChamberIndex === 0
                ? 'opacity-30 cursor-not-allowed text-stone-500'
                : 'text-stone-200 hover:text-white hover:bg-white/10 cursor-pointer'
            }`}
            title="Алдыңғы аялдама"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Chapter Buttons */}
          <div className="flex items-center gap-1.5 px-1">
            {chambers.map((chamber, idx) => {
              const isActive = idx === currentChamberIndex;
              return (
                <button
                  key={chamber.id}
                  type="button"
                  onClick={() => {
                    setCurrentChamberIndex(idx);
                    handleResetView();
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-amber-400 text-black font-bold shadow-lg shadow-amber-400/30 scale-105'
                      : 'text-stone-300 hover:text-white hover:bg-white/10'
                  }`}
                  title={chamber.name[language]}
                >
                  <span>{idx + 1}</span>
                  <span className="hidden sm:inline ml-1.5 text-[11px]">
                    {chamber.name[language].split(':')[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Next Chapter */}
          <button
            type="button"
            onClick={handleNextChamber}
            disabled={currentChamberIndex === chambers.length - 1}
            className={`p-2 rounded-full transition-colors ${
              currentChamberIndex === chambers.length - 1
                ? 'opacity-30 cursor-not-allowed text-stone-500'
                : 'text-stone-200 hover:text-white hover:bg-white/10 cursor-pointer'
            }`}
            title="Келесі аялдама"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right: Drag Instruction Hint */}
        <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-[11px] text-stone-300">
          <Compass className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '16s' }} />
          <span>{language === 'kk' ? '360° Шолу • Сүйреңіз' : '360° Look • Drag'}</span>
        </div>
      </div>
    </div>
  );
};

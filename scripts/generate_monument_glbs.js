import fs from 'fs';
import path from 'path';
import * as THREE from 'three';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';

// Setup polyfill for FileReader in Node.js
globalThis.FileReader = class {
  readAsArrayBuffer(blob) {
    blob.arrayBuffer().then((buf) => {
      this.result = buf;
      if (this.onloadend) this.onloadend();
    });
  }
  readAsDataURL(blob) {
    blob.arrayBuffer().then((buf) => {
      this.result =
        'data:' +
        (blob.type || 'application/octet-stream') +
        ';base64,' +
        Buffer.from(buf).toString('base64');
      if (this.onloadend) this.onloadend();
    });
  }
};

const outputDir = path.resolve('public/models');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Helper to export a scene to GLB
async function exportToGLB(scene, filename) {
  const exporter = new GLTFExporter();
  const result = await exporter.parseAsync(scene, { binary: true });
  const targetPath = path.join(outputDir, filename);
  fs.writeFileSync(targetPath, Buffer.from(result));
  console.log(`Exported ${filename} (${(result.byteLength / 1024).toFixed(1)} KB)`);
}

// PBR Materials Palette
const materials = {
  brick: new THREE.MeshStandardMaterial({
    color: 0xc47b48,
    roughness: 0.85,
    metalness: 0.05,
    name: 'SteppeTerracottaBrick',
  }),
  glazedTurquoise: new THREE.MeshStandardMaterial({
    color: 0x0284c7,
    roughness: 0.25,
    metalness: 0.2,
    name: 'TimuridTurquoiseMajolica',
  }),
  deepAzure: new THREE.MeshStandardMaterial({
    color: 0x0369a1,
    roughness: 0.3,
    metalness: 0.15,
    name: 'DeepAzureTiles',
  }),
  ancientBronze: new THREE.MeshStandardMaterial({
    color: 0xd97706,
    roughness: 0.35,
    metalness: 0.85,
    name: 'AncientBronzeTaikazan',
  }),
  terracottaOrnament: new THREE.MeshStandardMaterial({
    color: 0xd97736,
    roughness: 0.75,
    metalness: 0.1,
    name: 'CarvedTerracottaTiles',
  }),
  whiteLimestone: new THREE.MeshStandardMaterial({
    color: 0xf1ede4,
    roughness: 0.9,
    metalness: 0.02,
    name: 'MangystauWhiteChalk',
  }),
  ancientGranite: new THREE.MeshStandardMaterial({
    color: 0x57534e,
    roughness: 0.95,
    metalness: 0.05,
    name: 'TanbalySanctuaryRock',
  }),
  carvedWood: new THREE.MeshStandardMaterial({
    color: 0x78350f,
    roughness: 0.7,
    metalness: 0.05,
    name: 'CarvedNutwoodDoor',
  }),
  goldenAccent: new THREE.MeshStandardMaterial({
    color: 0xfbbf24,
    roughness: 0.3,
    metalness: 0.8,
    name: 'GoldenFinial',
  }),
};

// 1. Khoja Ahmed Yasawi Mausoleum (Yasawi)
async function createYasawiModel() {
  const scene = new THREE.Scene();
  scene.name = 'YasawiMausoleum';

  // Base platform
  const plinthGeo = new THREE.BoxGeometry(32, 1.2, 36);
  const plinth = new THREE.Mesh(plinthGeo, materials.brick);
  plinth.position.y = 0.6;
  scene.add(plinth);

  // Main Monumental Cube (Central Core)
  const coreGeo = new THREE.BoxGeometry(24, 15, 26);
  const core = new THREE.Mesh(coreGeo, materials.brick);
  core.position.set(0, 8.7, -1);
  scene.add(core);

  // Monumental Peshtak (Front Portal Gateway - 38.7m proportion)
  const portalLeftGeo = new THREE.BoxGeometry(6, 26, 7);
  const portalLeft = new THREE.Mesh(portalLeftGeo, materials.brick);
  portalLeft.position.set(-9.5, 14.2, 12);
  scene.add(portalLeft);

  const portalRight = portalLeft.clone();
  portalRight.position.set(9.5, 14.2, 12);
  scene.add(portalRight);

  const portalTopGeo = new THREE.BoxGeometry(25, 7, 7);
  const portalTop = new THREE.Mesh(portalTopGeo, materials.brick);
  portalTop.position.set(0, 23.7, 12);
  scene.add(portalTop);

  // Portal Archway Niche (Iwan)
  const archNicheGeo = new THREE.CylinderGeometry(6.5, 6.5, 6, 24, 1, false, 0, Math.PI);
  archNicheGeo.rotateZ(-Math.PI / 2);
  const archNiche = new THREE.Mesh(archNicheGeo, materials.glazedTurquoise);
  archNiche.position.set(0, 16.5, 12);
  scene.add(archNiche);

  // Turquoise Calligraphy Band on Portal
  const bandGeo = new THREE.BoxGeometry(24.5, 1.6, 7.2);
  const band = new THREE.Mesh(bandGeo, materials.deepAzure);
  band.position.set(0, 20.5, 12);
  scene.add(band);

  // Carved wooden entrance door
  const doorGeo = new THREE.BoxGeometry(4.5, 7.5, 0.4);
  const door = new THREE.Mesh(doorGeo, materials.carvedWood);
  door.position.set(0, 4.9, 9);
  scene.add(door);

  // Central Double-Shelled Turquoise Dome over Kazan Hall
  // Cylindrical Drum
  const drumGeo = new THREE.CylinderGeometry(8.2, 8.4, 6, 36);
  const drum = new THREE.Mesh(drumGeo, materials.deepAzure);
  drum.position.set(0, 19.2, -2);
  scene.add(drum);

  // Ribbed Turquoise Dome
  const domeGeo = new THREE.SphereGeometry(8.2, 36, 24, 0, Math.PI * 2, 0, Math.PI / 1.7);
  const dome = new THREE.Mesh(domeGeo, materials.glazedTurquoise);
  dome.position.set(0, 21.5, -2);
  scene.add(dome);

  // Golden Spire on top of Dome
  const spireGeo = new THREE.CylinderGeometry(0.2, 0.6, 3.5, 12);
  const spire = new THREE.Mesh(spireGeo, materials.goldenAccent);
  spire.position.set(0, 28, -2);
  scene.add(spire);

  // Rear Crypt Dome (over Yasawi's tomb)
  const cryptDrum = new THREE.CylinderGeometry(4.5, 4.6, 3.5, 24);
  const cDrum = new THREE.Mesh(cryptDrum, materials.deepAzure);
  cDrum.position.set(0, 17.5, -11);
  scene.add(cDrum);

  const cryptDome = new THREE.SphereGeometry(4.5, 24, 16, 0, Math.PI * 2, 0, Math.PI / 1.7);
  const cDome = new THREE.Mesh(cryptDome, materials.glazedTurquoise);
  cDome.position.set(0, 19, -11);
  scene.add(cDome);

  // Sacred Bronze Tayqazan inside Kazan Hall
  const taikazanBase = new THREE.CylinderGeometry(1.6, 1.2, 0.8, 20);
  const tkBase = new THREE.Mesh(taikazanBase, materials.ancientBronze);
  tkBase.position.set(0, 1.6, -2);
  scene.add(tkBase);

  const taikazanCauldron = new THREE.SphereGeometry(2.4, 24, 16, 0, Math.PI * 2, 0, Math.PI / 1.7);
  const tkCauldron = new THREE.Mesh(taikazanCauldron, materials.ancientBronze);
  tkCauldron.position.set(0, 2.8, -2);
  scene.add(tkCauldron);

  // Corner towers (Minarets)
  const cornerCoords = [
    [-11.5, 12, 15],
    [11.5, 12, 15],
    [-11.5, -13],
    [11.5, -13],
  ];
  cornerCoords.forEach(([x, z]) => {
    const towerGeo = new THREE.CylinderGeometry(1.6, 1.9, 19, 16);
    const tower = new THREE.Mesh(towerGeo, materials.brick);
    tower.position.set(x, 10.7, z || 0);
    scene.add(tower);

    const capGeo = new THREE.ConeGeometry(1.8, 2.5, 16);
    const cap = new THREE.Mesh(capGeo, materials.glazedTurquoise);
    cap.position.set(x, 21.4, z || 0);
    scene.add(cap);
  });

  await exportToGLB(scene, 'yasawi.glb');
}

// 2. Aisha Bibi Mausoleum (Aisha-Bibi)
async function createAishaBibiModel() {
  const scene = new THREE.Scene();
  scene.name = 'AishaBibiMausoleum';

  // Base platform
  const plinth = new THREE.Mesh(new THREE.BoxGeometry(16, 0.8, 16), materials.terracottaOrnament);
  plinth.position.y = 0.4;
  scene.add(plinth);

  // Square core body
  const body = new THREE.Mesh(new THREE.BoxGeometry(11, 8.5, 11), materials.terracottaOrnament);
  body.position.set(0, 5.05, 0);
  scene.add(body);

  // Four tapered corner columns (Iconic Aisha Bibi feature)
  const colPositions = [
    [-5.6, -5.6],
    [5.6, -5.6],
    [-5.6, 5.6],
    [5.6, 5.6],
  ];
  colPositions.forEach(([x, z]) => {
    const colGeo = new THREE.CylinderGeometry(1.2, 1.7, 11, 24);
    const col = new THREE.Mesh(colGeo, materials.brick);
    col.position.set(x, 6.3, z);
    scene.add(col);

    // Carved column capital
    const capGeo = new THREE.CylinderGeometry(1.5, 1.2, 1.2, 24);
    const cap = new THREE.Mesh(capGeo, materials.terracottaOrnament);
    cap.position.set(x, 12.4, z);
    scene.add(cap);
  });

  // Pointed Arch Portal on Main Facade
  const portalNicheGeo = new THREE.CylinderGeometry(3.2, 3.2, 2, 20, 1, false, 0, Math.PI);
  portalNicheGeo.rotateZ(-Math.PI / 2);
  const portalNiche = new THREE.Mesh(portalNicheGeo, materials.brick);
  portalNiche.position.set(0, 6.2, 5.5);
  scene.add(portalNiche);

  // Conical Ribbed Tent Dome
  const drumGeo = new THREE.CylinderGeometry(4.5, 4.8, 2.2, 32);
  const drum = new THREE.Mesh(drumGeo, materials.terracottaOrnament);
  drum.position.set(0, 10.4, 0);
  scene.add(drum);

  const domeGeo = new THREE.ConeGeometry(5.2, 6.5, 32);
  const dome = new THREE.Mesh(domeGeo, materials.brick);
  dome.position.set(0, 14.7, 0);
  scene.add(dome);

  const finial = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.4, 1.8, 12), materials.goldenAccent);
  finial.position.set(0, 18.8, 0);
  scene.add(finial);

  await exportToGLB(scene, 'aisha-bibi.glb');
}

// 3. Korkyt Ata Monument (Korkyt-Ata)
async function createKorkytAtaModel() {
  const scene = new THREE.Scene();
  scene.name = 'KorkytAtaMonument';

  // Steppe granite circular hill platform
  const base = new THREE.Mesh(new THREE.CylinderGeometry(18, 20, 1.5, 36), materials.ancientGranite);
  base.position.y = 0.75;
  scene.add(base);

  // 4 Soaring Kobyz Stelae (12.1 meters high)
  const steleAngle = [0, Math.PI / 2, Math.PI, (Math.PI * 3) / 2];
  steleAngle.forEach((angle) => {
    const group = new THREE.Group();
    group.rotation.y = angle;

    // Curved stele simulating kobyz neck
    const steleGeo = new THREE.BoxGeometry(2.4, 16, 1.2);
    const stele = new THREE.Mesh(steleGeo, materials.whiteLimestone);
    stele.position.set(0, 9.5, 4.5);
    stele.rotation.x = -0.08;
    group.add(stele);

    // Inward top bow
    const bowGeo = new THREE.BoxGeometry(2.4, 4, 1.2);
    const bow = new THREE.Mesh(bowGeo, materials.whiteLimestone);
    bow.position.set(0, 17.5, 3.8);
    bow.rotation.x = 0.25;
    group.add(bow);

    scene.add(group);
  });

  // Central acoustic wind organ (40 pipes that sing when steppe wind blows)
  const organBase = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.5, 3, 24), materials.ancientBronze);
  organBase.position.y = 3;
  scene.add(organBase);

  const centralPipe = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 12, 16), materials.ancientBronze);
  centralPipe.position.y = 10;
  scene.add(centralPipe);

  // Sacred wishing stone / amphitheatre ring
  const ringGeo = new THREE.TorusGeometry(8, 0.4, 12, 36);
  const ring = new THREE.Mesh(ringGeo, materials.ancientGranite);
  ring.rotation.x = Math.PI / 2;
  ring.position.y = 1.6;
  scene.add(ring);

  await exportToGLB(scene, 'korkyt-ata.glb');
}

// 4. Jochi Khan Mausoleum (Jochi-Khan)
async function createJochiKhanModel() {
  const scene = new THREE.Scene();
  scene.name = 'JochiKhanMausoleum';

  // Base platform
  const plinth = new THREE.Mesh(new THREE.BoxGeometry(18, 0.8, 16), materials.brick);
  plinth.position.y = 0.4;
  scene.add(plinth);

  // Rectangular Golden Horde Red-Brick Body
  const body = new THREE.Mesh(new THREE.BoxGeometry(11, 7.5, 10), materials.brick);
  body.position.set(0, 4.55, -0.5);
  scene.add(body);

  // Front Portal with Archway
  const portal = new THREE.Mesh(new THREE.BoxGeometry(12.5, 10.5, 2.5), materials.brick);
  portal.position.set(0, 6.05, 5);
  scene.add(portal);

  const archNicheGeo = new THREE.CylinderGeometry(3, 3, 2, 20, 1, false, 0, Math.PI);
  archNicheGeo.rotateZ(-Math.PI / 2);
  const arch = new THREE.Mesh(archNicheGeo, materials.brick);
  arch.position.set(0, 5.2, 5.2);
  scene.add(arch);

  // Iconic Conical Turquoise Tent Dome
  const drum = new THREE.Mesh(new THREE.CylinderGeometry(4.2, 4.5, 2.2, 28), materials.deepAzure);
  drum.position.set(0, 9.4, -0.5);
  scene.add(drum);

  const tentDome = new THREE.Mesh(new THREE.ConeGeometry(4.8, 5.5, 28), materials.glazedTurquoise);
  tentDome.position.set(0, 13.2, -0.5);
  scene.add(tentDome);

  const finial = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.35, 1.6, 12), materials.goldenAccent);
  finial.position.set(0, 16.5, -0.5);
  scene.add(finial);

  await exportToGLB(scene, 'jochi-khan.glb');
}

// 5. Ancient Otyrar City Gate & Fortress (Otyrar)
async function createOtyrarModel() {
  const scene = new THREE.Scene();
  scene.name = 'AncientOtyrarGate';

  // Steppe hill mound platform
  const mound = new THREE.Mesh(new THREE.CylinderGeometry(24, 28, 2, 32), materials.brick);
  mound.position.y = 1;
  scene.add(mound);

  // Twin Watchtower Bastions
  const leftBastion = new THREE.Mesh(new THREE.CylinderGeometry(4.5, 5.2, 13, 24), materials.brick);
  leftBastion.position.set(-8.5, 7.5, 0);
  scene.add(leftBastion);

  const rightBastion = leftBastion.clone();
  rightBastion.position.set(8.5, 7.5, 0);
  scene.add(rightBastion);

  // Crenellated Bastion Tops
  [-8.5, 8.5].forEach((x) => {
    const top = new THREE.Mesh(new THREE.CylinderGeometry(4.8, 4.5, 1.4, 24), materials.terracottaOrnament);
    top.position.set(x, 14.7, 0);
    scene.add(top);
  });

  // Central Fortress Gate Wall
  const gateWall = new THREE.Mesh(new THREE.BoxGeometry(10, 11, 4), materials.brick);
  gateWall.position.set(0, 6.5, 0);
  scene.add(gateWall);

  // City Entrance Arch
  const archNicheGeo = new THREE.CylinderGeometry(2.8, 2.8, 4.2, 20, 1, false, 0, Math.PI);
  archNicheGeo.rotateZ(-Math.PI / 2);
  const arch = new THREE.Mesh(archNicheGeo, materials.terracottaOrnament);
  arch.position.set(0, 4.2, 0);
  scene.add(arch);

  // Medieval Ceramic Sewer/Water pipeline monument
  const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 16, 16), materials.terracottaOrnament);
  pipe.rotation.z = Math.PI / 2;
  pipe.position.set(0, 2.4, 8);
  scene.add(pipe);

  await exportToGLB(scene, 'otyrar.glb');
}

// 6. Beket Ata Underground Mosque (Beket-Ata)
async function createBeketAtaModel() {
  const scene = new THREE.Scene();
  scene.name = 'BeketAtaUndergroundMosque';

  // White Chalk Cliff Canyon Surroundings
  const cliff = new THREE.Mesh(new THREE.BoxGeometry(28, 14, 24), materials.whiteLimestone);
  cliff.position.set(0, 7, 0);
  scene.add(cliff);

  // Carved Cave Entrance Portal
  const portalCutout = new THREE.Mesh(new THREE.BoxGeometry(6, 7.5, 4), materials.ancientGranite);
  portalCutout.position.set(0, 4.75, 11);
  scene.add(portalCutout);

  const archedEntrance = new THREE.Mesh(
    new THREE.CylinderGeometry(2.6, 2.6, 2, 20, 1, false, 0, Math.PI),
    materials.whiteLimestone
  );
  archedEntrance.rotateZ(-Math.PI / 2);
  archedEntrance.position.set(0, 7.5, 12);
  scene.add(archedEntrance);

  // Underground prayer dome mound on top
  const domeMound = new THREE.Mesh(new THREE.SphereGeometry(4.2, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2), materials.whiteLimestone);
  domeMound.position.set(0, 14, -2);
  scene.add(domeMound);

  // Pilgrimage path steps
  for (let i = 0; i < 6; i++) {
    const step = new THREE.Mesh(new THREE.BoxGeometry(8 - i * 0.4, 0.4, 1.4), materials.whiteLimestone);
    step.position.set(0, 0.2 + i * 0.35, 13 + i * 1.2);
    scene.add(step);
  }

  await exportToGLB(scene, 'beket-ata.glb');
}

// 7. Tanbaly Petroglyph Sanctuary (Tanbaly)
async function createTanbalyModel() {
  const scene = new THREE.Scene();
  scene.name = 'TanbalySanctuary';

  // Steppe canyon bedrock
  const ground = new THREE.Mesh(new THREE.BoxGeometry(26, 2, 24), materials.ancientGranite);
  ground.position.y = 1;
  scene.add(ground);

  // Central Sacred Sanctuary Cliff Wall (Group IV)
  const mainCliff = new THREE.Mesh(new THREE.BoxGeometry(16, 12, 5), materials.ancientGranite);
  mainCliff.position.set(0, 7, -4);
  scene.add(mainCliff);

  // Inscribed Petroglyph Stone Plate
  const petroPlate = new THREE.Mesh(new THREE.BoxGeometry(8, 6, 0.4), materials.terracottaOrnament);
  petroPlate.position.set(0, 7.5, -1.3);
  scene.add(petroPlate);

  // Solar Deity Sun Halo Symbol (Embossed on stone)
  const sunCenter = new THREE.Mesh(new THREE.SphereGeometry(1.1, 16, 16), materials.goldenAccent);
  sunCenter.position.set(0, 8.5, -1.0);
  scene.add(sunCenter);

  for (let i = 0; i < 12; i++) {
    const angle = (i * Math.PI * 2) / 12;
    const ray = new THREE.Mesh(new THREE.ConeGeometry(0.2, 1.2, 8), materials.goldenAccent);
    ray.position.set(Math.cos(angle) * 1.8, 8.5 + Math.sin(angle) * 1.8, -1.0);
    ray.rotation.z = angle - Math.PI / 2;
    scene.add(ray);
  }

  await exportToGLB(scene, 'tanbaly.glb');
}

// Run All Model Generations
async function generateAll() {
  console.log('Generating authentic GLB models in public/models/...');
  await createYasawiModel();
  await createAishaBibiModel();
  await createKorkytAtaModel();
  await createJochiKhanModel();
  await createOtyrarModel();
  await createBeketAtaModel();
  await createTanbalyModel();
  console.log('All 7 key monument GLB models generated successfully!');
}

generateAll().catch(console.error);

import React, { useState, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { Volume2, Music } from 'lucide-react';

export const SteppeAudioExperience: React.FC = () => {
  const { language } = useApp();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<number | null>(null);

  const startSoundscape = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      audioCtxRef.current = ctx;

      // Pentatonic tuning frequencies for traditional Dombra (D3, G3, A3, C4, D4, E4, G4, A4)
      const dombraNotes = [146.83, 196.0, 220.0, 261.63, 293.66, 329.63, 392.0, 440.0];

      // Play soft plucked notes periodically to evoke nomadic steppe atmosphere
      const playPluck = () => {
        if (!ctx || ctx.state === 'closed') return;
        const note = dombraNotes[Math.floor(Math.random() * dombraNotes.length)];

        // Main string oscillator
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Pluck tone harmonic
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(note, ctx.currentTime);

        // Gentle envelope
        const now = ctx.currentTime;
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.08, now + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 1.9);
      };

      // Play initial chord
      playPluck();
      intervalRef.current = window.setInterval(playPluck, 1200);
      setIsPlaying(true);
    } catch (e) {
      console.warn('Web Audio not supported or blocked:', e);
    }
  };

  const stopSoundscape = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.close().catch(() => {});
      audioCtxRef.current = null;
    }
    setIsPlaying(false);
  };

  const toggleAudio = () => {
    if (isPlaying) {
      stopSoundscape();
    } else {
      startSoundscape();
    }
  };

  const labels = {
    play: {
      kk: 'Дала сарыны (Аудио)',
      en: 'Steppe Atmosphere',
      ru: 'Звуки степи (Аудио)',
    },
    playing: {
      kk: 'Домбыра сарыны қосулы',
      en: 'Dombra Ambience Active',
      ru: 'Звучит степная домбра',
    },
  };

  return (
    <button
      type="button"
      onClick={toggleAudio}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
        isPlaying
          ? 'bg-amber-500/20 text-amber-300 border-amber-500/60 shadow-lg shadow-amber-500/10'
          : 'bg-stone-900/80 text-stone-300 border-stone-800 hover:border-amber-500/30'
      }`}
      title={isPlaying ? 'Pause Steppe Audio' : 'Play Steppe Dombra Atmosphere'}
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span className="hidden sm:inline">{labels.playing[language]}</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        </>
      ) : (
        <>
          <Music className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden sm:inline">{labels.play[language]}</span>
        </>
      )}
    </button>
  );
};

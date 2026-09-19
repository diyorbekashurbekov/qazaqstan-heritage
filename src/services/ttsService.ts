/**
 * Google Translate TTS Service — Qazaq Heritage Virtual Tour
 *
 * Uses Google Translate TTS endpoint (free, no API key needed).
 * Supports Kazakh (kk), Russian (ru), English (en).
 * Splits long text into ≤200-char sentence chunks and plays sequentially.
 */

export type TTSLanguage = 'kk' | 'ru' | 'en';

const GTTS_LANG: Record<TTSLanguage, string> = {
  kk: 'kk',
  ru: 'ru',
  en: 'en',
};

/** Build a Google Translate TTS URL for a short chunk (≤200 chars) */
function gttsUrl(text: string, lang: string): string {
  const encoded = encodeURIComponent(text);
  return `https://translate.google.com/translate_tts?ie=UTF-8&q=${encoded}&tl=${lang}&client=tw-ob&ttsspeed=0.9`;
}

/**
 * Split text into smaller chunks for Google TTS limit.
 * Splits on punctuation to keep natural pauses.
 */
function splitText(text: string, maxLen = 150): string[] {
  // Replace multiple spaces and newlines
  const cleanText = text.replace(/[\n\r]+/g, ' ').replace(/\s+/g, ' ');
  // Split by sentence terminators or commas
  const sentences = cleanText.match(/[^.!?—,;:]+[.!?—,;:]?/g) ?? [cleanText];
  
  const chunks: string[] = [];
  let current = '';

  for (const s of sentences) {
    const trimmed = s.trim();
    if (!trimmed) continue;
    
    if ((current + ' ' + trimmed).trim().length <= maxLen) {
      current = (current + ' ' + trimmed).trim();
    } else {
      if (current) chunks.push(current);
      // If a single segment is still too long, split by spaces
      if (trimmed.length > maxLen) {
        const words = trimmed.split(' ');
        let sub = '';
        for (const w of words) {
          if ((sub + ' ' + w).trim().length <= maxLen) {
            sub = (sub + ' ' + w).trim();
          } else {
            if (sub) chunks.push(sub);
            sub = w;
          }
        }
        current = sub;
      } else {
        current = trimmed;
      }
    }
  }
  if (current) chunks.push(current);
  return chunks.filter(Boolean);
}

class TTSService {
  private _audio: HTMLAudioElement | null = null;
  private _chunks: string[] = [];
  private _chunkIndex = 0;
  private _lang = 'kk';
  private _onEnd?: () => void;
  private _onError?: () => void;
  private _stopped = false;

  async preload(): Promise<void> {
    // No preloading needed for Google TTS
  }

  speak(text: string, lang: TTSLanguage, onEnd?: () => void, onError?: () => void): void {
    this.stop();
    this._stopped = false;
    this._lang = GTTS_LANG[lang];
    this._chunks = splitText(text);
    this._chunkIndex = 0;
    this._onEnd = onEnd;
    this._onError = onError;

    if (this._chunks.length === 0) { onEnd?.(); return; }
    this._playNext();
  }

  private _playNext(): void {
    if (this._stopped) return;
    if (this._chunkIndex >= this._chunks.length) {
      this._onEnd?.();
      return;
    }

    const chunk = this._chunks[this._chunkIndex];
    const url = gttsUrl(chunk, this._lang);

    const audio = new Audio();
    audio.crossOrigin = 'anonymous';
    this._audio = audio;

    let errorHandled = false;

    audio.onended = () => {
      if (this._stopped) return;
      this._chunkIndex++;
      // Small pause between chunks
      setTimeout(() => this._playNext(), 300);
    };

    audio.onerror = () => {
      if (this._stopped || errorHandled) return;
      errorHandled = true;
      // Fallback: try next chunk on error, or fallback to Web Speech for this chunk
      this._fallbackWebSpeech(chunk);
    };

    audio.src = url;
    audio.play().catch(() => {
      if (this._stopped || errorHandled) return;
      errorHandled = true;
      this._fallbackWebSpeech(chunk);
    });
  }

  private _fallbackWebSpeech(text: string): void {
    if (!('speechSynthesis' in window)) { this._onError?.(); return; }
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = this._lang === 'kk' ? 'kk-KZ' : this._lang === 'ru' ? 'ru-RU' : 'en-US';
    utt.rate = 0.85;
    utt.onend = () => {
      this._chunkIndex++;
      setTimeout(() => this._playNext(), 300);
    };
    utt.onerror = () => {
      this._chunkIndex++;
      setTimeout(() => this._playNext(), 200);
    };
    window.speechSynthesis.speak(utt);
  }

  stop(): void {
    this._stopped = true;
    if (this._audio) {
      this._audio.pause();
      this._audio.src = '';
      this._audio = null;
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    this._chunks = [];
    this._chunkIndex = 0;
  }
}

export const ttsService = new TTSService();

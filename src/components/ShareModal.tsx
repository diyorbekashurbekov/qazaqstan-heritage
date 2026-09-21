import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { getAssetUrl } from '../utils/assetHelper';
import { X, Copy, Check, Share2 } from 'lucide-react';

export const ShareModal: React.FC = () => {
  const { language, isShareModalOpen, setIsShareModalOpen, shareTarget } = useApp();
  const [copied, setCopied] = useState(false);

  if (!isShareModalOpen) return null;

  const defaultUrl = 'https://qazaqstan-heritage.vercel.app';
  const url = shareTarget?.url || defaultUrl;

  const title =
    shareTarget?.title ||
    (language === 'kk'
      ? 'Qazaqstan Heritage — Қазақстанның 17 Өңірінің Киелі Мұралары'
      : language === 'ru'
      ? 'Qazaqstan Heritage — Сакральное наследие 17 регионов Казахстана'
      : 'Qazaqstan Heritage — Sacred Heritage of 17 Regions');

  const text =
    shareTarget?.text ||
    (language === 'kk'
      ? '🏛️ Ұлы Даланың 3000 жылдық киелі жауһарлары, 3D виртуалды турлар, шынайы билет бағалары мен маршруттары:'
      : language === 'ru'
      ? '🏛️ 3000-летнее наследие Великой Степи, 3D виртуальные туры, официальные билеты и маршруты:'
      : '🏛️ 3,000-year heritage of the Great Steppe, 3D virtual tours, official tickets and trip itineraries:');

  const fullShareMessage = `${title}\n\n${text}\n👉 ${url}`;

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = url;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleWhatsApp = () => {
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(fullShareMessage)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleTelegram = () => {
    const tgUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title + '\n' + text)}`;
    window.open(tgUrl, '_blank', 'noopener,noreferrer');
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url,
        });
      } catch {
        // User cancelled
      }
    } else {
      handleWhatsApp();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={() => setIsShareModalOpen(false)}
    >
      <div
        className="w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] animate-slideUp sm:animate-scaleUp text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-slate-900 leading-tight">
                {language === 'kk'
                  ? 'Сілтемені бөлісу'
                  : language === 'ru'
                  ? 'Поделиться ссылкой'
                  : 'Share Link'}
              </h3>
              <p className="text-[11px] text-slate-500">
                {language === 'kk'
                  ? 'WhatsApp, Telegram және әлеуметтік желілер'
                  : language === 'ru'
                  ? 'WhatsApp, Telegram и соцсети'
                  : 'WhatsApp, Telegram and social media'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsShareModalOpen(false)}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            aria-label="Жабу"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 space-y-4 overflow-y-auto">
          {/* Live WhatsApp / Social Card Preview */}
          <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-md text-white">
            <div className="relative aspect-[1.91/1] w-full bg-slate-950 overflow-hidden">
              <img
                src={getAssetUrl('/og-image.jpg')}
                alt="Qazaqstan Heritage Preview"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-semibold text-amber-300 border border-white/10">
                WhatsApp Preview
              </div>
            </div>
            <div className="p-3.5 bg-slate-900/95 border-t border-slate-800">
              <p className="text-[11px] text-slate-400 font-mono uppercase tracking-wider">
                qazaqstan-heritage.vercel.app
              </p>
              <h4 className="font-bold text-sm text-white line-clamp-1 mt-0.5">
                {title}
              </h4>
              <p className="text-xs text-slate-300 line-clamp-2 mt-1">
                {text}
              </p>
            </div>
          </div>

          {/* WhatsApp Direct Action Button (Large, Green) */}
          <button
            type="button"
            onClick={handleWhatsApp}
            className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] active:scale-[0.98] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#25D366]/30 transition-all cursor-pointer"
          >
            {/* WhatsApp SVG Icon */}
            <svg
              className="w-6 h-6 fill-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.276-.1-.477-.15-.678.15s-.779.98-.955 1.18c-.176.201-.351.226-.653.076-.301-.15-1.272-.469-2.423-1.496-.897-.799-1.503-1.787-1.68-2.088-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.151-.176.201-.301.301-.502.101-.201.05-.377-.025-.527-.075-.15-.678-1.634-.929-2.239-.245-.589-.494-.509-.678-.519l-.578-.01c-.201 0-.527.075-.803.377s-1.055 1.03-1.055 2.511 1.08 2.912 1.231 3.113c.15.201 2.124 3.243 5.146 4.549.719.311 1.281.497 1.719.636.723.23 1.381.197 1.901.12.58-.087 1.782-.728 2.033-1.431.251-.703.251-1.305.176-1.431-.076-.126-.277-.201-.578-.351zM12.04 21.75c-1.75 0-3.46-.46-4.96-1.33l-.36-.21-3.68.96.98-3.59-.23-.37c-.96-1.53-1.47-3.31-1.47-5.14 0-5.37 4.37-9.74 9.74-9.74 2.6 0 5.05 1.01 6.89 2.85 1.84 1.84 2.85 4.29 2.85 6.89 0 5.38-4.38 9.68-9.76 9.68zm8.31-18.06C18.17 1.5 15.22.5 12.04.5 5.71.5.56 5.65.56 11.98c0 2.02.53 4 1.53 5.75L0 24l6.45-1.69c1.69.92 3.59 1.41 5.59 1.41 6.33 0 11.48-5.15 11.48-11.48 0-3.07-1.19-5.96-3.17-8.25z" />
            </svg>
            <span>
              {language === 'kk'
                ? 'WhatsApp арқылы жіберу'
                : language === 'ru'
                ? 'Отправить в WhatsApp'
                : 'Send via WhatsApp'}
            </span>
          </button>

          {/* Secondary Share Actions (Telegram + Native) */}
          <div className="grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={handleTelegram}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#0088cc] hover:bg-[#0077b5] active:scale-[0.98] text-white font-bold text-xs shadow-sm transition-all cursor-pointer"
            >
              {/* Telegram SVG Icon */}
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.939z" />
              </svg>
              <span>Telegram</span>
            </button>

            <button
              type="button"
              onClick={handleNativeShare}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 active:scale-[0.98] text-slate-800 font-bold text-xs transition-all cursor-pointer"
            >
              <Share2 className="w-4 h-4 text-slate-600" />
              <span>
                {language === 'kk' ? 'Басқа қолданбалар' : language === 'ru' ? 'Другие' : 'Other apps'}
              </span>
            </button>
          </div>

          {/* Copy Full Verified Link */}
          <div className="pt-2 border-t border-slate-100">
            <label className="block text-[11px] font-semibold text-slate-500 mb-1.5">
              {language === 'kk'
                ? 'Ресми толық сілтеме (https:// форматында):'
                : language === 'ru'
                ? 'Прямая ссылка (с протоколом https://):'
                : 'Direct Link (with https://):'}
            </label>
            <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-200">
              <input
                type="text"
                readOnly
                value={url}
                className="flex-1 bg-transparent px-2 text-xs font-mono text-slate-800 focus:outline-none select-all"
              />
              <button
                type="button"
                onClick={handleCopy}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  copied
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-900 hover:bg-amber-600 text-white'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>{language === 'kk' ? 'Көшірілді!' : language === 'ru' ? 'Скопировано!' : 'Copied!'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{language === 'kk' ? 'Көшіру' : language === 'ru' ? 'Копировать' : 'Copy'}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Helpful Tip Explaining WhatsApp Link Behavior */}
          <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-3 text-[11px] text-amber-900 leading-relaxed flex items-start gap-2">
            <span className="text-sm shrink-0">💡</span>
            <div>
              <p className="font-semibold mb-0.5">
                {language === 'kk'
                  ? 'Ватсапта сілтеме көк болып белсенді басылуы үшін:'
                  : language === 'ru'
                  ? 'Чтобы ссылка в WhatsApp была кликабельной и с фото:'
                  : 'To ensure the link is clickable with photo in WhatsApp:'}
              </p>
              <p className="text-amber-800">
                {language === 'kk'
                  ? '1) Сілтеменің алдына әрқашан https:// жазылуы керек (жоғарыдағы жасыл батырма автоматты түрде дұрыс форматта жібереді). 2) Ватсапқа қойған соң 2-3 секунд күтсеңіз, суреті бар әдемі карточкасы шығады.'
                  : language === 'ru'
                  ? '1) В начале обязательно должен быть протокол https:// (зелёная кнопка делает это автоматически). 2) Подождите 2-3 секунды перед отправкой для появления превью-карточки.'
                  : '1) The link must start with https://. 2) Wait 2-3 seconds after pasting for the preview card to appear.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

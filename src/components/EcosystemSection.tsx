import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Building2,
  Home,
  ShieldCheck,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

export const EcosystemSection: React.FC = () => {
  const { language } = useApp();

  const content = {
    badge: {
      kk: 'Ұлттық Экосистема',
      en: 'National Ecosystem',
      ru: 'Экосистема туризма',
    },
    title: {
      kk: 'Ресми мемлекеттік сервистер мен серіктестер',
      en: 'Official State Tourism Services & Guarantees',
      ru: 'Официальные сервисы и кампании',
    },
    subtitle: {
      kk: 'Қазақстанның туристік бренді, шетелдік қонақтарды ресми тіркеу және саяхатшылардың қауіпсіздігін қорғау жүйелері.',
      en: 'Kazakhstan’s sovereign tourism brand, guest accommodation tracking, and tourist protection fund.',
      ru: 'Национальный бренд, система регистрации гостей и гарантирование прав туристов.',
    },
    cards: [
      {
        id: 'bold',
        brand: 'Kazakhstan Born Bold',
        title: {
          kk: 'Қазақстанға инвестиция & туризм',
          en: 'Invest in Kazakhstan & Tourism',
          ru: 'Инвестируйте в Казахстан',
        },
        description: {
          kk: 'Елдің зор мүмкіндіктері, заманауи инфрақұрылымы мен халықаралық туризм жобалары туралы ұлттық кампания.',
          en: 'National campaign highlighting limitless opportunities, infrastructure, culture, and sovereign projects.',
          ru: 'Национальная кампания о возможностях страны: люди, инфраструктура, туризм и инновации.',
        },
        linkText: {
          kk: 'Bold Kazakhstan ашу',
          en: 'Explore Bold Kazakhstan',
          ru: 'Открыть Bold Kazakhstan',
        },
        url: 'https://www.boldkazakhstan.com',
        color: 'from-[#0f172a] via-[#1e293b] to-[#334155]',
        accent: '#F5A623',
        icon: Building2,
      },
      {
        id: 'eqonaq',
        brand: 'eQonaq',
        title: {
          kk: 'Туристерді есепке алу және отельдер',
          en: 'Tourist Registration & Hospitality',
          ru: 'Учёт туристов и размещение',
        },
        description: {
          kk: 'Қазақстанға келген шетелдік қонақтарды қонақүйлерде, хостелдерде автоматты тіркеуге арналған бірыңғай жүйе.',
          en: 'Unified state information system for foreign tourist registration at verified accommodation providers.',
          ru: 'Государственная система регистрации иностранных гостей в местах размещения.',
        },
        linkText: {
          kk: 'eQonaq жүйесіне өту',
          en: 'Open eQonaq Portal',
          ru: 'Перейти на eQonaq',
        },
        url: 'https://eqonaq.kz/?lang=kk',
        color: 'from-[#FFF7EC] via-white to-[#FDFCFA]',
        accent: '#E67E00',
        icon: Home,
      },
      {
        id: 'kamkor',
        brand: 'Туристік Қамқор',
        title: {
          kk: 'Саяхатшыларды қорғау қоры',
          en: 'Tourist Safety & Protection Fund',
          ru: 'Гарантии для туристов',
        },
        description: {
          kk: 'Саяхатшылардың құқығын қорғау жүйесі: ресми туркодтар, сенімді операторлар тізілімі және 24/7 көмек.',
          en: 'State-backed tourist rights guarantee system: verified tour codes, operator registry, and 24/7 assistance.',
          ru: 'Система гарантирования прав туристов: туркод, реестр проверенных операторов и экстренная помощь.',
        },
        linkText: {
          kk: '«Қамқор» қорымен танысу',
          en: 'Open Kamkor Fund',
          ru: 'Открыть Фонд Қамқор',
        },
        url: 'https://www.fondkamkor.kz/',
        color: 'from-teal-950 via-slate-900 to-slate-800',
        accent: '#5EEAD4',
        icon: ShieldCheck,
      },
    ],
  };

  return (
    <section className="bg-[#FDFCFA] py-16 md:py-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.18em] text-[#E67E00] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            {content.badge[language]}
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-tight text-slate-900 leading-tight">
            {content.title[language]}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            {content.subtitle[language]}
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {content.cards.map((card) => {
            const Icon = card.icon;
            const isLightCard = card.id === 'eqonaq';

            return (
              <a
                key={card.id}
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex flex-col justify-between overflow-hidden rounded-[1.75rem] p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border ${
                  isLightCard
                    ? 'border-[#E69A34]/30 bg-gradient-to-br from-[#FFF7EC] via-white to-[#FDFCFA] text-slate-900'
                    : 'border-white/10 bg-gradient-to-br ' + card.color + ' text-white'
                }`}
              >
                {/* Subtle Ambient Glow inside Card */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition"
                  style={{ backgroundColor: card.accent }}
                />

                <div>
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ring-1 mb-5 ${
                      isLightCard
                        ? 'bg-[#E67E00]/10 ring-[#E67E00]/20 text-[#E67E00]'
                        : 'bg-white/10 ring-white/20 text-white'
                    }`}
                  >
                    <Icon className="h-6 w-6" style={{ color: card.accent }} />
                  </span>

                  <p
                    className="text-xs font-bold tracking-widest uppercase mb-1.5"
                    style={{ color: card.accent }}
                  >
                    {card.brand}
                  </p>

                  <h3 className="text-xl font-serif font-bold tracking-tight mb-2.5 leading-snug">
                    {card.title[language]}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed ${
                      isLightCard ? 'text-slate-600' : 'text-white/75'
                    }`}
                  >
                    {card.description[language]}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-current/10 flex items-center justify-between">
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider"
                    style={{ color: isLightCard ? '#A95700' : card.accent }}
                  >
                    <span>{card.linkText[language]}</span>
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

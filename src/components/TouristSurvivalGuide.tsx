import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Compass,
  ShieldCheck,
  CreditCard,
  Wifi,
  Sparkles,
  Calendar,
  Coffee,
  CheckCircle2,
} from 'lucide-react';

export const TouristSurvivalGuide: React.FC = () => {
  const { language } = useApp();

  const content = {
    badge: {
      kk: 'Шетелдік қонақтарға арналған гид',
      en: 'First-Time Visitor Guide',
      ru: 'Практический гид туриста',
    },
    title: {
      kk: 'Қазақстанға саяхаттаудың маңызды ережелері',
      en: 'Essential Guide for Traveling to Kazakhstan',
      ru: 'Что важно знать перед поездкой в Казахстан',
    },
    subtitle: {
      kk: 'Шекарадан өту, төлем тәсілдері, кесенелердегі дәстүрлі этикет және жол қатынасы бойынша ресми әрі пайдалы кеңестер.',
      en: 'Practical advice on visa-free access, payments, sacred mausoleum etiquette, SIM connectivity, and hospitality.',
      ru: 'Официальные советы по безвизовому режиму, платежам, этикету в мавзолеях и логистике поездок.',
    },
    cards: [
      {
        icon: ShieldCheck,
        title: {
          kk: '80+ елге визасыз режим',
          en: 'Visa-Free Entry (80+ Countries)',
          ru: 'Безвизовый въезд для 80+ стран',
        },
        desc: {
          kk: 'АҚШ, Еуропалық Одақ, Ұлыбритания, Оңтүстік Корея, Сингапур, БАӘ т.б. елдердің азаматтары 30 күнге дейін визасыз кіре алады.',
          en: 'Citizens of USA, EU nations, UK, South Korea, Singapore, UAE and 80+ countries enjoy 30 days of visa-free travel.',
          ru: 'Граждане США, стран ЕС, Великобритании, Кореи, ОАЭ и еще 80+ стран могут въезжать без визы на срок до 30 дней.',
        },
        tag: { kk: '30 күн визасыз', en: '30 Days Visa-Free', ru: '30 дней без визы' },
      },
      {
        icon: CreditCard,
        title: {
          kk: 'Төлемдер мен валюта (₸ / KZT)',
          en: 'Payments & Currency (₸ KZT)',
          ru: 'Оплата и валюта (₸ KZT)',
        },
        desc: {
          kk: 'Төл валюта — Қазақстан теңгесі (₸). Ірі қалаларда Visa/Mastercard қабылданады, ал далалық кесенелерге барғанда қолма-қол теңге ұстаған жөн.',
          en: 'National currency is Tenge (₸). Visa and Mastercard are accepted in cities, but carry local cash (KZT) for rural heritage excursions.',
          ru: 'Национальная валюта — тенге (₸). Карты принимают во всех городах, но для поездок в отдаленные мавзолеи нужен наличный расчет.',
        },
        tag: { kk: 'Visa / Mastercard / Cash', en: 'Cards & Cash', ru: 'Карты и наличные' },
      },
      {
        icon: Sparkles,
        title: {
          kk: 'Кесенелердегі дәстүрлі этикет',
          en: 'Mausoleum Dress Code & Etiquette',
          ru: 'Этикет при посещении святынь',
        },
        desc: {
          kk: 'Киелі кесенелерге кірерде аяқ киімді шешу, иық пен тізені жабатын қарапайым киім кию ұсынылады. Әйелдерге бас орамал тағу сақталады.',
          en: 'Remove shoes upon entering inner chambers. Modest dress covering shoulders and knees is appreciated. Women may cover hair.',
          ru: 'При входе снимайте обувь. Плечи и колени должны быть прикрыты. Женщинам рекомендуется головной платок.',
        },
        tag: { kk: 'Дәстүрге құрмет', en: 'Cultural Respect', ru: 'Уважение традиций' },
      },
      {
        icon: Wifi,
        title: {
          kk: 'Байланыс және eSIM / SIM',
          en: 'Mobile Connectivity & eSIM',
          ru: 'Связь, интернет и eSIM',
        },
        desc: {
          kk: 'Әуежайда немесе онлайн Kcell, Beeline, Tele2 eSIM алуға болады. Қала аралық күрежолдар мен шөлді аймақтарда офлайн карталарды (Maps.me/2GIS) жүктеп алыңыз.',
          en: 'Airport kiosks provide tourist SIM/eSIM. Download offline maps for remote steppes (Mangystau, Ulytau) where cell coverage varies.',
          ru: 'В аэропортах доступны туристические SIM/eSIM. Загрузите офлайн-карты для поездок по отдаленным степным районам.',
        },
        tag: { kk: '4G/5G & Офлайн карта', en: '4G & Offline Maps', ru: '4G и офлайн-карты' },
      },
      {
        icon: Coffee,
        title: {
          kk: 'Ұлттық тағамдар мен қонақжайлық',
          en: 'Nomadic Culinary Heritage',
          ru: 'Кулинарные традиции степи',
        },
        desc: {
          kk: 'Қазақ халқы үшін қонақ — құрметті тұлға. Ет (бесбармақ), бауырсақ, қымыз бен шұбаттың дәмін татыңыз. Сый аяққа шай ұсынылады.',
          en: 'Kazakh hospitality is world-renowned: try Beshbarmak (national nomad feast), warm Baursaks, and traditional tea with fermented dairy.',
          ru: 'Казахское гостеприимство легендарно: попробуйте бешбармак, горячие баурсаки, кумыс и шубат с душистым чаем.',
        },
        tag: { kk: 'Бесбармақ & Бауырсақ', en: 'Local Cuisine', ru: 'Национальная кухня' },
      },
      {
        icon: Calendar,
        title: {
          kk: 'Саяхаттың қолайлы маусымы',
          en: 'Best Travel Seasons',
          ru: 'Лучшие сезоны для поездок',
        },
        desc: {
          kk: 'Кесенелер мен тарихи ескерткіштерді аралауға ең қолайлы уақыт — көктем (сәуір-маусым) және күз (қыркүйек-қазан). Жазда таңертең ерте шыққан жөн.',
          en: 'Optimal months are Spring (April–June) when steppes bloom, and Autumn (Sept–Oct). Summer visits are best scheduled in early mornings.',
          ru: 'Лучшее время — весна (апрель–июнь) и осень (сентябрь–октябрь). Летом поездки комфортнее совершать ранним утром.',
        },
        tag: { kk: 'Сәуір — Қазан', en: 'April — October', ru: 'Апрель — Октябрь' },
      },
    ],
  };

  return (
    <section id="tourist-survival-guide" className="py-20 relative bg-[#FFF7EC] border-y border-[#E69A34]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E69A34]/30 text-[#E67E00] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Compass className="w-4 h-4" />
            <span>{content.badge[language]}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            {content.title[language]}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {content.subtitle[language]}
          </p>
        </div>

        {/* 6 Practical Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-[#E69A34] transition-all duration-300 hover:shadow-xl group flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#FFF7EC] border border-[#E69A34]/30 flex items-center justify-center text-[#E67E00] group-hover:scale-108 group-hover:bg-[#E67E00] group-hover:text-white transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="px-3 py-1 rounded-full bg-slate-50 text-slate-600 border border-slate-200 text-[11px] font-semibold">
                      {card.tag[language]}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-slate-900 mb-2 group-hover:text-[#E67E00] transition-colors leading-snug">
                    {card.title[language]}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {card.desc[language]}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    {language === 'kk'
                      ? 'Тексерілген тәжірибелік кеңес'
                      : language === 'ru'
                      ? 'Проверенная рекомендация'
                      : 'Verified Travel Tip'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

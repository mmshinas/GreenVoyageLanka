import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "nav.home": "Home",
      "nav.tours": "Guided Tours",
      "nav.eco": "Eco-Tourism",
      "nav.fleet": "Our Drivers & Fleet",
      "nav.book": "Book Driver",
      "hero.title": "Expert Driver-Guided Journeys Across Sri Lanka",
      "hero.subtitle": "Premium transportation with qualified English-speaking drivers for an authentic, worry-free experience.",
      "why.title": "The Green Voyage Lanka Difference",
      "why.crew": "Qualified English-Speaking Drivers",
      "why.eco": "Sustainable Eco-Partners",
      "why.premium": "Modern Reliable Fleet",
      "tours.title": "Driver-Guided Excursions",
      "eco.title": "Sustainable Sri Lanka",
      "eco.desc": "Discover eco-friendly hotels and activities that preserve our natural heritage.",
      "fleet.title": "Drivers & Vehicles",
      "booking.title": "Book Your Driver",
      "booking.name": "Full Name",
      "booking.email": "Email Address",
      "booking.date": "Travel Date",
      "booking.flight": "Flight Number",
      "booking.vehicle": "Vehicle Choice",
      "booking.submit": "Confirm & Pay Deposit",
      "admin.login": "Admin Login",
      "admin.dashboard": "Admin Dashboard"
    }
  },
  ja: {
    translation: {
      "nav.home": "ホーム",
      "nav.tours": "ガイド付きツアー",
      "nav.eco": "エコツーリズム",
      "nav.fleet": "ドライバーと車両",
      "nav.book": "ドライバーを予約",
      "hero.title": "スリランカ全土を巡る専門ドライバーガイドの旅",
      "hero.subtitle": "資格を持つ英語対応ドライバーによるプレミアムな移動で、本物の安心な体験を。",
      "why.title": "Green Voyage Lankaの違い",
      "why.crew": "資格を持つ英語対応ドライバー",
      "why.eco": "持続可能なエコパートナー",
      "why.premium": "最新で信頼性の高い車両",
      "tours.title": "ドライバーガイド付きエクスカーション",
      "eco.title": "サステナブル・スリランカ",
      "eco.desc": "自然遺産を守るエコフレンドリーなホテルやアクティビティを発見しましょう。",
      "fleet.title": "ドライバーと車両",
      "booking.title": "ドライバーを予約する",
      "booking.name": "氏名",
      "booking.email": "メールアドレス",
      "booking.date": "旅行日",
      "booking.flight": "便名",
      "booking.vehicle": "車両の選択",
      "booking.submit": "確定してデポジットを支払う",
      "admin.login": "管理者ログイン",
      "admin.dashboard": "管理者ダッシュボード"
    }
  },
  zh: {
    translation: {
      "nav.home": "首页",
      "nav.tours": "导游服务",
      "nav.eco": "生态旅游",
      "nav.fleet": "司机与车队",
      "nav.book": "预订司机",
      "hero.title": "斯里兰卡全境专业司机导游之旅",
      "hero.subtitle": "提供具备资质的英语司机和优质交通，为您带来真实无忧的体验。",
      "why.title": "Green Voyage Lanka 的独特之处",
      "why.crew": "具备资质的英语司机",
      "why.eco": "可持续生态合作伙伴",
      "why.premium": "现代可靠的车队",
      "tours.title": "司机导游远足",
      "eco.title": "可持续发展的斯里兰卡",
      "eco.desc": "发现保护我们自然遗产的环保酒店和活动。",
      "fleet.title": "司机与车辆",
      "booking.title": "预订您的司机",
      "booking.name": "全名",
      "booking.email": "电子邮件地址",
      "booking.date": "旅行日期",
      "booking.flight": "航班号",
      "booking.vehicle": "车辆选择",
      "booking.submit": "确认并支付押金",
      "admin.login": "管理员登录",
      "admin.dashboard": "管理员仪表板"
    }
  },
  fr: {
    translation: {
      "nav.home": "Accueil",
      "nav.tours": "Circuits Guidés",
      "nav.eco": "Écotourisme",
      "nav.fleet": "Chauffeurs & Flotte",
      "nav.book": "Réserver un Chauffeur",
      "hero.title": "Voyages avec Chauffeurs-Guides Experts à travers le Sri Lanka",
      "hero.subtitle": "Transport premium avec chauffeurs anglophones qualifiés pour une expérience authentique et sans souci.",
      "why.title": "La Différence Green Voyage Lanka",
      "why.crew": "Chauffeurs Anglophones Qualifiés",
      "why.eco": "Partenaires Éco-responsables",
      "why.premium": "Flotte Moderne et Fiable",
      "tours.title": "Excursions avec Chauffeur-Guide",
      "eco.title": "Sri Lanka Durable",
      "eco.desc": "Découvrez des hôtels et des activités éco-responsables qui préservent notre patrimoine naturel.",
      "fleet.title": "Chauffeurs & Véhicules",
      "booking.title": "Réservez votre Chauffeur",
      "booking.name": "Nom complet",
      "booking.email": "Adresse e-mail",
      "booking.date": "Date de voyage",
      "booking.flight": "Numéro de vol",
      "booking.vehicle": "Choix du véhicule",
      "booking.submit": "Confirmer et Payer l'Acompte",
      "admin.login": "Connexion Admin",
      "admin.dashboard": "Tableau de bord Admin"
    }
  },
  de: {
    translation: {
      "nav.home": "Startseite",
      "nav.tours": "Geführte Touren",
      "nav.eco": "Ökotourismus",
      "nav.fleet": "Fahrer & Flotte",
      "nav.book": "Fahrer Buchen",
      "hero.title": "Expertengeführte Reisen durch Sri Lanka",
      "hero.subtitle": "Erstklassiger Transport mit qualifizierten englischsprachigen Fahrern für ein authentisches, sorgenfreies Erlebnis.",
      "why.title": "Der Green Voyage Lanka Unterschied",
      "why.crew": "Qualifizierte englischsprachige Fahrer",
      "why.eco": "Nachhaltige Öko-Partner",
      "why.premium": "Moderne, zuverlässige Flotte",
      "tours.title": "Fahrergeführte Ausflüge",
      "eco.title": "Nachhaltiges Sri Lanka",
      "eco.desc": "Entdecken Sie umweltfreundliche Hotels und Aktivitäten, die unser Naturerbe bewahren.",
      "fleet.title": "Fahrer & Fahrzeuge",
      "booking.title": "Buchen Sie Ihren Fahrer",
      "booking.name": "Vollständiger Name",
      "booking.email": "E-Mail-Adresse",
      "booking.date": "Reisedatum",
      "booking.flight": "Flugnummer",
      "booking.vehicle": "Fahrzeugauswahl",
      "booking.submit": "Bestätigen & Anzahlung leisten",
      "admin.login": "Admin-Login",
      "admin.dashboard": "Admin-Dashboard"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

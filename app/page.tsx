"use client";
import { useEffect, useRef, useState } from "react";

// ─── TRANSLATIONS ─────────────────────────────────────────────────────────────
const t = {
  ar: {
    dir: "rtl",
    brand: { name: "دار الأركان", sub: "للتطوير العقاري" },
    nav: {
      about: "من نحن", projects: "المشاريع", payment: "السداد",
      map: "الخريطة", contact: "تواصل معنا", whatsapp: "واتساب",
    },
    hero: {
      location: "القاهرة الجديدة — بيت الوطن",
      title: "دار الأركان",
      subtitle: "للتطوير العقاري",
      desc: "نبني قيمة حقيقية ونطور مجتمعات تدوم",
      desc2: "أكثر من 11 عاماً من الخبرة في التطوير العقاري",
      cta1: "تواصل واتساب",
      cta2: "المشاريع الحالية",
      scroll: "اسحب للأسفل",
    },
    stats: [
      { suffix: "+", label: "سنة خبرة",     value: 11   },
      { suffix: "+", label: "مشروع منجز",   value: 100  },
      { suffix: "",  label: "مشاريع حالية", value: 5    },
      { suffix: "",  label: "سنة التأسيس",  value: 2015 },
    ],
    about: {
      tag: "من نحن",
      title: "خبرة تتجاوز عقداً في قلب القاهرة الجديدة",
      body: "تأسست شركة دار الأركان للتطوير العقاري عام 2015 بقيادة المهندس طارق خليل، وتمتلك خبرة تتجاوز 11 عاماً في مجال التطوير العقاري والإنشاءات. نفخر بتنفيذ أكثر من 100 مشروع عقاري ناجح بالقاهرة الجديدة مع الالتزام بأعلى معايير الجودة والشفافية في التنفيذ والتسليم.",
      values: ["جودة التشطيب", "الالتزام بالمواعيد", "شفافية التعاقد", "خدمة ما بعد البيع"],
      chairman: "المهندس طارق خليل — رئيس مجلس الإدارة",
      badge: "مشروع منجز",
      yrsLabel: "سنة خبرة",
    },
    projects: {
      tag: "مشاريعنا", title: "المشاريع الحالية",
      desc: "وحدات سكنية متنوعة بالقاهرة الجديدة بأنظمة سداد مرنة وتشطيبات عالية الجودة",
      btnWa: "واتساب", btnMap: "الموقع", downLabel: "مقدم",
    },
    payment: {
      tag: "التمويل", title: "أنظمة السداد",
      plans: [
        { icon: "💰", title: "30%",             sub: "مقدم يبدأ من",     desc: "ادفع 30% فقط كمقدم وابدأ رحلتك نحو امتلاك وحدتك المثالية" },
        { icon: "📅", title: "٤ – ٥ سنوات",    sub: "تقسيط مريح",       desc: "أقساط شهرية منتظمة بدون فوائد تناسب ميزانيتك على مدار سنوات", highlight: true },
        { icon: "🏠", title: "استلامات متنوعة", sub: "جاهزة وقيد الإنشاء", desc: "اختر بين وحدة جاهزة للاستلام أو وحدة قيد الإنشاء بسعر مميز" },
      ],
    },
    map: { tag: "الخريطة", title: "خريطة بيت الوطن", desc: "اضغط على أي حي لمعرفة المشاريع المتاحة" },
    contact: {
      tag: "تواصل معنا", title: "نحن هنا لمساعدتك",
      desc: "فريقنا جاهز للإجابة على كل استفساراتك ومساعدتك في اختيار الوحدة المناسبة",
      items: [
        { icon: "📞", label: "الهاتف",       value: "01152722626",                            href: "tel:01152722626" },
        { icon: "📍", label: "العنوان",      value: "224 ش التسعين الشمالي، القاهرة الجديدة", href: "#" },
        { icon: "🕒", label: "أوقات العمل", value: "السبت – الخميس، 10ص – 8م",              href: "#" },
      ],
      btnWa: "واتساب", btnCall: "اتصل الآن",
    },
    footer: {
      tagline: "نبني قيمة حقيقية ونطور مجتمعات تدوم",
      quickLinks: "روابط سريعة", follow: "تابعنا",
      address: "224 ش التسعين الشمالي، القاهرة الجديدة",
      copyright: "© 2026 دار الأركان للتطوير العقاري. جميع الحقوق محفوظة.",
    },
    projectData: [
      { id:"a187", name:"A187", district:"الحي الثاني – بيت الوطن", down:"30%", years:"حتى 5 سنوات", points:["ثالث نمرة من التسعين الشمالي","قريب من النادي الأهلي","قريب من العاصمة الإدارية"],    whatsapp:"https://wa.me/201152722626", mapLink:"https://maps.app.goo.gl/1KVGXks1Az4heNzy6", imgSrc:"/a187.jpg" },
      { id:"c87",  name:"C87",  district:"الحي الأول – بيت الوطن",  down:"30%", years:"حتى 5 سنوات", points:["دقيقة من التسعين الشمالي","دخلة مباشرة من طريق السويس","مواجهة لكمبوند هليو بارك"], whatsapp:"https://wa.me/201152722626", mapLink:"https://maps.app.goo.gl/y357M63Y6qNsG4od7", imgSrc:"/c87.jpg" },
      { id:"a61",  name:"A61",  district:"الحي الرابع – بيت الوطن", down:"30%", years:"حتى 4 سنوات", points:["ثاني نمرة من الفيو زون","8 وحدات فقط بالمبنى","واجهة شرقي بحري"],                    whatsapp:"https://wa.me/201152722626", mapLink:"https://maps.app.goo.gl/yUPDd6CajjtdzRrn7", imgSrc:"/a61.jpg" },
      { id:"g30",  name:"G30",  district:"الحي السادس – بيت الوطن", down:"30%", years:"حتى 5 سنوات", points:["على شارع النوادي","قريب من النادي الأهلي","قريب من المونوريل"],                       whatsapp:"https://wa.me/201152722626", mapLink:"https://maps.app.goo.gl/PdAUBQVLJCS7Xox76", imgSrc:"/g30.jpg" },
      { id:"d80",  name:"D80",  district:"الحي الثامن – بيت الوطن", down:"30%", years:"حتى 5 سنوات", points:["ثاني نمرة من الفيو زون","قريب من المونوريل","8 وحدات فقط بالمشروع"],                 whatsapp:"https://wa.me/201152722626", mapLink:"https://maps.app.goo.gl/rhJVb6Btu6yiUJYf9", imgSrc:"/d80.jpg" },
    ],
  },
  en: {
    dir: "ltr",
    brand: { name: "DAR EL ARKAN", sub: "DEVELOPMENTS" },
    nav: {
      about: "About Us", projects: "Projects", payment: "Payment",
      map: "Map", contact: "Contact", whatsapp: "WhatsApp",
    },
    hero: {
      location: "New Cairo — Bayt Al-Watan",
      title: "DAR EL ARKAN",
      subtitle: "DEVELOPMENTS",
      desc: "Building real value and developing lasting communities",
      desc2: "Over 11 years of expertise in real estate development",
      cta1: "WhatsApp Us",
      cta2: "Current Projects",
      scroll: "Scroll down",
    },
    stats: [
      { suffix: "+", label: "Years Experience",    value: 11   },
      { suffix: "+", label: "Completed Projects",  value: 100  },
      { suffix: "",  label: "Active Projects",      value: 5    },
      { suffix: "",  label: "Founded",              value: 2015 },
    ],
    about: {
      tag: "About Us",
      title: "Over a Decade of Excellence in New Cairo",
      body: "Dar El Arkan Developments was founded in 2015 under the leadership of Eng. Tarek Khalil, with over 11 years of experience in real estate development and construction. We are proud to have delivered more than 100 successful projects in New Cairo, maintaining the highest standards of quality, transparency, and timely delivery.",
      values: ["Finishing Quality", "On-Time Delivery", "Contract Transparency", "After-Sales Service"],
      chairman: "Eng. Tarek Khalil — Chairman",
      badge: "Completed Projects",
      yrsLabel: "Years Experience",
    },
    projects: {
      tag: "Our Projects", title: "Current Projects",
      desc: "Diverse residential units in New Cairo with flexible payment plans and premium finishes",
      btnWa: "WhatsApp", btnMap: "Location", downLabel: "down payment",
    },
    payment: {
      tag: "Financing", title: "Payment Plans",
      plans: [
        { icon: "💰", title: "30%",              sub: "Starting down payment",    desc: "Pay just 30% upfront and start your journey to owning your ideal unit" },
        { icon: "📅", title: "4 – 5 Years",      sub: "Comfortable installments", desc: "Regular monthly installments with no interest, tailored to your budget", highlight: true },
        { icon: "🏠", title: "Flexible Delivery", sub: "Ready & under construction", desc: "Choose between a ready-to-move-in unit or an under-construction unit at a special price" },
      ],
    },
    map: { tag: "Map", title: "Bayt Al-Watan Map", desc: "Click on any district to see available projects" },
    contact: {
      tag: "Contact Us", title: "We're Here to Help",
      desc: "Our team is ready to answer all your questions and help you find the perfect unit",
      items: [
        { icon: "📞", label: "Phone",   value: "01152722626",                  href: "tel:01152722626" },
        { icon: "📍", label: "Address", value: "224 North 90th St, New Cairo", href: "#" },
        { icon: "🕒", label: "Hours",   value: "Sat – Thu, 10AM – 8PM",        href: "#" },
      ],
      btnWa: "WhatsApp", btnCall: "Call Now",
    },
    footer: {
      tagline: "Building real value and developing lasting communities",
      quickLinks: "Quick Links", follow: "Follow Us",
      address: "224 North 90th Street, New Cairo, Egypt",
      copyright: "© 2026 DAR EL ARKAN DEVELOPMENTS. All Rights Reserved.",
    },
    projectData: [
      { id:"a187", name:"A187", district:"District 2 – Bayt Al-Watan", down:"30%", years:"Up to 5 years", points:["3rd plot from North 90th St","Near Al-Ahly Club","Near the Administrative Capital"], whatsapp:"https://wa.me/201152722626", mapLink:"https://maps.app.goo.gl/1KVGXks1Az4heNzy6", imgSrc:"/a187.jpg" },
      { id:"c87",  name:"C87",  district:"District 1 – Bayt Al-Watan", down:"30%", years:"Up to 5 years", points:["1 min from North 90th St","Direct access from Suez Road","Facing Helio Park Compound"],  whatsapp:"https://wa.me/201152722626", mapLink:"https://maps.app.goo.gl/y357M63Y6qNsG4od7", imgSrc:"/c87.jpg" },
      { id:"a61",  name:"A61",  district:"District 4 – Bayt Al-Watan", down:"30%", years:"Up to 4 years", points:["2nd plot from View Zone","Only 8 units per building","East-facing orientation"],          whatsapp:"https://wa.me/201152722626", mapLink:"https://maps.app.goo.gl/yUPDd6CajjtdzRrn7", imgSrc:"/a61.jpg" },
      { id:"g30",  name:"G30",  district:"District 6 – Bayt Al-Watan", down:"30%", years:"Up to 5 years", points:["On Club Street","Near Al-Ahly Club","Near the Monorail Station"],                         whatsapp:"https://wa.me/201152722626", mapLink:"https://maps.app.goo.gl/PdAUBQVLJCS7Xox76", imgSrc:"/g30.jpg" },
      { id:"d80",  name:"D80",  district:"District 8 – Bayt Al-Watan", down:"30%", years:"Up to 5 years", points:["2nd plot from View Zone","Near the Monorail Station","Only 8 units in the project"],     whatsapp:"https://wa.me/201152722626", mapLink:"https://maps.app.goo.gl/rhJVb6Btu6yiUJYf9", imgSrc:"/d80.jpg" },
    ],
  },
};

// ─── LOGO ─────────────────────────────────────────────────────────────────────
function Logo({ size = 48, className = "" }) {
  return (
    <img
      src="/logo.png"
      alt="DAR EL ARKAN"
      width={size}
      height={size}
      className={`rounded-lg object-contain flex-shrink-0 ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

// ─── COUNTER ──────────────────────────────────────────────────────────────────
function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => { started.current = false; setCount(0); }, [target]);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let cur = 0;
        const step = Math.ceil(target / 80);
        const timer = setInterval(() => {
          cur += step;
          if (cur >= target) { setCount(target); clearInterval(timer); }
          else setCount(cur);
        }, 20);
      }
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

// ─── PROJECT CARD ─────────────────────────────────────────────────────────────
function ProjectCard({ project, tr, dark }) {
  return (
    <div className={`group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border ${dark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"}`}>
      <div className="relative overflow-hidden h-52 bg-gray-300"
        style={{ background: "linear-gradient(135deg,#1e3a5f,#0a1628)" }}>
        <img
          src={project.imgSrc} alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => { e.target.style.display = "none"; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 right-4">
          <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            {project.down} {tr.projects.downLabel}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className={`text-xl font-black tracking-wide ${dark ? "text-amber-400" : "text-blue-900"}`}>{project.name}</h3>
            <p className={`text-xs mt-0.5 ${dark ? "text-gray-400" : "text-gray-500"}`}>{project.district}</p>
          </div>
          <span className={`text-xs font-semibold px-2 py-1 rounded-lg whitespace-nowrap ms-2 ${dark ? "bg-gray-700 text-amber-300" : "bg-blue-50 text-blue-900"}`}>{project.years}</span>
        </div>
        <ul className="space-y-1.5 mb-5">
          {project.points.map((p, i) => (
            <li key={i} className={`flex items-center gap-2 text-sm ${dark ? "text-gray-300" : "text-gray-700"}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />{p}
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
          <a href={project.whatsapp} target="_blank" rel="noopener noreferrer"
            className="flex-1 bg-green-600 hover:bg-green-700 text-white text-sm font-bold py-2.5 rounded-xl text-center transition-colors">
            {tr.projects.btnWa}
          </a>
          <a href={project.mapLink} target="_blank" rel="noopener noreferrer"
            className={`flex-1 text-white text-sm font-bold py-2.5 rounded-xl text-center transition-colors ${dark ? "bg-amber-600 hover:bg-amber-500" : "bg-blue-900 hover:bg-blue-800"}`}>
            {tr.projects.btnMap}
          </a>
        </div>
      </div>
    </div>
  );
}

const MAP_DISTRICTS = [
  { href:"/hay1", label:"1", points:"2650,4220,2860,5390,2800,5540,2360,5330,2060,5070,1670,4480" },
  { href:"/hay2", label:"2", points:"1900,5170,2230,5550,2770,6050,1840,6710,1480,6190,1040,5570,1110,5330" },
  { href:"/hay3", label:"3", points:"4150,5180,4550,6080,3750,6380,3500,6030,3200,5730,3350,5430" },
  { href:"/hay4", label:"4", points:"2977,6080,3262,6532,3382,6965,3437,7462,3382,7793,2875,7766,2406,7839,1991,6780" },
  { href:"/hay5", label:"5", points:"4697,6073,5103,6957,4651,7270,3998,7731,3823,7390,3823,6948,3804,6607,3777,6450" },
  { href:"/hay6", label:"6", points:"2855,7916,3371,7907,3445,8165,3546,8293,3491,8883,2533,8892,2377,7980" },
  { href:"/hay7", label:"7", points:"5110,7050,5580,7339,5313,7817,5064,8324,4539,8140,4263,8029,3996,7808" },
  { href:"/hay8", label:"8", points:"3724,8305,4212,8296,4774,8397,5105,8498,4847,9060,4534,8931,4120,8913,3668,8894" },
];

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const [lang, setLang]       = useState("ar");
  const [dark, setDark]       = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const tr = t[lang];

  // scroll listener
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // dark mode + FIX: prevent horizontal scroll globally
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
    document.body.style.backgroundColor = dark ? "#111827" : "#ffffff";
  }, [dark]);

  // also set overflow on first mount
  useEffect(() => {
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
  }, []);

  const navLinks = [
    { label: tr.nav.about,    href: "#about"    },
    { label: tr.nav.projects, href: "#projects"  },
    { label: tr.nav.payment,  href: "#payment"   },
    { label: tr.nav.map,      href: "#map"        },
    { label: tr.nav.contact,  href: "#contact"   },
  ];

  const bg    = dark ? "bg-gray-900" : "bg-white";
  const bgAlt = dark ? "bg-gray-800" : "bg-gray-50";
  const tp    = dark ? "text-white"  : "text-blue-900";
  const ts    = dark ? "text-gray-300" : "text-gray-600";

  const navbarBg = scrolled
    ? (dark ? "bg-gray-900 shadow-md py-3" : "bg-white shadow-md py-3")
    : "bg-transparent py-5";
  const navText = scrolled ? tp : "text-white";
  const ctrlCls = scrolled
    ? (dark ? "border-gray-600 text-gray-300 hover:bg-gray-700" : "border-gray-300 text-gray-600 hover:bg-gray-100")
    : "border-white/30 text-white hover:bg-white/10";

  return (
    /* FIX: overflow-x-hidden on wrapper prevents any child from causing horizontal scroll */
    <div style={{ overflowX: "hidden", width: "100%" }}>
      <main className={`min-h-screen ${bg} transition-colors duration-300 w-full`} dir={tr.dir}>

        {/* ══════════════ NAVBAR ══════════════ */}
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarBg}`}>
          {/* FIX: removed max-w-7xl here, use full width with safe padding */}
          <div className="w-full px-4 sm:px-6 flex items-center justify-between">

            {/* Brand — FIX: min-w-0 prevents logo pushing content off screen */}
            <div className="flex items-center gap-2 min-w-0 flex-shrink-0">
              <Logo size={42} />
              <div className="min-w-0">
                <p className={`font-black text-xs sm:text-sm leading-none tracking-widest truncate ${navText}`}>
                  {tr.brand.name}
                </p>
                <p className={`text-xs tracking-wider mt-0.5 ${scrolled ? "text-amber-500" : "text-amber-300"}`}>
                  {tr.brand.sub}
                </p>
              </div>
            </div>

            {/* Desktop nav links */}
            <ul className="hidden lg:flex items-center gap-5 flex-shrink-0">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={`text-sm font-semibold transition-colors hover:text-amber-400 ${navText}`}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Controls */}
            <div className="flex items-center gap-1.5 flex-shrink-0">
              {/* Lang */}
              <button onClick={() => setLang(lang === "ar" ? "en" : "ar")}
                className={`hidden md:flex items-center text-xs font-bold px-3 py-2 rounded-lg border transition-all ${ctrlCls}`}>
                {lang === "ar" ? "EN" : "ع"}
              </button>
              {/* Dark */}
              <button onClick={() => setDark(!dark)} aria-label="toggle dark"
                className={`hidden md:flex items-center justify-center w-9 h-9 rounded-lg border transition-all ${ctrlCls}`}>
                {dark ? "☀️" : "🌙"}
              </button>
              {/* WhatsApp */}
              <a href="https://wa.me/201152722626" target="_blank" rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap">
                {tr.nav.whatsapp}
              </a>
              {/* Burger */}
              <button className="md:hidden p-2 flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)}>
                {[0,1,2].map(i => (
                  <span key={i} className={`block w-6 h-0.5 ${scrolled ? (dark ? "bg-white" : "bg-blue-900") : "bg-white"}`} />
                ))}
              </button>
            </div>
          </div>

          {/* Mobile dropdown */}
          {menuOpen && (
            <div className={`md:hidden px-4 py-4 flex flex-col gap-3 border-t ${dark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-100"}`}>
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                  className={`font-semibold py-2 border-b text-base ${dark ? "text-white border-gray-700" : "text-blue-900 border-gray-100"}`}>
                  {l.label}
                </a>
              ))}
              <div className="flex gap-3 pt-2">
                <button onClick={() => setLang(lang === "ar" ? "en" : "ar")}
                  className={`flex-1 text-sm font-bold py-2 rounded-lg border ${dark ? "border-gray-600 text-gray-300" : "border-gray-300 text-gray-600"}`}>
                  {lang === "ar" ? "EN" : "ع"}
                </button>
                <button onClick={() => setDark(!dark)}
                  className={`flex-1 text-sm font-bold py-2 rounded-lg border ${dark ? "border-gray-600 text-amber-400" : "border-gray-300 text-gray-600"}`}>
                  {dark ? "☀️ Light" : "🌙 Dark"}
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* ══════════════ HERO ══════════════ */}
        <section
          className="relative min-h-screen w-full flex items-center justify-center text-center px-4"
          style={{ background: dark
            ? "linear-gradient(135deg,#050d1a 0%,#0e2240 50%,#050d1a 100%)"
            : "linear-gradient(135deg,#0a1628 0%,#1e3a5f 50%,#0a1628 100%)" }}
        >
          {/* grid */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.12) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
          {/* glow — FIX: use % width not px so it never overflows */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-lg aspect-square bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* FIX: w-full max-w-3xl instead of fixed w-[600px] */}
          <div className="relative w-full max-w-3xl text-white z-10 px-2">
            <p className="text-amber-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4">
              {tr.hero.location}
            </p>
            {/* FIX: fluid text size — clamp between 2.5rem and 6rem */}
            <h1 className="font-black leading-none tracking-tight" style={{ fontSize: "clamp(2.5rem, 10vw, 6rem)" }}>
              {tr.hero.title}
            </h1>
            <div className="flex items-center justify-center gap-3 my-4">
              <div className="h-px w-10 sm:w-16 bg-amber-400" />
              <span className="text-amber-400 text-sm sm:text-base tracking-widest font-light">{tr.hero.subtitle}</span>
              <div className="h-px w-10 sm:w-16 bg-amber-400" />
            </div>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-300 max-w-xl mx-auto">
              {tr.hero.desc}<br />
              <span className="text-white font-semibold">{tr.hero.desc2}</span>
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
              <a href="https://wa.me/201152722626" target="_blank" rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-500 px-6 py-3.5 rounded-2xl text-base font-bold transition-all hover:scale-105 shadow-lg shadow-green-900/30">
                {tr.hero.cta1}
              </a>
              <a href="#projects"
                className="bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm px-6 py-3.5 rounded-2xl text-base font-bold transition-all hover:scale-105">
                {tr.hero.cta2}
              </a>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-bounce pointer-events-none">
            <span className="text-xs tracking-widest">{tr.hero.scroll}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </section>

        {/* ══════════════ STATS ══════════════ */}
        <section className={`py-12 px-4 ${dark ? "bg-gray-950" : "bg-blue-900"}`}>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
            {tr.stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl sm:text-4xl md:text-5xl font-black text-amber-400">
                  <Counter target={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-xs sm:text-sm text-blue-200 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════ ABOUT ══════════════ */}
        <section id="about" className={`py-16 sm:py-24 px-4 ${bgAlt}`}>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-amber-500 text-xs font-semibold tracking-widest uppercase mb-3">{tr.about.tag}</p>
                <h2 className={`text-2xl sm:text-4xl font-black leading-tight ${tp}`}>{tr.about.title}</h2>
                <p className={`mt-5 leading-8 text-sm sm:text-base ${ts}`}>{tr.about.body}</p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {tr.about.values.map((v) => (
                    <div key={v} className={`flex items-center gap-2 text-sm font-medium ${dark ? "text-gray-300" : "text-gray-700"}`}>
                      <span className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </span>
                      {v}
                    </div>
                  ))}
                </div>
              </div>

              {/* FIX: pb-6 gives room for the badge; removed negative positioning that caused overflow */}
              <div className="relative pb-6 pe-6 mt-8 md:mt-0">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg,#1e3a5f,#0a1628)" }}>
                  {/* Logo watermark */}
                  <img
                    src="/logo.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-contain opacity-20 pointer-events-none"
                    style={{ padding: "20%" }}
                  />
                  <div className="relative flex flex-col items-center justify-center text-white text-center px-6">
                    <p className="text-5xl sm:text-6xl font-black text-amber-400">11+</p>
                    <p className="text-lg font-light mt-2">{tr.about.yrsLabel}</p>
                    <div className="mt-3 h-px w-12 bg-amber-400/50" />
                    <p className="mt-3 text-xs sm:text-sm text-blue-200 leading-5">{tr.about.chairman}</p>
                  </div>
                </div>
                {/* FIX: badge uses absolute but inside a padded container, not negative-margin */}
                <div className="absolute bottom-0 end-0 bg-amber-500 text-white rounded-2xl px-4 py-3 shadow-xl">
                  <p className="text-xl font-black">+100</p>
                  <p className="text-xs">{tr.about.badge}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════ PROJECTS ══════════════ */}
        <section id="projects" className={`py-16 sm:py-24 px-4 ${bg}`}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-amber-500 text-xs font-semibold tracking-widest uppercase mb-3">{tr.projects.tag}</p>
              <h2 className={`text-2xl sm:text-4xl font-black ${tp}`}>{tr.projects.title}</h2>
              <p className={`mt-3 text-sm max-w-xl mx-auto ${ts}`}>{tr.projects.desc}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tr.projectData.map((p) => (
                <ProjectCard key={p.id} project={p} tr={tr} dark={dark} />
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ PAYMENT ══════════════ */}
        <section id="payment" className={`py-16 sm:py-24 px-4 ${bgAlt}`}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-amber-500 text-xs font-semibold tracking-widest uppercase mb-3">{tr.payment.tag}</p>
              <h2 className={`text-2xl sm:text-4xl font-black ${tp}`}>{tr.payment.title}</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {tr.payment.plans.map((plan) => (
                <div key={plan.title}
                  className={`rounded-3xl p-6 sm:p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg ${
                    plan.highlight ? "bg-blue-900 text-white"
                    : dark ? "bg-gray-700 text-white border border-gray-600"
                    : "bg-white text-blue-900 border border-gray-100"
                  }`}>
                  <div className="text-4xl mb-3">{plan.icon}</div>
                  <p className={`text-xs font-semibold tracking-widest uppercase mb-1 ${plan.highlight ? "text-amber-300" : "text-amber-500"}`}>{plan.sub}</p>
                  <h3 className="text-2xl sm:text-3xl font-black mb-3">{plan.title}</h3>
                  <p className={`text-sm leading-6 ${plan.highlight ? "text-blue-200" : dark ? "text-gray-300" : "text-gray-500"}`}>{plan.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ MAP ══════════════ */}
        <section id="map" className={`py-16 sm:py-24 px-4 ${bg}`}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-amber-500 text-xs font-semibold tracking-widest uppercase mb-3">{tr.map.tag}</p>
              <h2 className={`text-2xl sm:text-4xl font-black ${tp}`}>{tr.map.title}</h2>
              <p className={`mt-2 text-sm ${ts}`}>{tr.map.desc}</p>
            </div>
            <div className={`relative rounded-3xl overflow-hidden shadow-2xl border ${dark ? "border-gray-700" : "border-gray-100"}`}>
              <img src="/bait-elwatan-map.jpg" alt="Bayt Al-Watan Map" className="w-full block"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentNode.style.minHeight = "300px";
                  e.target.parentNode.style.background = "linear-gradient(135deg,#1e3a5f,#0a1628)";
                }}
              />
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 7680 10867" preserveAspectRatio="xMidYMid meet">
                {MAP_DISTRICTS.map((d) => (
                  <a key={d.href} href={d.href} aria-label={`District ${d.label}`}>
                    <polygon points={d.points}
                      fill="rgba(30,58,95,0)" stroke="rgba(30,58,95,0)" strokeWidth="20"
                      style={{ cursor:"pointer", transition:"fill 0.2s,stroke 0.2s" }}
                      onMouseEnter={(e) => { e.target.setAttribute("fill","rgba(245,158,11,0.35)"); e.target.setAttribute("stroke","rgba(245,158,11,0.8)"); }}
                      onMouseLeave={(e) => { e.target.setAttribute("fill","rgba(30,58,95,0)");    e.target.setAttribute("stroke","rgba(30,58,95,0)"); }}
                    />
                  </a>
                ))}
              </svg>
            </div>
          </div>
        </section>

        {/* ══════════════ CONTACT ══════════════ */}
        <section id="contact" className={`py-16 sm:py-24 px-4 ${dark ? "bg-gray-950" : "bg-blue-900"} text-white`}>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-3">{tr.contact.tag}</p>
            <h2 className="text-2xl sm:text-4xl font-black mb-4">{tr.contact.title}</h2>
            <p className="text-blue-200 mb-8 text-sm sm:text-base leading-7">{tr.contact.desc}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {tr.contact.items.map((c) => (
                <a key={c.label} href={c.href}
                  className="bg-white/10 hover:bg-white/20 rounded-2xl p-4 text-center transition-colors">
                  <div className="text-2xl mb-2">{c.icon}</div>
                  <p className="text-xs text-blue-300 mb-1">{c.label}</p>
                  <p className="text-sm font-semibold">{c.value}</p>
                </a>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a href="https://wa.me/201152722626" target="_blank" rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-500 px-8 py-4 rounded-2xl font-bold text-base transition-all hover:scale-105">
                {tr.contact.btnWa}
              </a>
              <a href="tel:01152722626"
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-2xl font-bold text-base transition-all hover:scale-105">
                {tr.contact.btnCall}
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════ FOOTER ══════════════ */}
        <footer className={`py-10 px-4 ${dark ? "bg-black" : "bg-gray-950"} text-white`}>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
              {/* Brand */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Logo size={40} />
                  <div>
                    <p className="font-black text-sm tracking-widest">{tr.brand.name}</p>
                    <p className="text-amber-500 text-xs tracking-wider">{tr.brand.sub}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-6">{tr.footer.tagline}</p>
              </div>
              {/* Links */}
              <div>
                <p className="font-bold text-xs mb-4 text-gray-300 tracking-widest uppercase">{tr.footer.quickLinks}</p>
                <ul className="space-y-2">
                  {navLinks.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} className="text-gray-400 hover:text-amber-400 text-sm transition-colors">{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Social */}
              <div>
                <p className="font-bold text-xs mb-4 text-gray-300 tracking-widest uppercase">{tr.footer.follow}</p>
                <div className="flex flex-col gap-3">
                  {[
                    { label:"Facebook",  href:"https://www.facebook.com/share/1ERhNoSSSn/",                                            color:"bg-blue-600" },
                    { label:"Instagram", href:"https://www.instagram.com/dar_el_arkan?igsh=MWZjY29zNHFydGRmYQ==",                      color:"bg-pink-600" },
                    { label:"TikTok",    href:"https://www.tiktok.com/@darelarkandevelopment?_r=1&_t=ZS-96s4z36VhTR",                   color:"bg-gray-800" },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      className={`${s.color} hover:opacity-90 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all text-center block`}>
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-6 text-center">
              <p className="text-gray-500 text-sm">{tr.footer.copyright}</p>
              <p className="text-gray-600 text-xs mt-1">{tr.footer.address}</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

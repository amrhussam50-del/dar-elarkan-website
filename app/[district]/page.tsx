"use client";
import { useEffect, useState } from "react";

// ─── DATA ─────────────────────────────────────────────────────────────────────
const DISTRICTS_AR = {
  hay1: "الحي الأول",   hay2: "الحي الثاني",  hay3: "الحي الثالث",
  hay4: "الحي الرابع", hay5: "الحي الخامس",   hay6: "الحي السادس",
  hay7: "الحي السابع", hay8: "الحي الثامن",
};
const DISTRICTS_EN = {
  hay1: "District 1",  hay2: "District 2",  hay3: "District 3",
  hay4: "District 4",  hay5: "District 5",  hay6: "District 6",
  hay7: "District 7",  hay8: "District 8",
};

const NO_PROJECTS = ["hay3", "hay5", "hay7"];

const PROJECT_DATA = {
  hay1: {
    code: "C87",
    img: "/c87.jpg",
    whatsapp: "https://wa.me/201152722626",
    mapLink: "https://maps.app.goo.gl/y357M63Y6qNsG4od7",
    pricePerMeter: { ar: "24,000 جنيه / م²", en: "EGP 24,000 / m²" },
    downPayment: "30%",
    installment: { ar: "حتى 5 سنوات", en: "Up to 5 years" },
    delivery: { ar: "سنة ونصف", en: "18 months" },
    areas: { ar: ["شقة 165م²", "شقة 208م²", "شقة 250م²"], en: ["180m² Apt", "200m² Apt", "220m² Apt"] },
    features: {
      ar: ["دقيقة من التسعين الشمالي", "دخلة مباشرة من طريق السويس", "مواجهة مباشرة لكمبوند هليو بارك"],
      en: ["1 min from North 90th St", "Direct access from Suez Road", "Facing Helio Park Compound"],
    },
  },
  hay2: {
    code: "A187",
    img: "/a187.jpg",
    whatsapp: "https://wa.me/201152722626",
    mapLink: "https://maps.app.goo.gl/1KVGXks1Az4heNzy6",
    pricePerMeter: { ar: "24,000 جنيه / م²", en: "EGP 24,000 / m²" },
    downPayment: "30%",
    installment: { ar: "حتى 5 سنوات", en: "Up to 5 years" },
    delivery: { ar: "سنة ونصف", en: "18 months" },
    areas: { ar: ["شقة 190م²", "شقة 210م²"], en: ["190m² Apt", "210m² Apt"] },
    features: {
      ar: ["ثالث نمرة من التسعين الشمالي", "قريبة من النادي الأهلي", "واجهة مميزة على شارع واسع"],
      en: ["3rd plot from North 90th St", "Near Al-Ahly Club", "Overlooking a wide avenue"],
    },
  },
  hay4: {
    code: "A61",
    img: "/a61.jpg",
    whatsapp: "https://wa.me/201152722626",
    mapLink: "https://maps.app.goo.gl/yUPDd6CajjtdzRrn7",
    pricePerMeter: { ar: "24,000 جنيه / م²", en: "EGP 24,000 / m²" },
    downPayment: "30%",
    installment: { ar: "حتى 4 سنوات", en: "Up to 4 years" },
    delivery: { ar: "سنة", en: "12 months" },
    areas: { ar: ["شقة 175م²", "شقة 195م²"], en: ["175m² Apt", "195m² Apt"] },
    features: {
      ar: ["ثاني نمرة من الفيو زون", "8 وحدات فقط بالمبنى", "واجهة شرقي بحري"],
      en: ["2nd plot from View Zone", "Only 8 units per building", "East-facing orientation"],
    },
  },
  hay6: {
    code: "G30",
    img: "/g30.jpg",
    whatsapp: "https://wa.me/201152722626",
    mapLink: "https://maps.app.goo.gl/PdAUBQVLJCS7Xox76",
    pricePerMeter: { ar: "24,000 جنيه / م²", en: "EGP 24,000 / m²" },
    downPayment: "30%",
    installment: { ar: "حتى 5 سنوات", en: "Up to 5 years" },
    delivery: { ar: "سنتين", en: "24 months" },
    areas: { ar: ["شقة 180م²", "شقة 230م²"], en: ["180m² Apt", "230m² Apt"] },
    features: {
      ar: ["على شارع النوادي", "قريب من النادي الأهلي", "قريب من المونوريل"],
      en: ["On Club Street", "Near Al-Ahly Club", "Near the Monorail Station"],
    },
  },
  hay8: {
    code: "D80",
    img: "/d80.jpg",
    whatsapp: "https://wa.me/201152722626",
    mapLink: "https://maps.app.goo.gl/rhJVb6Btu6yiUJYf9",
    pricePerMeter: { ar: "24,000 جنيه / م²", en: "EGP 24,000 / m²" },
    downPayment: "30%",
    installment: { ar: "حتى 5 سنوات", en: "Up to 5 years" },
    delivery: { ar: "سنة ونصف", en: "18 months" },
    areas: { ar: ["شقة 185م²", "شقة 205م²"], en: ["185m² Apt", "205m² Apt"] },
    features: {
      ar: ["ثاني نمرة من الفيو زون", "قريب من المونوريل", "8 وحدات فقط بالمشروع"],
      en: ["2nd plot from View Zone", "Near the Monorail Station", "Only 8 units in project"],
    },
  },
};

// ─── TRANSLATIONS ─────────────────────────────────────────────────────────────
const TR = {
  ar: {
    compound: "بيت الوطن — القاهرة الجديدة",
    back: "← العودة للخريطة",
    available: "المشروع المتاح في هذا الحي",
    developer: "المطور: دار الأركان للتطوير العقاري",
    downLabel: "المقدم",
    installLabel: "التقسيط",
    deliveryLabel: "الاستلام",
    priceLabel: "سعر المتر",
    areasLabel: "المساحات المتاحة",
    featuresLabel: "مميزات الموقع",
    btnWa: "تواصل عبر واتساب",
    btnMap: "عرض على الخريطة",
    noProject: "لا توجد مشروعات في هذا الحي حالياً",
    noProjectSub: "سنضيف مشروعات قريباً — اترك بياناتك وسنتواصل معك فور الإتاحة",
    formTitle: "اترك استفسارك",
    formSub: "فريقنا سيتواصل معك في أقرب وقت",
    namePlaceholder: "الاسم بالكامل",
    phonePlaceholder: "رقم الهاتف",
    emailPlaceholder: "البريد الإلكتروني (اختياري)",
    msgPlaceholder: "اكتب استفسارك هنا...",
    submit: "إرسال الاستفسار",
    successMsg: "✓ تم الإرسال! سنتواصل معك قريباً",
  },
  en: {
    compound: "Bayt Al-Watan — New Cairo",
    back: "← Back to Map",
    available: "Available Project in This District",
    developer: "Developer: Dar El Arkan Developments",
    downLabel: "Down Payment",
    installLabel: "Installment",
    deliveryLabel: "Delivery",
    priceLabel: "Price / m²",
    areasLabel: "Available Unit Sizes",
    featuresLabel: "Location Highlights",
    btnWa: "Contact via WhatsApp",
    btnMap: "View on Map",
    noProject: "No Active Projects in This District",
    noProjectSub: "We're adding projects soon — leave your details and we'll reach out immediately",
    formTitle: "Send an Inquiry",
    formSub: "Our team will contact you as soon as possible",
    namePlaceholder: "Full Name",
    phonePlaceholder: "Phone Number",
    emailPlaceholder: "Email Address (optional)",
    msgPlaceholder: "Write your inquiry here...",
    submit: "Send Inquiry",
    successMsg: "✓ Sent! We'll contact you soon",
  },
};

// ─── LOGO ─────────────────────────────────────────────────────────────────────
function Logo({ size = 44 }) {
  return (
    <img src="/logo.png" alt="DAR EL ARKAN" width={size} height={size}
      className="rounded-lg object-contain flex-shrink-0"
      style={{ width: size, height: size }} />
  );
}

// ─── STAT PILL ────────────────────────────────────────────────────────────────
function StatPill({ label, value, dark }) {
  return (
    <div className={`flex flex-col items-center justify-center rounded-2xl px-5 py-4 text-center ${
      dark ? "bg-gray-700 border border-gray-600" : "bg-white border border-gray-100 shadow-sm"
    }`}>
      <p className="text-amber-500 text-xs font-semibold tracking-widest uppercase mb-1">{label}</p>
      <p className={`text-base sm:text-lg font-black ${dark ? "text-white" : "text-blue-900"}`}>{value}</p>
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function DistrictPage({ params }) {
  // In Next.js 15 params is a Promise; support both old and new
  const [district, setDistrict] = useState("");
  useEffect(() => {
    if (params && typeof params.then === "function") {
      params.then((p) => setDistrict(p.district));
    } else if (params?.district) {
      setDistrict(params.district);
    }
  }, [params]);

  const [lang, setLang] = useState("ar");
  const [dark, setDark] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });

  const tr = TR[lang];
  const dir = lang === "ar" ? "rtl" : "ltr";

  const proj = PROJECT_DATA[district] || null;
  const hasProject = proj !== null && !NO_PROJECTS.includes(district);
  const districtName = lang === "ar"
    ? (DISTRICTS_AR[district] || district)
    : (DISTRICTS_EN[district] || district);

  // sync dark mode to html
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
    document.body.style.backgroundColor = dark ? "#111827" : "#f9fafb";
  }, [dark]);

  const bg    = dark ? "bg-gray-900" : "bg-gray-50";
  const card  = dark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100";
  const tp    = dark ? "text-white"  : "text-blue-900";
  const ts    = dark ? "text-gray-300" : "text-gray-600";
  const input = dark
    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-amber-500"
    : "bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-600";

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (!district) return null;

  return (
    <div style={{ overflowX: "hidden", width: "100%" }}>
      <main className={`min-h-screen ${bg} transition-colors duration-300`} dir={dir}>

        {/* ── TOP BAR ─────────────────────────────────────────────────── */}
        <header className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
          dark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-100"
        } shadow-sm`}>
          <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between gap-3">

            {/* Logo + brand */}
            <div className="flex items-center gap-2.5 min-w-0">
              <Logo size={38} />
              <div className="hidden sm:block min-w-0">
                <p className={`font-black text-xs leading-none tracking-widest truncate ${tp}`}>DAR EL ARKAN</p>
                <p className="text-amber-500 text-xs tracking-wider mt-0.5">DEVELOPMENTS</p>
              </div>
            </div>

            {/* Back link */}
            <a href="/"
              className={`text-sm font-semibold transition-colors hover:text-amber-500 flex items-center gap-1 ${ts}`}>
              {tr.back}
            </a>

            {/* Controls */}
            <div className="flex items-center gap-1.5">
              <button onClick={() => setLang(lang === "ar" ? "en" : "ar")}
                className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition-all ${
                  dark ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                       : "border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}>
                {lang === "ar" ? "EN" : "ع"}
              </button>
              <button onClick={() => setDark(!dark)} aria-label="toggle dark"
                className={`w-8 h-8 flex items-center justify-center rounded-lg border transition-all ${
                  dark ? "border-gray-600 text-amber-400 hover:bg-gray-700"
                       : "border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}>
                {dark ? "☀️" : "🌙"}
              </button>
            </div>
          </div>
        </header>

        {/* ── HERO STRIP ──────────────────────────────────────────────── */}
        <div className="w-full"
          style={{ background: dark
            ? "linear-gradient(135deg,#050d1a 0%,#0e2240 100%)"
            : "linear-gradient(135deg,#0a1628 0%,#1e3a5f 100%)" }}>
          {/* subtle grid */}
          <div className="absolute inset-0 pointer-events-none opacity-10" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.12) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }} />
          <div className="relative max-w-5xl mx-auto px-4 py-10 sm:py-14 text-center text-white">
            <p className="text-amber-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              {tr.compound}
            </p>
            <h1 className="font-black leading-tight" style={{ fontSize: "clamp(1.8rem,6vw,3.5rem)" }}>
              {districtName}
            </h1>
            <div className="flex items-center justify-center gap-3 mt-3">
              <div className="h-px w-10 bg-amber-400" />
              <span className="text-amber-400 text-xs tracking-widest font-light">BAYT AL-WATAN</span>
              <div className="h-px w-10 bg-amber-400" />
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">

          {/* ── PROJECT EXISTS ───────────────────────────────────────── */}
          {hasProject && proj && (
            <>
              {/* Section label */}
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-amber-500/30" />
                <p className="text-amber-500 text-xs font-bold tracking-widest uppercase">{tr.available}</p>
                <div className="h-px flex-1 bg-amber-500/30" />
              </div>

              {/* Main card */}
              <div className={`rounded-3xl overflow-hidden border shadow-xl ${card}`}>

                {/* Image */}
                <div className="relative w-full overflow-hidden"
                  style={{ background: "linear-gradient(135deg,#1e3a5f,#0a1628)", minHeight: 240 }}>
                  <img src={proj.img} alt={proj.code}
                    className="w-full object-cover"
                    style={{ maxHeight: 420, minHeight: 240 }}
                    onError={(e) => { e.target.style.display = "none"; }} />
                  {/* gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  {/* Project badge */}
                  <div className="absolute bottom-5 right-5 left-5 flex items-end justify-between">
                    <div>
                      <span className="inline-block bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                        {proj.downPayment} {tr.downLabel}
                      </span>
                      <h2 className="text-white font-black" style={{ fontSize: "clamp(2rem,6vw,3rem)", lineHeight: 1 }}>
                        {proj.code}
                      </h2>
                      <p className="text-amber-300 text-sm mt-1">{tr.developer}</p>
                    </div>
                    <img src="/logo.png" alt="logo"
                      className="w-14 h-14 rounded-xl object-contain opacity-90"
                      onError={(e) => { e.target.style.display = "none"; }} />
                  </div>
                </div>

                {/* Stats row */}
                <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 p-5 ${dark ? "bg-gray-800" : "bg-gray-50"}`}>
                  <StatPill label={tr.priceLabel}    value={proj.pricePerMeter[lang]}  dark={dark} />
                  <StatPill label={tr.downLabel}      value={proj.downPayment}           dark={dark} />
                  <StatPill label={tr.installLabel}   value={proj.installment[lang]}    dark={dark} />
                  <StatPill label={tr.deliveryLabel}  value={proj.delivery[lang]}       dark={dark} />
                </div>

                {/* Areas + Features */}
                <div className="p-5 sm:p-8 grid sm:grid-cols-2 gap-8">

                  {/* Areas */}
                  <div>
                    <h3 className={`text-sm font-bold tracking-widest uppercase mb-4 ${dark ? "text-amber-400" : "text-blue-900"}`}>
                      📐 {tr.areasLabel}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {proj.areas[lang].map((area, i) => (
                        <span key={i}
                          className={`px-4 py-2 rounded-xl text-sm font-bold border ${
                            dark ? "bg-gray-700 border-gray-600 text-amber-300"
                                 : "bg-blue-50 border-blue-100 text-blue-900"
                          }`}>
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className={`text-sm font-bold tracking-widest uppercase mb-4 ${dark ? "text-amber-400" : "text-blue-900"}`}>
                      ✦ {tr.featuresLabel}
                    </h3>
                    <ul className="space-y-2.5">
                      {proj.features[lang].map((f, i) => (
                        <li key={i} className={`flex items-start gap-2.5 text-sm ${ts}`}>
                          <span className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA buttons */}
                <div className={`px-5 pb-6 sm:px-8 flex flex-col sm:flex-row gap-3 border-t ${dark ? "border-gray-700 pt-5" : "border-gray-100 pt-5"}`}>
                  <a href={proj.whatsapp} target="_blank" rel="noopener noreferrer"
                    className="flex-1 bg-green-600 hover:bg-green-500 text-white font-bold py-3.5 rounded-2xl text-center text-sm transition-all hover:scale-105 shadow-lg shadow-green-900/20">
                    {tr.btnWa}
                  </a>
                  <a href={proj.mapLink} target="_blank" rel="noopener noreferrer"
                    className={`flex-1 font-bold py-3.5 rounded-2xl text-center text-sm text-white transition-all hover:scale-105 ${
                      dark ? "bg-amber-600 hover:bg-amber-500" : "bg-blue-900 hover:bg-blue-800"
                    }`}>
                    {tr.btnMap}
                  </a>
                </div>
              </div>
            </>
          )}

          {/* ── NO PROJECT ───────────────────────────────────────────── */}
          {NO_PROJECTS.includes(district) && (
            <div className={`rounded-3xl border p-10 text-center ${dark ? "bg-gray-800 border-gray-700" : "bg-amber-50 border-amber-100"}`}>
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-5">
                <span className="text-2xl">🏗️</span>
              </div>
              <h2 className={`text-xl sm:text-2xl font-black mb-3 ${dark ? "text-white" : "text-blue-900"}`}>
                {tr.noProject}
              </h2>
              <p className={`text-sm leading-7 max-w-md mx-auto ${ts}`}>{tr.noProjectSub}</p>
            </div>
          )}

          {/* ── INQUIRY FORM ─────────────────────────────────────────── */}
          <div className={`rounded-3xl border shadow-lg overflow-hidden ${card}`}>

            {/* Form header */}
            <div className="px-6 sm:px-8 py-6 border-b"
              style={{ background: dark
                ? "linear-gradient(135deg,#0e2240,#1e3a5f)"
                : "linear-gradient(135deg,#0a1628,#1e3a5f)" }}>
              <h2 className="text-white font-black text-xl sm:text-2xl">{tr.formTitle}</h2>
              <p className="text-blue-300 text-sm mt-1">{tr.formSub}</p>
            </div>

            <div className="p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className={`font-bold text-lg ${dark ? "text-green-400" : "text-green-700"}`}>{tr.successMsg}</p>
                </div>
              ) : (
                <form
                  action="https://formsubmit.co/amrhussam50@gmail.com"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <input type="hidden" name="_subject" value="استفسار جديد من موقع دار الأركان" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="https://4yz4wp-3000.csb.app" />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-xs font-semibold tracking-wide mb-1.5 ${dark ? "text-gray-300" : "text-gray-600"}`}>
                        {TR.ar.namePlaceholder}
                      </label>
                      <input type="text" name="name" required
                        placeholder={tr.namePlaceholder}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-colors ${input}`} />
                    </div>
                    <div>
                      <label className={`block text-xs font-semibold tracking-wide mb-1.5 ${dark ? "text-gray-300" : "text-gray-600"}`}>
                        {TR.ar.phonePlaceholder}
                      </label>
                      <input type="tel" name="phone" required
                        placeholder={tr.phonePlaceholder}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-colors ${input}`} />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold tracking-wide mb-1.5 ${dark ? "text-gray-300" : "text-gray-600"}`}>
                      {TR.ar.emailPlaceholder}
                    </label>
                    <input type="email" name="email"
                      placeholder={tr.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-colors ${input}`} />
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold tracking-wide mb-1.5 ${dark ? "text-gray-300" : "text-gray-600"}`}>
                      {TR.ar.msgPlaceholder}
                    </label>
                    <textarea name="message" rows={4} required
                      placeholder={tr.msgPlaceholder}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none ${input}`} />
                  </div>

                  <button type="submit"
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3.5 rounded-xl text-sm transition-all hover:scale-[1.01] shadow-lg shadow-blue-900/20">
                    {tr.submit}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* ── FOOTER STRIP ─────────────────────────────────────────── */}
          <div className={`rounded-2xl border p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm ${card}`}>
            <div className="flex items-center gap-3">
              <Logo size={36} />
              <div>
                <p className={`font-black text-xs tracking-widest ${tp}`}>DAR EL ARKAN DEVELOPMENTS</p>
                <p className={`text-xs ${ts}`}>224 ش التسعين الشمالي — القاهرة الجديدة</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a href="tel:01152722626"
                className={`flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl border transition-all ${
                  dark ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                       : "border-gray-200 text-gray-700 hover:bg-gray-50"
                }`}>
                📞 01152722626
              </a>
              <a href="https://wa.me/201152722626" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl bg-green-600 hover:bg-green-500 text-white transition-all">
                واتساب
              </a>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {" "}
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 shadow-md bg-white">
        {" "}
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="DAR EL ARKAN" width={60} height={60} />
          <div>
            <h1 className="font-bold text-blue-900">DAR EL ARKAN</h1>
            <p className="text-gray-500 text-sm">Developments</p>
          </div>
        </div>
      </nav>
      {/* Hero */}
      {/* Hero */}
      <section className="hero-bg min-h-screen flex items-center justify-center text-center px-6">
        <div className="max-w-4xl text-white">
          <h1 className="text-4xl md:text-7xl font-bold leading-tight">
            DAR EL ARKAN
          </h1>

          <h2 className="text-2xl md:text-4xl mt-4 text-amber-400 font-semibold">
            DEVELOPMENTS
          </h2>

          <p className="mt-8 text-lg md:text-2xl leading-9">
            نبني قيمة حقيقية ونطور مجتمعات تدوم
            <br />
            أكثر من 11 عاماً من الخبرة في التطوير العقاري
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">
            <a
              href="https://wa.me/201152722626"
              target="_blank"
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl text-lg font-bold"
            >
              تواصل واتساب
            </a>

            <a
              href="#projects"
              className="bg-blue-900 hover:bg-blue-800 px-8 py-4 rounded-xl text-lg font-bold"
            >
              المشاريع الحالية
            </a>
          </div>
        </div>
      </section>
      {/* About Us */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900">من نحن</h2>

          <p className="mt-8 text-lg text-gray-700 leading-9">
            تأسست شركة دار الأركان للتطوير العقاري عام 2015 بقيادة المهندس طارق
            خليل، وتمتلك خبرة تتجاوز 11 عاماً في مجال التطوير العقاري
            والإنشاءات. نفخر بتنفيذ أكثر من 100 مشروع عقاري ناجح بالقاهرة
            الجديدة مع الالتزام بأعلى معايير الجودة والشفافية والالتزام في
            التنفيذ والتسليم.
          </p>
        </div>
      </section>
      {/* Statistics */}
      <section id="projects" className="py-20 bg-gray-100 px-6">
        {" "}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
            المشاريع الحالية
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* A187 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <img
                src="/a187.jpg"
                alt="A187"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-900">A187</h3>
                <p className="text-gray-600 mt-2">الحي الثاني - بيت الوطن</p>

                <p className="text-sm text-green-600 font-semibold mt-2">
                  مقدم 30% | تقسيط حتى 5 سنوات
                </p>

                <ul className="mt-4 text-gray-700 space-y-2">
                  <li>✓ ثالث نمرة من التسعين الشمالي</li>
                  <li>✓ قريب من النادي الأهلي</li>
                  <li>✓ قريب من العاصمة الإدارية</li>
                </ul>

                <div className="flex gap-3 mt-6">
                  <a
                    href="https://wa.me/201152722626"
                    target="_blank"
                    className="bg-green-600 text-white px-4 py-2 rounded-lg"
                  >
                    واتساب
                  </a>
                  <a
                    href="https://maps.app.goo.gl/1KVGXks1Az4heNzy6"
                    target="_blank"
                    className="bg-blue-900 text-white px-4 py-2 rounded-lg"
                  >
                    الموقع
                  </a>
                </div>
              </div>
            </div>

            {/* C87 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <img
                src="/c87.jpg"
                alt="C87"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-900">C87</h3>
                <p className="text-gray-600 mt-2">الحي الأول - بيت الوطن</p>

                <p className="text-sm text-green-600 font-semibold mt-2">
                  مقدم 30% | تقسيط حتى 5 سنوات
                </p>

                <ul className="mt-4 text-gray-700 space-y-2">
                  <li>✓ دقيقة من التسعين الشمالي</li>
                  <li>✓ دخلة مباشرة من طريق السويس</li>
                  <li>✓ مواجهة مباشرة لكمبوند هليو بارك</li>
                </ul>

                <div className="flex gap-3 mt-6">
                  <a
                    href="https://wa.me/201152722626"
                    target="_blank"
                    className="bg-green-600 text-white px-4 py-2 rounded-lg"
                  >
                    واتساب
                  </a>
                  <a
                    href="https://maps.app.goo.gl/y357M63Y6qNsG4od7"
                    target="_blank"
                    className="bg-blue-900 text-white px-4 py-2 rounded-lg"
                  >
                    الموقع
                  </a>
                </div>
              </div>
            </div>

            {/* A61 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <img
                src="/a61.jpg"
                alt="A61"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-900">A61</h3>
                <p className="text-gray-600 mt-2">الحي الرابع - بيت الوطن</p>

                <p className="text-sm text-green-600 font-semibold mt-2">
                  مقدم 30% | تقسيط حتى 4 سنوات
                </p>

                <ul className="mt-4 text-gray-700 space-y-2">
                  <li>✓ ثاني نمرة من الفيو زون</li>
                  <li>✓ 8 وحدات فقط بالمبنى</li>
                  <li>✓ واجهة شرقي بحري</li>
                </ul>

                <div className="flex gap-3 mt-6">
                  <a
                    href="https://wa.me/201152722626"
                    target="_blank"
                    className="bg-green-600 text-white px-4 py-2 rounded-lg"
                  >
                    واتساب
                  </a>
                  <a
                    href="https://maps.app.goo.gl/yUPDd6CajjtdzRrn7"
                    target="_blank"
                    className="bg-blue-900 text-white px-4 py-2 rounded-lg"
                  >
                    الموقع
                  </a>
                </div>
              </div>
            </div>

            {/* G30 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <img
                src="/g30.jpg"
                alt="G30"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-900">G30</h3>
                <p className="text-gray-600 mt-2">الحي السادس - بيت الوطن</p>

                <p className="text-sm text-green-600 font-semibold mt-2">
                  مقدم 30% | تقسيط حتى 5 سنوات
                </p>

                <ul className="mt-4 text-gray-700 space-y-2">
                  <li>✓ على شارع النوادي</li>
                  <li>✓ قريب من النادي الأهلي</li>
                  <li>✓ قريب من المونوريل</li>
                </ul>

                <div className="flex gap-3 mt-6">
                  <a
                    href="https://wa.me/201152722626"
                    target="_blank"
                    className="bg-green-600 text-white px-4 py-2 rounded-lg"
                  >
                    واتساب
                  </a>
                  <a
                    href="https://maps.app.goo.gl/PdAUBQVLJCS7Xox76"
                    target="_blank"
                    className="bg-blue-900 text-white px-4 py-2 rounded-lg"
                  >
                    الموقع
                  </a>
                </div>
              </div>
            </div>

            {/* D80 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <img
                src="/d80.jpg"
                alt="D80"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-900">D80</h3>
                <p className="text-gray-600 mt-2">الحي الثامن - بيت الوطن</p>

                <p className="text-sm text-green-600 font-semibold mt-2">
                  مقدم 30% | تقسيط حتى 5 سنوات
                </p>

                <ul className="mt-4 text-gray-700 space-y-2">
                  <li>✓ ثاني نمرة من الفيو زون</li>
                  <li>✓ قريب من المونوريل</li>
                  <li>✓ 8 وحدات فقط بالمشروع</li>
                </ul>

                <div className="flex gap-3 mt-6">
                  <a
                    href="https://wa.me/201152722626"
                    target="_blank"
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
                  >
                    واتساب
                  </a>
                  <a
                    href="https://maps.app.goo.gl/rhJVb6Btu6yiUJYf9"
                    target="_blank"
                    className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition"
                  >
                    الموقع
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
            أنظمة السداد
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-2xl p-8 text-center shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900">30%</h3>
              <p className="mt-4 text-gray-600">مقدم يبدأ من 30%</p>
            </div>

            <div className="bg-gray-100 rounded-2xl p-8 text-center shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900">4 - 5 سنوات</h3>
              <p className="mt-4 text-gray-600">تقسيط مريح بدون فوائد</p>
            </div>

            <div className="bg-gray-100 rounded-2xl p-8 text-center shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900">
                استلامات متنوعة
              </h3>
              <p className="mt-4 text-gray-600">وحدات جاهزة وقيد الإنشاء</p>
            </div>
          </div>
        </div>
        {/* Location Map */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
              خريطة بيت الوطن
            </h2>

            <p className="text-center text-gray-600 mb-10">
              اضغط على أي حي لمعرفة المشاريع المتاحة
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
  <img
    src="/bait-elwatan-map.jpg"
    alt="خريطة بيت الوطن"
    className="w-full"
  />

  <svg
    className="absolute inset-0 w-full h-full"
    viewBox="0 0 7680 10867"
    preserveAspectRatio="xMidYMid meet"
  >
    {/* الحي الأول */}
    <a href="/hay1">
      <polygon
        points="2650,4220,2860,5390,2800,5540,2360,5330,2060,5070,1670,4480"
        fill="transparent"
        stroke="rgba(255,0,0,.7)"
        strokeWidth="20"
      />
    </a>

    {/* الحي الثاني */}
    <a href="/hay2">
      <polygon
        points="1900,5170,2230,5550,2770,6050,1840,6710,1480,6190,1040,5570,1110,5330"
        fill="transparent"
        stroke="rgba(255,165,0,.7)"
        strokeWidth="20"
      />
    </a>

    {/* الحي الثالث */}
    <a href="/hay3">
      <polygon
        points="4150,5180,4550,6080,3750,6380,3500,6030,3200,5730,3350,5430"
        fill="transparent"
        stroke="rgba(0,102,255,.7)"
        strokeWidth="20"
      />
    </a>

    {/* الحي الرابع */}
    <a href="/hay4">
      <polygon
        points="2977,6080,3262,6532,3382,6965,3437,7462,3382,7793,2875,7766,2406,7839,1991,6780"
        fill="transparent"
        stroke="rgba(128,0,255,.7)"
        strokeWidth="20"
      />
    </a>

    {/* الحي الخامس */}
    <a href="/hay5">
      <polygon
        points="4697,6073,5103,6957,4651,7270,3998,7731,3823,7390,3823,6948,3804,6607,3777,6450"
        fill="transparent"
        stroke="rgba(0,180,0,.7)"
        strokeWidth="20"
      />
    </a>

    {/* الحي السادس */}
    <a href="/hay6">
      <polygon
        points="2855,7916,3371,7907,3445,8165,3546,8293,3491,8883,2533,8892,2377,7980"
        fill="transparent"
        stroke="rgba(255,100,0,.7)"
        strokeWidth="20"
      />
    </a>

    {/* الحي السابع */}
    <a href="/hay7">
      <polygon
        points="5110,7050,5580,7339,5313,7817,5064,8324,4539,8140,4263,8029,3996,7808"
        fill="transparent"
        stroke="rgba(255,0,128,.7)"
        strokeWidth="20"
      />
    </a>

    {/* الحي الثامن */}
    <a href="/hay8">
      <polygon
        points="3724,8305,4212,8296,4774,8397,5105,8498,4847,9060,4534,8931,4120,8913,3668,8894"
        fill="transparent"
        stroke="rgba(0,200,255,.7)"
        strokeWidth="20"
      />
    </a>
  </svg>
</div>
          </div>
        </section>
      </section>
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">تواصل معنا</h2>

          <p className="text-xl mb-4">📞 01152722626</p>

          <div className="flex justify-center gap-4 mt-8">
            <a
              href="https://wa.me/201152722626"
              target="_blank"
              className="bg-green-600 px-6 py-3 rounded-xl"
            >
              واتساب
            </a>

            <a
              href="tel:01152722626"
              className="bg-white text-blue-900 px-6 py-3 rounded-xl"
            >
              اتصل الآن
            </a>
          </div>
        </div>
      </section>
      <footer className="bg-gray-950 text-white py-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold">DAR EL ARKAN DEVELOPMENTS</h3>

          <p className="mt-4 text-gray-400">
            نبني قيمة حقيقية ونطور مجتمعات تدوم
          </p>

          <p className="mt-4 text-gray-400">
            224 N90th Street, New Cairo, Egypt
          </p>

          <p className="mt-2 text-gray-400">01152722626</p>

          <div className="mt-6">
            <a
              href="https://wa.me/201152722626"
              target="_blank"
              className="bg-green-600 px-5 py-2 rounded-lg"
            >
              واتساب
            </a>
          </div>
          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            <a
              href="https://www.facebook.com/share/1ERhNoSSSn/"
              target="_blank"
              className="bg-blue-600 text-white px-5 py-3 rounded-xl shadow-lg hover:scale-105 transition-all"
            >
              📘 Facebook
            </a>

            <a
              href="https://www.instagram.com/dar_el_arkan?igsh=MWZjY29zNHFydGRmYQ=="
              target="_blank"
              className="bg-pink-600 text-white px-5 py-3 rounded-xl shadow-lg hover:scale-105 transition-all"
            >
              📷 Instagram
            </a>

            <a
              href="https://www.tiktok.com/@darelarkandevelopment?_r=1&_t=ZS-96s4z36VhTR"
              target="_blank"
              className="bg-black text-white px-5 py-3 rounded-xl shadow-lg hover:scale-105 transition-all"
            >
              🎵 TikTok
            </a>
          </div>

          <p className="mt-4 text-gray-400">
            تابع أحدث المشاريع والعروض الحصرية على منصات التواصل الاجتماعي
          </p>
          <p className="mt-8 text-sm text-gray-500">
            © 2026 DAR EL ARKAN DEVELOPMENTS. All Rights Reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

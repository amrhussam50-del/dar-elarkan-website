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
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        <Image src="/logo.png" alt="DAR EL ARKAN" width={180} height={180} />

        <h1 className="text-5xl md:text-7xl font-bold text-blue-900 mt-8">
          DAR EL ARKAN
        </h1>

        <h2 className="text-3xl md:text-5xl text-amber-600 mt-2">
          DEVELOPMENTS
        </h2>

        <p className="mt-8 text-xl text-gray-600">
          نبني قيمة حقيقية ... ونطور مجتمعات تدوم
        </p>

        <div className="flex justify-center gap-4 mt-10">
          <button className="bg-blue-900 text-white px-8 py-4 rounded-xl">
            المشاريع الحالية
          </button>

          <button className="border border-blue-900 text-blue-900 px-8 py-4 rounded-xl">
            تواصل معنا
          </button>
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
      <section className="py-20 bg-gray-100 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
            المشاريع الحالية
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* A187 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
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
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
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
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
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
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
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
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
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

          <p className="mt-8 text-sm text-gray-500">
            © 2026 DAR EL ARKAN DEVELOPMENTS. All Rights Reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

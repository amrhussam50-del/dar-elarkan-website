import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
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

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="shadow-lg rounded-2xl p-8">
              <h3 className="text-4xl font-bold text-blue-900">+100</h3>
              <p className="mt-3 text-gray-600">مشروع منفذ</p>
            </div>

            <div className="shadow-lg rounded-2xl p-8">
              <h3 className="text-4xl font-bold text-blue-900">+11</h3>
              <p className="mt-3 text-gray-600">سنة خبرة</p>
            </div>

            <div className="shadow-lg rounded-2xl p-8">
              <h3 className="text-4xl font-bold text-blue-900">+1000</h3>
              <p className="mt-3 text-gray-600">عميل</p>
            </div>

            <div className="shadow-lg rounded-2xl p-8">
              <h3 className="text-4xl font-bold text-blue-900">50+</h3>
              <p className="mt-3 text-gray-600">مشروع حالي</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-100 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
            المشاريع الحالية
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="/a187.jpg"
                alt="A187"
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-900">A187</h3>

                <p className="text-gray-600 mt-2">الحي الثاني - بيت الوطن</p>

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
          </div>
        </div>
        {/* A61 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img src="/a61.jpg" alt="A61" className="w-full h-56 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-bold text-blue-900">A61</h3>
            <p className="mt-2 text-gray-600">بيت الوطن</p>
          </div>
        </div>

        {/* C87 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img src="/c87.jpg" alt="C87" className="w-full h-56 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-bold text-blue-900">C87</h3>
            <p className="mt-2 text-gray-600">بيت الوطن</p>
          </div>
        </div>

        {/* D80 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img src="/d80.jpg" alt="D80" className="w-full h-56 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-bold text-blue-900">D80</h3>
            <p className="mt-2 text-gray-600">بيت الوطن</p>
          </div>
        </div>

        {/* G30 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img src="/g30.jpg" alt="G30" className="w-full h-56 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-bold text-blue-900">G30</h3>
            <p className="mt-2 text-gray-600">بيت الوطن</p>
          </div>
        </div>
      </section>
    </main>
  );
}

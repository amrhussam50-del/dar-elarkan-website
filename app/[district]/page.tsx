import Image from "next/image"; 
export default async function DistrictPage({
    params,
  }: {
    params: Promise<{ district: string }>;
  }) {
    const { district } = await params;
    const noProjects = ["hay3", "hay5", "hay7"]; 
    const projects: Record<string, string> = {
        hay1: "C87",
        hay2: "A187",
        hay4: "A61",
        hay6: "G30",
        hay8: "D80",
      };
      const projectImages: Record<string, string> = {
        hay1: "/c87.jpg",
        hay2: "/a187.jpg",
        hay4: "/a61.jpg",
        hay6: "/g30.jpg",
        hay8: "/d80.jpg",
      };
    const districts: Record<string, string> = {
      hay1: "الحي الأول - بيت الوطن",
      hay2: "الحي الثاني - بيت الوطن",
      hay3: "الحي الثالث - بيت الوطن",
      hay4: "الحي الرابع - بيت الوطن",
      hay5: "الحي الخامس - بيت الوطن",
      hay6: "الحي السادس - بيت الوطن",
      hay7: "الحي السابع - بيت الوطن",
      hay8: "الحي الثامن - بيت الوطن",
    };
    const projectDetails: Record<string, any> = {
        hay1: {
            pricePerMeter: "24,000 جنيه",
            downPayment: "30%",
            installment: "5 سنوات",
            delivery: "سنة و نصف",
            areas: ["شقة 180م", "شقة 200م", "شقة 220م"],
            features: [
              "دقيقة من التسعين الشمالي",
              "دخلة مباشرة من طريق السويس",
              "مواجهة مباشرة لكمبوند هليو بارك"
            ]
          },
      
          hay2: {
            pricePerMeter: "24,000 جنيه",
            downPayment: "30%",
            installment: "5 سنوات",
            delivery: "سنة و نسف",
            areas: ["شقة 190م", "شقة 210م"],
            features: [
              "ثالث نمرة من التسعين الشمالي",
              "قريبة من النادي الأهلي",
              "واجهة مميزة على شارع واسع"
            ]
          },
      
          hay4: {
            pricePerMeter: "24,000 جنيه",
            downPayment: "30%",
            installment: "5 سنوات",
            delivery: "سنة ",
            areas: ["شقة 175م", "شقة 195م"],
            features: [
              "قريبة من الخدمات الرئيسية",
              "موقع مميز داخل الحي",
              "فيو مفتوح"
            ]
          },
          hay6: {
            pricePerMeter: "24,000 جنيه",
            downPayment: "30%",
            installment: "5 سنوات",
            delivery: "سنتين",
            areas: ["شقة 180م", "شقة 230م"],
            features: [
              "قريبة من محور بن زايد",
              "واجهة بحرية",
              "قريبة من مناطق الخدمات"
            ]
          },
      
          hay8: {
            pricePerMeter: "24,000 جنيه",
            downPayment: "30%",
            installment: "5 سنوات",
            delivery: "سنة و نصف",
            areas: ["شقة 185م", "شقة 205م"],
            features: [
              "أرقى مواقع الحي الثامن",
              "قريبة من الخدمات",
              "تصميم معماري مميز"
            ]
          },
      };
    return (
        <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
      
      <h1 className="text-5xl font-bold text-blue-900 text-center mb-8">
  {districts[district] || district}
</h1>
        
{projects[district] && (
  <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mb-10 text-center">
    <h2 className="text-3xl font-bold text-blue-900 mb-4">
      المشاريع المتاحة حالياً
    </h2>
    <div className="flex justify-center mb-6">
  <Image
    src={projectImages[district]}
    alt={projects[district]}
    width={700}
    height={500}
    className="rounded-xl shadow-lg object-contain max-h-[450px] w-auto"
  />
</div>
/

<h3 className="text-3xl font-bold text-blue-800">
  {projects[district]}
</h3>

<p className="text-lg text-gray-700 mt-2">
  {districts[district]}
</p>

<p className="text-gray-600 mt-3">
  الشركة المطورة: DAR ELARKAN
</p>

<div className="mt-4 space-y-2">
<p className="text-green-600 font-bold">
  مقدم {projectDetails[district].downPayment}
  {" "}وتقسيط حتى{" "}
  {projectDetails[district].installment}
</p>
<p className="text-blue-700 font-bold mt-2">
  سعر المتر: {projectDetails[district].pricePerMeter}
</p>
<p className="text-gray-700">
  استلام خلال {projectDetails[district].delivery}
</p>
<div className="bg-white border-2 border-blue-100 rounded-xl p-5 mt-6">
  <h4 className="font-bold text-blue-900 text-xl mb-4">
    📐 المساحات المتاحة
  </h4>

  <div className="flex flex-wrap gap-3 justify-center">
    {projectDetails[district].areas.map((area, index) => (
      <div
        key={index}
        className="bg-blue-50 border border-blue-200 px-4 py-2 rounded-lg font-bold text-blue-900"
      >
        {area}
      </div>
    ))}
  </div>
</div>
<div className="mt-4">
  {projectDetails[district].features.map(
    (feature, index) => (
      <p
        key={index}
        className="text-gray-700"
      >
        ✓ {feature}
      </p>
    )
  )}
</div>
</div>

     
  </div>
)}
         
          {noProjects.includes(district) && (
           <div className="bg-yellow-50 border border-yellow-300 rounded-2xl p-8 mb-10 text-center">
           <h2 className="text-3xl font-bold text-yellow-700 mb-4">
             لا توجد مشروعات متاحة حالياً
           </h2>
         
           <p className="text-gray-700 text-lg">
             اترك بياناتك وسنقوم بالتواصل معك فور إضافة مشروعات جديدة في هذا الحي.
           </p>
         </div>
          )}
      <div className="bg-white shadow-lg rounded-xl p-8 mt-10">
  <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">
    اترك استفسارك
  </h2>

  <form
  action="https://formsubmit.co/amrhussam50@gmail.com"
  method="POST"
  className="space-y-4"
>
<input
  type="text"
  name="name"
  placeholder="الاسم بالكامل"
  required
  className="w-full border rounded-lg p-3 text-gray-900 placeholder-gray-500"
/>

<input
  type="tel"
  name="phone"
  placeholder="رقم الهاتف"
  required
  className="w-full border rounded-lg p-3 text-gray-900 placeholder-gray-500"
/>

<input
  type="email"
  name="email"
  placeholder="البريد الإلكتروني (اختياري)"
  className="w-full border rounded-lg p-3 text-gray-900 placeholder-gray-500"
/>

<textarea
  name="message"
  placeholder="اكتب استفسارك هنا"
  rows={5}
  required
  className="w-full border rounded-lg p-3 text-gray-900 placeholder-gray-500"
></textarea>
<input
  type="hidden"
  name="_subject"
  value="استفسار جديد من موقع دار الأركان"
/>

<input
  type="hidden"
  name="_captcha"
  value="false"
/>

<input
  type="hidden"
  name="_next"
  value="https://4yz4wp-3000.csb.app"
/>
    <button
      type="submit"
      className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800"
    >
      إرسال الاستفسار
    </button>
  </form>
</div>
        </div>
      );
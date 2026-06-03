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
          downPayment: "30%",
          installment: "5 سنوات",
          delivery: "سنة",
          areas: ["شقة 180م", "شقة 200م", "شقة 220م"]
        },
      
        hay2: {
          downPayment: "30%",
          installment: "5 سنوات",
          delivery: "سنة",
          areas: ["شقة 190م", "شقة 210م"]
        },
      
        hay4: {
          downPayment: "30%",
          installment: "5 سنوات",
          delivery: "سنة",
          areas: ["شقة 175م", "شقة 195م"]
        },
      
        hay6: {
          downPayment: "30%",
          installment: "5 سنوات",
          delivery: "سنة",
          areas: ["شقة 180م", "شقة 230م"]
        },
      
        hay8: {
          downPayment: "30%",
          installment: "5 سنوات",
          delivery: "سنة",
          areas: ["شقة 185م", "شقة 205م"]
        }
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

    <Image
  src={projectImages[district]}
  alt={projects[district]}
  width={600}
  height={400}
  className="w-full h-64 object-cover rounded-lg mb-4"
/>

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

<p className="text-gray-700">
  استلام خلال {projectDetails[district].delivery}
</p>

  <p className="text-gray-700">
    فيو مفتوح وقريب من جميع الخدمات
  </p>
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
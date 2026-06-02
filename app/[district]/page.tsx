export default async function DistrictPage({
    params,
  }: {
    params: Promise<{ district: string }>;
  }) {
    const { district } = await params;
  
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
  
    return (
      <div
        style={{
          padding: "50px",
          textAlign: "center",
        }}
      >
        <h1>{districts[district] || district}</h1>
  
        <p>صفحة الحي</p>
      </div>
    );
  }
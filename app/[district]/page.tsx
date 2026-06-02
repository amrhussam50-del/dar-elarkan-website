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
          minHeight: "100vh",
          background: "#f8fafc",
          padding: "40px 20px",
          direction: "rtl",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              padding: "40px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                fontSize: "36px",
                color: "#0f172a",
                marginBottom: "15px",
              }}
            >
              {districts[district] || district}
            </h1>
  
            <p
              style={{
                fontSize: "18px",
                color: "#64748b",
                marginBottom: "30px",
              }}
            >
              جميع الأراضي والوحدات المتاحة داخل الحي
            </p>
  
            <div
              style={{
                display: "flex",
                gap: "15px",
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: "40px",
              }}
            >
              <a
                href="https://wa.me/201152722626"
                target="_blank"
                style={{
                  background: "#25D366",
                  color: "#fff",
                  padding: "14px 28px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                تواصل واتساب
              </a>
  
              <a
                href="tel:01152722626"
                style={{
                  background: "#1e3a8a",
                  color: "#fff",
                  padding: "14px 28px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                اتصل الآن
              </a>
            </div>
  
            <div
              style={{
                background: "#f1f5f9",
                borderRadius: "15px",
                padding: "25px",
              }}
            >
              <h2
                style={{
                  marginBottom: "20px",
                  color: "#0f172a",
                }}
              >
                الوحدات المتاحة
              </h2>
  
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                }}
              >
                <thead>
                  <tr
                    style={{
                      background: "#1e3a8a",
                      color: "#fff",
                    }}
                  >
                    <th style={{ padding: "12px" }}>الكود</th>
                    <th style={{ padding: "12px" }}>المساحة</th>
                    <th style={{ padding: "12px" }}>السعر</th>
                    <th style={{ padding: "12px" }}>الحالة</th>
                  </tr>
                </thead>
  
                <tbody>
                  <tr>
                    <td style={{ padding: "12px" }}>A-101</td>
                    <td style={{ padding: "12px" }}>500 م²</td>
                    <td style={{ padding: "12px" }}>4,500,000</td>
                    <td style={{ padding: "12px", color: "green" }}>
                      متاحة
                    </td>
                  </tr>
  
                  <tr>
                    <td style={{ padding: "12px" }}>A-102</td>
                    <td style={{ padding: "12px" }}>600 م²</td>
                    <td style={{ padding: "12px" }}>5,200,000</td>
                    <td style={{ padding: "12px", color: "green" }}>
                      متاحة
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
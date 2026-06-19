
// Data
const reportFlowItems = [
  { icon: "📋", label: "Isi Laporan" },
  { icon: "✓", label: "Sistem Analisis" },
  { icon: "📊", label: "Rekomendasi Layanan" },
  { icon: "✉️", label: "Hubungi Layanan" },
  { icon: "📤", label: "Selesai diperbaiki" }
];

export default function ReportFlow() {
  return (
    <div className="flex justify-center bg-[var(--background)] font-sans py-8">
      
      {/* Main content */}
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-[var(--foreground)]">Alur Pelaporan</h1>

        {/*Container */}
        <div className="mt-8 w-full bg-white p-8 rounded-lg shadow-lg border border-gray-300">
            
            <div className="flex items-center justify-center gap-2">
                {reportFlowItems.map((item, index) => (
                  <div key={index} className="flex items-center">
                    {/* Dotted line*/}
                    {index > 0 && (
                      <div className="w-12 h-0.5 mb-4 border-t-2 border-dotted border-[var(--color-primary-200)]"></div>
                    )}
                    
                    {/* Circle container*/}
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 rounded-full bg-white border-2 border-[var(--color-primary-200)] flex items-center justify-center text-2xl shadow-sm">
                        {item.icon}
                      </div>
                      
                      {/* Label below circle */}
                      <p className="mt-2 text-sm font-medium text-[var(--color-primary-200)] text-center">{item.label}</p>
                    </div>
                  </div>
                ))}
            </div>
        </div>
      </main>
    </div>
  );
}

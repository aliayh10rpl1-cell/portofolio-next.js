import Image from "next/image";

export default function ProyekPage() {
  return (
    <div className="min-h-screen bg-[#F0F7ED] text-slate-800 py-10 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Judul Halaman */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#0B192C] mb-2">Proyek Saya</h1>
          <p className="text-sm text-slate-600">
            Kumpulan hasil belajar saya di Kelas Industri UBIG. Klik kartu untuk melihat detailnya.
          </p>
        </div>

        {/* Grid Kartu Proyek */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Proyek 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 flex flex-col">
            <div className="h-40 bg-slate-900 relative">
              <Image
                src="/image.png"
                alt="Junior Web Developer Industry Class MODUL 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex gap-1.5 mb-2.5 flex-wrap">
                  <span className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded border border-slate-200">
                    HTML
                  </span>
                  <span className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded border border-slate-200">
                    CSS
                  </span>
                  <span className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded border border-slate-200">
                    CodePen
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1.5 leading-snug">
                  Junior Web Developer Industry Class MODUL 1
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Portofolio pertama saya, yang dibangun dari nol sembari mempelajari dasar-dasar pengembangan frontend, struktur HTML...
                </p>
              </div>
            </div>
          </div>

          {/* Proyek 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 flex flex-col">
            <div className="h-40 bg-slate-900 relative">
              <Image
                src="/picture.png"
                alt="Mobile Responsive MODUL 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex gap-1.5 mb-2.5 flex-wrap">
                  <span className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded border border-slate-200">
                    HTML
                  </span>
                  <span className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded border border-slate-200">
                    CSS
                  </span>
                  <span className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded border border-slate-200">
                    Responsive
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1.5 leading-snug">
                  Mobile Responsive MODUL 2
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Latihan desain web responsif yang mencakup tata letak fleksibel, titik henti (breakpoint) untuk desktop, status hover...
                </p>
              </div>
            </div>
          </div>

          {/* Proyek 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 flex flex-col">
            <div className="h-40 bg-slate-900 relative">
              <Image
                src="/foto.png"
                alt="Interactive Digital Profile MODUL 3"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex gap-1.5 mb-2.5 flex-wrap">
                  <span className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded border border-slate-200">
                    HTML
                  </span>
                  <span className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded border border-slate-200">
                    CSS
                  </span>
                  <span className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded border border-slate-200">
                    JAVASCRIPT
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1.5 leading-snug">
                  Interactive Digital Profile MODUL 3
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Profil interaktif yang menggunakan peristiwa (event) JavaScript untuk pergantian tema, sapaan dinamis, dan...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
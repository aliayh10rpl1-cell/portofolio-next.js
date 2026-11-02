export default function KeahlianPage() {
  return (
    <div className="min-h-screen bg-[#F0F7ED] text-slate-800 py-10 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Judul Halaman */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#0B192C] mb-2">Keahlian Saya</h1>
          <p className="text-sm text-slate-600">
            Daftar kompetensi dan keahlian pengembangan web yang telah saya pelajari.
          </p>
        </div>

        {/* Grid Kartu Keahlian */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Kartu 1: HTML */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-lg text-slate-900 mb-1">HTML</h3>
              <p className="text-xs text-slate-500 mb-4">Level: Menengah</p>
            </div>
            <a href="#" className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition">
              Lihat detail &rarr;
            </a>
          </div>

          {/* Kartu 2: CSS */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-lg text-slate-900 mb-1">CSS</h3>
              <p className="text-xs text-slate-500 mb-4">Level: Menengah</p>
            </div>
            <a href="#" className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition">
              Lihat detail &rarr;
            </a>
          </div>

          {/* Kartu 3: Git dan GitHub */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-lg text-slate-900 mb-1">Git dan GitHub</h3>
              <p className="text-xs text-slate-500 mb-4">Level: Dasar</p>
            </div>
            <a href="#" className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition">
              Lihat detail &rarr;
            </a>
          </div>

          {/* Kartu 4: Desain poster dengan Canva */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-lg text-slate-900 mb-1">Desain poster dengan Canva</h3>
              <p className="text-xs text-slate-500 mb-4">Level: Mahir</p>
            </div>
            <a href="#" className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition">
              Lihat detail &rarr;
            </a>
          </div>

          {/* Kartu 5: JavaScript */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-lg text-slate-900 mb-1">JavaScript</h3>
              <p className="text-xs text-slate-500 mb-4">Level: Dasar</p>
            </div>
            <a href="#" className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition">
              Lihat detail &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
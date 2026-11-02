export default function Hero({ nama, peran, deskripsi, onLihatProyekClick, onLihatKeahlianClick }) {
  return (
    <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="space-y-4 max-w-xl">
        <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
          {peran}
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-[#0d233a] tracking-tight">
          Halo, saya <span className="text-red-600">{nama}</span>
        </h1>
        <p className="text-slate-600 leading-relaxed text-base">
          {deskripsi}
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <button
            onClick={onLihatProyekClick}
            className="bg-[#0d233a] hover:bg-opacity-90 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-all shadow-sm"
          >
            Lihat Proyek
          </button>
          <button
            onClick={onLihatKeahlianClick}
            className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-semibold px-5 py-2.5 rounded-lg text-sm transition-all"
          >
            Keahlian Saya
          </button>
        </div>
      </div>
    </section>
  );
}
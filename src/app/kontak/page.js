export default function KontakPage() {
  return (
    <div className="min-h-screen bg-[#F0F7ED] text-slate-800 font-sans py-10 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Judul Halaman */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-1">Hubungi Saya</h1>
          <p className="text-sm text-slate-600">
            Punya pertanyaan atau ingin bekerja sama? Isi form berikut:
          </p>
        </div>

        {/* Grid 2 Kolom: Form Kontak & Temukan Saya di */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Kolom Kiri: Form Kontak (Memakan 2 Kolom) */}
          <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <form className="space-y-4">
              {/* Nama Lengkap */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nama lengkap
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Budi Santoso"
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-700"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="nama@gmail.com"
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-700"
                />
              </div>

              {/* Nomor HP */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nomor HP
                </label>
                <input
                  type="tel"
                  placeholder="081234567890"
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-700"
                />
              </div>

              {/* Keperluan */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Keperluan
                </label>
                <select className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-600 bg-white">
                  <option value="">-- Pilih keperluan --</option>
                  <option value="Tanya-Jawab">Tanya Jawab</option>
                  <option value="Kerja-Sama">Kerja Sama / Proyek</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>

              {/* Pesan */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Pesan
                </label>
                <textarea
                  rows={4}
                  placeholder="Tulis pesanmu di sini..."
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-700 resize-y"
                ></textarea>
              </div>

              {/* Tombol Kirim */}
              <div>
                <button
                  type="button"
                  className="bg-[#B91C1C] hover:bg-red-800 text-white text-xs font-semibold px-4 py-2 rounded transition"
                >
                  Kirim Pesan
                </button>
              </div>
            </form>

            {/* Catatan di bawah form */}
            <p className="text-[10px] text-slate-400 mt-6">
              *Formulir belum mengirim pesan. Pengiriman pesan dipelajari di Minggu 15.
            </p>
          </div>

          {/* Kolom Kanan: Temukan Saya di */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h2 className="font-bold text-sm text-slate-900 mb-4">Temukan Saya di</h2>
            <div className="space-y-2 text-xs">
              <div>
                <a
                  href="https://github.com/aliayh10rpl1-cell"
                  target="_blank"
                  rel="noreferrer"
                  className="text-red-600 font-medium hover:underline inline-flex items-center gap-1"
                >
                  GitHub &rarr;
                </a>
              </div>
              <div>
                <a
                  href="mailto:asyifaanurfaizaasyifaa@gmail.com"
                  className="text-red-600 hover:underline break-all"
                >
                  aliayh.10rol1@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
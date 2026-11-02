export default function Home() {
  return (
    <main className="min-h-screen bg-[#eaf0f6] py-8 px-4 flex justify-center">
      <div className="max-w-4xl w-full space-y-6">
        
        {/* Header / Navbar */}
        <header className="bg-[#1e3a5f] text-white px-6 py-4 rounded-xl flex justify-between items-center shadow-md">
          <h1 className="text-xl font-bold tracking-wide">itmami aliyah dewi</h1>
          <nav className="space-x-6 text-sm font-medium">
            <a href="#" className="hover:text-gray-300">Beranda</a>
            <a href="#" className="border-b-2 border-white pb-1 font-semibold">Tentang</a>
            <a href="#" className="hover:text-gray-300">Proyek</a>
            <a href="#" className="hover:text-gray-300">Kontak</a>
          </nav>
        </header>

        {/* Section Foto Profil & Sapaan (Berjajar Menyamping) */}
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-6">
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-pink-200 shrink-0">
            <img
              src="/foto1.jpeg" 
              alt="Foto Itmami Aliyah Dewi"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Halo, saya Itmami Aliyah Dewi!
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Siswa kelas X RPL SMKN, calon Junior Web Developer di Kelas Industri UBIG.
            </p>
          </div>
        </section>

        {/* Tentang Saya */}
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Tentang Saya</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Saya tinggal di Malang dan senang mencoba hal baru di dunia teknologi. Saya ingin bisa membuat website yang bermanfaat untuk sekolah dan UMKM di sekitar rumah.
          </p>
        </section>

        {/* Hobi & Cita-cita Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Hobi */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Hobi</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5">
              <li>Memasak</li>
              <li>Mendengarkan Musik</li>
            </ul>
          </section>

          {/* Cita-cita */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Cita-cita</h3>
            <p className="text-sm font-semibold text-gray-800 mb-2">
              Menjadi Cyber intelijen. Langkah yang Saya rencanakan:
            </p>
            <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1">
              <li>Menuntaskan kelas Industri UBIG sampai Semester 4</li>
              <li>lolos seleksi kedinasan</li>
              <li>Kuliah di STIN (sekolah tinggi intelijen)</li>
            </ol>
          </section>
        </div>

        {/* Keahlian */}
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Keahlian</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-gray-100 rounded-xl bg-gray-50/50">
              <h4 className="font-semibold text-gray-800 text-sm">HTML & CSS</h4>
              <p className="text-xs text-gray-500 mt-1">Level: Menengah</p>
            </div>
            <div className="p-4 border border-gray-100 rounded-xl bg-gray-50/50">
              <h4 className="font-semibold text-gray-800 text-sm">JavaScript</h4>
              <p className="text-xs text-gray-500 mt-1">Level: Dasar</p>
            </div>
          </div>
        </section>

        {/* Jadwal Belajar */}
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Jadwal Belajar</h3>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left text-sm text-gray-600">
              <thead className="bg-[#1e3a5f] text-white font-semibold">
                <tr>
                  <th className="py-3 px-4">Hari</th>
                  <th className="py-3 px-4">Waktu</th>
                  <th className="py-3 px-4">Kegiatan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Senin</td>
                  <td className="py-3 px-4">19.00 - 20.00</td>
                  <td className="py-3 px-4">Membaca ulang modul</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Rabu</td>
                  <td className="py-3 px-4">19.00 - 21.00</td>
                  <td className="py-3 px-4">Mengerjakan tugas praktik</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Jumat</td>
                  <td className="py-3 px-4">19.30 - 20.30</td>
                  <td className="py-3 px-4">Merekam video dan menulis laporan</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#1e3a5f] text-white text-center py-4 rounded-xl text-xs">
          © 2026 Itmami Aliyah Dewi. Dibuat dengan Next.js
        </footer>

      </div>
    </main>
  );
}
import Hero from "@/componets/Hero";
import SkillCard from "@/componets/skillcard";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

const hobi = ["Menyanyi", "Memasak"];

const citaCita = [
  "Menuntaskan Kelas Industri UBIG sampai semester 4",
  "Kuliah di Sekolah Tinggi Intelijen Negara (STIN)",
  "Menjadi intel negara",
];

const keahlian = [
  { nama: "HTML", level: "Dasar" },
  { nama: "CSS", level: "Dasar" },
  { nama: "JavaScript", level: "Pemula" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "Git dan GitHub", level: "Dasar" },
];

const jadwal = [
  {
    hari: "kamis",
    waktu: "19.00–20.00",
    kegiatan: "membaca ulang modul",
  },
  {
    hari: "Jumat",
    waktu: "19.00–20.00",
    kegiatan: "mengenrjakan tugas praktik",
  },
  {
    hari: "sabtu",
    waktu: "19.00–20.00",
    kegiatan: "membuat vidio dan mencatat modul",
  }
];

function Kartu({
  judul,
  children,
}: {
  judul: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-bold text-slate-800">
        {judul}
      </h2>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f1f9eb] text-slate-700">
      <main className="mx-auto max-w-5xl space-y-6 px-5 py-8">
        {/* Profil utama */}
        <section
          id="home"
          className="flex flex-col items-center gap-6 py-4 sm:flex-row"
        >
          <img
            src="/foto1.jpeg"
            alt="Foto Itmami Aliyah Dewi"
            className="h-40 w-40 shrink-0 rounded-full border-4 border-rose-700 object-cover"
          />

          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-rose-700">
              Portofolio Pribadi
            </p>
            <h1 className="mb-3 text-2xl font-bold text-slate-800">
              Halo, saya Itmami Aliyah Dewi!
            </h1>
            <p className="leading-7 text-slate-600">
              Siswi kelas X SMK yang semangat belajar,
              mengembangkan potensi diri, dan meraih cita-cita.
            </p>
          </div>
        </section>

        {/* Tentang saya */}
        <Kartu judul="Tentang Saya">
          <p className="leading-7">
            Halo, nama saya Itmami Aliyah Dewi. Saya siswa kelas X SMKN 1 Kepanjen jurusan RPL.
             Saya ingin mengembangkan kemampuan di bidang teknologi dan pemrograman melalui Kelas
            Industri UBIG agar mendapatkan ilmu dan pengalaman baru untuk masa depan.
          </p>
        </Kartu>

        {/* Hobi dan cita-cita */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Kartu judul="Hobi">
            <ul className="list-inside list-disc space-y-3">
              {hobi.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Kartu>

          <Kartu judul="Cita-Cita">
            <ol className="list-inside list-decimal space-y-3">
              {citaCita.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </Kartu>
        </div>

        {/* Keahlian */}
        <Kartu judul="Keahlian dan Minat">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {keahlian.map((item) => (
              <div
                key={item.nama}
                className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
              >
                <h3 className="font-semibold text-slate-700">
                  {item.nama}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Level: {item.level}
                </p>
              </div>
            ))}
          </div>
        </Kartu>

        {/* Jadwal belajar */}
        <Kartu judul="Jadwal Belajar">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-[#26385f] text-white">
                <tr>
                  <th className="p-3">Hari</th>
                  <th className="p-3">Waktu</th>
                  <th className="p-3">Kegiatan</th>
                </tr>
              </thead>

              <tbody>
                {jadwal.map((item) => (
                  <tr
                    key={item.hari}
                    className="border-b border-gray-200 even:bg-gray-50"
                  >
                    <td className="p-3">{item.hari}</td>
                    <td className="whitespace-nowrap p-3">
                      {item.waktu}
                    </td>
                    <td className="p-3">{item.kegiatan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Kartu>
      </main>

      {/* Footer */}
      <footer className="mt-8 bg-[#26385f] px-4 py-6 text-center text-sm text-white">
        <p>
          © 2026 Itmami Aliyah Dewi.
        </p>
        <p className="mt-2 text-slate-300">
          Dibuat dengan Next.js di kelas industri UBIG 
        </p>
      </footer>
    </div>
  );
}
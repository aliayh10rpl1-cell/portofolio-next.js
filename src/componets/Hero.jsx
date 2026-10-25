export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center gap-6 py-4 sm:flex-row sm:gap-6"
    >
      <img
        src="/foto1.jpeg"
        alt="Foto profil"
        className="h-36 w-36 shrink-0 rounded-full border-4 border-rose-700 object-cover"
      />

      <div>
        <h1 className="mb-3 text-xl font-bold text-slate-800">
          Halo, saya Muhammad Alif Anail Adi!
        </h1>
        <p className="text-sm leading-6 text-slate-600">
          Siswa kelas X SMKN 1 Kepanjen, calon Junior Web Developer
          di kelas Industri UBIG.
        </p>
      </div>
    </section>
  );
}
import Link from "next/link";

export default function NotFound() {
    return (
       <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
        <h1 className="text-6xl font-extrqabold text-red-500 mb-2">404</h1>
        <h2 className="text-xl font-bold text-slate-900 mb-2">Halaman tidak ditemukan</h2>
        <p className="text-xs text-gray-500 max-w-sm mb-6 leading-relaxed">
            Alamat atau halaman web yang Anda cari tidak ada, telah dihapus, atau sedang dipindahkan.
        </p>
        <Link href="/" className="bg-stale-900 hover:bg-stale-800 text-white text-xs font-semibold px-5 py-2.5 rounded shadow transition">
        Kembali ke Beranda
        </Link>
       </div>
    );
}
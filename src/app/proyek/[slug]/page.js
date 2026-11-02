import {proyekData} from "@/data/proyek";
import { notFound} from "next/navigation";

export default async function DetailProyek({ params }) {
    const { slug } = await params;

    // Mencari data proyek berdasarkan slug
    const proyek = proyekData.find((item) => item.slug === slug);

    // Jika slug tidak valid, alihkan ke halaman 404
    if (!proyek) {
        notFound();
    }

    return (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
            <h1 className="text-3xl font-bold mb-4">{proyek.title}</h1>
            <p className="text-gray-600 mb-4">{proyek.description}</p>
            <div className="flex gap-2">
                {proyek.tech.map((t, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                        {t}
                    </span>
                ))}
            </div>
        </div>
    );
}
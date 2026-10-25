export default function SkillCard({ nama, level }) {
  return (
    <div className="border border-gray-200 bg-white p-4 shadow-sm">
      <h3 className="font-semibold text-slate-700">
        {nama}
      </h3>
      <p className="mt-1 text-sm text-gray-500">
        Level: {level}
      </p>
    </div>
  );
}
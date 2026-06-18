export default function DetailChip({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
    return (
        <div className="flex flex-col bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-gray-500 mb-2">{icon}</div>
            <p className="font-bold text-gray-900 leading-tight">{value}</p>
            <p className="text-xs text-gray-500 font-medium">{label}</p>
        </div>
    );
}

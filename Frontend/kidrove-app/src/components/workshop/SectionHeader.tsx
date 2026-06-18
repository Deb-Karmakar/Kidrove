export default function SectionHeader({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight flex items-center gap-2">
            {children}
        </h2>
    );
}

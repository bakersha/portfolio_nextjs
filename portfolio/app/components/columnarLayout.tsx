export default function ColumnarLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 text-base items-left justify-items-center">{children}</div>
    )
}
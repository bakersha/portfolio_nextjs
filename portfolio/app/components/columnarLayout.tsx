export default function ColumnarLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 md:gap-x-10 gap-y-2 md:gap-y-4 text-base items-left justify-items-around">{children}</div>
    )
}
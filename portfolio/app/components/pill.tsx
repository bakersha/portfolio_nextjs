export default function Pill({ name }: { name: string; }) {
    return (
        <span className="inline-flex items-center rounded-full 
            bg-indigo-700 px-2 py-1 my-1 mr-1
            text-xs font-medium text-gray-300">{name}</span>
    )
}
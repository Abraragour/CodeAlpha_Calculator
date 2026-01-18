export default function Display({ value }) {
  return (
    <div className="w-full mb-6">
      <div className="h-24 bg-gray-50 rounded-2xl flex items-center justify-end px-5 border border-gray-100">
        <span className="text-4xl font-light text-gray-800 truncate">
          {value || "0"}
        </span>
      </div>
    </div>
  )
}
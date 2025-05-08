export const SkeletonCard = () => (
  <div className="w-full">
    <div className="p-6 rounded-t-2xl bg-gray-100 flex justify-between g-4">
      <div className="w-3/5 h-6 rounded-xl bg-gray-200 animate-pulse" />
    </div>

    <div className="p-6 rounded-b-2xl border-1 border-t-0 border-gray-100">
      <div className="flex flex-col gap-4 animate-pulse md:justify-between md:items-center md:flex-row">
        <div className="w-14 h-3 rounded-xl bg-gray-200" />
        <div className="w-20 h-3 rounded-xl bg-gray-200" />
      </div>

      <div className="w-full h-2 rounded-xl bg-gray-200 mt-4" />
      <div className="w-full h-2 rounded-xl bg-gray-200 mt-2" />
      <div className="w-full h-2 rounded-xl bg-gray-200 mt-2" />
      <div className="w-3/5 h-2 rounded-xl bg-gray-200 mt-2" />

      <div className="w-full h-2 rounded-xl bg-gray-200 mt-4" />
      <div className="w-full h-2 rounded-xl bg-gray-200 mt-2" />
      <div className="w-full h-2 rounded-xl bg-gray-200 mt-2" />
      <div className="w-3/5 h-2 rounded-xl bg-gray-200 mt-2" />
    </div>
  </div>
)
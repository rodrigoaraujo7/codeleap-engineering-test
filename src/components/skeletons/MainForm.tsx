export const SkeletonMainForm = () => (
  <div className="w-full p-6 rounded-2xl border-1 border-gray-100 flex flex-col gap-6 animate-pulse">
    <div className="w-3/5 h-8 rounded-xl bg-gray-200" />

    <div className="flex flex-col">
      <div className="w-28 h-6 rounded-xl bg-gray-200" />
      <div className="w-full h-8 rounded-xl bg-gray-200 mt-2" />
    </div>

    <div className="flex flex-col">
      <div className="w-28 h-6 rounded-xl bg-gray-200" />
      <div className="w-full h-20 rounded-xl bg-gray-200 mt-2" />
    </div>

    <div className="w-32 h-9 rounded-xl bg-gray-200 mt-2 self-end" />
  </div>
)
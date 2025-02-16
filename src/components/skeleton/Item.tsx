/** 책 아이템 Skeleton */
const SkeletonItem = () => {
  return (
    <div className="w-3/4 px-6 py-2 border overflow-hidden rounded-xl animate-pulse">
      <div className="flex justify-between">
        <div className="space-y-2">
          <div className="h-6 bg-gray-200 rounded w-48"></div>
          <div className="h-4 bg-gray-200 rounded w-32"></div>
        </div>
        <div className="z-10  text-gray-200"></div>
      </div>
    </div>
  );
};

export default SkeletonItem;

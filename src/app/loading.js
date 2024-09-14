import { Skeleton } from "@/components/ui/skeleton";

function Loading() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center space-x-4 h-full">
        <Skeleton className="h-12 bg-slate-700  w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 bg-slate-700  w-[250px]" />
          <Skeleton className="h-4 bg-slate-700  w-[200px]" />
        </div>
      </div>
    </div>
  );
}

export default Loading;

import { useMemo } from "react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export const TextSkeleton = ({
  lines = 1,
  w = "w-10",
  h = "h-2.5",
}: TextSkeletonProps) => {
  const _lines = Array(lines).fill({});

  return (
    <div className="animate-pulse space-y-2">
      {_lines.map((_, i) => (
        <div
          key={i}
          className={classNames("m-1 bg-gray-200 rounded-sm", w, h)}
        ></div>
      ))}
    </div>
  );
};

interface TextSkeletonProps {
  lines?: number;
  w?: string;
  h?: string;
}

import { FC } from "react";

export const LoadingSpinner = ({
  size = 10,
  color = "text-blue-500",
  addMargin = true,
}: LoadingSpinnerProps) => {
  const _h = "h-" + size;
  const _w = "w-" + size;

  return (
    <div className="flex justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          addMargin ? "mr-2" : "mr-0"
        } animate-spin ${color} ${_h} ${_w}`}
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  );
};

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
  addMargin?: boolean;
}

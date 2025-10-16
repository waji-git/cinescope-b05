import React from "react";
export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      width="28"
      height="35"
      viewBox="0 0 28 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
           <path
        d="M6 5 L24 17.5 L6 30 Z"
        fill="#3DD6C1"
      />
    </svg>
  );
}


import React from "react";

interface MachineSkeletonProps {
  className?: string;
}

const MachineSkeleton: React.FC<MachineSkeletonProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="330"
      height="330"
      viewBox="0 0 330 330"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_5_77)">
        <path
          d="M88.9999 330.002C139.898 315.592 165.329 286.854 165.288 241C165.414 286.895 190.862 318.111 241.576 330.002H88.9999Z"
          fill="#1E3F1B"
        />
        <path
          d="M61.3854 187.897L-0.403678 218.192L-0.403675 157.603L61.3854 187.897Z"
          fill="#1E3F1B"
        />
        <path
          d="M268.354 187.898L330.143 157.603L330.143 218.192L268.354 187.898Z"
          fill="#1E3F1B"
        />
        <path
          d="M38 125H289V260C289 265.523 284.523 270 279 270H48C42.4772 270 38 265.523 38 260V125Z"
          fill="#234B20"
        />
      </g>
      <defs>
        <clipPath id="clip0_5_77">
          <rect width="330" height="330" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MachineSkeleton;

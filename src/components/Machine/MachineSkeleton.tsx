import React from "react";

interface MachineSkeletonProps {
  className?: string;
}

const MachineSkeleton: React.FC<MachineSkeletonProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="512"
      height="512"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M165 423C223.379 406.323 252.548 373.066 252.5 320C252.645 373.113 281.833 409.238 340 423H165Z"
        fill="#1E3F1B"
      />
      <path d="M153 277L91.5 307.311L91.5 246.689L153 277Z" fill="#1E3F1B" />
      <path d="M359 277L420.5 246.689L420.5 307.311L359 277Z" fill="#1E3F1B" />
      <g filter="url(#filter0_d_5_77)">
        <path d="M130 214H380V339H130V214Z" fill="#234B20" />
      </g>
      <path
        d="M130 339H380V349C380 354.523 375.523 359 370 359H140C134.477 359 130 354.523 130 349V339Z"
        fill="#234B20"
      />
      <defs>
        <filter
          id="filter0_d_5_77"
          x="126"
          y="214"
          width="258"
          height="133"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_5_77"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_5_77"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default MachineSkeleton;

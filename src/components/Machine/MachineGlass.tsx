import React from "react";

interface MachineGlassProps {
  className?: string;
}

const MachineGlass: React.FC<MachineGlassProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="512"
      height="512"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="255" cy="214" r="125" fill="#EEEEEC" />
    </svg>
  );
};

export default MachineGlass;

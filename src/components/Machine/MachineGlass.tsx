import React from "react";

interface MachineGlassProps {
  className?: string;
}

const MachineGlass: React.FC<MachineGlassProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="330"
      height="330"
      viewBox="0 0 330 330"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="163.5" cy="125.5" r="125.5" fill="#EEEEEC" />
    </svg>
  );
};

export default MachineGlass;

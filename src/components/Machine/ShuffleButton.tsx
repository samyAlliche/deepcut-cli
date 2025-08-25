import React from "react";
import { Button } from "../ui/button";

interface ShuffleButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

const ShuffleButton: React.FC<ShuffleButtonProps> = ({
  onClick,
  isLoading,
}) => {
  return (
    <div className="relative">
      <Button
        variant={"shuffle"}
        size={"xl"}
        onClick={onClick}
        disabled={isLoading}
      >
        SHUFFLE
      </Button>
      <div className="absolute top-0 left-0 mt-3 w-full bg-olive-dark rounded-md h-full -z-10" />
    </div>
  );
};

export default ShuffleButton;

import React from "react";
import { Button } from "./ui/button";
import { ArrowUp } from "lucide-react";

interface BackButtonProps {
  onClick: () => void;
}

const BackButton = ({ onClick }: BackButtonProps) => {
  return (
    <div className="relative">
      <Button
        variant="shuffle"
        size={"xl"}
        className="font-bold"
        onClick={onClick}
      >
        <ArrowUp className="h-10 w-10" />
      </Button>
      <div className="absolute top-0 left-0 mt-3 w-full bg-olive-dark rounded-md h-full -z-10" />
    </div>
  );
};

export default BackButton;

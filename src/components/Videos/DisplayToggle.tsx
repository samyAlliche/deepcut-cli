import React from "react";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { Grid2X2, Square } from "lucide-react";

interface DisplayToggleProps {
  isOneColumn: boolean;
  setIsOneColumn: (value: boolean) => void;
}

const DisplayToggle = ({ isOneColumn, setIsOneColumn }: DisplayToggleProps) => {
  return (
    <ToggleGroup
      type="single"
      //variant={"outline"}
      size={"lg"}
      value={isOneColumn ? "a" : "b"}
      onValueChange={(value) => setIsOneColumn(value === "a")}
    >
      <ToggleGroupItem value="a" defaultChecked>
        <Square />
      </ToggleGroupItem>
      <ToggleGroupItem value="b">
        <Grid2X2 />
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

export default DisplayToggle;

"use client";
import React, { useEffect, useState, useRef } from "react";
import MachineSkeleton from "@/components/Machine/MachineSkeleton";
import MachineGlass from "@/components/Machine/MachineGlass";
import MachineVinyls from "./MachineVinyls";
import { motion, useAnimationControls } from "motion/react";
import Counter from "@/components/Machine/Counter";
import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";

interface MachineProps {
  value: number;
  onValueChange: (value: number) => void;
  isLoading: boolean;
}

const Machine: React.FC<MachineProps> = ({
  value,
  onValueChange,
  isLoading,
}) => {
  const controls = useAnimationControls();
  const [isStopped, setIsStopped] = useState(false);
  const prevIsLoading = useRef(false);

  useEffect(() => {
    if (prevIsLoading.current && !isLoading) {
      setIsStopped(true);
    }
    prevIsLoading.current = isLoading;
  }, [isLoading]);

  useEffect(() => {
    const idleAnimation = {
      rotate: 360,
      transition: { repeat: Infinity, ease: "linear" as const, duration: 10 },
    };
    const shuffleAnimation = {
      rotate: 360,
      transition: { repeat: Infinity, ease: "linear" as const, duration: 0.5 },
    };
    const stopAnimation = {
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 150,
        damping: 20,
        mass: 3,
      },
    };

    if (isLoading) {
      controls.start(shuffleAnimation);
    } else if (isStopped) {
      controls.stop();
      controls.start(stopAnimation);
    } else {
      controls.start(idleAnimation);
    }
  }, [isLoading, isStopped, controls]);
  return (
    <motion.div className="grid place-items-center scale-75 md:scale-100">
      <MachineGlass className="[grid-area:1/1] z-10" />
      <motion.div className="[grid-area:1/1] mb-18 z-20" animate={controls}>
        <MachineVinyls />
      </motion.div>
      <MachineSkeleton className="[grid-area:1/1] z-30" />
      <div className="[grid-area:1/1] mt-16 z-40">
        <Counter
          value={value}
          places={[10, 1]}
          fontSize={72}
          padding={5}
          gap={30}
          textColor="var(--color-foreground)"
          fontWeight={900}
          containerStyle={{ backgroundColor: "var(--color-background)" }}
          borderRadius={20}
        />
      </div>
      <div className="[grid-area:1/1] mt-10.5 z-50 flex gap-74">
        <Button
          className="bg-olive text-background rounded-full hover:bg-olive-dark p-5"
          onClick={() => onValueChange(value > 1 ? value - 1 : 1)}
          size={"xxl"}
          aria-label="minus"
        >
          {/* <Minus className="h-10 w-10" /> */}
          <span className="text-4xl font-black">-</span>
        </Button>
        <Button
          className="p-5 bg-olive text-background rounded-full hover:bg-olive-dark"
          onClick={() => onValueChange(value < 10 ? value + 1 : 10)}
          size={"xxl"}
          aria-label="plus"
        >
          {/* <Plus className="h-10 w-10" /> */}
          <span className="text-4xl font-black">+</span>
        </Button>
      </div>
    </motion.div>
  );
};

export default Machine;

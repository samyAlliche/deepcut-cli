"use client";

import React, { useState } from "react";
import Machine from "@/components/Machine/Machine";
import Video from "@/types/video";
import VideoGrid from "@/components/Videos/VideoGrid";
import ShuffleButton from "@/components/Machine/ShuffleButton";
import { AnimatePresence, motion } from "motion/react";
import { toast } from "sonner";
import DisplayToggle from "@/components/Videos/DisplayToggle";
import BackButton from "@/components/BackButton";
import clsx from "clsx";

interface HomePageClientProps {
  shuffleAction: (value: number) => Promise<Video[]>;
}

export default function HomePageClient({ shuffleAction }: HomePageClientProps) {
  const [counterValue, setCounterValue] = useState(1);
  const [shuffledData, setShuffledData] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasShuffled, setHasShuffled] = useState(false);
  const [isOneColumn, setIsOneColumn] = useState(true);

  const handleShuffle = async () => {
    setIsLoading(true);
    setHasShuffled(true);
    try {
      const data = await shuffleAction(counterValue);
      setShuffledData(data);
    } catch (error) {
      toast.error("Try again", { description: "Shuffle failed" });
      console.error("Shuffle failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    setHasShuffled(false);
    setShuffledData([]);
  };

  const showMachine =
    !hasShuffled || (hasShuffled && shuffledData.length === 0 && !isLoading);

  const springAnimation = {
    type: "spring" as const,
    stiffness: 150,
    damping: 20,
    mass: 3,
  };

  return (
    <motion.div
      className={clsx(
        "flex flex-col items-center w-full min-h-[600px]",
        hasShuffled && !isLoading && "mt-14 sm:mt-8"
      )}
      layout
    >
      {showMachine && (
        <div className="relative w-5/7 sm:w-2/3 gap-2 justify-center text-center font-black">
          <motion.h2
            className="absolute sm:text-2xl text-lg sm:-top-2 top-100 leading-tight justify-self-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={springAnimation}
          >
            Discover random tracks from curated YouTube playlists
          </motion.h2>
          <motion.h3
            className="absolute sm:text-xl text-sm top-114 sm:top-7 justify-self-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ ...springAnimation, delay: 0.5 }}
          >
            Hit <span className="italic">Shuffle</span>, get inspired, sample,
            or just vibe
          </motion.h3>
        </div>
      )}

      <AnimatePresence mode="wait">
        {showMachine && (
          <motion.div
            key="machine"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -20,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            layout
          >
            <Machine
              value={counterValue}
              onValueChange={setCounterValue}
              isLoading={isLoading}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex flex-col items-center w-full gap-5 sm:gap-8">
        <motion.div
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: showMachine ? 0.3 : 0,
              duration: 0.4,
              ease: "easeOut",
            },
          }}
          className="flex gap-2"
        >
          <ShuffleButton onClick={handleShuffle} isLoading={isLoading} />
          {!isLoading && hasShuffled && shuffledData.length > 0 && (
            <BackButton onClick={handleBack} />
          )}
        </motion.div>
        {hasShuffled && !isLoading && (
          <div className="sm:hidden w-full flex justify-end">
            <DisplayToggle
              isOneColumn={isOneColumn}
              setIsOneColumn={setIsOneColumn}
            />
          </div>
        )}

        <AnimatePresence mode="wait">
          {isLoading && hasShuffled && (
            <motion.div
              key="loading"
              className="mt-8 w-full max-w-4xl text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-center items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
              </div>
            </motion.div>
          )}
          {!isLoading && hasShuffled && shuffledData.length > 0 && (
            <motion.div
              className=" w-full max-w-4xl"
              key="results"
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: "easeOut",
                },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.3 },
              }}
            >
              <VideoGrid videos={shuffledData} isOneColumn={isOneColumn} />
            </motion.div>
          )}
          {!isLoading && hasShuffled && shuffledData.length === 0 && (
            <motion.div
              className="mt-8 w-full max-w-4xl text-center"
              key="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <p className="text-lg text-muted-foreground font-extrabold">
                No videos found. Try adjusting the value and shuffle again!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

import Video from "@/types/video";
import clsx from "clsx";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface VideoCardProps {
  video: Video;
  className?: string;
}

export default function VideoCard({ video, className }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "group relative overflow-hidden rounded-lg bg-card shadow-md",
        className
      )}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        scale: 1.03,
        y: -4,
        transition: {
          duration: 0.2,
          ease: "easeOut",
        },
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative w-full aspect-square">
        <Image
          src={video.thumbnail?.url || "/placeholder.jpg"}
          alt={`Thumbnail for ${video.title}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.25,
                ease: "easeOut",
              },
            }}
            exit={{
              y: 10,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            }}
          >
            <motion.h3
              className="font-medium text-white line-clamp-2 text-sm drop-shadow-lg"
              title={video.title}
              initial={{ y: 10, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.1,
                  duration: 0.2,
                },
              }}
            >
              {video.title}
            </motion.h3>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.a>
  );
}

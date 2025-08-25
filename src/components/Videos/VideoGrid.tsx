import Video from "@/types/video";
import VideoCard from "./VideoCard";
import clsx from "clsx";

interface VideoGridProps {
  videos: Video[];
  isOneColumn: boolean;
}

export default function VideoGrid({ videos, isOneColumn }: VideoGridProps) {
  const videoCount = videos.length;

  const gridTemplateColumns = () => {
    if (videoCount % 3 == 0) return "sm:grid-cols-3";
    if (videoCount % 2 == 0 && videoCount !== 10)
      return "sm:grid-cols-2 lg:grid-cols-4";
    if (videoCount === 10) return "sm:grid-cols-2 lg:grid-cols-5";
    return "sm:grid-cols-3";
  };

  const gridDisplayMobile = () => {
    if (isOneColumn) return "grid-cols-1";
    return "grid-cols-2 sm:grid-cols-3";
  };
  return (
    <div
      className={clsx(
        "grid w-full  gap-6",
        gridTemplateColumns(),
        gridDisplayMobile()
      )}
    >
      {videos.map((video) => (
        <VideoCard
          key={video.videoId}
          video={video}
          className={clsx(videoCount == 1 && "sm:col-start-2 sm:col-end-2")}
        />
      ))}
    </div>
  );
}

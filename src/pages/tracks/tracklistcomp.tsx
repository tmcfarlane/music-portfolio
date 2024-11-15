import { useState } from "react";
import { Clock } from "lucide-react";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";
import { cn } from "@/lib/utils";
import { tracks } from "./tracklist";

interface TrackListProps {
  currentTrack: (typeof tracks)[0] | null;
  onTrackSelect: (track: (typeof tracks)[0]) => void;
}

export default function TrackList({
  currentTrack,
  onTrackSelect,
}: TrackListProps) {
  const [hoveredTrackId, setHoveredTrackId] = useState<number | null>(null);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const formatDate = (date: Date) => {
    const now = new Date().getTime();
    const diffInMs = now - date.getTime();
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const diffInWeeks = Math.floor(diffInDays / 7);

    if (diffInHours < 24) {
      return `${diffInHours} ${diffInHours === 1 ? "hour" : "hours"} ago`;
    } else if (diffInDays < 7) {
      return `${diffInDays} ${diffInDays === 1 ? "day" : "days"} ago`;
    } else if (diffInDays < 30) {
      return `${diffInWeeks} ${diffInWeeks === 1 ? "week" : "weeks"} ago`;
    } else {
      // Use UTC explicitly to avoid local time zone issues
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      });
    }
  };

  return (
    <div className="w-full bg-gray-900 text-white pt-[60px] relative z-50 h-full overflow-y-auto">
      <div className="px-4 sm:px-8 py-6">
        {/* Headers */}
        <div className="grid grid-cols-[auto_1fr_auto] sm:grid-cols-[auto_1fr_1fr_1fr_auto] gap-4 px-4 py-2 text-sm text-gray-400 border-b border-gray-700 items-center">
          <div className="w-8 text-left">#</div>
          <div>Title</div>
          <div className="hidden sm:block">Album</div>
          <div className="hidden sm:block">Date added</div>
          <div className="flex justify-end w-[48px]">
            <Clock className="h-4 w-4" />
          </div>
        </div>

        {/* Tracks */}
        <div className="mt-2">
          {tracks.map((track, index) => (
            <div
              key={track.id}
              className={cn(
                "grid grid-cols-[auto_1fr_auto] sm:grid-cols-[auto_1fr_1fr_1fr_auto] gap-4 px-4 py-2 rounded-md group hover:bg-gray-800 cursor-pointer",
                currentTrack?.id === track.id && "bg-gray-700"
              )}
              onMouseEnter={() => setHoveredTrackId(track.id)}
              onMouseLeave={() => setHoveredTrackId(null)}
              onClick={() => onTrackSelect(track)}
            >
              <div className="w-8 flex items-center justify-start text-sm text-gray-400 group-hover:text-white">
                {hoveredTrackId === track.id ? (
                  currentTrack?.id === track.id ? (
                    <PauseIcon className="h-4 w-4 text-cyan-400" />
                  ) : (
                    <PlayIcon className="h-4 w-4 text-cyan-400" />
                  )
                ) : (
                  <span
                    className={cn(
                      currentTrack?.id === track.id
                        ? "text-cyan-400"
                        : "text-gray-300"
                    )}
                  >
                    {index + 1}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={track.artwork}
                  alt={`${track.title} artwork`}
                  className="w-10 h-10 rounded"
                />
                <div className="flex flex-col">
                  <span
                    className={cn(
                      "text-sm font-medium",
                      currentTrack?.id === track.id
                        ? "text-cyan-400"
                        : "text-white"
                    )}
                  >
                    {track.title}
                  </span>
                  <span className="text-sm text-gray-400">{track.artist}</span>
                </div>
              </div>
              <div className="hidden sm:flex items-center text-sm text-gray-300">
                {track.album}
              </div>
              <div className="hidden sm:flex items-center text-sm text-gray-400">
                {formatDate(new Date(track.dateAdded))}
              </div>
              <div className="flex items-center justify-end text-sm text-gray-300 w-[48px]">
                {formatTime(track.duration)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

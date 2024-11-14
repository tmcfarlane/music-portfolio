import { useState } from "react";
import { Clock, Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";
import { tracks } from "./trackslist";

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

  return (
    <div className="w-full bg-gray-900 text-white">
      <div className="px-8 py-6">
        {/* Headers */}
        <div className="grid grid-cols-[auto_1fr_1fr_1fr_auto] gap-4 px-4 py-2 text-sm text-gray-400 border-b border-gray-700">
          <div className="w-8 text-right">#</div>
          <div>Title</div>
          <div>Album</div>
          <div>Date added</div>
          <div className="flex justify-end">
            <Clock className="h-4 w-4" />
          </div>
        </div>

        {/* Tracks */}
        <div className="mt-2">
          {tracks.map((track, index) => (
            <div
              key={track.id}
              className={cn(
                "grid grid-cols-[auto_1fr_1fr_1fr_auto] gap-4 px-4 py-2 rounded-md group hover:bg-gray-800 cursor-pointer",
                currentTrack?.id === track.id && "bg-gray-700"
              )}
              onMouseEnter={() => setHoveredTrackId(track.id)}
              onMouseLeave={() => setHoveredTrackId(null)}
              onClick={() => onTrackSelect(track)}
            >
              <div className="w-8 text-right flex items-center justify-end text-sm text-gray-400 group-hover:text-white">
                {hoveredTrackId === track.id ? (
                  currentTrack?.id === track.id ? (
                    <Pause className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )
                ) : (
                  <span
                    className={cn(
                      currentTrack?.id === track.id ? "text-cyan-400" : ""
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
              <div className="flex items-center text-sm text-gray-300">
                {track.album}
              </div>
              <div className="flex items-center text-sm text-gray-400">
                {track.dateAdded}
              </div>
              <div className="flex items-center justify-end text-sm text-gray-300">
                {formatTime(track.duration)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Heart,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Maximize2,
  Minimize2,
  ListMusic,
  Shuffle,
  Repeat,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import TrackList from "./tracklistcomp";
import { tracks } from "./trackslist";

export default function MusicPlayer() {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isTrackListVisible, setIsTrackListVisible] = useState(false);
  const audioRef = useRef(new Audio(currentTrack.url));

  useEffect(() => {
    audioRef.current.src = currentTrack.url;
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentTrack]);

  useEffect(() => {
    const audio = audioRef.current;
    const updateTime = () => setCurrentTime(audio.currentTime);
    audio.addEventListener("timeupdate", updateTime);
    return () => audio.removeEventListener("timeupdate", updateTime);
  }, []);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    const currentIndex = tracks.findIndex(
      (track) => track.id === currentTrack.id
    );
    const nextTrack = tracks[(currentIndex + 1) % tracks.length];
    setCurrentTrack(nextTrack);
    setIsPlaying(true);
  };

  const playPrevious = () => {
    const currentIndex = tracks.findIndex(
      (track) => track.id === currentTrack.id
    );
    const previousTrack =
      tracks[(currentIndex - 1 + tracks.length) % tracks.length];
    setCurrentTrack(previousTrack);
    setIsPlaying(true);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bg-gray-900 transition-all duration-300 ease-in-out ${
          isTrackListVisible ? "h-[calc(100%-90px)]" : "h-0"
        } overflow-hidden`}
      >
        <TrackList
          currentTrack={currentTrack}
          onTrackSelect={setCurrentTrack}
        />
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 backdrop-blur-lg z-50">
        <div className="flex items-center justify-between px-4 h-[90px]">
          {/* Track Info */}
          <div className="flex items-center gap-4 min-w-[180px]">
            {currentTrack && (
              <img
                src={currentTrack.artwork}
                alt={`${currentTrack.title} artwork`}
                className="w-14 h-14 rounded-md object-cover"
              />
            )}
            <div className="flex flex-col">
              <span className="text-sm font-medium text-white">
                {currentTrack.title}
              </span>
              <span className="text-xs text-gray-300">
                {currentTrack.artist}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-pink-400 hover:text-pink-300 hover:bg-gray-800"
                aria-label="Like track"
              >
                <Heart className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-cyan-400 hover:text-cyan-300 hover:bg-gray-800"
              >
                Buy
              </Button>
            </div>
          </div>

          {/* Playback Controls */}
          <div className="flex flex-col items-center gap-2 max-w-2xl flex-1 px-4">
            <div className="flex items-center gap-6">
              <Button
                variant="ghost"
                size="icon"
                className="text-purple-400 hover:text-purple-300 hover:bg-gray-800"
                aria-label="Shuffle"
              >
                <Shuffle className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-cyan-400 hover:text-cyan-300 hover:bg-gray-800"
                onClick={playPrevious}
                aria-label="Previous track"
              >
                <SkipBack className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-cyan-400 text-gray-900 hover:bg-cyan-300 h-8 w-8"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause className="h-5 w-5" />
                ) : (
                  <Play className="h-5 w-5" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-cyan-400 hover:text-cyan-300 hover:bg-gray-800"
                onClick={playNext}
                aria-label="Next track"
              >
                <SkipForward className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-purple-400 hover:text-purple-300 hover:bg-gray-800"
                aria-label="Repeat"
              >
                <Repeat className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex items-center gap-2 w-full">
              <span className="text-xs text-gray-300 w-10 text-right">
                {formatTime(currentTime)}
              </span>
              <Slider
                value={[currentTime]}
                max={currentTrack.duration || 0}
                step={1}
                className="w-full"
                onValueChange={(value) => {
                  audioRef.current.currentTime = value[0];
                  setCurrentTime(value[0]);
                }}
                aria-label="Seek"
              />
              <span className="text-xs text-gray-300 w-10">
                {formatTime(currentTrack.duration || 0)}
              </span>
            </div>
          </div>

          {/* Additional Controls */}
          <div className="flex items-center gap-2 min-w-[180px] justify-end">
            <Button
              variant="outline"
              size="sm"
              className="text-cyan-300 border-cyan-300 bg-gray-800 hover:text-cyan-200 hover:border-cyan-200 hover:bg-gray-700 transition-colors duration-200"
              onClick={() => setIsTrackListVisible(!isTrackListVisible)}
              aria-label={
                isTrackListVisible ? "Hide track list" : "Show track list"
              }
            >
              <ListMusic className="h-4 w-4 mr-2" />
              {isTrackListVisible ? "Hide Tracks" : "Show Tracks"}
              {isTrackListVisible ? (
                <ChevronDown className="h-4 w-4 ml-2" />
              ) : (
                <ChevronUp className="h-4 w-4 ml-2" />
              )}
            </Button>
            <div className="flex items-center gap-2">
              <Volume2 className="h-5 w-5 text-cyan-400" />
              <Slider
                value={[volume * 100]}
                max={100}
                step={1}
                className="w-[100px]"
                onValueChange={(value) => setVolume(value[0] / 100)}
                aria-label="Volume"
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-cyan-400 hover:text-cyan-300 hover:bg-gray-800"
              onClick={() => setIsFullscreen(!isFullscreen)}
              aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            >
              {isFullscreen ? (
                <Minimize2 className="h-5 w-5" />
              ) : (
                <Maximize2 className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

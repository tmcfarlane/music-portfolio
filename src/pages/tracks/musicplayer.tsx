import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import * as Slider from "@radix-ui/react-slider";
import {
  Heart,
  SkipBack,
  SkipForward,
  Volume2,
  ListMusic,
  Shuffle,
  Repeat,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";
import TrackList from "./tracklistcomp";
import { tracks } from "./tracklist";

export default function MusicPlayer() {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0); // Initialize duration state
  const [volume, setVolume] = useState(1);
  const [isTrackListVisible, setIsTrackListVisible] = useState(false);
  const audioRef = useRef(new Audio(currentTrack.url));
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    // Clean up the previous audio instance
    if (audioRef.current) {
      audioRef.current.pause();
    }

    // Create a new Audio instance
    const newAudio = new Audio(currentTrack.url);
    newAudio.volume = volume;
    audioRef.current = newAudio;

    // Reset currentTime and duration
    setCurrentTime(0);
    setDuration(0); // Reset duration when track changes

    // Update duration when metadata is loaded
    const setAudioDuration = () => {
      setDuration(newAudio.duration);
    };
    newAudio.addEventListener("loadedmetadata", setAudioDuration);

    // Attach the timeupdate event listener
    const updateTime = () => setCurrentTime(newAudio.currentTime);
    newAudio.addEventListener("timeupdate", updateTime);

    // Play the new audio only if it's not the first render
    if (!isFirstRender) {
      newAudio.play();
      setIsPlaying(true);
    } else {
      setIsPlaying(false); // Ensure `isPlaying` is false on first render
      setIsFirstRender(false); // Mark that the first render has passed
    }

    // Clean up event listeners when the track changes or component unmounts
    return () => {
      newAudio.removeEventListener("timeupdate", updateTime);
      newAudio.removeEventListener("loadedmetadata", setAudioDuration);
    };
  }, [currentTrack]);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Add this useEffect to prevent body scrolling when tracklist is visible
  useEffect(() => {
    if (isTrackListVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isTrackListVisible]);

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
          isTrackListVisible
            ? "h-[calc(100%-90px)] overflow-y-auto"
            : "h-0 overflow-hidden"
        }`}
      >
        <TrackList
          currentTrack={currentTrack}
          onTrackSelect={setCurrentTrack}
        />
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 backdrop-blur-lg z-50">
        <div className="flex items-center justify-between px-4 h-[90px]">
          {/* Track Info */}
          <div className="flex items-center gap-4 min-w-[300px]">
            {currentTrack && (
              <img
                src={currentTrack.artwork}
                alt={`${currentTrack.title} artwork`}
                className="w-14 h-14 rounded-md object-cover"
              />
            )}
            <div className="flex flex-col w-[180px] overflow-hidden relative">
              <div className="relative">
                <span
                  className="text-sm font-medium text-white whitespace-nowrap inline-block animate-scroll"
                  style={{
                    animation:
                      currentTrack.title.length > 20
                        ? "scrollText 20s linear infinite"
                        : "none",
                    display: "inline-block",
                  }}
                >
                  {currentTrack.title}
                </span>
              </div>
              <div className="relative">
                <span
                  className="text-xs text-gray-300 whitespace-nowrap inline-block animate-scroll"
                  style={{
                    animation:
                      currentTrack.artist.length > 20
                        ? "scrollText 20s linear infinite"
                        : "none",
                    display: "inline-block",
                  }}
                >
                  {currentTrack.artist}
                </span>
              </div>
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
          <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 w-[700px] px-4">
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
                className="rounded-full bg-cyan-400 text-gray-900 hover:bg-cyan-300 h-9 w-9"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <PauseIcon className="text-black" />
                ) : (
                  <PlayIcon className="text-black" />
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
              <Slider.Root
                value={[currentTime]}
                max={duration || 0}
                step={1}
                onValueChange={(value) => {
                  audioRef.current.currentTime = value[0];
                  setCurrentTime(value[0]);
                }}
                className="w-full relative flex items-center h-5"
                aria-label="Seek"
              >
                <Slider.Track className="bg-gray-600 relative flex-1 h-1 rounded">
                  <Slider.Range className="absolute bg-cyan-500 h-full rounded" />
                </Slider.Track>
                <Slider.Thumb className="block w-4 h-4 bg-cyan-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500" />
              </Slider.Root>
              <span className="text-xs text-gray-300 w-10">
                {formatTime(duration)}
              </span>
            </div>
          </div>

          {/* Additional Controls */}
          <div className="flex items-center min-w-[180px] justify-end">
            <div className="flex items-center mr-10">
              <Volume2 className="h-5 w-5 text-cyan-400" />
              <Slider.Root
                value={[volume * 100]}
                max={100}
                step={1}
                onValueChange={(value) => setVolume(value[0] / 100)}
                className="w-[100px] h-5 flex items-center relative"
                aria-label="Volume"
              >
                <Slider.Track className="bg-gray-600 relative grow h-1 rounded">
                  <Slider.Range className="absolute bg-cyan-500 h-full rounded" />
                </Slider.Track>
                <Slider.Thumb className="block w-4 h-4 bg-cyan-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500" />
              </Slider.Root>
            </div>
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
          </div>
        </div>
      </div>
    </>
  );
}

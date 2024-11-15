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
  VolumeX,
} from "lucide-react";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";
import { tracks } from "./tracklist";
import TrackList from "./tracklistcomp";

export default function MusicPlayer() {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false); // Track mute state
  const previousVolume = useRef(volume); // Store previous volume before muting

  const [isTrackListVisible, setIsTrackListVisible] = useState(false);
  const audioRef = useRef(new Audio(currentTrack.url));
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [isShuffleActive, setIsShuffleActive] = useState(false);
  const [isRepeatActive, setIsRepeatActive] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }

    const newAudio = new Audio(currentTrack.url);
    newAudio.volume = volume;
    audioRef.current = newAudio;

    setCurrentTime(0);
    setDuration(0);

    const setAudioDuration = () => {
      setDuration(newAudio.duration);
    };
    newAudio.addEventListener("loadedmetadata", setAudioDuration);

    const updateTime = () => setCurrentTime(newAudio.currentTime);
    newAudio.addEventListener("timeupdate", updateTime);

    // Handle song end logic
    const handleSongEnd = () => {
      if (isShuffleActive) {
        // Shuffle and repeat: Play a random track repeatedly
        const randomIndex = Math.floor(Math.random() * tracks.length);
        setCurrentTrack(tracks[randomIndex]);
      } else if (isRepeatActive && !isShuffleActive) {
        // Repeat without shuffle: Play the same track again
        newAudio.currentTime = 0;
        newAudio.play();
      } else {
        // Default: Stop playback
        setIsPlaying(false);
      }
    };
    newAudio.addEventListener("ended", handleSongEnd);

    if (!isFirstRender) {
      newAudio.play();
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
      setIsFirstRender(false);
    }

    return () => {
      newAudio.removeEventListener("timeupdate", updateTime);
      newAudio.removeEventListener("loadedmetadata", setAudioDuration);
      newAudio.removeEventListener("ended", handleSongEnd);
    };
  }, [currentTrack]);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    if (isMuted) {
      previousVolume.current = volume; // Save the current volume before muting
      setVolume(0); // Set volume to 0
    } else {
      setVolume(previousVolume.current); // Restore the previous volume
    }
  }, [isMuted]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

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
    if (isRepeatActive && isShuffleActive) {
      // Shuffle and repeat: Play a random track
      const randomIndex = Math.floor(Math.random() * tracks.length);
      setCurrentTrack(tracks[randomIndex]);
    } else if (isRepeatActive) {
      // Repeat without shuffle: Play the same track again
      audioRef.current.currentTime = 0;
      setIsPlaying(true);
    } else if (isShuffleActive) {
      // Shuffle without repeat: Play a random track
      const randomIndex = Math.floor(Math.random() * tracks.length);
      setCurrentTrack(tracks[randomIndex]);
      setIsPlaying(true);
    } else {
      // Default: Play the next track in order
      const currentIndex = tracks.findIndex(
        (track) => track.id === currentTrack.id
      );
      const nextTrack = tracks[(currentIndex + 1) % tracks.length];
      setCurrentTrack(nextTrack);
      setIsPlaying(true);
    }
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
          onTrackSelect={setCurrentTrack}
          currentTrack={currentTrack}
        />
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 backdrop-blur-lg z-50">
        <div className="flex flex-col md:flex-row items-center justify-between px-2 md:px-6 py-2 md:py-0 h-auto md:h-[90px] gap-2 md:gap-4">
          {/* Track Info */}
          <div className="flex items-center w-full lg:w-auto lg:min-w-[150px] xl:min-w-[300px]">
            {currentTrack && (
              <img
                src={currentTrack.artwork}
                alt={`${currentTrack.title} artwork`}
                className="w-10 h-10 sm:w-14 sm:h-14 rounded-md object-cover mr-2"
              />
            )}
            <div className="flex flex-col w-[calc(100%-50px)] md:w-[180px] lg:max-w-[200px] overflow-hidden justify-between">
              <div className="relative">
                <span
                  className="text-sm sm:text-base font-medium text-white whitespace-nowrap inline-block animate-scroll"
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
                  className="text-sm sm:text-sm text-gray-300 whitespace-nowrap inline-block animate-scroll"
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

            <div className="flex items-center justify-center gap-1 p-1">
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
          <div className="flex-1 flex flex-col items-center gap-2 px-2 md:px-4 w-full md:w-auto md:max-w-[700px]">
            <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 w-full">
              <Button
                variant="ghost"
                size="icon"
                className={`hover:bg-gray-800 hover:${
                  isShuffleActive ? "text-cyan-400" : "text-purple-400"
                } ${isShuffleActive ? "text-purple-400" : "text-cyan-400"}`}
                aria-label="Shuffle"
                onClick={() => setIsShuffleActive(!isShuffleActive)}
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
                className={`hover:bg-gray-800 hover:${
                  isRepeatActive ? "text-cyan-400" : "text-purple-400"
                } ${isRepeatActive ? "text-purple-400" : "text-cyan-400"}`}
                aria-label="Repeat"
                onClick={() => setIsRepeatActive(!isRepeatActive)}
              >
                <Repeat className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex items-center gap-2 w-full">
              <span className="text-xs text-gray-300 w-8 sm:w-10 text-right">
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
                <Slider.Thumb className="block w-3 h-3 sm:w-4 sm:h-4 bg-cyan-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500" />
              </Slider.Root>
              <span className="text-xs text-gray-300 w-8 sm:w-10">
                {formatTime(duration)}
              </span>
            </div>
          </div>

          {/* Volume and TrackList Controls */}
          <div className="flex items-center justify-between w-full md:w-auto lg:min-w-[200px]">
            <div className="flex items-center md:mr-8 p-2">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="flex items-center"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <VolumeX className="h-4 w-4 md:h-5 md:w-5 text-cyan-400 mr-2" />
                ) : (
                  <Volume2 className="h-4 w-4 md:h-5 md:w-5 text-cyan-400 mr-2" />
                )}
              </button>
              <Slider.Root
                value={[volume * 100]}
                max={100}
                step={1}
                onValueChange={(value) => {
                  setVolume(value[0] / 100);
                  if (value[0] / 100 > 0) setIsMuted(false); // Unmute if slider is moved up
                }}
                className="w-full max-w-[150px] min-w-[100px] h-5 flex items-center relative"
                aria-label="Volume"
              >
                <Slider.Track className="bg-gray-600 relative grow h-1 rounded">
                  <Slider.Range className="absolute bg-cyan-500 h-full rounded" />
                </Slider.Track>
                <Slider.Thumb className="block w-3 h-3 sm:w-4 sm:h-4 bg-cyan-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500" />
              </Slider.Root>
            </div>

            <Button
              variant="outline"
              size="sm"
              className="text-cyan-300 border-cyan-300 bg-gray-800 hover:text-cyan-200 hover:border-cyan-200 hover:bg-gray-700 transition-colors duration-200 mr-1"
              onClick={() => setIsTrackListVisible(!isTrackListVisible)}
              aria-label={
                isTrackListVisible ? "Hide track list" : "Show track list"
              }
            >
              <ListMusic className="h-4 w-4 mr-0 sm:mr-2" />
              <span>{isTrackListVisible ? "Hide Tracks" : "Show Tracks"}</span>
              {isTrackListVisible ? (
                <ChevronDown className="h-4 w-4 ml-0 sm:ml-2" />
              ) : (
                <ChevronUp className="h-4 w-4 ml-0 sm:ml-2" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

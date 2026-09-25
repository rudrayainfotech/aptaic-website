import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Film, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/aptaicData';

interface VideoShowcaseProps {
  videoSrc?: string;
}

export const VideoShowcase: React.FC<VideoShowcaseProps> = ({
  videoSrc = '/assets/video.mp4',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoError, setVideoError] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
      setVideoError(false);
    };

    const handleError = () => {
      // If file not yet placed, fall back to interactive high-tech preview
      setVideoError(true);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('error', handleError);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('error', handleError);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      setHasStarted(true);
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // If video file is missing or autoplay blocked
          setIsPlaying(true);
        });
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch((err) => console.log(err));
    } else {
      document.exitFullscreen().catch((err) => console.log(err));
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    videoRef.current.currentTime = percentage * duration;
  };

  const formatTime = (timeInSeconds: number) => {
    const mins = Math.floor(timeInSeconds / 60);
    const secs = Math.floor(timeInSeconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-blue-500/10 via-cyan-400/10 to-purple-600/10 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4">
            <Film className="w-3.5 h-3.5" />
            <span>Brand Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A41] tracking-tight mb-5">
            Technology That Speaks For Itself.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Discover how Aptaic combines technology, design and business understanding to create digital solutions that actually work.
          </p>
        </div>

        {/* Video Container (16:9, rounded 24px, glass border, premium shadow, hover scale) */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
            onClick={togglePlay}
            className="group relative aspect-video w-full rounded-[24px] overflow-hidden bg-[#071A41] border border-white/60 shadow-[0_25px_60px_-15px_rgba(7,26,65,0.22)] ring-1 ring-blue-500/20 transition-all duration-500 hover:shadow-[0_35px_80px_-15px_rgba(18,107,255,0.3)] hover:scale-[1.01] cursor-pointer"
          >
            {/* Native Video Element */}
            <video
              ref={videoRef}
              src={videoSrc}
              playsInline
              className={`w-full h-full object-contain transition-opacity duration-700 ${
                hasStarted && !videoError ? 'opacity-100' : 'opacity-0'
              }`}
            />

            {/* Poster / High-Tech Showcase Overlay when not started or if fallback */}
            {(!hasStarted || videoError || !isPlaying) && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#071A41]/90 via-[#0A1D4A]/85 to-[#040E24]/95 backdrop-blur-[2px] transition-all duration-500">
                {/* Subtle digital grid lines */}
                <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
                
                {/* Floating Glow Orbs */}
                <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />

                {/* Center Aptaic Identity & Play Trigger */}
                <div className="relative z-30 flex flex-col items-center text-center">
                  {/* Glowing Logo Badge */}
                  <div className="relative mb-6">
                    <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-600 opacity-60 blur-md group-hover:opacity-100 transition-opacity duration-300" />
                    <img
                      src={COMPANY_INFO.logoUrl}
                      alt="APTAIC Logo"
                      className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white p-1.5 shadow-2xl object-contain transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Play Button with animated pulse wave */}
                  <div className="relative flex items-center justify-center mb-6">
                    <span className="animate-ping absolute inline-flex h-20 w-20 rounded-full bg-blue-500/40 opacity-75"></span>
                    <button
                      type="button"
                      aria-label="Play promotional video"
                      className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-[#126BFF] to-[#00C6FF] text-white flex items-center justify-center shadow-[0_0_30px_rgba(18,107,255,0.6)] transform group-hover:scale-110 transition-all duration-300"
                    >
                      {isPlaying ? (
                        <Pause className="w-7 h-7 sm:w-8 sm:h-8 fill-current" />
                      ) : (
                        <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
                      )}
                    </button>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide mb-2">
                    Experience APTAIC Innovation
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-200/80 max-w-md mb-4">
                    High-performance business software, custom automation & digital transformation systems
                  </p>

                  <div className="flex items-center gap-3 text-[11px] sm:text-xs font-mono text-cyan-300/90 bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> 16:9 Ultra HD
                    </span>
                    <span>•</span>
                    <span>Executive Overview</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" /> High Fidelity
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Custom Video Controls Bar */}
            <div
              className={`absolute bottom-0 inset-x-0 z-30 p-4 sm:p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
                showControls || !isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Progress Scrubber */}
              <div
                onClick={handleSeek}
                className="w-full h-1.5 bg-white/20 hover:h-2.5 rounded-full overflow-hidden cursor-pointer transition-all duration-200 mb-3 relative group/bar"
              >
                <div
                  className="h-full bg-gradient-to-r from-[#126BFF] to-[#00C6FF] rounded-full relative"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow opacity-0 group-hover/bar:opacity-100" />
                </div>
              </div>

              {/* Controls Footer */}
              <div className="flex items-center justify-between text-white text-xs sm:text-sm">
                <div className="flex items-center gap-4">
                  <button
                    onClick={togglePlay}
                    className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>
                  <span className="font-mono text-xs text-gray-300">
                    {formatTime(currentTime)} / {formatTime(duration || 90)}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline-block text-[11px] font-medium text-cyan-300/80 bg-blue-900/50 px-2.5 py-1 rounded border border-blue-500/30">
                    APTAIC Official Reel
                  </span>
                  <button
                    onClick={toggleFullscreen}
                    className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                    aria-label="Toggle Fullscreen"
                  >
                    <Maximize2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

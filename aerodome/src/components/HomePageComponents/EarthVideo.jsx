import { useEffect, useRef } from "react";

function EarthVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // half speed
    }
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      className="relative z-10 w-full h-full object-cover rounded-full shadow-[0_0_120px_rgba(0,0,0,0.8)]"
    >
      <source src="/earth_rotate.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default EarthVideo;

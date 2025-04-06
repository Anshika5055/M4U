import { useEffect, useState } from "react";
import "../../VideoModal.css";
import videoSrc from "../assets/Preloader.mp4";
const VideoModal = () => {
  const [showVideo, setShowVideo] = useState(false);
  useEffect(() => {
    const firstVisitTime = localStorage.getItem("firstVisitTime");
    const lastShownTime = localStorage.getItem("lastShownTime");
    const currentTime = Date.now();
    const delay = 60000;
    if (!firstVisitTime) {
      localStorage.setItem("firstVisitTime", currentTime);
    }
    if (!lastShownTime || currentTime - lastShownTime >= delay) {
      setShowVideo(true);
      localStorage.setItem("lastShownTime", currentTime);
    }
  }, []);
  const closeModal = () => {
    const videoElement = document.querySelector("video");
    if (videoElement) {
      videoElement.style.transition = "opacity 1s";
      videoElement.style.opacity = 0;
    }
    setTimeout(() => {
      setShowVideo(false);
    }, 400);
  };
  return (
    showVideo && (
      <div className="video-modal" onClick={closeModal}>
        <video autoPlay muted playsInline onEnded={closeModal}>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    )
  );
};
export default VideoModal;

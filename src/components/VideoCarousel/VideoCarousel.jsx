import { useRef, useState } from "react";
import "./VideoCarousel.css";

import Video1 from "../../assets/videos/Christian Assunção de Souza.mp4";
import Video2 from "../../assets/videos/Jaini Domingues.mp4";
import Video3 from "../../assets/videos/Jeferson Caneviski..mp4";
import Video5 from "../../assets/videos/Natacia Leme.mp4";

const videos = [Video1, Video2, Video3, Video5];

const VideoCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const handleStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const handleEnd = (e) => {
    if (!isDragging.current) return;

    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;

    const diff = startX.current - endX;

    if (diff > 50 && activeIndex < videos.length - 1) {
      setActiveIndex(activeIndex + 1);
    }

    if (diff < -50 && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }

    isDragging.current = false;
  };

  const nextVideo = () => {
    if (activeIndex < videos.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const prevVideo = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <section className="VideoCarousel">
      <h1>Resultados construídos na prática</h1>

      <div
        className="carousel"
        onMouseDown={handleStart}
        onMouseUp={handleEnd}
        onTouchStart={handleStart}
        onTouchEnd={handleEnd}
      >
        <button className="navButton left" onClick={prevVideo}>
          ‹
        </button>

        <button className="navButton right" onClick={nextVideo}>
          ›
        </button>

        {videos.map((video, index) => {
          const offset = index - activeIndex;

          return (
            <div
              key={index}
              className={`videoItem ${offset === 0 ? "active" : ""}`}
              style={{
                transform: `translateX(${offset * 380}px) scale(${
                  offset === 0 ? 1 : 0.85
                })`,
                opacity: Math.abs(offset) > 1 ? 0 : 1,
                zIndex: offset === 0 ? 2 : 1,
              }}
            >
              <video
                src={video}
                controls={offset === 0}
                preload="metadata"
                playsInline
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default VideoCarousel;

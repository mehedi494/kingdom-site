import React from "react";
import YoutubeStyles from "../../styles/youtube.module.css";
import { Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <section>
      <div
        className={`${YoutubeStyles.youtubeContainer}  h-[100vh]  max-h-[40rem]  md:max-h-[100vh] `}
      >
        <iframe
          width="100vw"
          title="YouTube video player"
          src="https://www.youtube.com/embed/_eO9RyErOMM?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-[300%]  -ml-[100%] h-[100vh]  max-h-[40rem]  md:max-h-[100vh]"
        ></iframe>
      </div>
    </section>
  );
}

export default Hero;

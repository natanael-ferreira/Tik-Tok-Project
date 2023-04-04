import React, { useRef, useState } from "react";
import VideoFooter from "./components/footer/VideoFooter"
import VideoSidebar from "./components/sidebar/VideoSidebar"
import "./Video.css";

function Video({likes, messages, shares, name, description, music, url}) {
  const videoref = useRef(null);
  const [play, setPlay] = useState(false);
  function handdleStart() {
    if (play) {
      videoref.current.pause();
      setPlay(false);
    } else {
      videoref.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoref}
        onClick={handdleStart}
        loop
        src={url}
      ></video>
      <VideoSidebar 
        likes={likes}
        messages={messages}
        shares={shares}
      />
      <VideoFooter 
        name={name}
        description={description}
        music={music}
      />
    </div>
  );
}

export default Video;

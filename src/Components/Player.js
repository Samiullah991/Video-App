import React from "react";
import YouTube from "react-youtube";

const Player = (props) => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplat: 1,
    },
  };
  return <YouTube videoId={props.videoId} opts={opts} />;
};

export default Player;
//

import "./music-card.styles.css";
import { Slider } from "@mui/material";
import { useRef, useState } from "react";
const MusicCard = ({ sound, title, logo }) => {
  const audioPlayer = useRef();
  const changeVolume = (event) => {
    audioPlayer.current.volume = event.target.value / 100;
  };
  const [pressed, setPressed] = useState(false);
  return (
    <div className="music-card">
      {/* <div className="card-m"> */}
      <div
        onClick={() => setPressed(!pressed)}
        className={`neumorphic variation2 ${
          pressed ? "neumorphic--pressed" : ""
        }`}
      >
        <audio loop ref={audioPlayer} src={sound} preload="auto"></audio>
        <img
          onClick={() =>
            audioPlayer.current.paused
              ? audioPlayer.current.play()
              : audioPlayer.current.pause()
          }
          src={logo}
          alt="Touch to play"
        />
      </div>
      <Slider
        aria-label="Temperature"
        defaultValue={100}
        onChange={changeVolume}
        color="primary"
      />

      <h2>{title}</h2>
    </div>
  );
};

export default MusicCard;

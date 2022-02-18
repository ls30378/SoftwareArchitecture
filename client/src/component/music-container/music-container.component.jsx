import MusicCard from "../music-card/music-card.component";
import "./music-container.styles.css";
import bird from "../../assets/birds.wav";
import cars from "../../assets/cars.wav";
import keyboard from "../../assets/keyboard.wav";
import ocean from "../../assets/ocean.wav";
import rain from "../../assets/rain.wav";
import rainLogo from "../../assets/Rain.svg";
import birdLogo from "../../assets/Bird.svg";
import carsLogo from "../../assets/City.svg";
import keyboardLogo from "../../assets/Keyboard.svg";
import oceanLogo from "../../assets/Ocean.svg";

const MusicContainer = () => {
  return (
    <div className="music-container">
      <MusicCard logo={birdLogo} sound={bird} title="Bird Sounds" />
      <MusicCard logo={carsLogo} sound={cars} title="City Sounds" />
      <MusicCard logo={keyboardLogo} sound={keyboard} title="Keyboard Sounds" />
      <MusicCard logo={oceanLogo} sound={ocean} title="Ocean Sounds" />
      <MusicCard logo={rainLogo} sound={rain} title="Rain Sounds" />
    </div>
  );
};

export default MusicContainer;

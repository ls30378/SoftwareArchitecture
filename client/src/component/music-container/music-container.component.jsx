import MusicCard from "../music-card/music-card.component";
import "./music-container.styles.css";
import bird from "../../assets/birds.wav";
import cars from "../../assets/cars.wav";
import keyboard from "../../assets/keyboard.wav";
import ocean from "../../assets/ocean.wav";
import rain from "../../assets/rain.wav";

const MusicContainer = () => {
  return (
    <div className="music-container">
      <MusicCard sound={bird} title="Bird Sounds" />
      <MusicCard sound={cars} title="Cars Sounds" />
      <MusicCard sound={keyboard} title="Keyboard Sounds" />
      <MusicCard sound={ocean} title="Ocean Sounds" />
      <MusicCard sound={rain} title="Rain Sounds" />
    </div>
  );
};

export default MusicContainer;

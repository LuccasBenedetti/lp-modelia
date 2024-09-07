import heroBackground from "../assets/background-hero.png";
import heroModel from "../assets/model-hero.png";

export function Hero() {
  return (
    <div className="background-image">
      <img src={heroBackground} alt="" className="relative" />
      <img src={heroModel} alt="" className="" />
    </div>
  );
}

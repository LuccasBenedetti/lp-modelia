import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./EmblaCarousel";
import "../styles/embla.css";
interface CarouselProps {
  id: number;
  url: string;
  thumbImg: string;
}

const OPTIONS: EmblaOptionsType = {};

export function Carousel(sliderData: CarouselProps[]) {
  return (
    <div className="h-full flex flex-col">
      <EmblaCarousel slides={sliderData} options={OPTIONS} />
    </div>
  );
}

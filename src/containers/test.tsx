import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "../components/EmblaCarousel";
import "../styles/embla.css";
const sliderData = [
  {
    id: 0,
    url: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg",
    thumbImg:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  },
  {
    id: 1,
    url: "https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_1280.jpg",
    thumbImg:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  },
  {
    id: 2,
    url: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg",
    thumbImg:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  },
  {
    id: 3,
    url: "https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_1280.jpg",
    thumbImg:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  },
  {
    id: 4,
    url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    thumbImg:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  },
];

const OPTIONS: EmblaOptionsType = {};
const SLIDES = sliderData;

export function Test() {
  return (
    <div className="h-full flex flex-col">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
}

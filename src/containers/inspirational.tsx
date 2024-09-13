import { Carousel } from "../components/EmblaCarousel/carousel";
import Model1 from "../assets/firstCarousel/woman-dress.png";
import Thumb1 from "../assets/firstCarousel/home-aimodel-index1.webp.png";
import Thumb2 from "../assets/firstCarousel/home-aimodel-index2.webp.png";
import Thumb3 from "../assets/firstCarousel/home-aimodel-index3.webp.png";
import Thumb4 from "../assets/firstCarousel/home-aimodel-index4.webp.png";
import { Button } from "../components/buttons/button";
import { FaCheckCircle } from "react-icons/fa";

const carousel1 = [
  {
    id: 0,
    url: Model1,
    thumbImg: Thumb1,
  },
  {
    id: 1,
    url: Model1,
    thumbImg: Thumb2,
  },
  {
    id: 2,
    url: Model1,
    thumbImg: Thumb3,
  },
  {
    id: 3,
    url: Model1,
    thumbImg: Thumb4,
  },
];

export function Inspirational() {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="flex justify-center gap-24 items-center">
        <Carousel data={carousel1} />
        <div className="flex flex-col justify-center items-start w-96 gap-2">
          <h1 className="text-[30px] font-bold text-[#333333]">
            From flatlay to model
          </h1>
          <div className="flex gap-4 items-start">
            <FaCheckCircle size={24} />
            <p className="text-[16px] text-[#97A0B4]">
              Transform flat lay clothing images into stunning visuals with
              AI-generated models
            </p>
          </div>
          <div className="flex gap-4 items-start">
            <FaCheckCircle size={24} />
            <p className="text-[16px] text-[#97A0B4]">
              Generate unlimited realistic human models in under 60 seconds
            </p>
          </div>
          <div className="flex gap-4 items-start">
            <FaCheckCircle size={24} />
            <p className="text-[16px] text-[#97A0B4]">
              Full control over AI model details including age, gender,
              ethnicity, hair color and expressions
            </p>
          </div>
          <div className="flex gap-4 items-start">
            <FaCheckCircle size={24} />
            <p className="text-[16px] text-[#97A0B4]">
              Full control over the background, including indoor and outdoor
              settings, using prompts
            </p>
          </div>
          <div className="flex gap-4 items-start">
            <FaCheckCircle size={24} />
            <p className="text-[16px] text-[#97A0B4]">
              Full control to generate complementary garments for your flatlay
              using prompts
            </p>
          </div>
          <Button title="Improve your images for free" />
        </div>
      </div>
      <div>
        <Carousel data={carousel1} />
      </div>
    </div>
  );
}

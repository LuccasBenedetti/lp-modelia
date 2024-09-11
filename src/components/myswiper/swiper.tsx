import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import HeroModel from "../../assets/model-hero.png";
import "swiper/css";
import "../myswiper/index.css";

export function MySwiper() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={HeroModel} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HeroModel} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

import { Carousel } from "../components/EmblaCarousel/carousel";

const carousel1 = [
  {
    id: 1,
    url: "https://www.mercadolivre.com.br",
    thumbImg: "https://www.mercadolivre.com.br",
  },
  {
    id: 2,
    url: "https://www.etsy.com",
    thumbImg: "https://www.etsy.com",
  },
];

export function Hero() {
  return (
    <div className="h-full flex flex-col">
      <Carousel />
    </div>
  );
}

import heroModel from "../assets/model-hero.png";
import logoMercadolivre from "../assets/logo-mercadolivre.svg";
import logoEtsy from "../assets/logo-etsy.svg";
import logoLazada from "../assets/logo-lazada.svg";
import logoShopify from "../assets/logo-shopify.svg";
import logoShopee from "../assets/logo-shopee.svg";
import logoEbay from "../assets/logo-ebay.svg";
import logoAmazon from "../assets/logo-amazon.svg";
import logoAllegro from "../assets/logo-allegro.svg";

export function Hero() {
  return (
    <div>
      <div className=" bg-[url('./background-hero.png')] bg-cover bg-no-repeat flex-col gap-60 flex items-center justify-center py-20 text-white">
        <img src={heroModel} alt="" className="mt-32" />
      </div>
      <div className="flex flex-col items-center bg-gradient-to-b from-[#E1E1E1] to-[#828280] text-white font-bold h-60 gap-9">
        <div className="mt-16 mb-8">
          Perfect for use across all these platforms
        </div>
        <div className="flex items-center justify-center gap-16">
          <img src={logoMercadolivre} alt="" />
          <img src={logoEtsy} alt="" />
          <img src={logoLazada} alt="" />
          <img src={logoShopify} alt="" />
          <img src={logoShopee} alt="" />
          <img src={logoEbay} alt="" />
          <img src={logoAmazon} alt="" />
          <img src={logoAllegro} alt="" />
        </div>
      </div>
    </div>
  );
}

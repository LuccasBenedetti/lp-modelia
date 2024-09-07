import heroModel from "../assets/model-hero.png";

export function Hero() {
  return (
    <div className=" bg-[url('./background-hero.png')] bg-cover bg-no-repeat flex-col gap-40 flex items-center justify-center py-20">
      <img src={heroModel} alt="" className="mt-32"/>
      aqui vao as marcas
    </div>
  );
}

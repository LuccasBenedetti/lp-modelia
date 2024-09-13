import logoModelia from "../assets/logo-modelia.svg";
import { Button } from "./buttons/button";

export function Header() {
  return (
    <header className="bg-white shadow">
      <div className="flex px-5 items-center">
        <img src={logoModelia} alt="logo" className="h-16" />
        <div className="flex gap-9 ml-32">
          <a
            href=""
            className="border-b-4 border-transparent hover:border-black hover:font-semibold py-4"
          >
            GALLERY
          </a>
          <a
            href=""
            className="border-b-4 border-transparent hover:border-black hover:font-semibold py-4"
          >
            PLANS AND PRICING
          </a>
          <a
            href=""
            className="border-b-4 border-transparent hover:border-black hover:font-semibold py-4"
          >
            TAILORED SOLUTIONS
          </a>
          <a
            href=""
            className="border-b-4 border-transparent hover:border-black hover:font-semibold py-4"
          >
            COMMUNITY
          </a>
          <a
            href=""
            className="border-b-4 border-transparent hover:border-black hover:font-semibold py-4"
          >
            CONTACT US
          </a>
        </div>
        <Button title="Improve your images for free" className="ml-auto" />
      </div>
    </header>
  );
}

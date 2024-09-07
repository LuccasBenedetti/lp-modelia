import logoModelia from "../assets/logo-modelia.svg";

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
        <button className="bg-gradient-to-r from-[#ce7887] to-[#6d41e2] text-white font-bold py-2 px-4 rounded-sm ml-auto">
          Improve your images for free
        </button>
      </div>
    </header>
  );
}

import { useState } from "react";
import logo from "../assets/logo.webp";
import { RiCloseLine, RiMenu3Line } from "@remixicon/react";

const LINKS = [
  { name: "Services", link: "services" },
  { name: "Portfolio", link: "portfolio" },
  { name: "About", link: "about" },
  { name: "Reviews", link: "review" },
  { name: "Contact", link: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b-2 relative">
      <div className="max-w-7xl mx-auto flex items-center py-8 px-4">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <img src={logo} width={150} height={15} alt="VastuSpaze" />
        </a>

        {/* Right side (desktop menu + toggle) */}
        <div className="ml-auto flex items-center space-x-8">
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {LINKS.map((link, index) => (
              <a
                key={index}
                href={`#${link.link}`}
                className="uppercase text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute left-0 top-full w-full bg-neutral-50 py-5 px-4 border-b-4`}
      >
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={`#${link.link}`}
            onClick={() => setIsOpen(false)}
            className="uppercase text-lg font-medium block py-2 tracking-wide text-left"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

import { useState } from "react";
import NavbarItem from "./NavbarItem";
import cejlogo1 from "../../assets/cejlogo1.png";
import menu from "../../assets/menu.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Utilisation d'un état pour contrôler l'ouverture du menu sur mobile
  const navbarItems = [
    { href: "home", text: "ACCUEIL" },
    { href: "about", text: "DESCRIPTION" },
    { href: "expatriation" , text:"EXPATRIATION"},
    { href: "a_propos", text: "À PROPOS" },
    { href: "nos_projets", text: "PROJET" },
    { href: "service", text: "SERVICE" },
    { href: "contact", text: "CONTACT" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-black dark:border-gray-500">
      <div className="max-w-screen-2xl flex flex-col items-center justify-center mx-auto p-4">
        {/* Logo centré */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
          <img src={cejlogo1} className="h-20" alt="Flowbite Logo" />
        </a>

        {/* Bouton pour ouvrir le menu sur mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 dark:text-gray-400 focus:outline-none focus:text-gray-400 transition-transform duration-300"
          >
            <img
              src={menu}
              className={`h-10 menu-icon ${isMenuOpen ? 'rotate-90' : ''}`}
              alt="Flowbite Logo"
            />
          </button>
        </div>

        {/* Menu centré sous le logo */}
        <div className={`w-full ${isMenuOpen ? 'block' : 'hidden'} md:flex md:justify-center`}>
          <ul className="flex flex-col font-medium p-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-black dark:border-gray-900">
            {navbarItems.map((item) => (
              <NavbarItem key={item.text} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import NavbarItem from "./NavbarItem";
import logo from "../../assets/cejlogo2.png";

const navbarItems = [
  { href: "home", text: "HOME" },
  { href: "service", text: "SERVICE" },
  { href: "description", text: "DESCRIPTION" },
  { href: "a_propos", text: "À PROPOS" },
  { href: "nos_projets", text: "PROJET" },
  { href: "contact", text: "CONTACT" },
];

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-black dark:border-gray-700">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* logo */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-14" alt="Flowbite Logo" /> *
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            conseilej
          </span> */}
        </a>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-black dark:border-gray-700">
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

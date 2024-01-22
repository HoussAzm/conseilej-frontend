import { FC } from "react";

interface NavbarItemProps {
  text: string;
  href: string;
}

const NavbarItem: FC<NavbarItemProps> = ({ text, href }) => {
  return (
    <li>
      <a
        href={`#${href}`}
        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" id="navitem"
      >
        {text}
      </a>
    </li>
  );
};

export default NavbarItem;

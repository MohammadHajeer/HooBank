import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { useState } from "react";
const Navbar = () => {
  const [navBar, setNavBar] = useState(false);
  return (
    <div className="container flex justify-between items-center">
      <div>
        <img src={logo} alt="" width={114} />
      </div>
      <nav className="max-sm:hidden z-10">
        <ul className="flex gap-14">
          {navLinks.map((link) => (
            <li key={link.id} className="text-white cursor-pointer">
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="sm:hidden">
        <div onClick={() => setNavBar((p) => !p)} className="cursor-pointer">
          <img
            src={navBar ? close : menu}
            alt="menu icom"
            className="w-[28px] h-[28px]"
          />
        </div>
        {navBar && (
          <nav
            className="absolute bg-black-gradient-2 rounded-2xl sidebar
         w-[90%] left-1/2 -translate-x-1/2 p-10 top-20"
          >
            <ul className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <li key={link.id} className="text-white cursor-pointer">
                  <a href={link.id}>{link.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Navbar;

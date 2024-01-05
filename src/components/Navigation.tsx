"use client";

// components/Navigation.tsx

import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

interface NavigationProps {
  menuId: string;
  links: { href: string; label: string }[];
}

const Navigation: React.FC<NavigationProps> = ({ menuId, links }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='flex justify-between items-center rounded-md bg-pink-500 p-4 mx-20'>
      <input
        type='checkbox'
        id={menuId}
        className='hidden'
        checked={isMenuOpen}
      />
      <label
        htmlFor={menuId}
        className='menu-icon text-white cursor-pointer'
        onClick={toggleMenu}
      >
        {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </label>
      <div
        id='nav-menu'
        className={`lg:flex ${isMenuOpen ? "flex" : "hidden"}`}
      >
        <ul
          className={`flex flex-col lg:flex-row ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          {links.map((link, index) => (
            <li key={index} className='lg:ml-4'>
              <a href={link.href} className='text-white' onClick={toggleMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

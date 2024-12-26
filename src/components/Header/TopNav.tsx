"use client";

import { LOGO_HEADER } from "@/constants/IMAGES";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import MobileMenu from "./MobileMenu";
import { menuItems } from "@/constants/menu";

function TopNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative min-h-32 border-b border-white border-opacity-20 flex items-center px-5 md:px-20 space-x-20">
      <div className="xl:max-w-md w-full  h-full flex items-center justify-between">
        <Link href={"/"} className="h-full">
          <img
            src={LOGO_HEADER.src}
            alt="logo"
            className="h-14 md:h-20 w-auto"
          />
        </Link>
        <div className="xl:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </button>
        </div>
      </div>
      <div className="hidden xl:flex flex-1 text-white items-center justify-between">
        <nav className="">
          <div className="hidden md:flex space-x-4">
            {menuItems.map((item) => (
              <Link
                className="px-5 py-2 uppercase text-sm"
                key={item.name}
                href={item.href}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </div>
  );
}

export default TopNav;

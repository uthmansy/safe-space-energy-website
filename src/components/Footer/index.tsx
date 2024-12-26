import React from "react";
import Container from "../Container";
import Link from "next/link";
import { LOGO, LOGO_WHITE } from "@/constants/IMAGES";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { menuItems } from "@/constants/menu";

function Footer() {
  return (
    <footer className="bg-dark text-white py-24 md:py-28">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-32 lg:gap-40 border-b border-white border-opacity-50 pb-10">
          <div className="flex flex-col space-y-0">
            <Link href={"/"}>
              <div className="flex items-center space-x-3">
                <img src={LOGO_WHITE.src} alt="logo" className="h-14 md:h-16" />
              </div>
            </Link>
            <p className="max-w-md  font-normal">
              Thank you for choosing Safe Space Energy.
            </p>
          </div>
          <div>
            <nav className="font-semibold">
              <div className="flex flex-col space-y-2">
                {menuItems.map((item) => (
                  <Link
                    className="uppercase text-sm"
                    key={item.name}
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
          <div>
            <h4 className="uppercase font-bold mb-2 tracking-wider text-white">
              Contact
            </h4>
            <ul className="flex flex-col space-y-3">
              <li className="opacity-70">info@sifaworld.com</li>
              <li className="font-normal">
                <span className="font-semibold">Head Office:</span>

                <address className="italic opacity-70">
                  No. 4 Fez Street, Off Kumasi Crescent, Aminu Kano, Wuse 2,
                  Abuja.
                </address>
              </li>
              {/* <li>+234 000 000 0000</li> */}
            </ul>
          </div>
        </div>
        <div className="flex flex-col space-y-3 items-center pt-24">
          <div className="flex items-center space-x-3">
            <Link
              href={"x.com"}
              className="w-10 h-10 flex items-center justify-center border rounded-full text-white"
            >
              <FaTwitter />
            </Link>
            <Link
              href={"facebook.com"}
              className="w-10 h-10 flex items-center justify-center border rounded-full text-white"
            >
              <FaFacebook />
            </Link>
            <Link
              href={"instagram.com"}
              className="w-10 h-10 flex items-center justify-center border rounded-full text-white"
            >
              <FaInstagram />
            </Link>
          </div>
          <p className="w-fit opacity-70">
            &copy; Copyright, All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

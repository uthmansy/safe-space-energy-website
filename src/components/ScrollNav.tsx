"use client";
import { menuItems } from "@/constants/menu";
import Link from "next/link";
import React, {
  MutableRefObject,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import MobileMenu from "./Header/MobileMenu";
import { LOGO, LOGO_HEADER } from "@/constants/IMAGES";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Container from "./Container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Props {
  containerRef: MutableRefObject<null>;
}

function ScrollNav({ containerRef }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      navRef.current,
      { y: "-200%" }, // Start with the image completely hidden (width = 0)
      {
        y: 0,
        duration: 1.5, // Duration of the animation
        ease: "power3.inOut", // Smooth easing effect
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top -100px",
          toggleActions: "play reverse play reverse", // Play animation once
        },
      }
    );
  }, []);

  return (
    <div
      ref={navRef}
      className="fixed -translate-y-24 w-full z-30 bg-white shadow-md"
    >
      <Container>
        <div className="relative min-h-24 border-b border-white border-opacity-20 flex items-center justify-between space-x-20">
          <div className="xl:max-w-md w-full  h-full flex items-center justify-between">
            <Link href={"/"} className="h-full">
              <img src={LOGO.src} alt="logo" className="h-14 md:h-16 w-auto" />
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
          <div className="hidden xl:flex items-center justify-between">
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
      </Container>
    </div>
  );
}

export default ScrollNav;

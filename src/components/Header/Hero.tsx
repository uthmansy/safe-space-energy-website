import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

interface Props {
  currentSlide: number;
  titlesRef: React.MutableRefObject<HTMLElement[]>;
  nextSlide: () => void;
  prevSlide: () => void;
}

function Hero({ currentSlide, titlesRef, nextSlide, prevSlide }: Props) {
  const titles: string[] = [
    `Welcome to Sifa World.`,
    `Innovative Solutions, Endless Possibilities.`,
    `Building Future, One Deal at a Time.`,
  ];

  return (
    <div className="px-5 md:px-20 flex flex-col space-y-10">
      <div>
        <h1 className="text-3xl md:text-6xl uppercase font-light font-heading leading-[3rem] md:leading-[5rem]">
          Welcome to Safe Space Energy!
        </h1>
        <h1 className="text-3xl md:text-6xl uppercase font-semibold text-primary font-heading leading-[3rem] md:leading-[5rem]">
          Clean Energy
        </h1>
      </div>
      <div>
        <Link
          href={"/contact"}
          className="uppercase border rounded-xl py-5 px-7"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default Hero;

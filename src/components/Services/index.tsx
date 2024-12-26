import React, { ReactNode, useLayoutEffect, useRef } from "react";
import Container from "../Container";
import {
  HERO_1,
  SERVICES_ICON_1,
  SERVICES_ICON_2,
  SERVICES_ICON_3,
  SERVICES_ICON_4,
} from "@/constants/IMAGES";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TfiSettings } from "react-icons/tfi";

interface Service {
  title: string;
  icon: ReactNode;
  description: string;
}

function Services() {
  const services: Service[] = [
    {
      title: "CNG Conversion",
      description: `
Switching to CNG has never been easier! Our expert team specializes in converting vehicles from petrol (PMS) to CNG. Enjoy the benefits of reduced fuel costs, lower emissions, and enhanced efficiency.`,
      icon: <TfiSettings />,
    },
    {
      title: "CNG Conversion Kits",
      description: `
We offer top-quality conversion kits tailored to fit a wide range of vehicles. Our kits are designed to ensure durability, safety, and optimal performance. Choose Safe Space Energy for reliable, state-of-the-art technology.`,
      icon: <TfiSettings />,
    },
    {
      title: "Consultancy",
      description: `
Navigating the energy transition? Our consultancy team provides expert advice on integrating CNG into your operations. Whether you are a fleet owner, business operator, or individual, we offer customized solutions to maximize your energy efficiency and savings.`,
      icon: <TfiSettings />,
    },
    {
      title: "CNG Filling Stations",
      description: `
Fuel your journey with ease at our strategically located CNG filling stations. Our stations are equipped with advanced technology for quick, safe, and seamless refueling experiences. Locate a Safe Space Energy filling station near you today!`,
      icon: <TfiSettings />,
    },
  ];

  const containerRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".service",
      { opacity: 0, y: 100 }, // Start with the image completely hidden (width = 0)
      {
        opacity: 1,
        y: 0, // Expand to full width
        duration: 1.5, // Duration of the animation
        ease: "power3.out", // Smooth easing effect
        stagger: 0.3,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%", // Start animation when image enters viewport
          // toggleActions: "play none none none", // Play animation once
        },
      }
    );
  }, []);

  return (
    <section className="relative">
      <div className="absolute hidden md:block top-0 bottom-0 left-0 w-[50%] h-full z-0">
        <img
          src={HERO_1.src}
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: "brightness(25%)" }}
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 h-full w-full bg-secondary opacity-65" />
      </div>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 py-24 md:py-28 gap-20 relative">
          <div className="md:text-white">
            <h2 className="text-4xl md:text-6xl font-semibold mb-10">
              Our services
            </h2>
            <p className="opacity-70">
              At Safe Space Energy, we offer a comprehensive range of services
              designed to meet your energy needs effectively. From cutting-edge
              technology to expert consultancy, we ensure that every solution is
              tailored to deliver value, efficiency, and sustainability. Whether
              you're transitioning to CNG, seeking quality equipment, or looking
              for a reliable fuel supply, we've got you covered.
            </p>
          </div>
          <div
            ref={containerRef}
            className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-7"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="service flex flex-col space-y-8 shadow-md p-14 border bg-white justify-between"
              >
                <div className="flex flex-col space-y-3">
                  <div className="text-5xl text-primary">{service.icon}</div>
                  <h3 className="uppercase font-bold">{service.title}</h3>
                  <span className="w-14 h-[2px] opacity-70 bg-primary"></span>
                </div>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Services;

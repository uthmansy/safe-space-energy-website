"use client";
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Services from "@/components/Services";
import { useEffect, useLayoutEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      //@ts-ignore
      const locomotiveScroll = new LocomotiveScroll({
        smooth: true,
        tablet: {
          breakpoint: 0,
        },
      });
    })();
  }, []);

  return (
    <div className="w-full h-screen bg-black text-white flex items-center justify-center">
      <h1 className="text-3xl">Site Under Construction</h1>
      {/* <Header />
      <AboutUs />
      <Services />
      <Contact />
      <Footer /> */}
    </div>
  );
}

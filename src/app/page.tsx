"use client";
import AboutUs from "@/components/AboutUs";
import BannerOne from "@/components/BannerOne";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollNav from "@/components/ScrollNav";
import Services from "@/components/Services";
import { useEffect, useLayoutEffect, useRef } from "react";

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

  const containerRef = useRef(null);

  return (
    // <div className="w-full h-screen bg-black text-white flex items-center justify-center">
    //   <h1 className="text-3xl">Site Under Construction</h1>
    //   {/* <Header />
    //   <AboutUs />
    //   <Services />
    //   <Contact />
    //   <Footer /> */}
    // </div>
    <>
      <ScrollNav containerRef={containerRef} />
      <div ref={containerRef} className="">
        <Header />
        <AboutUs />
        <BannerOne />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

"use client";
import React from "react";
import Container from "../Container";
import { TfiLayoutGrid2 } from "react-icons/tfi";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsTools } from "react-icons/bs";
import {
  PiFingerprintThin,
  PiFireExtinguisherLight,
  PiFireTruckThin,
  PiMicrosoftTeamsLogoThin,
} from "react-icons/pi";

function AboutUs() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="bg-gray-100 absolute top-0 left-0 w-1/2 h-full bottom-0 hidden md:block"></div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-24 lg:gap-32">
          <div className="relative flex flex-col space-y-10">
            <header className="flex flex-col space-y-5">
              <span className="text-primary leading-[0] text-lg">
                Welcome to
              </span>
              <h2 className="text-2xl md:text-5xl font-heading">
                Safe Space Energy
              </h2>
              <div className="w-24 h-[2px] bg-primary"></div>
            </header>
            <div className="flex flex-col space-y-5 max-w-md">
              <p>
                Safe Space Energy is a forward-thinking company committed to
                driving the adoption of sustainable energy alternatives. Our
                mission is to empower individuals and businesses to make
                smarter, greener energy choices without sacrificing convenience
                or reliability. With a passionate team and cutting-edge
                solutions, we’re redefining the future of energy.
              </p>
              <p>
                At Safe Space Energy, we are dedicated to providing innovative
                and sustainable energy solutions for today’s dynamic world. With
                a focus on Compressed Natural Gas (CNG) technologies, we aim to
                revolutionize how individuals and businesses meet their energy
                needs while contributing to a greener planet.
              </p>
            </div>
            <div className="flex flex-col space-y-0">
              <span className="font-semibold">Nazir Alhassan</span>
              <span className=" text-primary">Group Managing Director</span>
            </div>
          </div>
          <div className="relative">
            <h2 className="text-3xl mb-10 md:absolute top-[0%] -right-32 md:text-7xl md:font-black md:opacity-15 md:scale-150">
              Why Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 md:gap-y-20">
              <div className="flex flex-col space-y-2 md:space-y-5">
                <span>
                  <PiFireTruckThin className="text-4xl md:text-6xl" />
                </span>
                <h3 className="font-semibold">Comprehensive Support</h3>
                <p>
                  From consultation to installation and maintenance, we’re with
                  you every step of the way.
                </p>
              </div>
              <div className="flex flex-col space-y-2 md:space-y-5">
                <span>
                  <PiFingerprintThin className="text-4xl md:text-6xl" />
                </span>
                <h3 className="font-semibold">Smart Technology</h3>
                <p>
                  Save money on fuel without compromising performance by
                  switching to Compressed Natural Gas.
                </p>
              </div>
              <div className="flex flex-col space-y-2 md:space-y-5">
                <span>
                  <PiMicrosoftTeamsLogoThin className="text-4xl md:text-6xl" />
                </span>
                <h3 className="font-semibold">Team of Professionals</h3>
                <p>
                  Our Team of engineers has a wealth of experience, we are a
                  trusted leader in CNG technology and services.
                </p>
              </div>
              <div className="flex flex-col space-y-2 md:space-y-5">
                <span>
                  <PiFireExtinguisherLight className="text-4xl md:text-6xl" />
                </span>
                <h3 className="font-semibold">Safety</h3>
                <p>
                  Your safety is our priority. Our products and services comply
                  with the highest industry standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutUs;

import React from "react";
import Container from "../Container";
import { ContactForm } from "../ContactForm";
import { FaEnvelope, FaMapMarkerAlt, FaMapPin, FaPhone } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";

function Contact() {
  return (
    <section className="pt-24 md:pt-28 relative bg-gray-100">
      <div className="absolute bg-dark h-32 bottom-0 left-0 right-0 w-full z-0" />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-28 lg:gap-40 relative">
          <div className="flex flex-col space-y-10">
            <h3 className="font-bold text-3xl uppercase">Get In Touch</h3>
            <p className="opacity-80 max-w-md">
              Ready to make the switch to a safer, greener energy solution? Get
              in touch with us today!
            </p>
            <div className="flex flex-col space-y-5">
              <div className="flex items-center space-x-10">
                <FaEnvelope className="text-primary text-2xl" />
                <span className="opacity-70">info@safespaceenergy.com</span>
              </div>
              {/* <div className="flex items-center space-x-10">
                <FaSquarePhone className="text-primary text-2xl" />
                <span className="opacity-70">+234 000 000 0000</span>
              </div> */}
              <div className="flex items-center space-x-10">
                <FaMapMarkerAlt className="text-primary text-2xl" />
                <span className="opacity-70">
                  Head Office: No. 4 Fez Street, Off Kumasi Crescent, Aminu
                  Kano, Wuse 2, Abuja.
                </span>
              </div>
            </div>
          </div>
          <div className="shadow-md bg-white px-10 py-20">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;

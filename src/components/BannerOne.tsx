import React from "react";
import Container from "./Container";
import Link from "next/link";

export default function BannerOne() {
  return (
    <section className="bg-dark text-primary py-10">
      <Container>
        <div className="flex flex-col md:flex-row md:space-x-20 space-x-0 space-y-10 md:space-y-0 md:items-center">
          <p className="flex-1 text-3xl font-semibold">
            Reduce your carbon footprint and contribute to a cleaner
            environment.
          </p>
          <Link
            href={"/contact"}
            className="uppercase bg-primary text-dark font-normal rounded-xl py-5 px-7 w-fit"
          >
            Contact Us
          </Link>
        </div>
      </Container>
    </section>
  );
}

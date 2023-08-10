'use client';

import Image from "next/image";
import Container from "../Container";
import TypeWriter from "./TypeWriter";
import Button from "../Button";

const Hero = () => {
  return (
    <section id="hero-section" className="w-full py-10 md:p-14 lg:p-18">
      <Container className="w-full mx-auto py-5 md:p-10 flex flex-col md:flex-row items-center max-w-[1600px] h-full overflow-hidden">
        <div className="font-semibold flex flex-col justify-center items-center md:items-start px-8">
          <div className="md:my-5 flex flex-col justify-center md:space-y-4">
            <div className="md:text-5xl text-3xl text-gray-800 text-center md:text-left">
              Organize Your
            </div>
            <div className="mx-auto md:mx-0 md:text-5xl text-3xl text-primary-main">
              <TypeWriter />
            </div>
            <div className="sm:text-md md:text-xl text-gray-800 leading-tight text-center md:text-left max-w-[768px] py-10">
              Don&apos;t let email and spreadsheets slow you down. Use JoinSlip
              to collect, search, sort, and update member data. Assign roles and
              set statuses with tags. Answer member questions with build-in
              chat. Everything in one lightweight tool.
            </div>
          </div>
          <div className="sm:pb-2">
          <Button label="Get Started Now" onClick={() => {}}></Button>
          </div>
        </div>
        <Image
          className="hidden md:flex p-10 max-w-500px max-h-500px bg-gray-100 rounded-xl shadow-lg transform hover:scale-[102%] transition duration-750"
          src={"/images/hero.svg"}
          width={500}
          height={500}
          alt="Image"
        />
      </Container>
    </section>
  );
};

export default Hero;

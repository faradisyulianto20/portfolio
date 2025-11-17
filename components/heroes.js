"use client";

import CustomButton from "@/components/button";
import Image from "next/image";
import Link from "next/link";
import { TypingAnimation } from "./ui/typing-animation";


import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Heroes() {
  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  return (
    <div className="min-h-screen relative flex flex-col text-[var(--white)] py-20 md:py-32 justify-center items-center w-full gap-3 md:gap-6 px-6 md:px-12">
      <div className="absolute inset-0 w-screen gap-3 md:gap-6 px-6 md:px-12 -ml-[50vw] left-[50%]">
        <Image
          src="/hero-bg.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      <div className="relative w-full md:text-center z-10">
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[86px] absolute top-1 sm:top-2 left-0 right-0 text-[var(--light)] flex flex-col"
          aria-hidden="true"
        >
            Hello, I`m
          <TypingAnimation className={"leading-18"}>
            Faradis Yulianto
          </TypingAnimation>
        </h1>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[86px] relative z-10 flex flex-col">
            Hello, I`m
          <TypingAnimation className={"leading-18"}>
            Faradis Yulianto
          </TypingAnimation>
        </h1>
      </div>

      <div className="relative w-full md:text-center z-10">
        <h4
          className="text-lg sm:text-xl md:text-2xl lg:text-[24px] absolute top-0 left-0 right-0 opacity-30"
          aria-hidden="true"
        >
          Software Engineering Student at Universitas Gadjah Mada
        </h4>
        <h4 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] relative z-10">
          Software Engineering Student at Universitas Gadjah Mada
        </h4>
      </div>
      <div className="flex md:justify-center w-full z-10" data-aos = "fade-up">
        <Link href="#profile">
          <CustomButton text={"Continue"} scroll="true" />
        </Link>
      </div>
    </div>
  );
}

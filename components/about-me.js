"use client";

import Image from "next/image";
import { useState } from "react";
import GlareHover  from "./GlareHover";

export default function AboutMe() {
  const [type, setType] = useState("web");

  return (
    <div className="text-white grid grid-cols-1 lg:grid-cols-2 w-full gap-8 py-16 px-8" >
      <aside className="flex flex-col gap-6 justify-center" data-aos="fade-right">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 text-center">
          <div
            className={`border-2 border-white p-4 cursor-pointer transition-all duration-300 ${
              type === "web"
                ? "bg-[var(--yellow)] text-black"
                : "hover:bg-[var(--yellow)] hover:text-black"
            }`}
            onClick={() => setType("web")}
          >
            Web Development
          </div>
          <div
            className={`border-2 border-white p-4 cursor-pointer transition-all duration-300 ${
              type === "cv"
                ? "bg-[var(--yellow)] text-black"
                : "hover:bg-[var(--yellow)] hover:text-black"
            }`}
            onClick={() => setType("cv")}
          >
            Computer Vision
          </div>
          <div
            className={`border-2 border-white p-4 cursor-pointer transition-all duration-300 ${
              type === "ui-ux"
                ? "bg-[var(--yellow)] text-black"
                : "hover:bg-[var(--yellow)] hover:text-black"
            }`}
            onClick={() => setType("ui-ux")}
          >
            UI/UX
          </div>
        </div>

        {type === "web" ? (
          <div>
            <h1 className="text-3xl md:text-6xl text-[var(--yellow)]">
              Web Development
            </h1>
            <p className="text-md md:text-xl text-gray-300">
              Experienced in building modern web applications using React,
              Next.js, and Tailwind CSS.
            </p>
          </div>
        ) : type === "cv" ? (
          <div>
            <h1 className="text-3xl md:text-6xl text-[var(--yellow)]">
              Computer Vision
            </h1>
            <p className="text-md md:text-xl text-gray-300">
              Working with image processing, object detection, and machine
              learning models.
            </p>
          </div>
        ) : (
          <div>
            <h1 className="text-3xl md:text-6xl text-[var(--yellow)]">
              UI/UX Design
            </h1>
            <p className="text-md md:text-xl text-gray-300">
              Creating user-centered designs with focus on usability and
              aesthetics.
            </p>
          </div>
        )}
      </aside>

      <div className="flex items-center justify-center relative" data-aos="fade-up">
        <div
          className="absolute w-300px h-300px md:w-[350px] md:h-[350px] bg-[var(--dark-yellow)] skew-x-0 md:[transform:skewX(-10deg)] lg:[transform:skewX(-15deg)]"
          style={{
            transform: "translate(12px, 12px) skewX(-15deg)",
          }}
          aria-hidden="true"
        ></div>

          <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] bg-[var(--yellow)] flex items-center justify-center overflow-hidden skew-x-0 md:[transform:skewX(-10deg)] lg:[transform:skewX(-15deg)]" >
            <Image
              src="/adis.png"
              alt="profile-image"
              width={450}
              height={450}
              className="absolute h-full object-contain md:[transform:skewX(10deg)] lg:[transform:skewX(15deg)]"
            />
            <div className="text-2xl md:text-3xl absolute bottom-0 bg-[var(--dark)]/50 w-[200%] text-center py-2 md:[transform:skewX(10deg)] lg:[transform:skewX(15deg)]">
              Faradis Yulianto
            </div>
          </div>
      </div>
    </div>
  );
}

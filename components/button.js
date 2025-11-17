"use client"

import { Button } from "@/components/ui/button";

export default function CustomButton({ text, url = "", onClick, github}) {
  return (
    <a className="relative inline-block group cursor-pointer h-fit" href={github}>
      <div
        className="absolute inset-0 bg-[var(--dark-yellow)] translate-x-1 translate-y-1 transition-transform duration-150 cursor-pointer"
        aria-hidden="true"
      ></div>
      <div
        className="absolute inset-0 w-[110%] bg-[var(--yellow)] h-[80%] left-1/2 m-auto right-1/2 -translate-x-1/2 transition-all duration-150 group-hover:-translate-x-3/7 group-hover:w-[10%] group-hover:translate-y-1 cursor-pointer"
        aria-hidden="true"
      ></div>
      <Button className="relative z-10 bg-[var(--yellow)] text-black hover:bg-[var(--yellow)] transition-all duration-150 group-hover:translate-x-1 group-hover:translate-y-1 cursor-pointer" onClick={onClick}>
        {text}
      </Button>
    </a>
  );
}
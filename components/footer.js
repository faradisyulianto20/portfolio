import { Instagram, Linkedin, Github } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full bg-[var(--darker-dark)] text-white text-center py-12 gap-6 relative mt-24">
      
      <div
        className="absolute -top-12 left-0 w-full h-24 bg-gradient-to-b from-[var(--dark)] to-[var(--darker-dark)]"
        aria-hidden="true"
      ></div>

      <div className="flex gap-6 w-full justify-center items-center relative z-10 mb-4">
        <Instagram
          className="cursor-pointer hover:text-[var(--yellow)] transition-colors"
          size={28}
        />
        <Linkedin
          className="cursor-pointer hover:text-[var(--yellow)] transition-colors"
          size={28}
        />
        <Github
          className="cursor-pointer hover:text-[var(--yellow)] transition-colors"
          size={28}
        />
      </div>
      <p className="text-xl relative z-10">@ Copyright 2025 | Faradis</p>
    </div>
  );
}

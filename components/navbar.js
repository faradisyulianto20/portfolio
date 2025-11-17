"use client";
import { useState, useEffect } from "react";
import { Instagram, Linkedin, FileText, Mail } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 px-6 md:px-16 lg:px-32 text-xl z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--darker-dark)] shadow-lg py-4"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center text-[var(--white)] text-shadow-lg">
        <div className="flex gap-3 items-center">
          <div className="text-2xl md:text-4xl font-bold shadow ">
            <span className="text-[var(--yellow)]">Port</span>
            <span className="text-[var(--lighter-dark)]">folio</span>
          </div>
          <div className="hidden md:flex gap-2 lg:gap-4 border-l-2 border-white pl-6">
            <a href="#projects">
              <p className="cursor-pointer hover:text-[var(--yellow)] transition-colors">
                Projects
              </p>
            </a>
            <a href="#contacts">
              <p className="cursor-pointer hover:text-[var(--yellow)] transition-colors">
                Contacts
              </p>
            </a>
          </div>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-opacity ${isOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>

        <div className="hidden md:flex gap-3 lg:gap-4 items-center">
          <a href="https://www.instagram.com/far.adis_/">
            <Instagram
              className="cursor-pointer hover:text-[var(--yellow)] transition-colors"
              size={24}
            />
          </a>
          <a href="https://www.linkedin.com/in/faradis-yulianto-76274a1b3/">
            <Linkedin
              className="cursor-pointer hover:text-[var(--yellow)] transition-colors"
              size={24}
            />
          </a>
          <a href="https://github.com/faradisyulianto20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="cursor-pointer hover:text-[var(--yellow)] transition-colors"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
          <a href="mailto:faradisy20@gmail.com">
            <Mail
              className="cursor-pointer hover:text-[var(--yellow)] transition-colors"
              size={24}
            />
          </a>
          <a href="/CV_Faradis_Yulianto.pdf" download="CV Faradis">
            <FileText
              className="cursor-pointer hover:text-[var(--yellow)] transition-colors"
              size={24}
            />
          </a>
        </div>
      </div>

      <div
        className={`text-white md:hidden fixed inset-0 bg-[var(--darker-dark)] transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 text-2xl">
          <a href="#projects">
            <p
              className="cursor-pointer hover:text-[var(--yellow)] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </p>
          </a>
          <a href="#contacts">
            <p
              className="cursor-pointer hover:text-[var(--yellow)] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contacts
            </p>
          </a>
          <div className="w-16 h-0.5 bg-white/30"></div>

          <div className="flex gap-6 items-center">
            <a href="https://www.instagram.com/far.adis_/">
              <Instagram
                className="cursor-pointer hover:text-[var(--yellow)] transition-colors"
                size={32}
                onClick={() => setIsOpen(false)}
              />
            </a>
            <a href="https://www.linkedin.com/in/faradis-yulianto-76274a1b3/">
              <Linkedin
                className="cursor-pointer hover:text-[var(--yellow)] transition-colors"
                size={32}
                onCli
                ck={() => setIsOpen(false)}
              />
            </a>
            <a href="https://github.com/faradisyulianto20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="cursor-pointer hover:text-[var(--yellow)] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a href="mailto:faradisy20@gmail.com">
              <Mail
                className="cursor-pointer hover:text-[var(--yellow)] transition-colors"
                size={32}
                onClick={() => setIsOpen(false)}
              />
            </a>
            <a href="/CV_Faradis_Yulianto.pdf" download="CV Faradis">
              <FileText
                className="cursor-pointer hover:text-[var(--yellow)] transition-colors"
                size={32}
                onClick={() => setIsOpen(false)}
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

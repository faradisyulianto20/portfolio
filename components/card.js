import Button from "@/components/button";
import Image from "next/image";

export default function Card({ title, description, date, github, demo }) {
  return (
    <div
      className={
        "border-2 border-white p-6 flex flex-col gap-6 bg-gradient-to-t from-[var(--darker-dark)] to-transparent transition-all duration-900 hover:scale-101 hover:shadow-2xl hover:border-[var(--yellow)] hover:-translate-y-1"
      }
      data-aos="fade-up"
      data-aos-once="true"
    >
      <div className="flex flex-col md:flex-row justify-between gap-3">
        <p className="text-4xl text-[var(--yellow)] transition-colors">
          {title}
        </p>
        <div className="flex gap-3">
          <Button text={"Github"} github={github} />
          {demo == "/Portfolio_FaradisYulianto.pdf" ? (
            <a href={demo} download={"Portofilo.pdf"}>
              <Button text={"View"} />
            </a>
          ) : (
            <a href={demo}>
              <Button text={"Demo"} />
            </a>
          )}
        </div>
      </div>
      <p className="text-gray-300 text-lg">{description}</p>
    </div>
  );
}

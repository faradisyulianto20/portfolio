import Button from "@/components/button";
import Image from "next/image";
import { useState } from "react";

export default function Card({
  title,
  description,
  date,
  github,
  demo,
  image,
}) {
  const [showAlert, setShowAlert] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % image.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + image.length) % image.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
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
              <a onClick={() => setShowAlert(true)}>
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

      {showAlert && (
        <div className="fixed inset-0 bg-white/10 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[var(--darker-dark)] border-2 border-[var(--yellow)] p-8 max-w-3xl w-full mx-4">
            <h3 className="text-2xl text-[var(--yellow)] mb-4">Preview</h3>
            
            <div className="relative mb-6">
              <div className="relative h-96 flex items-center justify-center bg-black/20">
                <Image
                  src={image[currentImageIndex]}
                  alt={`preview-image-${currentImageIndex}`}
                  width={600}
                  height={400}
                  className="object-contain max-h-full"
                />
              </div>

              {image.length > 1 && (
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-[var(--yellow)] text-black p-3 hover:bg-white transition-all"
                  aria-label="Previous image"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
              )}

              {image.length > 1 && (
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-[var(--yellow)] text-black p-3 hover:bg-white transition-all"
                  aria-label="Next image"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              )}

              {image.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 text-sm">
                  {currentImageIndex + 1} / {image.length}
                </div>
              )}
            </div>

            {image.length > 1 && (
              <div className="flex justify-center gap-2 mb-6">
                {image.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "bg-[var(--yellow)] w-8"
                        : "bg-gray-500 hover:bg-gray-300"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}

            <div className="flex gap-3 justify-end">
              <button
                onClick={() => {
                  setShowAlert(false);
                  setCurrentImageIndex(0);
                }}
                className="px-6 py-2 border-2 border-white text-white hover:bg-white hover:text-black transition-all"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
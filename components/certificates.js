import Heading from "@/components/heading";
import Button from "@/components/button";
import Image from "next/image";

const certificates = [
  {
    title: "Computer Vision",
    description: "Membahas dasar-dasar computer vision, termasuk image processing, feature extraction, dan penerapan model CV menggunakan Python.",
    type: "Kaggle",
    url: "Ini url download",
    src: "/cv.png",
  },
  {
    title: "Intermediate Machine Learning",
    description: "Mendalami teknik machine learning tingkat menengah seperti handling missing values, feature engineering, model tuning, dan penggunaan algoritma yang lebih kompleks.",
    type: "Kaggle",
    url: "Ini url download",
    src: "/iml.png",
  },
  {
    title: "Intro to Deep Learning",
    description: "Mengenal konsep-konsep fundamental deep learning, termasuk neural networks, backpropagation, dan implementasi model dasar dengan framework modern.",
    type: "Kaggle",
    url: "Ini url download",
    src: "/indl.png",
  },
  {
    title: "Intro to Machine Learning",
    description: "Memahami dasar-dasar machine learning seperti supervised learning, unsupervised learning, evaluasi model, dan algoritma yang umum digunakan.",
    type: "Kaggle",
    url: "Ini url download",
    src: "/inml.png",
  },
];

export default function Certificates() {
  return (
    <div className="text-white w-full">
      <Heading title={"Certificates"} variant={"green"} />
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 py-6 w-full">
        {certificates.map((certificate, index) => (
          <div
            className={
              "border-2 border-white p-6 flex flex-col gap-3 bg-[#352F63] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[var(--yellow)] hover:-translate-y-1 justify-between"
            }
            key={index}
            data-aos="zoom-in"
          >
            <Image
              alt="certificate"
              src={certificate.src}
              width={400}
              height={200}
              className="mx-auto"
            />
            <div className="flex flex-row justify-between gap-2">
              <p className="text-3xl text-wrap w-3/4 md:w-full">
                {certificate.title}
              </p>
              <div className="flex">
                <div
                  className={
                    "w-fit bg-gradient-to-l from-[#61F1E1] to-[#4CFD82] text-center p-2 h-fit text-black"
                  }
                >
                  {" "}
                  Kaggle{" "}
                </div>
              </div>
            </div>
            <p className="text-gray-300">{certificate.description}</p>
            <div
              className={
                "w-full bg-[#964DF9] text-center p-2 hover:bg-[#a466fb]"
              }
            >
              <a href="https://www.kaggle.com/faradisyulianto">View</a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

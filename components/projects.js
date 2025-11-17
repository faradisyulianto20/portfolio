"use client";

import Heading from "@/components/heading";
import Card from "@/components/card";
import Button from "@/components/button";

import { useState } from "react";

const projects = [
  {
    title: "Snacks Detection",
    description: `Aplikasi real-time yang mendeteksi berbagai jenis makanan menggunakan model YOLOv8 yang telah dilatih menggunakan dataset dari RoboFlow. Sistem memproses frame kamera secara langsung, melakukan inferensi objek makanan, lalu menampilkan bounding box, label, serta confidence score pada setiap frame. `,
    date: "2025",
    category: "Computer Vision",
    github: "https://github.com/faradisyulianto20/deteksi-makanan",
    demo: "/Portfolio_FaradisYulianto.pdf",
    image: [
      "/projects/snacks.png"
    ],
  },
  {
    title: "Emotion Detection",
    description: `Aplikasi real-time yang menggunakan landmark wajah sebagai fitur, kemudian 
melatih model Random Forest untuk mengklasifikasikan emosi (misalnya marah, 
senang, sedih). Model dilatih dengan membagi data lapangan (train / validation), 
kemudian hasil prediksi ditampilkan langsung di frame kamera.`,
    date: "2025",
    category: "Computer Vision",
    github: "https://github.com/faradisyulianto20/emotion-detection",
    demo: "/Portfolio_FaradisYulianto.pdf",
    image: [
      "/projects/emotion.png",
      "/projects/emotion1.png"
    ],
  },
  {
    title: "Text Detection",
    description: `Aplikasi real-time yang mendeteksi teks melalui kamera, menandai posisi teks 
dengan bounding box, dan menampilkan hasil OCR langsung pada frame video.`,
    date: "2025",
    category: "Computer Vision",
    github: "https://github.com/faradisyulianto20/text-detection",
    demo: "/Portfolio_FaradisYulianto.pdf",
    image: [
      "/projects/text.png",
      "/projects/text1.png",
    ],
  },
  {
    title: "Face Detection",
    description: `Aplikasi sederhana untuk mendeteksi wajah secara real-time menggunakan 
kamera dengan bantuan OpenCV.`,
    date: "2025",
    category: "Computer Vision",
    github: "https://github.com/faradisyulianto20/face-anomyzer",
    demo: "/Portfolio_FaradisYulianto.pdf",
    image: [
      "/projects/face.png",
      "/projects/face1.png",
    ],
  },
  {
    title: "Color Detection",
    description: `Program untuk mendeteksi objek berwarna sesuai dengan HEX yang diinputkan.`,
    date: "2025",
    category: "Computer Vision",
    github: "https://github.com/faradisyulianto20/color-detection",
    demo: "/Portfolio_FaradisYulianto.pdf",
    image: [
      "/projects/warna.png"
    ],
  },
  {
    title: "Ramadhan Di Kampus",
    description: "Website profile event Ramadhan di Kampus.",
    date: "Not Finished Yet",
    category: "Web Development",
    github: "",
    demo: "https://testing-rdk.vercel.app/",
  },
  {
    title: "Universitas Global Nusantara",
    description:
      "Website profil Universitas Global Nusantara dengan fitur untuk melakukan pendaftaran dan pembayaran mahasiswa baru.",
    date: "Not Finished Yet",
    category: "Web Development",
    github: "https://github.com/faradisyulianto20/universitas_global_nusantara",
    demo: "",
  },
  {
    title: "Deepseek AI Chat",
    description: `Web chatbot yang saya buat untuk belajar React, khususnya dalam membangun 
chatbox interaktif berbasis AI lokal dengan pengelolaan state dan input secara 
real-time.`,
    date: "2025",
    category: "Web Development",
    github: "https://github.com/faradisyulianto20/deepseek-chat",
    demo: "/Portfolio_FaradisYulianto.pdf",
    image: [
      "/projects/deepseek.png",
      "/projects/deepseek1.png",
    ],
  },
  {
    title: "First Portfolio",
    description: `Website pribadi yang menampilkan proyek dan kontak. Form contact terhubung 
langsung ke email melalui Firebase.`,
    date: "2025",
    category: "Web Development",
    github: "https://github.com/faradisyulianto20/porto",
    demo: "https://portfolio-faradisyulianto20s-projects.vercel.app/",
  },
  {
    title: "MasRio (Parody Mario)",
    description: `Mas Rio Coin Hunt, game adventure 2D berbasis labirin. Seorang petualang yang 
terjebak di dalam sebuah labirin berbentuk persegi dan di setiap sudut labirin, 
tersebar beberapa koin emas namun koin-koin tersebut dijaga oleh monster 
penjaga yang berkeliaran di dalam labirin.`,
    date: "2025",
    category: "Game",
    github: "https://github.com/xirenaaa/OOP-MasRio",
    demo: "/Portfolio_FaradisYulianto.pdf",
    image: [
      "/projects/mario.png",
      "/projects/masrio.png",
    ],
  },
  {
    title: "Golek Mobil",
    description: `Website GolekMobil dibuat untuk memenuhi tugas mata kuliah Pemrograman 
Web. Website ini menyediakan fitur untuk membeli dan menyewa mobil. 
Pengguna dapat melakukan registrasi akun, login, serta mengakses berbagai 
layanan terkait mobil. Terdapat bagian admin untuk melihat jumlah pembelian 
dan penyewaan serta untuk menambahkan dan juga menghapus data mobil.`,
    date: "2025",
    category: "Web Development",
    github: "https://github.com/faradisyulianto20/ppw_akhir",
    demo: "/Portfolio_FaradisYulianto.pdf",
    image: [
      "/projects/golekmobil.png",
      "/projects/golekmobil1.png",
      "/projects/golekmobil2.png",
      "/projects/golekmobil3.png",
    ],
  },
  {
    title: "E-Commerce",
    description: `Website e-commerce yang saya kembangkan untuk mempelajari konsep React 
seperti komponen, hooks, routing, dan Redux. Firebase digunakan untuk data 
dan autentikasi.`,
    date: "2025",
    category: "Web Development",
    github: "https://github.com/faradisyulianto20/belajar-react-firebase",
    demo: "/Portfolio_FaradisYulianto.pdf",
    image: [
      "/projects/ecommerce.png",
    ],
  },
  {
    title: "ASSETS",
    description: `Sebuah profile organisasi Himpunan Mahasiswa TRPL/ ASSETS bagian susunan 
kabinet.`,
    date: "2025",
    category: "Web Development",
    github: "https://github.com/d-arsya/assetsugm",
    demo: "/Portfolio_FaradisYulianto.pdf",
    image: [
      "/projects/assets.png",
      "/projects/assets2.png",
      "/projects/assets3.png",
      "/projects/assets4.png",
      "/projects/assets5.png",
    ],
  },
  {
    title: "Devil Gama Technology",
    description: `Website organisasi SMA untuk menampilkan informasi umum, program kerja, 
dan alur pendaftaran DGT.`,
    date: "2025",
    category: "Web Development",
    github: "https://github.com/faradisYulianto21/dgtech.github.io",
    demo: "https://dgtech-github-io.vercel.app/",
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Web Development", "Computer Vision", "Game"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="bg-[var(--lighter-dark)] text-white w-full my-12">
      <Heading title={"My Projects"} data-aos="fade-up" />
      <div className="w-full flex md:flex-row items-center my-8 gap-6 overflow-auto px-3 py-1">
        {categories.map((category, index) => (
          <Button
            text={category}
            key={index}
            onClick={() => setActiveFilter(category)}
          />
        ))}
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        {filteredProjects.map((project, index) => (
          <Card
            title={project.title}
            key={index}
            description={project.description}
            date={project.date}
            github={project.github}
            demo={project.demo}
            image={project.image}
          />
        ))}
      </section>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12 text-white/60">
          No projects found in this category.
        </div>
      )}
      <div className="text-center text-white/60 mb-4">
        Showing {filteredProjects.length} project
        {filteredProjects.length !== 1 ? "s" : ""}
      </div>
    </div>
  );
}

import Heading from "@/components/heading";
import Image from "next/image";

export default function CallToAction() {
  const skills = [
    { name: "Next.js", logo: "/logos/nextjs.svg" },
    { name: "React", logo: "/logos/react.svg" },
    { name: "TailwindCSS", logo: "/logos/tailwind.svg" },
    { name: "Vite", logo: "/logos/vite.svg" },
    { name: "Node.js", logo: "/logos/nodejs.svg" },
    { name: "PHP", logo: "/logos/php.svg" },
    { name: "Laravel", logo: "/logos/laravel.svg" },
    { name: "Javascript", logo: "/logos/javascript.svg" },
    { name: "Python", logo: "/logos/python.svg" },
    { name: "Java", logo: "/logos/java.png" },
    { name: "MySQL", logo: "/logos/mysql.png" },
    { name: "Firebase", logo: "/logos/firebase.svg" },
    { name: "Vercel", logo: "/logos/vercel.svg" },
  ];

  return (
    <div className="text-white py-12 text-center w-full">
    
      <h1 className="mx-auto text-4xl mb-8">What <span className="text-[var(--yellow)]">Skills</span> I Have Learned?</h1>
      <div className="flex gap-6 justify-center py-6 flex-wrap max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="flex flex-col items-center gap-2 p-4 hover:scale-110 transition-transform cursor-pointer border-2 border-[#1FDCB3] w-32 h-32 hover:border-[#ffe880] relative justify-center" data-aos="fade-up" data-aos-delay={index * 100}
          > 
            <div className="w-16 h-16 relative">
              <Image
                src={skill.logo}
                alt={`${skill.name} logo`}
                fill
                className="object-contain"
              />
            </div>
            <p className="absolute bottom-1 -right-2 text-md bg-[var(--dark)]">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
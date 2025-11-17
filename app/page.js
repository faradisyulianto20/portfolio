import Heroes from "@/components/heroes"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Projects from "@/components/projects"
import Certificates from "@/components/certificates";
import AboutMe from "@/components/about-me"
import CallToAction from "@/components/call-to-action"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-(--dark) font-sans dark:bg-black flex-col">
      <main className="flex min-h-screen w-full max-w-7xl flex-col items-center justify-between px-4 sm:px-8 md:px-16 dark:bg-black sm:items-start">
        <Navbar />
        <Heroes />
        <div id="profile" className="h-24">

        </div>
        <AboutMe />
        <Projects />
        <CallToAction />
        <Certificates />
      </main>
      <Footer />
    </div>
  );
}

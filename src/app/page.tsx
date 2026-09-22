import { AboutPage } from "@/components/home/AboutPage";
import { Hero } from "@/components/home/Hero";
import { Process } from "@/components/home/Process";
import { Services } from "@/components/home/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Process />
      <AboutPage />
    </main>
  );
}

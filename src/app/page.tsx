import { Hero } from "@/components/home/Hero";
import { Process } from "@/components/home/Process";
import { Services } from "@/components/home/Services";
import { Work } from "@/components/home/Work";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Process />
      <Work />
    </main>
  );
}

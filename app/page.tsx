import { PageTransition } from "@/components/page-transition";
import { About } from "@/components/sections/about";
import { Capabilities } from "@/components/sections/capabilities";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { Proof } from "@/components/sections/proof";
import { SelectedWork } from "@/components/sections/selected-work";

export default function Home() {
  return (
    <PageTransition>
      <div>
        <Hero />
        <SelectedWork />
        <About />
        <Process />
        <Capabilities />
        <Proof />
      </div>
    </PageTransition>
  );
}

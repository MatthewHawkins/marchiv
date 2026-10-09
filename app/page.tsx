import { Archive } from "@/components/Archive";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Salon } from "@/components/Salon";
import { SiteFooter } from "@/components/SiteFooter";
import { Steps } from "@/components/Steps";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Steps />
        <Archive />
        <Salon />
      </main>
      <SiteFooter />
    </>
  );
}

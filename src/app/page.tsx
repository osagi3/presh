import { About } from "@/components/About";
import { Approach } from "@/components/Approach";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Industries } from "@/components/Industries";
import { Promise } from "@/components/Promise";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { TrustedBy } from "@/components/TrustedBy";
import { WhyPrefelo } from "@/components/WhyPrefelo";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyPrefelo />
        <Approach />
        <Industries />
        <TrustedBy />
        <Testimonials />
        <Promise />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

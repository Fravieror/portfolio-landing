import {
  Header,
  Hero,
  Services,
  TechStack,
  CaseStudy,
  Contact,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <TechStack />
        <Services />
        <CaseStudy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

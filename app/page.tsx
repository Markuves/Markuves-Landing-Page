import {
  Header,
  Hero,
  TechnologySection,
  ProductSection,
  AudienceSection,
  LatamSection,
  ContactWaitlistSection,
  Footer,
} from "./components/LayoutSections";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pb-10 pt-4">
        <Hero />
        <TechnologySection />
        <ProductSection />
        <AudienceSection />
        <LatamSection />
        <ContactWaitlistSection />
      </main>
      <Footer />
    </div>
  );
}



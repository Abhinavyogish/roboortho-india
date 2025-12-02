import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Specialties } from "@/components/sections/Specialties";
import { WhyRobotic } from "@/components/sections/WhyRobotic";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Specialties />
        <WhyRobotic />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

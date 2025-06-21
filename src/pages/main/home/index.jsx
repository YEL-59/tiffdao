import About from "@/components/main/home/aboutus";
import Hero from "@/components/main/home/hero";
import ProcessSection from "@/components/main/home/process";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <>
      <div>
        <Hero />
      </div>
      <div>
        <About />
      </div>
      <div>
        <ProcessSection />
      </div>
    </>
  );
};

export default Home;

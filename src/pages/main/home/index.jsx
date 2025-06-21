import About from "@/components/main/home/aboutus";
import Bottom from "@/components/main/home/bottom";
import TestimonialCarousel from "@/components/main/home/carosule";
import Faq from "@/components/main/home/faq";
import Hero from "@/components/main/home/hero";
import ProcessSection from "@/components/main/home/process";
import Service from "@/components/main/home/service";
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
      {/* <div>
        <Service />
      </div>
      <div>
        <Faq />
      </div>
      <div>
        <TestimonialCarousel />
      </div>
      <div>
        <Bottom />
      </div> */}
    </>
  );
};

export default Home;

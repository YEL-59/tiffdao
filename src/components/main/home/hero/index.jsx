import { Button } from "@/components/ui/button";

import Bottomsvg from "@/assets/bottomsvg";
import heroimg from "../../../../assets/heroimg.jpg";
const Hero = () => {
  return (
    <div
      className="relative bg-center bg-no-repeat min-h-screen  text-white px-4 sm:px-6 md:px-12 bg-cover"
      style={{ fontFamily: '"Public Sans", sans-serif' }}
    >
      {/* Hero content */}

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-start max-w-2xl w-full mt-20  " data-aos="fade-up">
          <h1
            className="text-black text-[28px] xs:text-[32px] sm:text-[40px] md:text-[56px] lg:text-[65px] 2xl:text-[80px] 2xl:text-[86px] font-bold leading-tight mb-4"
            style={{ fontFamily: '"Public Sans", sans-serif' }}
          >
            <span className="text-[#F1C601]">Hassle-Free </span> Home Cleaning
            Services
          </h1>
          <p
            className="text-[#797979] font-public text-[14px] sm:text-[16px] md:text-[16px] 2xl:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[28px] mb-6"
            style={{ fontFamily: '"Public Sans", sans-serif' }}
          >
            Saving You Time and Eliminating Stress Through Quality Home
            Cleaning. Serving Orange County, California and Parts of San
            Bernardino and Riverside Counties.
          </p>
          <div data-aos="fade-up" data-aos-delay="300">
            <Button
              className="bg-[#0166A8] text-white text-[14px] sm:text-[16px] rounded-full font-public px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 hover:border-[#6049bc]"
              style={{ fontFamily: '"Public Sans", sans-serif' }}
            >
              Get Your Cleaning Consultant Now
            </Button>
          </div>
        </div>
        <div
          className="relative w-full max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-3xl mt-10 md:mt-20"
          data-aos="zoom-in"
        >
          <div
            className="absolute top-4 left-4 w-full h-full rounded-lg -z-10 hidden md:block"
            style={{ backgroundColor: "#4A90E2" }}
          ></div>
          <img
            src={heroimg}
            alt="Kitchen"
            className="relative rounded-lg w-full object-cover shadow-xl"
          />
        </div>
      </div>

      {/* Bottom SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-x-hidden hidden md:block">
        <Bottomsvg />
      </div>
    </div>
  );
};

export default Hero;

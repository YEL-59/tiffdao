import { Button } from "@/components/ui/button";
import herobg from "../../../../assets/herobg.png";

const Hero = () => {
  return (
    <div
      className="bg-center bg-no-repeat min-h-screen flex items-start justify-start text-white px-4 sm:px-8 md:px-12 bg-[length:120%] sm:bg-cover"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div
        className="text-start max-w-2xl w-full md:ml-20 mt-16 md:mt-32"
        data-aos="fade-up"
      >
        <h1 className="text-black font-public text-[28px] sm:text-[40px] md:text-[64px] lg:text-[80px] xl:text-[96px] font-bold leading-tight mb-4">
          <span className="text-[#F1C601]">Hassle-Free </span> Home Cleaning
          Services
        </h1>
        <p className="text-[#797979] font-public text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] mb-6">
          Saving You Time and Eliminating Stress Through Quality Home Cleaning.
          Serving Orange County, California and Parts of San Bernardino and
          Riverside Counties.
        </p>
        <div data-aos="fade-up" data-aos-delay="300">
          <Button className="bg-[#0166A8] text-white text-[14px] sm:text-[16px] rounded-full font-public px-6 py-4 sm:px-8 sm:py-5 mt-8 sm:mt-11 hover:border-[#6049bc]">
            Get Your Cleaning Consultant Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import { Button } from "@/components/ui/button";
import herobg from "../../../../assets/herobg.png";

const Hero = () => {
  return (
    <div
      className="bg-center bg-no-repeat min-h-screen flex items-start justify-start text-white px-4 sm:px-6 md:px-12 bg-cover"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div
        className="text-start max-w-2xl w-full mt-20 sm:mt-24 md:mt-32 md:ml-16 lg:ml-20"
        data-aos="fade-up"
      >
        <h1
          className="text-black text-[28px] xs:text-[32px] sm:text-[40px] md:text-[56px] lg:text-[65px] xl:text-[80px] 2xl:text-[86px] font-bold leading-tight mb-4"
          style={{ fontFamily: '"Public Sans", sans-serif' }}
        >
          <span className="text-[#F1C601]">Hassle-Free </span> Home Cleaning
          Services
        </h1>
        <p
          className="text-[#797979] font-public text-[14px] sm:text-[16px] md:text-[16px] 2xl:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[28px] mb-6"
          style={{ fontFamily: '"Public Sans", sans-serif' }}
        >
          Saving You Time and Eliminating Stress Through Quality Home Cleaning.
          Serving Orange County, California and Parts of San Bernardino and
          Riverside Counties.
        </p>
        <div data-aos="fade-up" data-aos-delay="300">
          <Button
            className="bg-[#0166A8] text-white text-[14px] sm:text-[16px] rounded-full font-public px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5  hover:border-[#6049bc]"
            style={{ fontFamily: '"Public Sans", sans-serif' }}
          >
            Get Your Cleaning Consultant Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

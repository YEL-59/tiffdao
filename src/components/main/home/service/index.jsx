import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon, HomeIcon, BrushIcon } from "lucide-react";
import img from "../../../../assets/service.png";

import img1 from "../../../../assets/service1.png";
import img2 from "../../../../assets/service2.png";
import img3 from "../../../../assets/service3.png";
const Service = () => {
  return (
    <section
      className="bg-[#197AB2] py-12 px-4 text-center relative sm:py-[60px] md:py-[120px] lg:[130px]"
      style={{ fontFamily: '"Public Sans", sans-serif' }}
    >
      <p className="text-sm text-[#FFF] font-medium uppercase">Our Services</p>
      <h2 className="text-white text-center font-sans text-[32px] md:text-[64px] font-bold leading-[80px]">
        What We Offer
      </h2>
      <p className="text-sm text-[#FFF] mt-1 max-w-xl mx-auto">
        Discover Our Structured and Reliable Process Designed to Deliver
        Consistent, High-Quality Cleaning Services with Efficiency and Care
      </p>
      <div className=" flex items-center justify-center md:justify-center py-15 md:py-0 pt-10 md:pt-20">
        <div>
          <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-6 items-stretch">
            {/* Clean Card */}
            <div className="relative flex flex-col h-[315px] w-[297px] group">
              <Card
                className="flex flex-col flex-1 overflow-hidden transition-colors duration-300 "
                style={{
                  clipPath:
                    "polygon(20% 0%, 80% 0%, 100% 0, 100% 100%, 50% 90%, 50% 90%, 0 100%, 0 0)",
                }}
              >
                <CardContent className="pt-0 flex flex-col flex-1 justify-center text-center">
                  <CardTitle className="text-black text-center font-sans text-[20px]  font-bold leading-[30px] max-w-[220px] mx-auto">
                    Standard house cleaning
                  </CardTitle>
                  <p className="text-sm text-gray-500  mt-2">
                    Week to week, month to month regular maintenance cleaning.
                    You can choose the rotation that suits you best.
                  </p>
                </CardContent>
              </Card>
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 bg-white rounded-full p-3 ">
                <div className="text-blue-600 w-36 h-36 border rounded-full">
                  <img src={img1} alt="" className="w-36 h-36 rounded-full" />
                </div>
              </div>
            </div>
            {/* Clean Card */}
            <div className="relative flex flex-col h-[315px] w-[297px] group">
              <Card
                className="flex flex-col flex-1 overflow-hidden transition-colors duration-300 "
                style={{
                  clipPath:
                    "polygon(20% 0%, 80% 0%, 100% 0, 100% 100%, 50% 90%, 50% 90%, 0 100%, 0 0)",
                }}
              >
                <CardContent className="pt-0 flex flex-col flex-1 justify-center text-center">
                  <CardTitle className="text-black text-center font-sans text-[20px]  font-bold leading-[30px] max-w-[220px] mx-auto">
                    Deep house cleaning
                  </CardTitle>
                  <p className="text-sm text-gray-500  mt-2">
                    One time cleanings with a focus on details and those hard to
                    reach cleaning areas that need extra elbow grease.
                  </p>
                </CardContent>
              </Card>
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 bg-white rounded-full p-3 ">
                <div className="text-blue-600 w-36 h-36 border rounded-full">
                  <img src={img2} alt="" className="w-36 h-36 rounded-full" />
                </div>
              </div>
            </div>
            {/* Clean Card */}
            <div className="relative flex flex-col h-[315px] w-[297px] group">
              <Card
                className="flex flex-col flex-1 overflow-hidden transition-colors duration-300 "
                style={{
                  clipPath:
                    "polygon(20% 0%, 80% 0%, 100% 0, 100% 100%, 50% 90%, 50% 90%, 0 100%, 0 0)",
                }}
              >
                <CardContent className="pt-0 flex flex-col flex-1 justify-center text-center">
                  <CardTitle className="text-black text-center font-sans text-[20px]  font-bold leading-[30px] max-w-[220px] mx-auto">
                    Moving in/out cleaning
                  </CardTitle>
                  <p className="text-sm text-gray-500  mt-2">
                    Are you moving in or moving out? These cleanings get your
                    home ready for the next tenant or owner so you can get your
                    deposit back.
                  </p>
                </CardContent>
              </Card>
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 bg-white rounded-full p-3 ">
                <div className="text-blue-600 w-36 h-36 border rounded-full">
                  <img src={img3} alt="" className="w-36 h-36 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute right-0 bottom-10">
        <img src={img} alt="" />
      </div>
    </section>
  );
};

export default Service;

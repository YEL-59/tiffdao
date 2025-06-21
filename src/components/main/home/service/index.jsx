import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon, HomeIcon, BrushIcon } from "lucide-react";
import img from "../../../../assets/service.png";

import img1 from "../../../../assets/service1.png";
import img2 from "../../../../assets/service2.png";
import img3 from "../../../../assets/service3.png";
const Service = () => {
  return (
    <section className="bg-[#197AB2] py-12 px-4 text-center">
      <p className="text-sm text-[#FFF] font-medium">Our Services</p>
      <h2 className="text-white text-center font-sans text-[64px] font-bold leading-[80px]">
        What We Offer
      </h2>
      <p className="text-sm text-[#FFF] mt-1 max-w-xl mx-auto">
        Discover Our Structured and Reliable Process Designed to Deliver
        Consistent, High-Quality Cleaning Services with Efficiency and Care
      </p>
      <div className="flex items-end justify-center md:justify-end py-15 md:py-0">
        <div>
          <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-4 gap-20 md:gap-6 items-stretch">
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
                    Sweeping and mopping floors
                  </CardTitle>
                  <p className="text-sm text-gray-500  mt-2">
                    Comprehensive Floor Care for a Clean and Polished Finish.
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
                    Sweeping and mopping floors
                  </CardTitle>
                  <p className="text-sm text-gray-500  mt-2">
                    Comprehensive Floor Care for a Clean and Polished Finish.
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
                    Sweeping and mopping floors
                  </CardTitle>
                  <p className="text-sm text-gray-500  mt-2">
                    Comprehensive Floor Care for a Clean and Polished Finish.
                  </p>
                </CardContent>
              </Card>
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 bg-white rounded-full p-3 ">
                <div className="text-blue-600 w-36 h-36 border rounded-full">
                  <img src={img3} alt="" className="w-36 h-36 rounded-full" />
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
                    Sweeping and mopping floors
                  </CardTitle>
                  <p className="text-sm text-gray-500  mt-2">
                    Comprehensive Floor Care for a Clean and Polished Finish.
                  </p>
                </CardContent>
              </Card>
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 bg-white rounded-full p-3 ">
                <div className="text-blue-600 w-36 h-36 border rounded-full">
                  <img src={img1} alt="" className="w-36 h-36 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <img src={img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Service;

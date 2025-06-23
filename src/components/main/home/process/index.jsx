import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon, HomeIcon, BrushIcon } from "lucide-react";

const ProcessSection = () => {
  return (
    <section className="bg-[#f0f6fb] py-10 md:py-30 px-4 text-center">
      <p className="text-xl text-blue-600 font-medium">PROCESS</p>
      <h2 className="text-xl md:text-6xl font-bold mt-2">How It Works</h2>
      <p className="text-sm text-[#797979] mt-1 max-w-xl mx-auto">
        Discover Our Structured and Reliable Process Designed to Deliver
        Consistent, High-Quality Cleaning Services with Efficiency and Care
      </p>

      <div className="container mx-auto mt-15 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {/* Clean Card */}
        <div className="relative flex flex-col h-[345px] group">
          <Card
            className="flex flex-col flex-1 overflow-hidden transition-colors duration-300 group-hover:bg-[#197AB2] group-hover:text-white"
            style={{
              clipPath: "polygon(0 0, 100% 34%, 100% 100%, 0% 100%)",
            }}
          >
            <CardContent className="pt-20 flex flex-col flex-1 justify-end text-center">
              <CardTitle className="text-[32px] font-bold text-[#0B0B0B] group-hover:text-white">
                Clean
              </CardTitle>
              <p className="text-sm text-[#797979] group-hover:text-white mt-2">
                Lorem ipsum dolor sit amet consectetur. Nunc fusce hendrerit
                risus lacinia in donec eleifend neque. Diam vitae non
                pellentesque ut et interdum tellus ultricies.
              </p>
              <Button className="mt-4 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300 bg-white text-blue-600 hover:bg-gray-100 self-center">
                Read More
              </Button>
            </CardContent>
          </Card>
          <div className="absolute -top-0 left-1/2 -translate-x-1/2 bg-white rounded-full p-5 shadow-2xl">
            <BrushIcon className="text-blue-600 w-12 h-12" />
          </div>
        </div>

        {/* Book Online */}
        <Card className="relative flex flex-col h-[345px] group bg-[#197AB2] text-white transition-colors duration-300 group-hover:bg-blue-800">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white rounded-full p-5 shadow-2xl">
            <CalendarIcon className="text-blue-600 w-12 h-12" />
          </div>
          <CardContent className="pt-20 flex flex-col flex-1 justify-end text-center">
            <CardTitle className="text-[32px] font-bold text-[#0B0B0B] group-hover:text-white">
              Book Online
            </CardTitle>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit amet consectetur. Nunc fusce hendrerit risus
              lacinia in donec eleifend neque. Diam vitae non pellentesque ut et
              interdum tellus ultricies.
            </p>
            <Button className="mt-4 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300 bg-white text-blue-600 hover:bg-gray-100 self-center">
              Read More
            </Button>
          </CardContent>
        </Card>

        {/* Sit Back & Relax */}
        <div className="relative flex flex-col h-[345px] group">
          <Card
            className="flex flex-col flex-1 overflow-hidden transition-colors duration-300 group-hover:bg-[#197AB2] group-hover:text-white"
            style={{
              clipPath: "polygon(0 34%, 100% 0, 100% 100%, 0% 100%)",
            }}
          >
            <CardContent className="pt-20 flex flex-col flex-1 justify-end text-center">
              <CardTitle className="text-[32px] font-bold text-[#0B0B0B] group-hover:text-white">
                Sit Back & Relax
              </CardTitle>
              <p className="text-sm text-gray-500 group-hover:text-white mt-2">
                Lorem ipsum dolor sit amet consectetur. Nunc fusce hendrerit
                risus lacinia in donec eleifend neque. Diam vitae non
                pellentesque ut et interdum tellus ultricies.
              </p>
              <Button className="mt-4 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300 bg-white text-blue-600 hover:bg-gray-100 self-center">
                Read More
              </Button>
            </CardContent>
          </Card>
          <div className="absolute -top-0 left-1/2 -translate-x-1/2 bg-white rounded-full p-5 shadow-2xl">
            <HomeIcon className="text-blue-600 w-12 h-12" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

import { Button } from "@/components/ui/button";
import img from "../../../../assets/bottom.png";

const Bottom = () => {
  return (
    <div
      className="relative bg-center  bg-no-repeat min-h-screen flex items-center justify-start text-white px-4 sm:px-8 md:px-12"
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* Content */}
      <div className="relative  container mx-auto text-start space-y-6">
        <h1 className="text-white font-public-sans text-5xl md:text-[64px] font-bold leading-[80px] max-w-xl">
          Having Problem? We’ll Fix It Today!
        </h1>
        <p className="text-white font-public-sans text-[16px] font-normal leading-[26px] max-w-xl">
          Our Emergency Services Are Available 24/7 To Handle Urgent Repairs And
          Issues. Don't Wait - Reach Out To Our Team For Quick, Reliable Help.
        </p>
        <div className="flex justify-start gap-5 flex-wrap">
          <Button className="bg-transparent border hover:bg-white rounded-full text-[#197AB2] px-5 py-5">
            Call Now
          </Button>
          <Button
            variant="secondary"
            className="bg-transparent border hover:bg-white rounded-full text-[#197AB2] px-5 py-5"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Bottom;

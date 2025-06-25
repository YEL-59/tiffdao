import img1 from "../../../../assets/aboutus1.png";
import img2 from "../../../../assets/aboutus2.png";
import img3 from "../../../../assets/aboutus3.png";
import img4 from "../../../../assets/aboutus4.png";

const About = () => {
  return (
    <div
      className="py-10 md:py-30 px-4"
      style={{ fontFamily: '"Public Sans", sans-serif' }}
    >
      {/* Heading and description */}
      <div className=" container mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="flex flex-col">
          <p
            className="text-[#0166A8] text-xl text-center md:text-start font-medium uppercase"
            style={{ fontFamily: '"Public Sans", sans-serif' }}
          >
            About US
          </p>
          <h1
            data-aos="fade-right"
            className="text-black font-public max-w-4xl text-[28px] sm:text-[36px] xl:text-[40px] 2xl:text-[64px] font-bold text-center lg:text-left"
            style={{ fontFamily: '"Public Sans", sans-serif' }}
          >
            Over a Decade Of Excellence in Services
          </h1>
        </div>
        <p
          data-aos="fade-left"
          className="text-[#797979] font-normal text-[14px] sm:text-[16px] md:text-[16px] leading-[24px] sm:leading-[27px] text-center lg:text-left max-w-2xl"
          style={{ fontFamily: '"Public Sans", sans-serif' }}
        >
          At The Top Touch we are committed to providing excellent cleaning
          solutions to our community. Our team of experts offers premium
          cleaning services, including standard cleaning, deep cleaning,
          residential cleaning. We use organic products that are safe for your
          family and the environment, allowing us to create pristine, welcoming
          spaces for both homes and businesses. With a focus on meticulous
          attention to detail and an unwavering dedication to customer
          satisfaction, you can trust The Top Touch cleaning service for a
          spotless, healthy environment.
        </p>
      </div>

      {/* Images in a single row, equal height */}
      <div className="container mx-auto flex flex-col md:flex-row flex-wrap items-end md:flex-nowrap gap-4 pt-10">
        <div className="flex-1 w-full">
          <img
            src={img1}
            alt="Cleaning supplies"
            className="w-full h-120 md:h-150 object-cover rounded-4xl"
          />
        </div>
        <div className="flex-1 w-full">
          <img
            src={img2}
            alt="Woman cleaning"
            className="w-full h-120 md:h-80 object-cover rounded-4xl"
          />
        </div>
        <div className="flex-1 w-full">
          <img
            src={img3}
            alt="Man cleaning"
            className="w-full h-120 md:h-120 object-cover rounded-4xl"
          />
        </div>
        <div className="flex-1 w-full">
          <img
            src={img4}
            alt="Hand cleaning sink"
            className="w-full h-120 md:h-140 object-cover rounded-4xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

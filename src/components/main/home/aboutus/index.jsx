import img1 from "../../../../assets/aboutus1.png";
import img2 from "../../../../assets/aboutus2.png";
import img3 from "../../../../assets/aboutus3.png";
import img4 from "../../../../assets/aboutus4.png";

const About = () => {
  return (
    <>
      <div className="container mx-auto py-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-col">
            <p
              className="text-[#0166A8] text-xl font-medium uppercase"
              style={{ fontFamily: '"Public Sans", sans-serif' }}
            >
              About US
            </p>
            <h1
              data-aos="fade-right"
              className="text-black font-public max-w-xl text-[32px] sm:text-[40px] lg:text-[48px] font-bold  text-center lg:text-left"
              style={{ fontFamily: '"Public Sans", sans-serif' }}
            >
              Over a Decade Of Excellence in Services
            </h1>
          </div>
          <p
            data-aos="fade-left"
            className="text-black font-open-sans text-[16px] sm:text-[18px] font-normal leading-[27px] text-center lg:text-left max-w-2xl"
            style={{ fontFamily: '"Public Sans", sans-serif' }}
          >
            At The Top Touch we are committed to providing excellent cleaning
            solutions to our community. Our team of experts offers premium
            cleaning services, including standard cleaning, deep cleaning,
            residential cleaning. We use organic products that are safe for your
            family and the environment, allowing us to create pristine,
            welcoming spaces for both homes and businesses. With a focus on
            meticulous attention to detail and an unwavering dedication to
            customer satisfaction, you can trust The Top Touch cleaning service
            for a spotless, healthy environment.
          </p>
        </div>

        <div className="flex items-end justify-end gap-2 py-20">
          <div
            className="h-[660px] w-[402px] aspect-[660/402]"
            style={{ backgroundImage: `url(${img1})` }}
          ></div>
          <div
            className="h-[467px] w-[401px] aspect-[467/401]"
            style={{ backgroundImage: `url(${img2})` }}
          ></div>
          <div
            className="h-[604px] w-[402px] aspect-[604/402]"
            style={{ backgroundImage: `url(${img3})` }}
          ></div>
          <div
            className="h-[575px] w-[402px] aspect-[575/402]"
            style={{ backgroundImage: `url(${img4})` }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default About;

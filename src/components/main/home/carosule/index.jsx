import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Kathy Pacheco",
    title: "Luskin, Range scientist",
    avatar: "/avatars/kathy.png",
    text: "Thanks to this platform, I found the perfect cleaning service for my home. The whole experience was smooth and completely stress-free!",
  },
  {
    name: "Patricia Sanders",
    title: "CEO, Superco",
    avatar: "/avatars/patricia.png",
    text: "Thanks to this platform, I found the perfect cleaning service for my home. The whole experience was smooth and completely stress-free!",
  },
  {
    name: "David Elson",
    title: "CTO, Stratacard",
    avatar: "/avatars/david.png",
    text: "Thanks to this platform, I found the perfect cleaning service for my home. The whole experience was smooth and completely stress-free!",
  },
  {
    name: "Kathy Pacheco",
    title: "Luskin, Range scientist",
    avatar: "/avatars/kathy2.png",
    text: "Thanks to this platform, I found the perfect cleaning service for my home. The whole experience was smooth and completely stress-free!",
  },
  {
    name: "David Elson",
    title: "CTO, Stratacard",
    avatar: "/avatars/david.png",
    text: "Thanks to this platform, I found the perfect cleaning service for my home. The whole experience was smooth and completely stress-free!",
  },
  {
    name: "Kathy Pacheco",
    title: "Luskin, Range scientist",
    avatar: "/avatars/kathy2.png",
    text: "Thanks to this platform, I found the perfect cleaning service for my home. The whole experience was smooth and completely stress-free!",
  },
];

const TestimonialCarousel = () => {
  return (
    <section
      className="py-12 px-4 bg-white text-center"
      style={{ fontFamily: '"Public Sans", sans-serif' }}
    >
      <p className="text-sm text-[#0166A8] font-medium uppercase">
        TESTIMONIALS
      </p>
      <h2 className="text-2xl md:text-[64px] font-bold mt-2">
        What Our Clients Say
      </h2>
      <p className="text-sm text-gray-500 mt-1 max-w-xl mx-auto">
        Discover Our Structured and Reliable Process Designed to Deliver
        Consistent, High-Quality Cleaning Services with Efficiency and Care
      </p>

      <div className="mt-10 md:mt-20 ">
        <Swiper
          className="!pb-20"
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <Card className="rounded-lg border border-gray-200 p-4 text-left shadow-sm">
                <CardContent className="p-0 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={item.avatar} alt={item.name} />
                      <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold text-black text-sm">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-500">{item.title}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#797979]">{item.text}</p>
                  <div className="flex gap-1 text-yellow-400">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialCarousel;

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <>
      <div>
        <div
          className=" bg-[#f0f6fb] py-10 md:py-30 px-5"
          style={{ fontFamily: '"Public Sans", sans-serif' }}
        >
          <div className="container mx-auto flex flex-col md:flex-row gap-5 justify-between w-full">
            <div className="w-2/3 text-center md:text-start mx-auto">
              <p
                className="text-[#0166A8]  text-[20px] font-semibold leading-[30px]"
                style={{ fontFamily: '"Public Sans", sans-serif' }}
              >
                FAQ’s
              </p>
              <h2
                className="text-[#303030] text-3xl md:text-[64px] font-bold leading-[60px] md:leading-[80px] max-w-7xl"
                style={{ fontFamily: '"Public Sans", sans-serif' }}
              >
                Frequently Asking Questions
              </h2>
              <p
                className="text-[#797979]  text-[16px] font-normal leading-[26px] md:max-w-xl"
                style={{ fontFamily: '"Public Sans", sans-serif' }}
              >
                {" "}
                Find answers to some of the most common questions we receive
                from our customers. If you don’t find what you’re looking for,
                feel free to contact us directly.
              </p>
            </div>
            <div className="py-5 w-full p-5 md:p-0">
              {" "}
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-black font-public-sans text-[20px] font-bold leading-[30px]">
                    How Do I Schedule Online?
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      To schedule online, all you have to do is fill out some
                      details about what you need, who you are, pick a date/time
                      and wait for a confirmation to arrive
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-black font-public-sans text-[20px] font-bold leading-[30px]">
                    When Will I Get A Confirmation?
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      You will get a confirmation as soon as we find a provider
                      for your job via email and SMS.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-black font-public-sans text-[20px] font-bold leading-[30px]">
                    Can I Later Reschedule My Booking Online?
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      Yes, of course. After you book for the first time, an
                      account will be made for you where you can login and
                      modify your bookings at anytime.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-black font-public-sans text-[20px] font-bold leading-[30px]">
                    What Areas Do You Service?
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      We serve homes in Broward County, Florida (Coral Springs,
                      Coconut Creek, Margate and Pompano).
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;

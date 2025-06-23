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
        <div className=" bg-[#f0f6fb] py-10 md:py-30">
          <div className="container mx-auto flex flex-col md:flex-row gap-5 justify-between w-full">
            <div className="w-2/3 text-center md:text-start mx-auto">
              <p
                className="text-[#0166A8]  text-[20px] font-semibold leading-[30px]"
                style={{ fontFamily: '"Public Sans", sans-serif' }}
              >
                FAQ’s
              </p>
              <h2
                className="text-[#303030] text-3xl md:text-[64px] font-bold leading-[80px] max-w-7xl"
                style={{ fontFamily: '"Public Sans", sans-serif' }}
              >
                Frequently Asking Questions
              </h2>
              <p
                className="text-[#797979]  text-[16px] font-normal leading-[26px] max-w-xl"
                style={{ fontFamily: '"Public Sans", sans-serif' }}
              >
                {" "}
                Find answers to some of the most common questions we receive
                from our customers. If you don’t find what you’re looking for,
                feel free to contact us directly.
              </p>
            </div>
            <div className="py-5 w-full">
              {" "}
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-black font-public-sans text-[20px] font-bold leading-[30px]">
                    What services of you offer?
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      Our flagship product combines cutting-edge technology with
                      sleek design. Built with premium materials, it offers
                      unparalleled performance and reliability.
                    </p>
                    <p>
                      Key features include advanced processing capabilities, and
                      an intuitive user interface designed for both beginners
                      and experts.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-black font-public-sans text-[20px] font-bold leading-[30px]">
                    How do I schedule online?
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      We offer worldwide shipping through trusted courier
                      partners. Standard delivery takes 3-5 business days, while
                      express shipping ensures delivery within 1-2 business
                      days.
                    </p>
                    <p>
                      All orders are carefully packaged and fully insured. Track
                      your shipment in real-time through our dedicated tracking
                      portal.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-black font-public-sans text-[20px] font-bold leading-[30px]">
                    When will I get a confirmation?
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      We stand behind our products with a comprehensive 30-day
                      return policy. If you&apos;re not completely satisfied,
                      simply return the item in its original condition.
                    </p>
                    <p>
                      Our hassle-free return process includes free return
                      shipping and full refunds processed within 48 hours of
                      receiving the returned item.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-black font-public-sans text-[20px] font-bold leading-[30px]">
                    Can I later reschedule my booking online?
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      We stand behind our products with a comprehensive 30-day
                      return policy. If you&apos;re not completely satisfied,
                      simply return the item in its original condition.
                    </p>
                    <p>
                      Our hassle-free return process includes free return
                      shipping and full refunds processed within 48 hours of
                      receiving the returned item.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-black font-public-sans text-[20px] font-bold leading-[30px]">
                    When will I get a confirmation?
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      We stand behind our products with a comprehensive 30-day
                      return policy. If you&apos;re not completely satisfied,
                      simply return the item in its original condition.
                    </p>
                    <p>
                      Our hassle-free return process includes free return
                      shipping and full refunds processed within 48 hours of
                      receiving the returned item.
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

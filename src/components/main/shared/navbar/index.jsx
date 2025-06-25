import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router";
import logo from "../../../../assets/logo.png";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const list = [
    { label: "Home", to: "#home" },
    { label: "About", to: "#about" },
    { label: "Services", to: "#service" },
    { label: "Contact Us", to: "#contact" },
    { label: "Testimonials", to: "#testimonial" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      let threshold = 172;
      const width = window.innerWidth;

      if (width < 768) threshold = 83;
      else if (width >= 768 && width < 1024) threshold = 92;

      setIsSticky(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [activeSection, setActiveSection] = useState("#");

  useEffect(() => {
    const sections = document.querySelectorAll("section, div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = `#${entry.target.id}`;
            setActiveSection(id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px", // Trigger when section is in middle of viewport
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      if (section.id) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`w-full  relative z-[1000] ${
        isSticky ? "md:sticky md:top-0" : ""
      } shadow-[0px_25px_60px_-15px_rgba(180,195,229,0.20)]`}
      style={{ backgroundColor: "#E3F1F8" }}
    >
      <div className="container mx-auto flex items-center justify-between ">
        {/* Logo */}
        <Link to="/" className="flex items-center ">
          <img src={logo} alt="Logo" className="h-auto" />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex gap-8">
          {list.map((item, i) => {
            return (
              <li key={i}>
                <button
                  onClick={() => {
                    const el = document.querySelector(item.to);
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className={`text-[#303030] font-public text-base font-normal leading-[26px] ${
                    activeSection === item.to
                      ? "font-bold text-[#0166A8]"
                      : "font-normal"
                  }`}
                  style={{ fontFamily: '"Public Sans", sans-serif' }}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Book A Cleaning button */}
        <div className="hidden md:block">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Button
              className="bg-[#0166A8] text-white  text-[16px] rounded-full  px-5 hover:border-[#6049bc]"
              style={{ fontFamily: '"Public Sans", sans-serif' }}
            >
              Book A Cleaning
            </Button>
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-[#0D0D0D]">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[85%] sm:w-64 p-6 bg-white text-[#0166A8] z-[1001]"
            >
              <div className="flex flex-col space-y-4 mt-6">
                {list.map((item, i) => (
                  <a
                    key={i}
                    onClick={() => {
                      setIsOpen(false);
                      const el = document.querySelector(item.to);
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="text-[16px] font-roboto font-medium transition hover:text-primary"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="mt-10">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full border border-white bg-transparent text-[#0166A8] font-roboto text-[16px] hover:border-[#6049bc]">
                    Book A Cleaning
                  </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useLocation } from "react-router";
import logo from "../../../../assets/logo.png";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  const list = [
    { label: "Home", to: "#" },
    { label: "About", to: "#" },
    { label: "Services", to: "#" },
    { label: "Contact Us", to: "#" },
    { label: "Testimonials", to: "#" },
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

  return (
    <nav
      className={`w-full py-3 relative z-[1000] ${
        isSticky ? "md:sticky md:top-0" : ""
      } shadow-[0px_25px_60px_-15px_rgba(180,195,229,0.20)]`}
      style={{ backgroundColor: "#E3F1F8" }}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-20" />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex gap-8">
          {list.map((item, i) => (
            <li key={i}>
              <a
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0D0D0D] font-roboto text-[18px] font-public leading-none hover:underline"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Book A Cleaning button */}
        <div className="hidden md:block">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#0166A8] text-white  text-[16px] rounded-full font-public px-5 hover:border-[#6049bc]">
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
              className="w-[85%] sm:w-64 p-6 bg-[#0D0D0D] text-white z-[1001]"
            >
              <div className="flex flex-col space-y-4 mt-6">
                {list.map((item, i) => (
                  <a
                    key={i}
                    href={item.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="text-[16px] font-roboto font-medium transition hover:text-primary"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="mt-10">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full border border-white bg-transparent text-white font-roboto text-[16px] hover:border-[#6049bc]">
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

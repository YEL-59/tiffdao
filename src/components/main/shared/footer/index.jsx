import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, MessageCircle } from "lucide-react";
import logo from "../../../../assets/footerlogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#245472] text-white">
      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row justify-between">
        {/* Logo + Description + Socials */}
        <div className="flex flex-col gap-4 ">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full">
              <img src={logo} alt="" />
            </div>
          </div>
          <p className="text-sm max-w-sm">
            We are committed to providing top-quality cleaning services with
            honesty and integrity
          </p>
          <div className="flex gap-3 mt-2">
            <Button variant="ghost" size="icon" className="text-white">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white">
              <Instagram className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white">
              <MessageCircle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white">
              <Twitter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-20">
          {/* Quick Links */}
          <div>
            <h4 className="text-[20px] font-bold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:underline text-[16px] font-normal">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[16px] font-normal">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[16px] font-normal">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[16px] font-normal">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[20px] font-bold mb-2">Contact info</h4>
            <ul className="space-y-1  text-[16px] font-normal">
              <li>Phone: +123 456 7890</li>
              <li>Address: 421 Allen, Mexico 4293</li>
              <li>Email: info@gmail.com</li>
              <li>Website: www.clean.com</li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-[20px] font-bold mb-2">Working hours</h4>
            <ul className="space-y-1  text-[16px] font-normal">
              <li>Monday-Saturday: 9:00 AM - 6:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
      </div>

      <Separator className="bg-white/20" />

      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>©Copyright 2023 Mary & Mop. All Rights Reserved</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

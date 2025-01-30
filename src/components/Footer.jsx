import React from 'react';
import { Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

const Footer = () => {
  const navigationLinks = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#collection", smooth: true },
    { label: "Our Team", href: "#aboutus" },
    { label: "Contact", href: "#testimonial" },
    { label: "Gallery", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com" },
    { icon: Instagram, href: "https://www.instagram.com/flexfit.z/" },
    { icon: Twitter, href: "https://twitter.com" },
    { icon: MessageCircle, href: "https://wa.me/9445174614" }
  ];

  return (
    <footer className="bg-[#3B3B98] py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Navigation Section */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-xl">Navigation</h3>
            <ul className="text-white space-y-2">
              {navigationLinks.map(({ label, href, smooth }) => (
                <li key={label} className="flex items-center">
                  <span className="mr-2 text-gray-400 transition-all duration-300 transform group-hover:translate-x-2">
                    &gt;
                  </span>
                  <a
                    href={href}
                    className="group hover:text-pink-200 transition-all duration-300 hover:translate-x-4"
                    style={smooth ? { scrollBehavior: "smooth" } : {}}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-xl">Contact</h3>
            <p className="text-white">Mail id: trendvault.zofficial@gmail.com</p>
            <p className="text-white">Phone: +91 9445174614</p>
            <p className="text-white">
              Address: No. 12, Gandhi Street, Saidapet, Chennai - 600015
            </p>
            <p className="text-white italic">"Trend Your Style!"</p>
          </div>

          {/* Social Media Section */}
          <div className="flex space-x-6">
            {socialLinks.map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-200 hover:-translate-y-4 transition duration-300"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
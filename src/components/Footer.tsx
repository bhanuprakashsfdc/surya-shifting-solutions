import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { COMPANY, CONTACT_INFO, FOOTER_LINKS } from "@/constants/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{COMPANY.shortName} & Movers</h3>
            <p className="text-background/80 mb-4">
              India's trusted packers and movers for safe, fast, and affordable relocation services.
            </p>
            <div className="flex gap-4">
              {FOOTER_LINKS.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.name}
                >
                  {social.name === "Facebook" && <Facebook className="w-5 h-5" />}
                  {social.name === "Twitter" && <Twitter className="w-5 h-5" />}
                  {social.name === "Instagram" && <Instagram className="w-5 h-5" />}
                  {social.name === "LinkedIn" && <Linkedin className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-background/80 hover:text-primary transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={CONTACT_INFO.phoneHref}
                  className="flex items-start gap-2 text-background/80 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{CONTACT_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-start gap-2 text-background/80 hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="break-all">{CONTACT_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-background/80">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/80 text-sm text-center md:text-left">
              © {currentYear} Surya All India Packers and Movers. & Created and maintained by <a href="https://anuhyadigital.com/" >Anuhya Digital </a> All rights reserved. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/80 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

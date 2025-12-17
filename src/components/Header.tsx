import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  COMPANY,
  NAV_LINKS,
  CONTACT_INFO,
  HERO_CONTENT,
} from "@/constants/constants";

const Header = ({ onOpenQuoteModal }: { onOpenQuoteModal: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">
                {COMPANY.logoInitial}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground leading-none">
                {COMPANY.shortName}
              </span>
              <span className="text-xs text-muted-foreground">{COMPANY.tagline}</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href={CONTACT_INFO.phoneHref}>
              <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
                <Phone className="w-4 h-4 mr-2" />
                {HERO_CONTENT.primaryCta}
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a href={CONTACT_INFO.phoneHref} className="w-full">
                <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground">
                  <Phone className="w-4 h-4 mr-2" />
                  {HERO_CONTENT.primaryCta}
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

import resumePDF from "@/assets/resume.pdf";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border/50' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold hero-text"
          >
            VS
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 animated-underline"
              >
                {item.label}
              </button>
            ))}
            {/* 2. Updated the href and download attribute for the desktop link */}
            <a href={resumePDF} download="Vidush_Resume.pdf" className="hidden sm:block">
              <Button asChild className="btn-gradient">
                <span>Download Resume</span>
              </Button>
            </a>
            <Button 
              className="btn-gradient"
              onClick={() => scrollToSection('contact')}
            >
              Hire Me
            </Button>
            <div className="pl-2"><ThemeToggle /></div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors duration-200 py-2"
                >
                  {item.label}
                </button>
              ))}
              {/* 3. Updated the href and download attribute for the mobile link */}
              <a href={resumePDF} download="Vidush_Resume.pdf" className="block">
                <Button className="btn-gradient w-full">Download Resume</Button>
              </a>
              <Button 
                className="btn-gradient w-full"
                onClick={() => scrollToSection('contact')}
              >
                Hire Me
              </Button>
              <div className="pt-2 flex justify-end"><ThemeToggle /></div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
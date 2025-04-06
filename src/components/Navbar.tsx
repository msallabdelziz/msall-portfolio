
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const NavItem = ({ href, text, onClick }: { href: string; text: string; onClick?: () => void }) => (
  <li className="relative group">
    <a 
      href={href} 
      onClick={onClick}
      className="text-tech-light-slate hover:text-tech-light-blue transition-colors duration-300 py-2 px-3"
    >
      {text}
      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-tech-light-blue transition-all duration-300 group-hover:w-full"></span>
    </a>
  </li>
);

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-tech-dark-blue/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-tech-light-blue font-poppins">
          Msall🦦AbdelAZIZ<span className="text-tech-lightest-slate">.</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-2 font-medium">
            <NavItem href="#about" text="À propos" onClick={() => scrollToSection('about')} />
            <NavItem href="#projects" text="Projets" onClick={() => scrollToSection('projects')} />
            <NavItem href="#experience" text="Expérience" onClick={() => scrollToSection('experience')} />
            <NavItem href="#skills" text="Compétences" onClick={() => scrollToSection('skills')} />
            <NavItem href="#resume" text="CV" onClick={() => scrollToSection('resume')} />
            <NavItem href="#contact" text="Contact" onClick={() => scrollToSection('contact')} />
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-tech-light-slate hover:text-tech-light-blue transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-tech-dark-blue/95 backdrop-blur-md z-40 md:hidden transition-transform duration-300 pt-20",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="container mx-auto px-6">
          <ul className="flex flex-col space-y-6 items-center">
            <NavItem href="#about" text="À propos" onClick={() => scrollToSection('about')} />
            <NavItem href="#projects" text="Projets" onClick={() => scrollToSection('projects')} />
            <NavItem href="#experience" text="Expérience" onClick={() => scrollToSection('experience')} />
            <NavItem href="#skills" text="Compétences" onClick={() => scrollToSection('skills')} />
            <NavItem href="#resume" text="CV" onClick={() => scrollToSection('resume')} />
            <NavItem href="#contact" text="Contact" onClick={() => scrollToSection('contact')} />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

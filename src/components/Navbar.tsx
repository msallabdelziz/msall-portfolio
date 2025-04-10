
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

  // Empêcher le défilement du corps lorsque le menu mobile est ouvert
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

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
          🦦 Msall Abdel AZIZ<span className="text-tech-lightest-slate">.</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-2 font-medium">
            <NavItem href="#about" text="À propos" onClick={() => scrollToSection('about')} />
            <NavItem href="#skills" text="Compétences" onClick={() => scrollToSection('skills')} />
            <NavItem href="#projects" text="Projets" onClick={() => scrollToSection('projects')} />
            <NavItem href="#experience" text="Expérience" onClick={() => scrollToSection('experience')} />
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
        style={{ height: '100vh' }}
      >
        <nav className="container mx-auto px-6 h-full overflow-y-auto">
          <ul className="flex flex-col space-y-6 items-center pt-6">
            <NavItem href="#about" text="À propos" onClick={() => scrollToSection('about')} />
            <NavItem href="#skills" text="Compétences" onClick={() => scrollToSection('skills')} />
            <NavItem href="#projects" text="Projets" onClick={() => scrollToSection('projects')} />
            <NavItem href="#experience" text="Expérience" onClick={() => scrollToSection('experience')} />
            <NavItem href="#resume" text="CV" onClick={() => scrollToSection('resume')} />
            <NavItem href="#contact" text="Contact" onClick={() => scrollToSection('contact')} />
          </ul>
          
          {/* Bouton pour fermer le menu mobile */}
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center space-x-2 text-tech-light-slate hover:text-tech-light-blue transition-colors py-2 px-4 border border-tech-light-slate hover:border-tech-light-blue rounded-md"
              aria-label="Fermer le menu"
            >
              <X size={18} />
              <span>Fermer le menu</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

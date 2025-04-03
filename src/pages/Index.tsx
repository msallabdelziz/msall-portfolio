
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';

const Index = () => {
  // Initialize reveal animation when component mounts
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const reveal = () => {
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', reveal);
    // Initial check
    setTimeout(reveal, 200);
    
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Resume />
      <Contact />
    </Layout>
  );
};

export default Index;


import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
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
    
    // Add tech particles animation
    const createParticle = () => {
      const particles = document.querySelector('.tech-particles');
      if (!particles) return;
      
      const particle = document.createElement('div');
      particle.classList.add('tech-particle');
      
      // Random position
      const posX = Math.random() * window.innerWidth;
      const posY = Math.random() * window.innerHeight;
      
      // Random size
      const size = Math.random() * 6 + 1;
      
      // Apply styles
      particle.style.left = `${posX}px`;
      particle.style.top = `${posY}px`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      particles.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        particle.remove();
      }, 6000);
    };
    
    // Create particles at regular intervals
    const particleInterval = setInterval(createParticle, 300);
    
    window.addEventListener('scroll', reveal);
    // Initial check
    setTimeout(reveal, 200);
    
    return () => {
      window.removeEventListener('scroll', reveal);
      clearInterval(particleInterval);
    };
  }, []);

  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Resume />
      <Contact />
    </Layout>
  );
};

export default Index;

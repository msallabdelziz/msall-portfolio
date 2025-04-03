import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [jobTitle, setJobTitle] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  const fullName = 'Mamadou Abdel Aziz Sall';
  const jobTitles = ['Data Science et IA', 'Developpeur Web'];
  
  useEffect(() => {
    const ticker = setTimeout(() => {
      const i = loopNum % jobTitles.length;
      const fullText = jobTitles[i];
      
      setJobTitle(isDeleting 
        ? fullText.substring(0, jobTitle.length - 1) 
        : fullText.substring(0, jobTitle.length + 1)
      );
      
      setTypingSpeed(isDeleting ? 75 : 150);
      
      if (!isDeleting && jobTitle === fullText) {
        // Pause at the end of typing
        setTypingSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && jobTitle === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    }, typingSpeed);
    
    return () => clearTimeout(ticker);
  }, [jobTitle, isDeleting, loopNum, typingSpeed, jobTitles]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: {
      x: number;
      y: number;
      radius: number;
      color: string;
      velocity: {
        x: number;
        y: number;
      };
    }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    const createParticles = () => {
      particles = [];
      const numberOfParticles = Math.min(Math.floor(window.innerWidth / 20), 100);
      
      for (let i = 0; i < numberOfParticles; i++) {
        const radius = Math.random() * 2 + 0.5;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        
        const color = `rgba(100, 255, 218, ${Math.random() * 0.5 + 0.1})`;
        
        const velocity = {
          x: (Math.random() - 0.5) * 0.2,
          y: (Math.random() - 0.5) * 0.2
        };
        
        particles.push({ x, y, radius, color, velocity });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distance = Math.sqrt(
            Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2)
          );
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(100, 255, 218, ${0.1 * (1 - distance / 100)})`;
            ctx.stroke();
          }
        }
        
        p.x += p.velocity.x;
        p.y += p.velocity.y;
        
        if (p.x < 0 || p.x > canvas.width) p.velocity.x *= -1;
        if (p.y < 0 || p.y > canvas.height) p.velocity.y *= -1;
      }
    };

    let animationFrameId: number;
    
    const animate = () => {
      draw();
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center py-32 overflow-hidden" id="home">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 -z-[5]"
      />
      <div className="container mx-auto px-6">
        <p className="text-tech-light-blue mb-5 font-mono">Bonjour, je m'appelle</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 leading-tight">
          <span className="text-tech-lightest-slate block h-[1.25em]">
            {fullName.split('').map((char, index) => (
              <span 
                key={index}
                className="inline-block"
                style={{
                  animation: `float 3s ease-in-out infinite`,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </span>
          <span className="text-tech-slate text-3xl md:text-5xl lg:text-6xl block mt-2">
            Je suis ingénieure : <span className="text-tech-light-blue h-[1.2em] inline-block min-w-[2ch]">{jobTitle}<span className="animate-pulse">|</span></span>
          </span>
        </h1>
        <p className="max-w-xl text-tech-light-slate text-lg mt-6">
          Je crée des expériences web innovantes et analyse des données complexes. 
          Spécialisé dans le développement d'applications web robustes et l'exploration de solutions data-driven.
        </p>
        <div className="mt-10">
          <a 
            href="#projects" 
            className="group flex items-center w-fit bg-transparent hover:bg-tech-light-blue/10 text-tech-light-blue font-medium px-6 py-3 border border-tech-light-blue rounded-md transition-all duration-300"
          >
            Voir mes projets
            <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

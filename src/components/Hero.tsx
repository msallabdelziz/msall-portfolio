import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [jobTitle, setJobTitle] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const fullName = 'Mamadou Abdel Aziz Sall';
  const jobTitles = ['Data Scientist', 'Developpeur IA', 'Developpeur Web'];

  useEffect(() => {
    const ticker = setTimeout(() => {
      const i = loopNum % jobTitles.length;
      const fullText = jobTitles[i];
      setJobTitle(isDeleting ? fullText.substring(0, jobTitle.length - 1) : fullText.substring(0, jobTitle.length + 1));
      setTypingSpeed(isDeleting ? 75 : 150);
      if (!isDeleting && jobTitle === fullText) {
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
        particles.push({
          x,
          y,
          radius,
          color,
          velocity
        });
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
          const distance = Math.sqrt(Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2));
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

  return <section className="relative min-h-screen flex items-center py-32 overflow-hidden" id="home">
      <canvas ref={canvasRef} className="absolute inset-0 -z-[5]" />
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between">
          <div className="md:w-7/12 py-6 md:text-right lg:text-right">
            <p className="text-tech-light-blue mb-5 font-mono">Salut, je suis</p>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 leading-tight text-tech-lightest-slate whitespace-nowrap">
              {fullName} <span className="ml-2">🦦</span>
            </h1>
            <span className="text-tech-slate text-lg md:text-2xl lg:text-3xl block mt-2 whitespace-nowrap">
              Je suis : <span className="text-tech-light-blue h-[1.2em] inline-block min-w-[2ch]">{jobTitle}<span className="animate-pulse">|</span></span>
            </span>
            
            <div className="mt-10 md:flex md:justify-end">
              <a href="#projects" className="group flex items-center w-fit bg-transparent hover:bg-tech-light-blue/10 text-tech-light-blue font-medium px-6 py-3 border border-tech-light-blue rounded-md transition-all duration-300">
                Voir mes projets
                <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          <div className="md:w-4/12 mb-8 md:mb-0">
            <div className="relative mx-auto w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px]">
              <div className="absolute inset-0 rounded-md border-2 border-tech-light-blue transform rotate-3 z-[-1] transition-all duration-300 hover:rotate-6"></div>
              <div className="w-full h-full rounded-md overflow-hidden">
                <img src="/lovable-uploads/d3f53d9e-cbdb-4ab5-9944-cc63f4e4cfd1.png" alt="Mamadou Abdel Aziz Sall" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default Hero;

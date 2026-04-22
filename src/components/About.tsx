
import React, { useEffect, useState } from 'react';
import { Book, Globe, X } from 'lucide-react';
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import aboutProfile from '@/assets/about-profile.png';

const About: React.FC = () => {
  const [imageOpen, setImageOpen] = useState<boolean>(false);
  
  // Reveal animation on scroll
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
    reveal();
    
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <section id="about" className="section-padding py-28">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center reveal">
            <span className="number-heading">01.</span>
            À propos de moi
            <span className="h-[1px] bg-tech-light-navy ml-4 flex-grow"></span>
          </h2>
          
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3 reveal">
              <p className="mb-4 text-tech-light-slate">
                Ingénieur en Data Science et Intelligence Artificielle, je conçois et développe des systèmes basés sur les <span className="text-tech-light-blue">LLM</span>, allant de l’IA générative à des architectures agentiques complètes.
              </p>
              <p className="mb-4 text-tech-light-slate">
                Au fil de mes expériences, j’ai travaillé sur des solutions concrètes combinant génération de contenu (NLP, embeddings, modèles LLM) et mise en place de systèmes capables d’agir et d’automatiser des processus (RAG, agents, workflows, APIs).
              </p>
              <p className="mb-4 text-tech-light-slate">
                Je m’intéresse particulièrement aux systèmes intelligents qui ne se contentent pas de produire des réponses, mais qui orchestrent des actions, exploitent des sources de données et s’intègrent dans des environnements métiers réels.
              </p>
              <p className="mb-4 text-tech-light-slate">
                À la croisée de la data, du backend et de l’IA, j’aime transformer des problématiques complexes en solutions robustes, scalables et utiles, avec une forte orientation vers la mise en production et l’impact métier.
              </p>
              <p className="mb-6 text-tech-light-slate">
                Aujourd’hui, je suis à la recherche d’opportunités en IA/Data où je peux concevoir et déployer des systèmes innovants à fort impact.
              </p>

              <div className="mt-6 space-y-4">
                <h3 className="font-medium text-tech-lightest-slate flex items-center mb-2">
                  <Globe size={18} className="mr-2 text-tech-light-blue" /> Langues
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center">
                    <span className="text-tech-light-blue mr-2">▹</span>
                    <span className="text-tech-light-slate">Français (C)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-tech-light-blue mr-2">▹</span>
                    <span className="text-tech-light-slate">Anglais (B2)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-tech-light-blue mr-2">▹</span>
                    <span className="text-tech-light-slate">Arabe (B)</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <h3 className="font-medium text-tech-lightest-slate flex items-center mb-2">
                  <Book size={18} className="mr-2 text-tech-light-blue" /> Centres d'intérêt
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {["Sport", "Lecture", "Voyage", "Programmation"].map((interest, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-tech-light-blue mr-2">▹</span>
                      <span className="text-tech-light-slate">{interest}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2 reveal">
              <div className="relative group">
                <div className="absolute -inset-2 rounded-lg bg-tech-light-blue/20 opacity-75 blur group-hover:opacity-100 transition duration-300"></div>
                <div 
                  className="relative border-2 border-tech-light-blue rounded-lg overflow-hidden aspect-square cursor-pointer"
                  onClick={() => setImageOpen(true)}
                >
                  <div className="absolute inset-0 bg-tech-light-blue/20 group-hover:bg-transparent transition duration-300 z-10"></div>
                  <img 
                    src={aboutProfile}
                    alt="Mamadou Abdel Aziz Sall" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image modal dialog */}
      <Dialog open={imageOpen} onOpenChange={setImageOpen}>
        <DialogContent className="p-0 bg-tech-navy border-tech-light-blue overflow-hidden">
          <div className="relative flex items-center justify-center">
            <DialogClose className="absolute right-2 top-2 z-10 rounded-full bg-tech-navy/80 p-2 text-tech-light-blue hover:bg-tech-navy hover:text-white transition-colors">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </DialogClose>
            <div className="flex items-center justify-center">
              <img 
                src={aboutProfile}
                alt="Mamadou Abdel Aziz Sall" 
                className="w-auto h-auto object-contain"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default About;

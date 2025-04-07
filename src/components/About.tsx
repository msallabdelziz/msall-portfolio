
import React, { useEffect } from 'react';
import { Award, Book, Briefcase, Code, Globe } from 'lucide-react';

const About: React.FC = () => {
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
                En phase finale de mon <span className="text-tech-light-blue">Master 2 en Data Science & IA</span> à IA SCHOOL (Lyon), 
                je suis passionné par l'analyse des données et l'intelligence artificielle avec une bonne expérience en programmation.
              </p>
              <p className="mb-4 text-tech-light-slate">
                Je recherche actuellement un <span className="text-tech-light-blue">stage de fin d'étude de 4 à 6 mois</span> pour appliquer mes compétences 
                en IA, DATA, Programmation et gestion de projets Agile dans des projets innovants.
              </p>
              <p className="mb-6 text-tech-light-slate">
                J'ai développé un agent conversationnel intelligent basé sur les LLM capable de diagnostiquer les patients 
                et de les orienter vers les spécialistes concernés, projet pour lequel j'ai été finaliste du DATATHON IA SCHOOL 2025.
              </p>
              
              <div className="space-y-4">
                <h3 className="font-medium text-tech-lightest-slate flex items-center mb-2">
                  <Code size={18} className="mr-2 text-tech-light-blue" /> Compétences techniques
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
                  {[
                    "Python", "R", "JavaScript", "React", "Node.js",
                    "Machine Learning", "Deep Learning", "NLP", 
                    "TensorFlow", "PyTorch", "Scikit-Learn",
                    "MongoDB", "PostgreSQL", "Docker", "AWS"
                  ].map((tech, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-tech-light-blue mr-2">▹</span>
                      <span className="text-tech-light-slate">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

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
                <div className="relative border-2 border-tech-light-blue rounded-lg overflow-hidden aspect-square">
                  <div className="absolute inset-0 bg-tech-light-blue/20 group-hover:bg-transparent transition duration-300 z-10"></div>
                  <img 
                    src="/lovable-uploads/1c335152-00f5-452e-88df-fb2ba6bcbb54.png" 
                    alt="Mamadou Abdel Aziz Sall" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

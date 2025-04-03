
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

type ExperienceItem = {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
};

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    title: "Développeur Full Stack",
    company: "Société Innovative",
    location: "Paris, France",
    period: "Janvier 2022 - Présent",
    description: [
      "Développement d'applications web modernes avec React et Node.js",
      "Implémentation de nouvelles fonctionnalités et maintenance des systèmes existants",
      "Collaboration avec les équipes produit et design pour créer des expériences utilisateur exceptionnelles",
      "Optimisation des performances et de la sécurité des applications"
    ],
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"]
  },
  {
    id: 2,
    title: "Développeur Front-end",
    company: "WebStudio",
    location: "Lyon, France",
    period: "Mars 2020 - Décembre 2021",
    description: [
      "Création d'interfaces utilisateur réactives et accessibles",
      "Intégration des conceptions UI/UX en collaboration étroite avec les designers",
      "Amélioration de la performance des applications existantes",
      "Participation aux revues de code et à l'amélioration continue des pratiques de développement"
    ],
    technologies: ["React", "Vue.js", "JavaScript", "SCSS", "Webpack"]
  },
  {
    id: 3,
    title: "Développeur Web Junior",
    company: "StartupTech",
    location: "Lille, France",
    period: "Septembre 2018 - Février 2020",
    description: [
      "Développement et maintenance de sites web pour divers clients",
      "Implémentation de designs responsive et optimisation pour mobile",
      "Création et intégration de composants interactifs",
      "Support technique et résolution de bugs"
    ],
    technologies: ["JavaScript", "HTML", "CSS", "WordPress", "PHP"]
  }
];

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

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
    <section id="experience" className="section-padding py-28">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center reveal">
          <span className="number-heading">03.</span>
          Expérience Professionnelle
          <span className="h-[1px] bg-tech-light-navy ml-4 flex-grow"></span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 reveal">
            <div className="md:w-1/4 mb-4 md:mb-0 flex md:flex-col overflow-x-auto md:overflow-visible scrollbar-thin">
              {experienceData.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className={cn(
                    "py-3 px-4 text-left border-b-2 md:border-b-0 md:border-l-2 font-mono text-sm whitespace-nowrap md:whitespace-normal",
                    activeTab === index 
                      ? "border-tech-light-blue text-tech-light-blue bg-tech-navy/30" 
                      : "border-tech-light-navy text-tech-light-slate hover:bg-tech-navy/20 hover:text-tech-light-blue"
                  )}
                >
                  {item.company}
                </button>
              ))}
            </div>
            
            <div className="md:w-3/4 bg-tech-navy/20 p-6 rounded-md glass animate-fade-in">
              <div className="mb-1 flex flex-col sm:flex-row sm:items-center justify-between">
                <h3 className="text-xl font-semibold text-tech-lightest-slate">
                  {experienceData[activeTab].title} <span className="text-tech-light-blue">@ {experienceData[activeTab].company}</span>
                </h3>
                <span className="text-tech-light-slate text-sm">{experienceData[activeTab].location}</span>
              </div>
              
              <p className="text-tech-light-slate text-sm mb-4 font-mono">{experienceData[activeTab].period}</p>
              
              <ul className="space-y-2 mb-4">
                {experienceData[activeTab].description.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-tech-light-blue mr-2 mt-1">▹</span>
                    <span className="text-tech-light-slate">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {experienceData[activeTab].technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="text-xs font-mono bg-tech-navy py-1 px-2 rounded text-tech-light-blue"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

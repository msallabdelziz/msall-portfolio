
import React, { useEffect } from 'react';
import { FileText, Download } from 'lucide-react';

const Resume: React.FC = () => {
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
    <section id="resume" className="section-padding py-28">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center reveal">
          <span className="number-heading">05.</span>
          Curriculum Vitae
          <span className="h-[1px] bg-tech-light-navy ml-4 flex-grow"></span>
        </h2>
        
        <div className="max-w-2xl mx-auto text-center reveal">
          <div className="glass p-8 mb-8">
            <FileText size={48} className="mx-auto mb-4 text-tech-light-blue" />
            <h3 className="text-xl font-semibold mb-3 text-tech-lightest-slate">Mon CV</h3>
            <p className="text-tech-light-slate mb-6">
              Je suis Mamadou Abdel Aziz Sall, en phase finale de mon Master 2 en Data Science & IA. 
              Passionné par l'analyse des données et l'intelligence artificielle, je recherche un stage 
              de fin d'étude de 4 à 6 mois pour appliquer mes compétences en IA, DATA et Programmation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#"
                className="group flex items-center justify-center w-full sm:w-auto bg-transparent hover:bg-tech-light-blue/10 text-tech-light-blue font-medium px-6 py-3 border border-tech-light-blue rounded-md transition-all duration-300"
              >
                <FileText size={18} className="mr-2" />
                Voir en ligne
              </a>
              <a 
                href="/lovable-uploads/42fb82d8-8cee-45c2-8d7c-c0528fffd7fa.png"
                download="CV_Mamadou_Abdel_Aziz_Sall.png"
                className="group flex items-center justify-center w-full sm:w-auto bg-tech-light-blue text-tech-dark-blue hover:bg-tech-light-blue/90 font-medium px-6 py-3 rounded-md transition-all duration-300"
              >
                <Download size={18} className="mr-2" />
                Télécharger PDF
              </a>
            </div>
          </div>
          
          <div className="text-tech-light-slate">
            <p className="mb-4">
              Besoin d'informations supplémentaires ou d'une version personnalisée de mon CV ?
            </p>
            <a 
              href="#contact" 
              className="text-tech-light-blue hover:underline transition-all duration-300"
            >
              N'hésitez pas à me contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

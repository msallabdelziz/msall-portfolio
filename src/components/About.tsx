import React, { useEffect } from 'react';
const About: React.FC = () => {
  // Reveal animation on scroll
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const reveal = () => {
      revealElements.forEach(element => {
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
  return <section id="about" className="section-padding py-28">
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
                Bonjour ! Je m'appelle [Votre Nom] et je suis passionné par la création d'applications web innovantes. 
                Mon parcours dans le développement a commencé en [année], et depuis, je me suis spécialisé dans [vos spécialités].
              </p>
              <p className="mb-4 text-tech-light-slate">
                Mon approche du développement est centrée sur la création de solutions élégantes et performantes, 
                avec une attention particulière portée à l'expérience utilisateur et aux bonnes pratiques de développement.
              </p>
              <p className="mb-6 text-tech-light-slate">
                En dehors du code, je m'intéresse à [vos autres intérêts ou hobbies]. 
                Ces activités m'aident à maintenir un équilibre et nourrissent ma créativité.
              </p>
              
              <p className="text-tech-light-slate">
                Voici quelques technologies avec lesquelles j'ai travaillé récemment :
              </p>
              
            </div>
            
            <div className="md:col-span-2 reveal">
              <div className="relative group">
                <div className="absolute -inset-2 rounded-lg bg-tech-light-blue/20 opacity-75 blur group-hover:opacity-100 transition duration-300"></div>
                <div className="relative border-2 border-tech-light-blue rounded-lg overflow-hidden aspect-square">
                  <div className="absolute inset-0 bg-tech-light-blue/20 group-hover:bg-transparent transition duration-300 z-10"></div>
                  <img src="https://via.placeholder.com/400x400" alt="Photo de profil" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;
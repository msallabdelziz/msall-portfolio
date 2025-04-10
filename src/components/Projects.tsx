import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Github, ChevronDown, ChevronUp } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  category: string | string[];
};

const projectsData: Project[] = [
  {
    id: 1,
    title: "ChatBot MultiPDF",
    description: "Une application de chatbot capable de répondre à des questions basées sur le contenu de plusieurs fichiers PDF.",
    image: "/lovable-uploads/4d5d21c8-6b77-4446-842e-79ab06c68fd1.png",
    technologies: ["Python", "LangChain", "OpenAI", "Streamlit"],
    github: "https://github.com/msallabdelziz/ChatBot_MultiPDF",
    featured: true,
    category: "data"
  },
  {
    id: 2,
    title: "Détection de Fraude Bancaire",
    description: "Un modèle d'apprentissage automatique pour la détection de transactions bancaires frauduleuses combinant des techniques de machine learning et de deep learning. Un modèle Random Forest (classification supervisée) et un autoencodeur (détection d'anomalies non supervisée) pour identifier les fraudes.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&h=340",
    technologies: ["Python", "Scikit-Learn", "Pandas", "Jupyter Notebook"],
    github: "https://github.com/msallabdelziz/Detection_de_fraude_bancaire.ipynb",
    featured: true,
    category: "data"
  },
  {
    id: 3,
    title: "Détection de Phishing par Email",
    description: "Ce projet a pour objectif de détecter automatiquement les emails de phishing à partir du jeu de données Enron. Le pipeline combine du traitement de texte, du feature engineering et une classification par machine learning pour différencier les emails phishing des emails légitimes.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&h=340",
    technologies: ["Python", "NLP", "Machine Learning", "Feature Engineering"],
    github: "https://github.com/msallabdelziz/detection-de-mails-phishing",
    featured: true,
    category: "data"
  },
  {
    id: 4,
    title: "IA Santé Animale",
    description: "Backend d'un système de surveillance et de santé animale basé sur l'Intelligence Artificielle. Il permet de gérer les utilisateurs (administrateurs et éleveurs), les fermes, les catégories d'élevage et facilite la collecte et le traitement des données issues des capteurs IoT. Inclut la gestion des utilisateurs, des fermes, l'intégration IoT pour la collecte de données en temps réel (température, activité), et l'envoi de notifications par email et SMS.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&h=340",
    technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "IoT", "Machine Learning", "TensorFlow", "Scikit-Learn"],
    github: "https://github.com/msallabdelziz/backend_IA_sante_animal",
    featured: true,
    category: ["data", "web"]
  },
  {
    id: 5,
    title: "Todo List avec Strapi et React",
    description: "Une application de gestion de tâches moderne construite avec React pour le frontend et Strapi comme CMS headless pour le backend. L'application permet de créer, gérer et organiser des tâches avec une interface utilisateur intuitive.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=340",
    technologies: ["React", "Strapi", "RESTful API", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/msallabdelziz/todo_list_Strapi_React",
    featured: true,
    category: "web"
  },
  {
    id: 6,
    title: "BokoRide - Backend API",
    description: "Backend d'une plateforme de covoiturage innovante. Ce backend gère l'ensemble des fonctionnalités essentielles telles que la gestion des utilisateurs, des trajets, des rôles, du chat en temps réel et de l'authentification sécurisée via JWT.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=340",
    technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Socket.IO", "bcryptjs", "express-validator", "dotenv"],
    github: "https://github.com/msallabdelziz/BokoRide-backend",
    featured: true,
    category: "web"
  }
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData);
  const [expandedDescriptions, setExpandedDescriptions] = useState<number[]>([]);

  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter(project => 
          Array.isArray(project.category) 
            ? project.category.includes(filter)
            : project.category === filter
        )
      );
    }
  }, [filter]);

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
  }, [filteredProjects]);

  const toggleDescription = (projectId: number) => {
    setExpandedDescriptions(prev => {
      if (prev.includes(projectId)) {
        return prev.filter(id => id !== projectId);
      } else {
        return [...prev, projectId];
      }
    });
  };

  const isDescriptionExpanded = (projectId: number) => {
    return expandedDescriptions.includes(projectId);
  };

  const renderDescription = (project: Project) => {
    const isExpanded = isDescriptionExpanded(project.id);
    const maxLength = 100; // Maximum characters to show initially
    
    if (project.description.length <= maxLength || isExpanded) {
      return (
        <>
          <p className="text-tech-light-slate mb-4">{project.description}</p>
          {project.description.length > maxLength && (
            <button 
              onClick={() => toggleDescription(project.id)} 
              className="text-tech-light-blue flex items-center text-sm mb-4 hover:text-tech-lightest-slate transition-colors"
              aria-label={isExpanded ? "Voir moins" : "Voir plus"}
            >
              {isExpanded ? "Voir moins" : "Voir plus..."}
              {isExpanded ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
            </button>
          )}
        </>
      );
    } else {
      return (
        <p className="text-tech-light-slate mb-4">
          {project.description.substring(0, maxLength)}... 
          <button 
            onClick={() => toggleDescription(project.id)} 
            className="text-tech-light-blue inline-flex items-center text-sm ml-2 hover:text-tech-lightest-slate transition-colors"
            aria-label="Voir plus"
          >
            Voir plus...
            <ChevronDown size={16} className="ml-1" />
          </button>
        </p>
      );
    }
  };

  return (
    <section id="projects" className="section-padding py-28 bg-tech-dark-blue/30">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center reveal">
          <span className="number-heading">02.</span>
          Mes Projets
          <span className="h-[1px] bg-tech-light-navy ml-4 flex-grow"></span>
        </h2>
        
        <div className="flex justify-center mb-10 reveal">
          <div className="inline-flex p-1 space-x-1 bg-tech-navy rounded-lg">
            {['all', 'data', 'web', 'mobile'].map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  filter === category 
                    ? 'bg-tech-light-blue text-tech-dark-blue'
                    : 'text-tech-light-slate hover:text-tech-lightest-slate'
                }`}
              >
                {category === 'all' ? 'All' : 
                 category === 'data' ? 'IA / DATA' : 
                 category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="group glass hover:shadow-xl transition-all duration-300 overflow-hidden reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tech-dark-blue via-transparent to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-tech-lightest-slate">{project.title}</h3>
                {renderDescription(project)}
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-mono bg-tech-navy py-1 px-2 rounded text-tech-light-blue"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center space-x-4">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-tech-light-slate hover:text-tech-light-blue transition-colors"
                      aria-label="Voir le code sur GitHub"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-tech-light-slate hover:text-tech-light-blue transition-colors"
                      aria-label="Voir la démo"
                    >
                      <ArrowUpRight size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


import React, { useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Code, Database, LayoutDashboard, Server, Settings, Terminal, Wrench, Cloud, Cpu, BarChart2, PieChart2 } from 'lucide-react';

type Skill = {
  name: string;
  level: number;
  category: string;
  icon: React.ReactNode;
};

const skillsData: Skill[] = [
  // DATA & IA
  {
    name: "Python",
    level: 95,
    category: "DATA & IA",
    icon: <Code className="text-tech-light-blue" size={18} />
  }, {
    name: "Machine Learning",
    level: 90,
    category: "DATA & IA",
    icon: <Settings className="text-tech-light-blue" size={18} />
  }, {
    name: "Deep Learning",
    level: 85,
    category: "DATA & IA",
    icon: <Settings className="text-tech-light-blue" size={18} />
  }, {
    name: "NLP",
    level: 80,
    category: "DATA & IA",
    icon: <Settings className="text-tech-light-blue" size={18} />
  }, {
    name: "TensorFlow",
    level: 85,
    category: "DATA & IA",
    icon: <Wrench className="text-tech-light-blue" size={18} />
  }, {
    name: "PyTorch",
    level: 85,
    category: "DATA & IA",
    icon: <Wrench className="text-tech-light-blue" size={18} />
  }, {
    name: "Scikit-Learn",
    level: 90,
    category: "DATA & IA",
    icon: <Wrench className="text-tech-light-blue" size={18} />
  }, {
    name: "R",
    level: 85,
    category: "DATA & IA",
    icon: <BarChart2 className="text-tech-light-blue" size={18} />
  },
  
  // Front & Back End
  {
    name: "JavaScript",
    level: 80,
    category: "Front & Back End",
    icon: <Code className="text-tech-light-blue" size={18} />
  }, {
    name: "React",
    level: 75,
    category: "Front & Back End",
    icon: <LayoutDashboard className="text-tech-light-blue" size={18} />
  }, {
    name: "MongoDB",
    level: 75,
    category: "Front & Back End",
    icon: <Database className="text-tech-light-blue" size={18} />
  }, {
    name: "PostgreSQL",
    level: 70,
    category: "Front & Back End",
    icon: <Database className="text-tech-light-blue" size={18} />
  },
  
  // Cloud & DevOps
  {
    name: "Docker",
    level: 75,
    category: "Cloud & DevOps",
    icon: <Server className="text-tech-light-blue" size={18} />
  }, {
    name: "AWS",
    level: 65,
    category: "Cloud & DevOps",
    icon: <Cloud className="text-tech-light-blue" size={18} />
  }, {
    name: "Terminal",
    level: 85,
    category: "Cloud & DevOps",
    icon: <Terminal className="text-tech-light-blue" size={18} />
  }
];

const categoryData = [
  {
    name: "DATA & IA",
    value: 8
  }, {
    name: "Front & Back End",
    value: 4
  }, {
    name: "Cloud & DevOps",
    value: 3
  }
];

const COLORS = ['#64ffda', '#38bdf8', '#818cf8', '#6ee7b7', '#f472b6', '#fbbf24', '#fb923c'];

const CustomTooltip = ({
  active,
  payload,
  label
}: any) => {
  if (active && payload && payload.length) {
    return <div className="glass p-2 text-sm">
        <p className="font-semibold">{label}</p>
        <p className="text-tech-light-blue">{`Niveau: ${payload[0].value}%`}</p>
      </div>;
  }
  return null;
};

const PieCustomTooltip = ({
  active,
  payload
}: any) => {
  if (active && payload && payload.length) {
    return <div className="glass p-2 text-sm">
        <p className="font-semibold">{payload[0].name}</p>
        <p className="text-tech-light-blue">{`${payload[0].value} compétences`}</p>
      </div>;
  }
  return null;
};

const Skills: React.FC = () => {
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
    reveal();
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return <section id="skills" className="section-padding py-28 bg-tech-dark-blue/30">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center reveal">
          <span className="number-heading">04.</span>
          Compétences
          <span className="h-[1px] bg-tech-light-navy ml-4 flex-grow"></span>
        </h2>
        
        <div className="grid md:grid-cols-1 gap-8 w-full">
          <div className="glass p-6 reveal w-full">
            <h3 className="text-xl font-semibold mb-6 text-center text-tech-lightest-slate">Répartition par domaine</h3>
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={categoryData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#8884d8" paddingAngle={5} dataKey="value" animationDuration={1500} label={({
                  name
                }) => name} labelLine={{
                  stroke: '#64ffda',
                  strokeWidth: 1
                }}>
                    {categoryData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                  </Pie>
                  <Tooltip content={<PieCustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-6 grid grid-cols-3 gap-2">
              {categoryData.map((category, index) => <div key={index} className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-2" style={{
                backgroundColor: COLORS[index % COLORS.length]
              }}></div>
                  <span className="text-tech-light-slate text-sm">{category.name}</span>
                </div>)}
            </div>
          </div>
        </div>
        
        <div className="mt-12 glass p-6 reveal">
          <h3 className="text-xl font-semibold mb-6 text-center text-tech-lightest-slate">Liste des compétences</h3>
          
          {/* Group skills by category */}
          {["DATA & IA", "Front & Back End", "Cloud & DevOps"].map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8">
              <h4 className="text-lg font-medium mb-4 text-tech-light-blue border-b border-tech-light-navy pb-2">{category}</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skillsData
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <div key={index} className="glass p-4 flex flex-col items-center text-center transition-transform hover:scale-105">
                      <div className="mb-2">{skill.icon}</div>
                      <h4 className="font-medium text-tech-lightest-slate">{skill.name}</h4>
                      <div className="mt-2 w-full bg-tech-light-navy rounded-full h-2">
                        <div className="bg-tech-light-blue h-2 rounded-full" style={{
                          width: `${skill.level}%`
                        }}></div>
                      </div>
                      <span className="text-xs mt-1 text-tech-light-blue">{skill.level}%</span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>;
};

export default Skills;

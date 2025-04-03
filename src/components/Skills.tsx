
import React, { useEffect } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

type Skill = {
  name: string;
  level: number;
  category: string;
};

const skillsData: Skill[] = [
  { name: "React", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 85, category: "Frontend" },
  { name: "TypeScript", level: 80, category: "Frontend" },
  { name: "Node.js", level: 75, category: "Backend" },
  { name: "Express", level: 80, category: "Backend" },
  { name: "MongoDB", level: 70, category: "Backend" },
  { name: "PostgreSQL", level: 65, category: "Backend" },
  { name: "HTML/CSS", level: 90, category: "Frontend" },
  { name: "TailwindCSS", level: 85, category: "Frontend" },
  { name: "Git", level: 80, category: "Tools" },
  { name: "Docker", level: 60, category: "DevOps" },
  { name: "AWS", level: 50, category: "DevOps" },
];

const categoryData = [
  { name: "Frontend", value: 5 },
  { name: "Backend", value: 4 },
  { name: "DevOps", value: 2 },
  { name: "Tools", value: 1 },
];

const COLORS = ['#64ffda', '#38bdf8', '#818cf8', '#6ee7b7'];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass p-2 text-sm">
        <p className="font-semibold">{label}</p>
        <p className="text-tech-light-blue">{`Niveau: ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

const PieCustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass p-2 text-sm">
        <p className="font-semibold">{payload[0].name}</p>
        <p className="text-tech-light-blue">{`${payload[0].value} compétences`}</p>
      </div>
    );
  }
  return null;
};

const Skills: React.FC = () => {
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
    <section id="skills" className="section-padding py-28 bg-tech-dark-blue/30">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center reveal">
          <span className="number-heading">04.</span>
          Compétences
          <span className="h-[1px] bg-tech-light-navy ml-4 flex-grow"></span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 glass p-6 reveal">
            <h3 className="text-xl font-semibold mb-6 text-center text-tech-lightest-slate">Niveaux de compétences</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={skillsData}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 60, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#233554" horizontal={false} />
                  <XAxis 
                    type="number" 
                    domain={[0, 100]} 
                    tick={{ fill: '#a8b2d1' }} 
                    axisLine={{ stroke: '#233554' }}
                  />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    tick={{ fill: '#a8b2d1' }} 
                    width={80}
                    axisLine={{ stroke: '#233554' }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar 
                    dataKey="level" 
                    fill="#64ffda" 
                    background={{ fill: '#112240' }} 
                    animationDuration={1500}
                    radius={[0, 4, 4, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="glass p-6 reveal">
            <h3 className="text-xl font-semibold mb-6 text-center text-tech-lightest-slate">Répartition par domaine</h3>
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    animationDuration={1500}
                    label={({ name }) => name}
                    labelLine={{ stroke: '#64ffda', strokeWidth: 1 }}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<PieCustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-2">
              {categoryData.map((category, index) => (
                <div key={index} className="flex items-center">
                  <div 
                    className="w-3 h-3 rounded-full mr-2" 
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></div>
                  <span className="text-tech-light-slate text-sm">{category.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

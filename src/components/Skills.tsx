import React, { useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Code, Database, LayoutDashboard, Server, Settings, Terminal, Wrench, Cloud, BarChart2, FileCode, Coffee, Brain, Atom, ChartPie, ChartBar, Layers, Smartphone, GitBranch, GitMerge, Gitlab } from 'lucide-react';
type Skill = {
  name: string;
  category: string;
  icon: React.ReactNode;
};
const skillsData: Skill[] = [{
  name: "Python",
  category: "Language",
  icon: <Code className="text-tech-light-blue" size={24} />
}, {
  name: "JavaScript",
  category: "Language",
  icon: <Code className="text-tech-light-blue" size={24} />
}, {
  name: "TypeScript",
  category: "Language",
  icon: <FileCode className="text-tech-light-blue" size={24} />
}, {
  name: "R",
  category: "Language",
  icon: <BarChart2 className="text-tech-light-blue" size={24} />
}, {
  name: "PHP",
  category: "Language",
  icon: <Code className="text-tech-light-blue" size={24} />
}, {
  name: "JAVA",
  category: "Language",
  icon: <Coffee className="text-tech-light-blue" size={24} />
}, {
  name: "Machine Learning et Deep Learning",
  category: "DATA & IA",
  icon: <Brain className="text-tech-light-blue" size={24} />
}, {
  name: "NLP, LLM, Embedding, RAG",
  category: "DATA & IA",
  icon: <Terminal className="text-tech-light-blue" size={24} />
}, {
  name: "TensorFlow",
  category: "DATA & IA",
  icon: <Atom className="text-tech-light-blue" size={24} />
}, {
  name: "PyTorch",
  category: "DATA & IA",
  icon: <Wrench className="text-tech-light-blue" size={24} />
}, {
  name: "Scikit-Learn",
  category: "DATA & IA",
  icon: <Wrench className="text-tech-light-blue" size={24} />
}, {
  name: "Keras",
  category: "DATA & IA",
  icon: <Brain className="text-tech-light-blue" size={24} />
}, {
  name: "OpenCV",
  category: "DATA & IA",
  icon: <BarChart2 className="text-tech-light-blue" size={24} />
}, {
  name: "Power BI",
  category: "DATA & IA",
  icon: <ChartPie className="text-tech-light-blue" size={24} />
}, {
  name: "Tableau",
  category: "DATA & IA",
  icon: <ChartBar className="text-tech-light-blue" size={24} />
}, {
  name: "NodeJS",
  category: "FrontEnd & BackEnd",
  icon: <Server className="text-tech-light-blue" size={24} />
}, {
  name: "React",
  category: "FrontEnd & BackEnd",
  icon: <LayoutDashboard className="text-tech-light-blue" size={24} />
}, {
  name: "MongoDB",
  category: "FrontEnd & BackEnd",
  icon: <Database className="text-tech-light-blue" size={24} />
}, {
  name: "PostgreSQL",
  category: "FrontEnd & BackEnd",
  icon: <Database className="text-tech-light-blue" size={24} />
}, {
  name: "Angular",
  category: "FrontEnd & BackEnd",
  icon: <Layers className="text-tech-light-blue" size={24} />
}, {
  name: "Express",
  category: "FrontEnd & BackEnd",
  icon: <Server className="text-tech-light-blue" size={24} />
}, {
  name: "Symfony",
  category: "FrontEnd & BackEnd",
  icon: <Code className="text-tech-light-blue" size={24} />
}, {
  name: "Flutter",
  category: "Mobile",
  icon: <Smartphone className="text-tech-light-blue" size={24} />
}, {
  name: "Docker",
  category: "Cloud & DevOps",
  icon: <Server className="text-tech-light-blue" size={24} />
}, {
  name: "AWS",
  category: "Cloud & DevOps",
  icon: <Cloud className="text-tech-light-blue" size={24} />
}, {
  name: "Terminal",
  category: "Cloud & DevOps",
  icon: <Terminal className="text-tech-light-blue" size={24} />
}, {
  name: "Hadoop",
  category: "Cloud & DevOps",
  icon: <GitMerge className="text-tech-light-blue" size={24} />
}, {
  name: "Google Cloud",
  category: "Cloud & DevOps",
  icon: <Cloud className="text-tech-light-blue" size={24} />
}, {
  name: "GitLab",
  category: "Cloud & DevOps",
  icon: <Gitlab className="text-tech-light-blue" size={24} />
}, {
  name: "Jira",
  category: "Cloud & DevOps",
  icon: <Settings className="text-tech-light-blue" size={24} />
}];
const categoryData = [{
  name: "Language",
  value: 6
}, {
  name: "DATA & IA",
  value: 9
}, {
  name: "FrontEnd & BackEnd",
  value: 7
}, {
  name: "Mobile",
  value: 1
}, {
  name: "Cloud & DevOps",
  value: 6
}];
const COLORS = ['#64ffda', '#38bdf8', '#818cf8', '#6ee7b7', '#f472b6', '#fbbf24', '#fb923c'];
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
          <span className="number-heading">03.</span>
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
            
            <div className="mt-6 grid grid-cols-5 gap-2">
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
          
          
          {["Language", "DATA & IA", "FrontEnd & BackEnd", "Mobile", "Cloud & DevOps"].map((category, categoryIndex) => <div key={categoryIndex} className="mb-8">
              <h4 className="text-lg font-medium mb-4 text-tech-light-blue border-b border-tech-light-navy pb-2">{category}</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skillsData.filter(skill => skill.category === category).map((skill, index) => <div key={index} className="glass p-4 flex flex-col items-center text-center transition-transform hover:scale-105">
                      <div className="mb-3 text-tech-light-blue">{skill.icon}</div>
                      <h4 className="font-medium text-tech-lightest-slate">{skill.name}</h4>
                    </div>)}
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Skills;
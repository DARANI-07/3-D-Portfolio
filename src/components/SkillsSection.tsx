import { useEffect, useState, useRef } from 'react';

interface Skill {
  name: string;
  percentage: number;
  category: 'frontend' | 'backend' | 'tools';
  color: string;
}

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateProgress, setAnimateProgress] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills: Skill[] = [
    // Frontend Skills
    { name: 'HTML5', percentage: 95, category: 'frontend', color: 'from-orange-500 to-red-500' },
    { name: 'CSS3', percentage: 90, category: 'frontend', color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', percentage: 88, category: 'frontend', color: 'from-yellow-500 to-orange-500' },
    { name: 'React', percentage: 85, category: 'frontend', color: 'from-cyan-500 to-blue-500' },
    
    // Backend Skills
    { name: 'Node.js', percentage: 85, category: 'backend', color: 'from-green-500 to-emerald-500' },
    { name: 'Python', percentage: 80, category: 'backend', color: 'from-blue-500 to-yellow-500' },
    { name: 'Java', percentage: 75, category: 'backend', color: 'from-red-500 to-orange-500' },
    { name: 'MongoDB', percentage: 75, category: 'backend', color: 'from-green-500 to-teal-500' },
    { name: 'REST APIs', percentage: 88, category: 'backend', color: 'from-purple-500 to-pink-500' },
    
    // Tools & Technologies
    { name: 'Git', percentage: 90, category: 'tools', color: 'from-orange-500 to-red-500' },
    { name: 'Docker', percentage: 70, category: 'tools', color: 'from-blue-500 to-cyan-500' },
    { name: 'AWS', percentage: 65, category: 'tools', color: 'from-orange-500 to-yellow-500' },
    { name: 'Figma', percentage: 85, category: 'tools', color: 'from-purple-500 to-pink-500' },
    { name: 'GSAP', percentage: 80, category: 'tools', color: 'from-green-500 to-blue-500' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setAnimateProgress(true), 500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const groupedSkills = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    tools: skills.filter(skill => skill.category === 'tools')
  };

  const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => (
    <div 
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex justify-between items-center mb-3">
        <span className="text-foreground font-medium text-lg">{skill.name}</span>
        <span className="text-glow-primary font-semibold">{skill.percentage}%</span>
      </div>
      
      <div className="h-3 bg-secondary rounded-full overflow-hidden shadow-inner">
        <div 
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1500 ease-out shadow-glow relative`}
          style={{ 
            width: animateProgress ? `${skill.percentage}%` : '0%',
            transitionDelay: `${index * 150}ms`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
        </div>
      </div>
    </div>
  );

  const SkillCategory = ({ title, skills, icon }: { title: string; skills: Skill[]; icon: string }) => (
    <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 shadow-card hover:shadow-glow-lg transition-all duration-300">
      <div className="flex items-center mb-8">
        <span className="text-3xl mr-4">{icon}</span>
        <h3 className="text-2xl font-bold text-foreground">{title}</h3>
      </div>
      
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 bg-gradient-dark relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-glow-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-glow-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Technical </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expertise across the full technology stack with a focus on modern, scalable solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <SkillCategory 
            title="Frontend Development" 
            skills={groupedSkills.frontend} 
            icon="🎨"
          />
          <SkillCategory 
            title="Backend Development" 
            skills={groupedSkills.backend} 
            icon="⚙️"
          />
          <SkillCategory 
            title="Tools & Technologies" 
            skills={groupedSkills.tools} 
            icon="🔧"
          />
        </div>

        {/* Tech Stack Highlights */}
        <div className={`mt-16 text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '800ms' }}>
          <h3 className="text-2xl font-semibold text-foreground mb-8">Tech Stack Highlights</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'Node.js', 'Java', 'Python', 'AWS', 'MongoDB', 'Docker', 'GSAP'].map((tech, index) => (
              <span 
                key={tech}
                className="px-6 py-3 bg-secondary/50 backdrop-blur-sm border border-border rounded-full text-foreground font-medium hover:shadow-glow transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
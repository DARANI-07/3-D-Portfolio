import { useState, useEffect, useRef } from 'react';
import { Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
}

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projects: Project[] = [
    {
      title: "Portfolio Website",
      description: "A innovative project showcasing modern development practices and creative problem-solving approaches.",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Frontend"
    },
    {
      title: "Social Media Dashboard",
      description: "A innovative project showcasing modern development practices and creative problem-solving approaches.",
      technologies: ["JavaScript", "React", "API"],
      category: "Full Stack"
    },
    {
      title: "Katomaran Todo App",
      description: "This project is a part of Hackathon run by https://www.katomaran.com",
      technologies: ["JavaScript", "React"],
      category: "Frontend"
    },
    {
      title: "ML Portfolio",
      description: "An innovative AI/ML project leveraging machine learning algorithms for intelligent data analysis and predictions.",
      technologies: ["Python", "TensorFlow", "Scikit-learn"],
      category: "Machine Learning"
    },
    {
      title: "Autodesk Integration",
      description: "A innovative project showcasing modern development practices and creative problem-solving approaches.",
      technologies: ["JavaScript", "API", "3D Modeling"],
      category: "Integration"
    },
    {
      title: "Real-time Analytics",
      description: "A innovative project showcasing modern development practices and creative problem-solving approaches.",
      technologies: ["Python", "WebSocket", "Data Viz"],
      category: "Backend"
    },
    {
      title: "Azure Data Bricks",
      description: "A innovative project showcasing modern development practices and creative problem-solving approaches.",
      technologies: ["Python", "Azure", "Big Data"],
      category: "Cloud"
    },
    {
      title: "PySpark Analytics",
      description: "A innovative project showcasing modern development practices and creative problem-solving approaches.",
      technologies: ["Python", "Spark", "Analytics"],
      category: "Big Data"
    },
    {
      title: "Number Puzzle Game",
      description: "A innovative project showcasing modern development practices and creative problem-solving approaches.",
      technologies: ["JavaScript", "Game Logic"],
      category: "Game Development"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      'HTML': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
      'CSS': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      'JavaScript': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
      'React': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      'Python': 'bg-green-500/20 text-green-300 border-green-500/30',
      'Java': 'bg-red-500/20 text-red-300 border-red-500/30',
      'API': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      'default': 'bg-glow-primary/20 text-glow-primary border-glow-primary/30'
    };
    return colors[tech] || colors['default'];
  };

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
    <div 
      className={`group bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 shadow-card hover:shadow-glow-lg transition-all duration-500 hover:scale-105 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-glow-primary transition-colors duration-300">
            {project.title}
          </h3>
          <span className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
            {project.category}
          </span>
        </div>
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-2 h-2 bg-glow-primary rounded-full animate-pulse" />
          <div className="w-1 h-1 bg-glow-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>

      <p className="text-muted-foreground mb-6 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <span 
            key={tech}
            className={`px-3 py-1 rounded-full text-xs font-medium border ${getTechColor(tech)} transition-all duration-300 hover:scale-110`}
          >
            {tech}
          </span>
        ))}
      </div>

      <button 
        onClick={() => window.open('https://github.com/DARANI-07', '_blank')}
        className="w-full flex items-center justify-center gap-3 bg-gradient-primary text-primary-foreground py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-glow group-hover:scale-105"
      >
        <Github size={20} />
        View on GitHub
      </button>
    </div>
  );

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 bg-gradient-dark relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow-primary rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-glow-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Featured </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore my portfolio of innovative solutions and creative implementations
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className={`text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '1000ms' }}>
          <button 
            onClick={() => window.open('https://github.com/DARANI-07', '_blank')}
            className="group inline-flex items-center gap-4 bg-secondary/50 backdrop-blur-sm border-2 border-glow-primary hover:bg-glow-primary/10 px-8 py-4 rounded-xl text-glow-primary font-semibold text-lg transition-all duration-300 hover:shadow-glow-lg hover:scale-105"
          >
            <Github size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            View All Projects on GitHub
            <div className="w-6 h-0.5 bg-glow-primary group-hover:w-8 transition-all duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
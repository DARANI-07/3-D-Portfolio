import { useState, useEffect, useRef } from 'react';

interface Award {
  title: string;
  organization: string;
  date: string;
  category: 'certification' | 'achievement';
  icon: string;
}

const AwardsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const awards: Award[] = [
    {
      title: "Industry 4.0 and IoT",
      organization: "NPTEL",
      date: "2024",
      category: "certification",
      icon: "🏆"
    },
    {
      title: "Java Programming",
      organization: "NPTEL",
      date: "2024",
      category: "certification",
      icon: "☕"
    },
    {
      title: "Human Computer Interaction",
      organization: "NPTEL",
      date: "2024",
      category: "certification",
      icon: "🖥️"
    },
    {
      title: "Paper Presentation",
      organization: "8th Edition TECHgium",
      date: "Nov 2024",
      category: "achievement",
      icon: "📄"
    },
    {
      title: "International Conference",
      organization: "Dubai",
      date: "Dec 2024",
      category: "achievement",
      icon: "🌍"
    },
    {
      title: "Carta Presentra",
      organization: "Sri Krishna College of Technology",
      date: "Apr 2024",
      category: "achievement",
      icon: "🎯"
    },
    {
      title: "Web Emersion Workshop",
      organization: "Sri Krishna College",
      date: "Apr 2024",
      category: "achievement",
      icon: "🌐"
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

  const certifications = awards.filter(award => award.category === 'certification');
  const achievements = awards.filter(award => award.category === 'achievement');

  const AwardCard = ({ award, index }: { award: Award; index: number }) => (
    <div 
      className={`group bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 shadow-card hover:shadow-glow-lg transition-all duration-500 hover:scale-105 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
          {award.icon}
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-glow-primary transition-colors duration-300">
            {award.title}
          </h3>
          
          <p className="text-muted-foreground mb-3 leading-relaxed">
            {award.organization}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-glow-secondary font-semibold">
              {award.date}
            </span>
            
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-2 h-2 bg-glow-primary rounded-full animate-pulse" />
              <div className="w-1 h-1 bg-glow-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 h-1 bg-gradient-primary/20 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-primary rounded-full w-0 group-hover:w-full transition-all duration-700" />
      </div>
    </div>
  );

  const SectionGroup = ({ title, items, icon }: { title: string; items: Award[]; icon: string }) => (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-8">
        <span className="text-3xl">{icon}</span>
        <h3 className="text-2xl font-bold text-foreground">{title}</h3>
        <div className="flex-1 h-px bg-gradient-primary/30" />
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <AwardCard key={`${item.title}-${item.date}`} award={item} index={index} />
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
        <div className="absolute top-0 left-0 w-96 h-96 bg-glow-secondary rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-glow-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Certificates & </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A showcase of my professional certifications, academic achievements, and 
            extracurricular accomplishments
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        {/* Awards Content */}
        <div className="max-w-5xl mx-auto">
          <SectionGroup 
            title="Professional Certifications" 
            items={certifications} 
            icon="🎓"
          />
          
          <SectionGroup 
            title="Co-Curricular Achievements" 
            items={achievements} 
            icon="📚"
          />
        </div>

        {/* Stats Section */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '800ms' }}>
          {[
            { label: 'Years Experience', value: '2+', icon: '⏳' },
            { label: 'Projects Completed', value: '15+', icon: '🚀' },
            { label: 'Client Satisfaction', value: '100%', icon: '😊' },
            { label: 'Certifications', value: '7+', icon: '🏅' }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6 hover:shadow-glow transition-all duration-300"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
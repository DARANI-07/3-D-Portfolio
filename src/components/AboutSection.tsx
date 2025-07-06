import { useEffect, useState, useRef } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 bg-gradient-dark relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-glow-secondary rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-glow-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">About </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
        </div>

        {/* About Content */}
        <div className="max-w-6xl mx-auto">
          <div className={`bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12 shadow-card hover:shadow-glow-lg transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '200ms' }}>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Profile Image */}
              <div className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`} style={{ transitionDelay: '300ms' }}>
                <div className="relative max-w-md mx-auto lg:mx-0">
                  <div className="relative">
                    <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-glow-primary/50 shadow-glow-lg animate-glow-pulse">
                      <img
                        src="/lovable-uploads/32192338-9b91-4ffb-a80a-6182dae4606d.png"
                        alt="Daranidaran Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-10 animate-pulse" />
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-glow-secondary rounded-full animate-float" />
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-glow-accent rounded-full animate-float" style={{ animationDelay: '1s' }} />
                </div>
              </div>

              {/* About Text */}
              <div className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`} style={{ transitionDelay: '400ms' }}>
                <div className="mb-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Creative Developer | Futuristic Thinker
                  </h3>
                  <div className="w-24 h-1 bg-gradient-primary rounded-full mb-8" />
                </div>

                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-muted-foreground">
                    I'm a passionate full-stack developer with a deep fascination for cutting-edge technology 
                    and futuristic design. My journey in software development is driven by the desire to create 
                    immersive digital experiences that push the boundaries of what's possible.
                  </p>
                  
                  <p className="text-muted-foreground">
                    With expertise spanning modern web technologies, machine learning, and cloud computing, 
                    I specialize in building scalable applications that combine elegant user interfaces with 
                    robust backend architectures.
                  </p>
                  
                  <p className="text-muted-foreground">
                    When I'm not coding, you'll find me exploring emerging technologies, contributing to open-source 
                    projects, and envisioning the next generation of digital solutions.
                  </p>
                </div>

                {/* Highlight Stats */}
                <div className="grid grid-cols-2 gap-6 mt-10">
                  {[
                    { label: 'Experience', value: '2+ Years', icon: '⚡' },
                    { label: 'Projects', value: '15+', icon: '🚀' },
                    { label: 'Technologies', value: '12+', icon: '💻' },
                    { label: 'Passion', value: '∞', icon: '❤️' }
                  ].map((stat, index) => (
                    <div 
                      key={stat.label}
                      className={`text-center transition-all duration-500 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: `${500 + index * 100}ms` }}
                    >
                      <div className="text-2xl mb-2">{stat.icon}</div>
                      <div className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
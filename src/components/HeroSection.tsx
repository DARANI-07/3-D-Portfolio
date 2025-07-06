import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-dark">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-glow-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-glow-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-glow-accent/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className={`container mx-auto px-6 text-center relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>

        {/* Main Heading */}
        <div className="space-y-6 mb-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
            <span className="text-foreground">Hi, I'm </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
              Daranidaran
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-light">
            Creative Developer | Futuristic Thinker
          </h2>
          
          <div className="flex justify-center">
            <div className="w-32 h-1 bg-gradient-primary rounded-full animate-pulse" />
          </div>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          Crafting immersive digital experiences with cutting-edge technology and 
          creative innovation. Passionate about building the future of web development.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="group relative px-8 py-4 bg-gradient-primary text-primary-foreground rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-glow-lg hover:scale-105">
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
          </button>
          
          <button className="px-8 py-4 border-2 border-glow-primary text-glow-primary rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-glow-primary/10 hover:shadow-glow">
            Get In Touch
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
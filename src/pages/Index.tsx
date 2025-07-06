import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import AwardsSection from '@/components/AwardsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  
  const sections = [
    { component: HeroSection, name: 'Home' },
    { component: SkillsSection, name: 'Skills' },
    { component: ProjectsSection, name: 'Projects' },
    { component: AwardsSection, name: 'Awards' },
    { component: ContactSection, name: 'Contact' }
  ];

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;
      
      e.preventDefault();
      
      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        // Scroll down
        setIsScrolling(true);
        setCurrentSection(prev => prev + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        // Scroll up
        setIsScrolling(true);
        setCurrentSection(prev => prev - 1);
      }
      
      setTimeout(() => setIsScrolling(false), 800);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;
      
      if (e.key === 'ArrowDown' && currentSection < sections.length - 1) {
        setIsScrolling(true);
        setCurrentSection(prev => prev + 1);
        setTimeout(() => setIsScrolling(false), 800);
      } else if (e.key === 'ArrowUp' && currentSection > 0) {
        setIsScrolling(true);
        setCurrentSection(prev => prev - 1);
        setTimeout(() => setIsScrolling(false), 800);
      }
    };

    // Add event listeners
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSection, isScrolling, sections.length]);

  const handleSectionChange = (sectionIndex: number) => {
    if (isScrolling || sectionIndex === currentSection) return;
    
    setIsScrolling(true);
    setCurrentSection(sectionIndex);
    setTimeout(() => setIsScrolling(false), 800);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-dark">
      {/* Navigation */}
      <Navigation 
        currentSection={currentSection} 
        onSectionChange={handleSectionChange}
      />

      {/* Main Content Container */}
      <div 
        className="flex flex-col h-screen transition-transform duration-800 ease-out"
        style={{ 
          transform: `translateY(-${currentSection * 100}vh)`,
          willChange: 'transform'
        }}
      >
        {sections.map((Section, index) => (
          <div 
            key={Section.name}
            className="min-h-screen flex-shrink-0"
          >
            <Section.component />
          </div>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-2 bg-background/80 backdrop-blur-md border border-border rounded-full px-4 py-2">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSectionChange(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSection === index
                  ? 'bg-glow-primary scale-125'
                  : 'bg-muted-foreground hover:bg-foreground'
              }`}
              title={sections[index].name}
            />
          ))}
        </div>
      </div>

      {/* Loading Overlay */}
      {isScrolling && (
        <div className="fixed inset-0 z-40 bg-background/20 backdrop-blur-sm pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-8 border-2 border-glow-primary border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import AwardsSection from '@/components/AwardsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  
  const sections = [
    { component: HeroSection, name: 'Home', id: 'home' },
    { component: AboutSection, name: 'About', id: 'about' },
    { component: SkillsSection, name: 'Skills', id: 'skills' },
    { component: AwardsSection, name: 'Awards', id: 'awards' },
    { component: ProjectsSection, name: 'Projects', id: 'projects' },
    { component: ContactSection, name: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const newSection = Math.round(scrollPosition / windowHeight);
      
      if (newSection !== currentSection && newSection >= 0 && newSection < sections.length) {
        setCurrentSection(newSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection, sections.length]);

  const scrollToSection = (sectionIndex: number) => {
    const targetY = sectionIndex * window.innerHeight;
    window.scrollTo({
      top: targetY,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative bg-gradient-dark">
      {/* Navigation */}
      <Navigation 
        currentSection={currentSection} 
        onSectionChange={scrollToSection}
        sections={sections}
      />

      {/* Main Content */}
      <main>
        {sections.map((Section, index) => (
          <section 
            key={Section.name}
            id={Section.id}
            className="min-h-screen snap-start"
          >
            <Section.component />
          </section>
        ))}
      </main>
    </div>
  );
};

export default Index;
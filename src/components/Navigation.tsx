import { useState, useEffect } from 'react';

interface NavigationProps {
  currentSection: number;
  onSectionChange: (section: number) => void;
}

const Navigation = ({ currentSection, onSectionChange }: NavigationProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const sections = [
    { name: 'Home', id: 0 },
    { name: 'Skills', id: 1 },
    { name: 'Projects', id: 2 },
    { name: 'Awards', id: 3 },
    { name: 'Contact', id: 4 }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(lastScrollY > currentScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              DS
            </div>

            {/* Navigation Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => onSectionChange(section.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    currentSection === section.id
                      ? 'text-glow-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {section.name}
                  {currentSection === section.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary animate-fade-in" />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-foreground">
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <div className="w-full h-0.5 bg-foreground mb-1 transition-all duration-300" />
                <div className="w-full h-0.5 bg-foreground mb-1 transition-all duration-300" />
                <div className="w-full h-0.5 bg-foreground transition-all duration-300" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Section Indicators */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col space-y-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              currentSection === section.id
                ? 'bg-glow-primary border-glow-primary shadow-glow'
                : 'border-muted-foreground hover:border-foreground'
            }`}
            title={section.name}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
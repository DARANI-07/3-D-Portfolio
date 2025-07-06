import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Show text first
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 500);

    // Progress bar animation
    const progressTimer = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(onComplete, 800); // Delay before transitioning
            return 100;
          }
          return prev + 2;
        });
      }, 50);

      return () => clearInterval(interval);
    }, 1000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(progressTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-dark flex items-center justify-center z-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-glow-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-glow-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-glow-accent/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 text-center">
        {/* Name Animation */}
        <div className={`mb-12 transition-all duration-1000 ${
          showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent animate-glow-pulse">
              DARANIDARAN S
            </span>
          </h1>
          <div className="flex justify-center">
            <div className="w-32 h-1 bg-gradient-primary rounded-full animate-pulse" />
          </div>
        </div>

        {/* Progress Bar */}
        <div className={`max-w-md mx-auto transition-all duration-700 ${
          showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} style={{ transitionDelay: '300ms' }}>
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">Loading Portfolio</span>
              <span className="text-sm text-glow-primary font-semibold">{progress}%</span>
            </div>
            
            <div className="h-2 bg-secondary/50 rounded-full overflow-hidden shadow-inner">
              <div 
                className="h-full bg-gradient-primary rounded-full transition-all duration-300 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
              </div>
            </div>
          </div>
          
          {progress === 100 && (
            <div className="text-sm text-glow-secondary animate-fade-in">
              Welcome to the future of development
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
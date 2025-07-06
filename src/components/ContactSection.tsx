import { useState, useEffect, useRef, FormEvent } from 'react';
import { Github, Linkedin, Youtube } from 'lucide-react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const sectionRef = useRef<HTMLElement>(null);

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission - could integrate with email service
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.open(`mailto:daranidaran08@gmail.com?subject=${subject}&body=${body}`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/DARANI-07',
      icon: Github,
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/daranidaran',
      icon: Linkedin,
      color: 'hover:text-blue-400'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@daranidaran',
      icon: Youtube,
      color: 'hover:text-red-400'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 bg-gradient-dark relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-glow-primary rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-glow-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Get In </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Ready to bring your ideas to life? Let's collaborate and create something amazing together.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">Let's Connect</h3>
              
              {/* Email */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-glow-primary mb-3">Email</h4>
                <a 
                  href="mailto:daranidaran08@gmail.com"
                  className="text-muted-foreground hover:text-glow-primary transition-colors duration-300 text-lg"
                >
                  daranidaran08@gmail.com
                </a>
              </div>

              {/* Social Links */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-glow-primary mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center w-12 h-12 bg-secondary/50 border border-border rounded-lg transition-all duration-300 hover:shadow-glow hover:scale-110 ${social.color}`}
                        title={social.name}
                      >
                        <IconComponent size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Availability */}
              <div className="border-t border-border pt-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-foreground font-semibold">Available for Projects</span>
                </div>
                <p className="text-muted-foreground">
                  Currently accepting new opportunities and exciting collaborations.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`} style={{ transitionDelay: '200ms' }}>
            <form onSubmit={handleSubmit} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-glow-primary focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-glow-primary focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-glow-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full mt-8 bg-gradient-primary text-primary-foreground py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-glow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-glow-primary focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center mt-16 pt-8 border-t border-border transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '600ms' }}>
          <p className="text-muted-foreground">
            © 2024 Daranidaran. Crafted with passion and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground mb-6 drop-shadow-lg">
            Solih Mirhalilov
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-primary-foreground/90 mb-8">
            Project & Operational Manager
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-12 font-opensans">
            Driving efficiency, leading projects, optimizing operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-primary-foreground text-primary rounded-lg font-semibold 
                       hover:scale-105 transition-transform duration-300 shadow-glow"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-4 bg-transparent border-2 border-primary-foreground text-primary-foreground 
                       rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary 
                       transition-all duration-300"
            >
              View Projects
            </a>
          </div>
        </div>

        <a
          href="#about"
          className="absolute top-[73%] bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="text-primary-foreground" size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;

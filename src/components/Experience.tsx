import { useEffect, useRef, useState } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
          Experience & Education
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Education */}
          <div
            className={`transition-all duration-1000 delay-100 ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <div className="bg-card rounded-xl shadow-card p-8 border border-border hover:shadow-glow transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary rounded-lg">
                  <GraduationCap className="text-primary-foreground" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">
                    Front-End Developer
                  </h3>
                  <p className="text-primary font-semibold mb-2">MS Start | 2023–2024</p>
                  <p className="text-card-foreground/80 font-opensans">
                    Comprehensive training in: HTML, CSS, JavaScript, Vue, Bootstrap, PHP
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Research Experience */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <div className="bg-card rounded-xl shadow-card p-8 border border-border hover:shadow-glow transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-lg">
                  <Briefcase className="text-secondary-foreground" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">
                    Operational Manager & Project Manager
                  </h3>
                  <p className="text-secondary font-semibold mb-2">MahoratSoft | 2025</p>
                  <ul className="list-disc list-inside text-card-foreground/80 font-opensans space-y-2">
<li>Planned and managed projects from initiation to delivery</li>
<li>Coordinated team tasks and monitored progress</li>
<li>Разрабатывал новые идеи для улучшения процессов и эффективности компании</li>
<li>Developed and implemented business processes</li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

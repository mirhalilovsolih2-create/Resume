import { useEffect, useRef, useState } from "react";
const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.2
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return <section id="about" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            About Me
          </h2>


        {/*  Project and Operations Manager. I organize workflows, distribute tasks,
         and maintain order in projects. I work with ClickUp and use methodologies 
        such as Kanban, Scrum, and other methodologies to ensure stable team performance and project progress. */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-xl shadow-card p-8 md:p-12 border border-border">
              <p className="text-lg md:text-xl text-card-foreground leading-relaxed font-opensans">
                I am a{" "}
                <span className="text-primary font-semibold">project management</span> and{" "}
                <span className="text-primary font-semibold">operational coordination</span>. 
                I organize workflows, distribute tasks, and maintain order in projects. I work with ClickUp and use methodologies such as Kanban and other methodologies to ensure stable team performance and project progress.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;
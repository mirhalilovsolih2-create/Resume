import { useEffect, useRef, useState } from "react";
const Skills = () => {
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
  const skillCategories = [{
    title: "Project Management",
    skills: [{
      name: "Team Coordination",
      level: 90
    }, {
      name: "Task Planning",
      level: 85
    }, {
      name: "Workflow Optimization",
      level: 88
    }]
  }, {
    title: "Operations Management",
    skills: [{
      name: "Process Improvement",
      level: 92
    }, {
      name: "Resource Allocation",
      level: 85
    }, {
      name: "Efficiency Tracking",
      level: 87
    }]
  }, {
    title: "Frontend Development",
    skills: [{
      name: "ReactJS",
      level: 90
    }, {
      name: "TailwinCSS,Bootstrap",
      level: 85
    }, {
      name: "Git&Github",
      level: 80
    }, {
      name: "NoCode(Wordpress)",
      level: 85
    }]
  }, {
    title: "Tools & Soft Skills",
    skills: [{
      name: "Excel",
      level: 88
    }, {
      name: "ClickUp/Trello",
      level: 90
    }, {
      name: "Figma",
      level: 75
    }, {
      name: "Communication",
      level: 95
    }, {
      name: "Leadership",
      level: 90
    }]
  }];
  return <section id="skills" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
          Skills & Expertise
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => <div key={categoryIndex} className={`transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{
          transitionDelay: `${categoryIndex * 100}ms`
        }}>
              <div className="bg-card rounded-xl shadow-card p-8 border border-border h-full">
                <h3 className="text-2xl font-bold text-card-foreground mb-6">
                  {category.title}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-card-foreground font-medium font-opensans">
                          {skill.name}
                        </span>
                        
                      </div>
                      
                    </div>)}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Skills;
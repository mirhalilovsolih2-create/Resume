import { useEffect, useRef, useState } from "react";
import { Folder, Users, Target } from "lucide-react";

const Projects = () => {
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

  const projects = [
    {
     icon: Folder,
title: "Corporate Website & IT Projects",
company: "MahoratSoft",
description: "Participated in the development of corporate websites and IT services, managing timelines and coordinating with the development team",
tags: ["Project Management", "Web Development", "IT Services", "Team Coordination"],

    },
    {
      icon: Users,
      title: "Recruitment & HR Operations",
      company: "MahoratSoft",
      description: "Organized and executed recruitment processes, improving team building efficiency",
      tags: ["HR Management", "Process Optimization", "Team Building"],
    },
    {
      icon: Target,
      title: "Client Outreach Program",
      company: "MahoratSoft",
      description: "Developed and implemented client outreach activities, increasing client engagement",
      tags: ["Client Relations", "Strategy", "Business Development"],
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
          Projects & Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-card rounded-xl shadow-card p-6 border border-border h-full hover:shadow-glow hover:scale-105 transition-all duration-300">
                <div className="p-3 bg-gradient-primary rounded-lg w-fit mb-4">
                  <project.icon className="text-primary-foreground" size={24} />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-primary font-semibold mb-3">{project.company}</p>
                <p className="text-card-foreground/80 mb-4 font-opensans">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

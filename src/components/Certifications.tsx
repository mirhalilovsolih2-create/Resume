import { useEffect, useRef, useState } from "react";
import { Award } from "lucide-react";

const Certifications = () => {
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

  const certifications = [
    {
      title: "Front-End Development Certificate",
      issuer: "MS Start",
      year: "2024",
    },
    {
      title: "Mahorat & Management Certificate",
      issuer: "Internship Program",
      year: "2025",
    },
    {
      title: "Operation Manager Certification",
      issuer: "Mahorat Soft",
      year: "2025",
    },
  ];

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
          Certifications & Awards
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-card rounded-xl shadow-card p-6 border border-border text-center hover:shadow-glow hover:scale-105 transition-all duration-300">
                <div className="p-4 bg-gradient-primary rounded-full w-fit mx-auto mb-4">
                  <Award className="text-primary-foreground" size={32} />
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">
                  {cert.title}
                </h3>
                <p className="text-primary font-semibold mb-1">{cert.issuer}</p>
                <p className="text-muted-foreground">{cert.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

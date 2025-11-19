import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const {
    toast
  } = useToast();
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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!"
    });
  };
  const contactInfo = [{
    icon: Phone,
    title: "Phone",
    value: "+998 99 177 96 33",
    link: "tel:+998991779633"
  }, {
    icon: Mail,
    title: "Telegram",
    value: "@mtech_supports",
    link: "https://t.me/mtech_supports"
  }, {
    icon: MapPin,
    title: "Location",
    value: "Tashkent city, Sergeli",
    link: null
  }];
  return <section id="contact" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
          Get In Touch
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => <div key={index} className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border hover:shadow-glow transition-all duration-300">
                  <div className="p-3 bg-primary rounded-lg">
                    <info.icon className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">
                      {info.title}
                    </h4>
                    {info.link ? <a href={info.link} className="text-primary hover:underline font-opensans">
                        {info.value}
                      </a> : <p className="text-card-foreground/80 font-opensans">
                        {info.value}
                      </p>}
                  </div>
                </div>)}
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;
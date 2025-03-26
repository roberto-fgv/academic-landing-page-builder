
import React, { useEffect, useRef } from 'react';

const Education = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );
    
    if (timelineRef.current) {
      const elements = timelineRef.current.querySelectorAll('.timeline-item');
      elements.forEach((el) => observer.observe(el));
    }
    
    return () => {
      if (timelineRef.current) {
        const elements = timelineRef.current.querySelectorAll('.timeline-item');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  // Example education data
  const educationData = [
    {
      degree: "Doutorado em [Área]",
      institution: "Universidade de [Nome]",
      location: "Cidade, País",
      date: "2018 - 2022",
      description: "Tese sobre [tema específico]. Orientador: Prof. Dr. [Nome]."
    },
    {
      degree: "Mestrado em [Área]",
      institution: "Universidade de [Nome]",
      location: "Cidade, País",
      date: "2016 - 2018",
      description: "Dissertação sobre [tema específico]. Orientador: Prof. Dr. [Nome]."
    },
    {
      degree: "Graduação em [Área]",
      institution: "Universidade de [Nome]",
      location: "Cidade, País",
      date: "2012 - 2016",
      description: "Trabalho de conclusão sobre [tema específico]. Orientador: Prof. Dr. [Nome]."
    },
  ];

  return (
    <section id="education" className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50/50">
      <div className="section-container">
        <h2 className="section-title">Formação Acadêmica</h2>
        <p className="section-subtitle">
          Minha trajetória educacional e formação acadêmica ao longo dos anos.
        </p>
        
        <div className="relative mt-16" ref={timelineRef}>
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary/10 -translate-x-1/2"></div>
          
          {/* Timeline items */}
          {educationData.map((item, index) => (
            <div 
              key={index}
              className={`timeline-item relative flex flex-col md:flex-row gap-8 mb-12 opacity-0 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-primary/20 z-10">
                <div className="w-full h-full rounded-full bg-primary/10 animate-pulse"></div>
              </div>
              
              <div className="md:w-1/2 ml-12 md:ml-0 md:px-8">
                <div className="glass-card rounded-xl p-6 transition-all hover:shadow-md">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/5 text-primary/90 mb-4">
                    {item.date}
                  </span>
                  <h3 className="text-xl font-bold">{item.degree}</h3>
                  <h4 className="text-base font-medium text-muted-foreground mb-2">
                    {item.institution}, {item.location}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

import cliniGuideImage from "@/assets/cliniGuide.png"; 
import SupremeVisualizationImage from "@/assets/SupremeVisualization.png";
import CruiseShipImage from "@/assets/CruiseShip.png";
import SkinConsultationImage from "@/assets/SkinConsultation.png";
import ProgressImage from "@/assets/Progress.png";
import TravelCeylonImage from "@/assets/TravelCeylon.png";

const Projects = () => {
  const projects = [
    {
      title: "CliniGuide",
      description: "A personalized medication recommendation mobile app built with Flutter, powered by an LLM backend. It uses a custom knowledge base with RAG and Chain of Thought prompting for accurate, context-aware suggestions.",
      image: cliniGuideImage,
      technologies: ["Flutter", "Node.js", "Flask", "LLM", "RAG", "FAISS", "Knowledge Distillation"],
      liveUrl: "https://www.youtube.com/watch?v=LZHWBBj1k6Y",
      githubUrl: "https://github.com/vidushraj1/Clini-Guide-FE",
      featured: true
    },
    {
      title: "Supreme Visualization",
      description: "A deep learning project that uses CNN, RNN, and LSTM to detect anomalies in CCTV footages when a CCTV footage is uploaded, with the UI created using Python and Tkinter.",
      image: SupremeVisualizationImage,
      technologies: ["Python", "Deep Learning", "CNN", "RNN", "LSTM", "Tkinter"],
      githubUrl: "https://github.com/vidushraj1/Supreme-Visualization"
    },
    {
      title: "CruiseShip Boarding Managing Program",
      description: "A Java program designed to manage cruise ship boarding. It provides basic CRUD (Create, Read, Update, Delete) functionality to handle passenger data, including boarding, editing, and deleting records.",
      image: CruiseShipImage,
      technologies: ["Java", "CRUD", "OOP"],
      githubUrl: "https://github.com/vidushraj1/Cruise-Ship-Boarding-Managing-Program"
    },
    {
      title: "Skin Consultation Managing Program",
      description: "A Java program with a Swing GUI for managing skin consultation bookings. It's built using Object-Oriented Programming (OOP) principles and provides full CRUD (Create, Read, Update, Delete) functionality for managing appointments and patient information.",
      image: SkinConsultationImage,
      technologies: ["Java", "Swing", "GUI", "OOP", "CRUD"],
      githubUrl: "https://github.com/vidushraj1/Skin-Consultation-Managing-Program"
    },
    {
      title: "Progress Prediction Program",
      description: "A Python program designed to calculate and display student grades, mark distributions, and overall performance metrics based on university scores.",
      image: ProgressImage,
      technologies: ["Python", "Data Analysis", "Metrics"],
      githubUrl: "https://github.com/vidushraj1/Progress-Prediction-Program"
    },
    {
      title: "Travel Ceylon",
      description: "A website recommending the best locations to visit in Sri Lanka. Developed using HTML, CSS, and JavaScript, it serves as a guide for travelers to explore the country's attractions.",
      image: TravelCeylonImage,
      technologies: ["React", "Vite", "JavaScript"],
      liveUrl: "https://vidushraj1.github.io/travel-ceylon/",
      githubUrl: "https://github.com/vidushraj1/travel-ceylon"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="hero-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating amazing digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`card-hover bg-card/80 backdrop-blur-sm border-border/50 overflow-hidden flex flex-col ${
                project.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.liveUrl && (
                    <Button
                      size="icon"
                      variant="outline"
                      className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 h-9 w-9"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                  <Button
                    size="icon"
                    variant="outline"
                    className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 h-9 w-9"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <CardContent className="p-6 space-y-4 flex flex-col flex-grow">
                <div className="space-y-2 flex-grow">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-3 pt-2">
                  {project.liveUrl && (
                    <Button asChild className="btn-gradient flex-1">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-white flex-1">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
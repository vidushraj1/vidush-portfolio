import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";

import profilePicture from "@/assets/profile.jpg";
import resumePDF from "@/assets/resume.pdf";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-animated py-24 md:py-0">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float glow-pink" style={{ animationDelay: '2s' }} />
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float glow-blue" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/2 w-48 h-48 bg-success/20 rounded-full blur-3xl animate-float glow-green" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">

          <div className="lg:col-span-2 flex flex-col items-center justify-center space-y-8 animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
            <div className="relative p-2 rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/30 shadow-glow hover:scale-105 transition-transform duration-500">
              <img
                src={profilePicture}
                alt="Vidush Raj Selvaraj Profile Picture"
                className="w-64 h-80 md:w-80 md:h-96 object-cover object-top rounded-xl border-4 border-background/50"
              />
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="flex justify-center space-x-6">
                <a href="https://github.com/vidushraj1" target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-gradient-card hover:bg-gradient-primary transition-all duration-500 hover:scale-125 hover:-rotate-12 glow-pink icon-bounce">
                  <Github className="w-8 h-8" />
                </a>
                <a href="https://www.linkedin.com/in/vidushraj-selvaraj-600a38222/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-gradient-card hover:bg-gradient-secondary transition-all duration-500 hover:scale-125 hover:rotate-12 glow-blue icon-spin">
                  <Linkedin className="w-8 h-8" />
                </a>
                <a href="mailto:vidushrajselvaraj19@gmail.com" className="p-4 rounded-2xl bg-gradient-card hover:bg-gradient-accent transition-all duration-500 hover:scale-125 hover:-rotate-12 glow-green icon-pulse">
                  <Mail className="w-8 h-8" />
                </a>
              </div>

              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>Wattala, Gampaha 11300, Sri Lanka</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 text-center lg:text-left space-y-6 animate-fade-in-right" style={{ animationDelay: '0.4s' }}>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                Hi, I'm{' '}
                <span className="hero-text-rainbow glow icon-pulse">
                  Vidush Raj Selvaraj
                </span>
              </h1>

              <div className="relative">
                <p className="text-lg md:text-2xl text-foreground font-semibold">
                  <span className="hero-text">Full Stack Developer</span>
                  <span className="mx-2 text-muted-foreground">•</span>
                  <span className="text-accent glow-blue font-semibold">AI Engineer</span>
                  <span className="mx-2 text-muted-foreground">•</span>
                  <span className="text-secondary glow-pink font-semibold">UI/UX Designer</span>
                </p>
              </div>

               <p className="text-lg md:text-xl max-w-3xl mx-auto lg:mx-0 text-muted-foreground leading-relaxed">
                ✨ I craft <span className="text-accent glow-blue font-semibold">beautiful</span>,
                <span className="text-success glow-green font-semibold"> functional</span> digital experiences that solve
                <span className="text-warning font-semibold"> real-world problems</span> ✨
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto lg:mx-0">
              A passionate full-stack developer and designer, I specialize in creating dynamic, user-centric web applications and AI-powered solutions. With a strong foundation in technologies like React.js, Node.js, and MongoDB, I excel at turning complex problems into beautiful, functional, and intuitive digital experiences. My expertise extends to Generative AI and Large Language Models (LLMs), where I leverage tools like LangChain and OpenAI API to build innovative and robust software. I am committed to leveraging my skills in development, UI/UX design, and AI to create products that are both technically robust and a delight for users.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
              <Button size="lg" className="btn-rainbow px-8 py-5 text-lg font-bold icon-bounce shadow-glow" onClick={() => scrollToSection('projects')}>
                View My Work
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-5 text-lg font-bold border-2 border-accent text-accent hover:bg-accent hover:text-background hover:scale-105 transition-all duration-300 glow-blue" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </Button>
              <Button asChild size="lg" className="btn-gradient px-8 py-5 text-lg font-bold shadow-glow">
                <a href={resumePDF} download="Vidush_Resume.pdf" aria-label="Download Resume">Download Resume</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
        <button
          onClick={() => scrollToSection('about')}
          className="p-3 rounded-full border-2 border-primary/50 hover:border-primary transition-all duration-500 hover:scale-110 bg-gradient-card glow"
        >
          <ArrowDown className="w-8 h-8 text-primary animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
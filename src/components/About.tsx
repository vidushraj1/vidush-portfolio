import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap, Cpu, Award, Rocket, Briefcase } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Building robust web and mobile applications from end to end.",
      items: ["React.js, Next.js & Streamlit ", "Flutter & React Native", "Node.js, Express.js & TypeScript", "Flask & Django", "MongoDB & MySQL"]
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Developing intelligent systems using modern AI and ML frameworks.",
      items: ["Generative AI, LLMs & LangChain", "RAG Pipelines & Vector Databases (Pinecone, FAISS)", "AI Agents & Conversational AI", "OpenAI API, LLaMA & Hugging Face Transformers"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Creating intuitive and user-centric digital experiences.",
      items: ["Figma & Adobe XD for Prototyping", "User Research & User Testing", "Design Systems & Component Libraries", "UI/UX for Web & Mobile Applications"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Cloud & DevOps",
      description: "Deploying and managing scalable, production-grade applications.",
      items: ["AWS Services (EC2, S3, Lambda)", "Cloud-based AI deployments", "API & Payment Gateway integrations", "CI/CD Pipelines & Docker"]
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: About Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="hero-text">About Me</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a dedicated software engineer with a deep passion for building innovative and impactful digital experiences. My journey began with a curiosity for code, which evolved into a comprehensive skill set spanning <strong>full-stack development</strong>, <strong>UI/UX design</strong>, and cutting-edge <strong>AI technologies</strong>. I specialize in creating robust, scalable applications that not only solve complex problems but also provide a seamless user experience.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise in <strong>Generative AI</strong> and <strong>Large Language Models (LLMs)</strong>, including the development of <strong>AI agents</strong> and <strong>conversational AI</strong>, allows me to integrate intelligent systems into modern applications. I thrive on bridging the gap between design and functionality, ensuring every project I work on is both technically sound and visually compelling.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">My Journey</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-muted-foreground">
                    Completed <strong>BEng (Hons) in Software Engineering</strong> from the University of Westminster, UK.
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <span className="text-muted-foreground">
                    Primarily <strong>self-taught</strong>, continuously exploring and mastering new technologies.
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <span className="text-muted-foreground">
                    Gained professional experience as a Quality Assurance Intern at Dinetap (Singapore).
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Zap className="w-5 h-5" />
                  </div>
                  <span className="text-muted-foreground">
                    Currently working as a <strong>freelance developer (fullstack and AI)</strong> and <strong>freelance designer</strong>.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={index} 
                className="card-hover bg-card/50 backdrop-blur-sm border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {skill.icon}
                    </div>
                    <h3 className="font-semibold text-lg">{skill.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                  <div className="space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
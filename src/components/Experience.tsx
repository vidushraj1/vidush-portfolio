import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const items = [
    {
      role: "Full Stack Developer & AI Engineer",
      company: "Freelancing",
      period: "2024 – Present",
      bullets: ["Developed a medical chatbot and summarizer."],
    },
    {
      role: "UI/UX Designer",
      company: "Freelancing",
      period: "2024 – present",
      bullets: ["Created a design system for a startup (Medical chatbot)."],
    },
    {
      role: "QA Intern",
      company: "Dinetap (Singapore)",
      period: "2023 – 2024",
      bullets: ["Conducted manual testing of the Dinetap app and website to ensure quality and functionality.", "Created detailed test cases and documentation to maintain clear records of testing procedures and results.", "Collaborated with the development team to reproduce and verify bug fixes, ensuring functional improvements.", "Contributed to the enhancement of user experience by providing valuable feedback on application functionality."],
    },
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold flex items-center gap-3">
          <Briefcase className="w-8 h-8 text-primary" />
          <span className="hero-text">Experience</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <Card key={i} className="bg-card/50 backdrop-blur-sm border-border/50 card-hover">
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{item.role}</h3>
                  <span className="text-sm text-muted-foreground">{item.period}</span>
                </div>
                <p className="text-muted-foreground">{item.company}</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  {item.bullets.map((d, idx) => (
                    <li key={idx}>{d}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

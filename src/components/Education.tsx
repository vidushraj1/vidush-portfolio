import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  const items = [
    {
      school: "Informatics Institute of Technology (IIT)",
      degree: "BEng(Hons) Software Engineering - affiliated with the University of Westminster, UK",
      period: "2021 – 2025",
      details: ["Graduated with First Class honors", "Member of IEEE IIT"],
    },
    {
      school: "Wycherley International School",
      degree: "A levels & O levels",
      period: "2016 – 2021",
      details: ["A levels - Computer Science, Chemistry, Physics", "O levels - Computer Science, Biology, Chemistry, Physics"],
    },
        {
      school: "Atamie International school",
      degree: "Primary education",
      period: "2006 – 2016",
      details: ["All subjects"],
    },
  ];

  return (
    <section id="education" className="section-padding">
      <div className="container-custom space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold"><span className="hero-text">Education</span></h2>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <Card key={i} className="bg-card/50 backdrop-blur-sm border-border/50 card-hover">
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{item.school}</h3>
                  <span className="text-sm text-muted-foreground">{item.period}</span>
                </div>
                <p className="text-muted-foreground">{item.degree}</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  {item.details.map((d, idx) => (
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

export default Education;

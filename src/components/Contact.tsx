import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);

    // Fetch keys from environment variables
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then(
        () => {
          toast({
            title: "Message sent! ✅",
            description: "Thank you for your message. I'll get back to you soon!",
          });
          form.current?.reset();
        },
        (error) => {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem sending your message. Please try again.",
          });
          console.error('FAILED...', error.text);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const contactInfo = [
    { icon: <Mail className="w-6 h-6" />, title: "Email", value: "vidushrajselvaraj19@gmail.com", link: "mailto:vidushrajselvaraj19@gmail.com" },
    { icon: <Phone className="w-6 h-6" />, title: "Phone", value: "+94 (076) 532-5438", link: "tel:+94765325438" },
    { icon: <MapPin className="w-6 h-6" />, title: "Location", value: "Wattala, Gampaha 11300, Sri Lanka", link: "https://maps.app.goo.gl/57Lr6VdmU7QfvUXY7" }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold"><span className="hero-text">Get In Touch</span></h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Have a project in mind? Let's work together to create something amazing.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="card-hover bg-card/80 backdrop-blur-sm border-border/50">
            <CardContent className="p-8">
              {/* Add ref to the form and name attributes to inputs */}
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                    <Input id="firstName" name="from_name" placeholder="John" required className="bg-background/50" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                    <Input id="lastName" placeholder="Doe" required className="bg-background/50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" name="from_email" placeholder="john@example.com" required className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input id="subject" name="subject" placeholder="Let's work together!" required className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea id="message" name="message" placeholder="Tell me about your project..." rows={5} required className="bg-background/50 resize-none" />
                </div>
                <Button type="submit" className="btn-gradient w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />Sending...</>
                  ) : (
                    <><Send className="w-4 h-4 mr-2" />Send Message</>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed">I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and design. Feel free to reach out!</p>
            </div>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="card-hover bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-6">
                    <a href={info.link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">{info.icon}</div>
                      <div>
                        <h4 className="font-medium">{info.title}</h4>
                        <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">{info.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Available For</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3"><div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse" /><span className="text-muted-foreground">Freelance Projects</span></div>
                <div className="flex items-center space-x-3"><div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse" /><span className="text-muted-foreground">Full-time Opportunities</span></div>
                <div className="flex items-center space-x-3"><div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse" /><span className="text-muted-foreground">Consulting & Mentoring</span></div>
                <div className="flex items-center space-x-3"><div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse" /><span className="text-muted-foreground">Speaking Engagements</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
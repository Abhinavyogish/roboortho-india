import { Button } from "@/components/ui/button";
import { Calendar, Stethoscope } from "lucide-react";
import heroImage from "@/assets/hero-surgery.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern robotic surgery operating room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-medical-slate/80 via-medical-slate/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container-medical py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground animate-fade-in">
            <p className="text-accent font-semibold tracking-wide mb-4 uppercase text-sm">
              Advanced Robotic Orthopaedics
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Precision-Driven Care for{" "}
              <span className="text-accent">Life-Long Mobility</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl">
              State-of-the-art robotic joint and spine surgery in Bangalore. 
              Experience faster recovery, less pain, and better outcomes with 
              personalized orthopaedic care.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="#contact">
                  <Calendar className="h-5 w-5" />
                  Book Consultation
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#specialties">
                  <Stethoscope className="h-5 w-5" />
                  Our Services
                </a>
              </Button>
            </div>
          </div>

          {/* Right Card */}
          <div className="hidden lg:flex justify-end">
            <div className="bg-background/95 backdrop-blur rounded-2xl p-8 shadow-hero max-w-md animate-scale-in">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <Stethoscope className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-lg">
                    Dr. Yogish Vijaya Kumar
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Robotic Orthopaedic Surgeon
                  </p>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                <p className="text-muted-foreground text-sm">
                  Fellowship-trained specialist in robotic-assisted joint replacement, 
                  minimally invasive spine surgery, and arthroscopy.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1.5 text-primary font-medium">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    Available Now
                  </span>
                  <span className="text-muted-foreground">
                    Bangalore, Karnataka
                  </span>
                </div>
              </div>
              <Button variant="medical" className="w-full" size="lg" asChild>
                <a href="#contact">
                  Schedule Appointment
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links Bar */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="bg-accent/80 backdrop-blur">
          <div className="container-medical">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px">
              {[
                { icon: "🏥", label: "Services", href: "#specialties" },
                { icon: "👨‍⚕️", label: "About Doctor", href: "#about" },
                { icon: "📍", label: "Location", href: "#contact" },
                { icon: "📅", label: "Schedule", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-center gap-3 py-5 px-4 bg-accent hover:bg-primary hover:text-primary-foreground transition-colors group"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-semibold text-accent-foreground group-hover:text-primary-foreground">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

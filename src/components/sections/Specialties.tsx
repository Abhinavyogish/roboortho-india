import { 
  Cog, 
  Activity, 
  Bone, 
  Scissors, 
  Heart, 
  Stethoscope, 
  MessageSquare, 
  ClipboardList 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Cog,
    title: "Robotic Hip Replacement",
    description: "Precision robotic-assisted total hip arthroplasty for optimal implant positioning and faster recovery.",
  },
  {
    icon: Bone,
    title: "Robotic Knee Replacement",
    description: "Advanced robotic technology for personalized knee replacement with improved alignment and longevity.",
  },
  {
    icon: Activity,
    title: "Robotic Spine Surgery",
    description: "Minimally invasive spine procedures using robotic guidance for enhanced accuracy and safety.",
  },
  {
    icon: Scissors,
    title: "Minimally Invasive Arthroscopy",
    description: "Keyhole surgery for diagnosing and treating joint conditions with minimal tissue disruption.",
  },
  {
    icon: Heart,
    title: "Joint & Ligament Reconstruction",
    description: "Expert reconstruction of damaged joints and ligaments to restore stability and function.",
  },
  {
    icon: Stethoscope,
    title: "Fracture & Trauma Care",
    description: "Comprehensive care for bone fractures and orthopaedic emergencies with modern fixation techniques.",
  },
  {
    icon: ClipboardList,
    title: "Pre & Post-op Rehabilitation",
    description: "Structured physiotherapy programs to optimize surgical outcomes and accelerate recovery.",
  },
  {
    icon: MessageSquare,
    title: "Consultations & Second Opinions",
    description: "Expert evaluation and honest recommendations for your orthopaedic concerns.",
  },
];

export function Specialties() {
  return (
    <section id="specialties" className="section-padding bg-secondary">
      <div className="container-medical">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">
            Our Specialties
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Restoring Mobility Through Advanced Care
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive robotic orthopaedic services combining cutting-edge technology 
            with personalized treatment plans for optimal outcomes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="card-medical p-6 group hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 bg-card"
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="medical" size="xl" asChild>
            <a href="#contact">
              Schedule a Consultation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

import { Award, GraduationCap, Heart, Target } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Fellowship Trained",
    description: "Advanced training in robotic orthopaedic surgery from leading international institutions",
  },
  {
    icon: Target,
    title: "Precision Technology",
    description: "Utilizing state-of-the-art robotic systems for sub-millimeter accuracy",
  },
  {
    icon: Heart,
    title: "Patient-First Care",
    description: "Personalized treatment plans tailored to your lifestyle and mobility goals",
  },
  {
    icon: Award,
    title: "Proven Outcomes",
    description: "Consistently excellent results with faster recovery and reduced pain",
  },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-medical">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">
            About Dr. Yogish
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Orthopaedic Care You Can Trust
          </h2>
          <p className="text-lg text-muted-foreground">
            Providing state-of-the-art technologies and compassionate care for patients 
            seeking the best orthopaedic treatment in Bangalore.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-foreground leading-relaxed">
              <strong className="font-heading">Dr. Yogish Vijaya Kumar</strong> is a fellowship-trained 
              orthopaedic surgeon based in Bangalore, specializing in robotic-assisted joint replacement, 
              minimally invasive spine and joint surgery, arthroscopy, and personalized post-operative care.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With over a decade of experience and training from premier institutions, Dr. Yogish combines 
              cutting-edge robotic technology with compassionate, individualized care. Every treatment plan 
              is crafted around your lifestyle, mobility goals, and long-term well-being.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              His commitment to evidence-based protocols, modern surgical techniques, advanced pain management, 
              and mobility restoration has helped countless patients return to active, pain-free lives.
            </p>
            
            <div className="pt-4">
              <h3 className="font-heading font-bold text-foreground text-xl mb-4">Our Philosophy</h3>
              <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-muted-foreground">
                "At our practice, we believe in blending cutting-edge robotic technology with compassionate, 
                individualized care. Every treatment plan is crafted around your lifestyle, mobility goals, 
                and long-term well-being."
              </blockquote>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="card-medical p-6 group hover:border-primary border border-transparent transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <item.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h4 className="font-heading font-bold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-primary rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "5000+", label: "Surgeries Performed" },
              { value: "98%", label: "Patient Satisfaction" },
              { value: "24/7", label: "Emergency Care" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/80 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

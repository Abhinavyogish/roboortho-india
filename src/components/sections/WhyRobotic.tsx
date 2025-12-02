import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Sub-millimeter surgical precision for optimal implant placement",
  "Smaller incisions leading to less tissue damage",
  "Reduced blood loss and lower infection risk",
  "Faster recovery and shorter hospital stays",
  "Less post-operative pain and reduced need for painkillers",
  "Better long-term outcomes and implant longevity",
  "Personalized surgery based on your unique anatomy",
  "Real-time feedback during surgery for enhanced safety",
];

export function WhyRobotic() {
  return (
    <section className="section-padding bg-background">
      <div className="container-medical">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">
              Why Robotic Surgery?
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Future of Orthopaedic Care is Here
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Robotic-assisted surgery represents a significant advancement in orthopaedic care. 
              Using advanced imaging and robotic technology, Dr. Yogish can plan and execute 
              procedures with unprecedented precision, leading to better outcomes for patients.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-accent to-secondary rounded-2xl p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-3xl">🤖</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-xl">
                      Robotic Precision
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      0.5mm accuracy in implant positioning
                    </p>
                  </div>
                </div>

                <div className="h-px bg-border" />

                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "40%", label: "Faster Recovery" },
                    { value: "60%", label: "Less Pain" },
                    { value: "50%", label: "Smaller Incisions" },
                    { value: "90%", label: "Same-Day Mobility" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="font-heading text-3xl font-bold text-primary">
                        {stat.value}
                      </p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="h-px bg-border" />

                <p className="text-sm text-muted-foreground italic">
                  "The robotic system allows me to create a personalized surgical plan for each 
                  patient and execute it with precision that wasn't possible before."
                </p>
                <p className="text-sm font-semibold text-foreground">
                  — Dr. Yogish Vijaya Kumar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

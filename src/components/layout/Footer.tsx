import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const quickLinks = [
  { label: "About Dr. Yogish", href: "#about" },
  { label: "Our Specialties", href: "#specialties" },
  { label: "Patient Resources", href: "#blog" },
  { label: "Contact Us", href: "#contact" },
];

const services = [
  { label: "Robotic Hip Replacement", href: "#specialties" },
  { label: "Robotic Knee Replacement", href: "#specialties" },
  { label: "Spine Surgery", href: "#specialties" },
  { label: "Arthroscopy", href: "#specialties" },
  { label: "Trauma Care", href: "#specialties" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-medical-slate text-primary-foreground">
      {/* Main Footer */}
      <div className="container-medical section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">Y</span>
              </div>
              <div>
                <p className="font-heading font-bold text-sm">Dr. Yogish Vijaya Kumar</p>
                <p className="text-xs text-primary-foreground/70">Robotic Orthopaedic Surgeon</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-6 leading-relaxed">
              Expert robotic orthopaedic care in Bangalore. Specializing in joint replacement, 
              spine surgery, and minimally invasive procedures.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">
                  123 Medical Centre, Koramangala,<br />
                  Bangalore, Karnataka 560034
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+919876543210" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:contact@dryogish.com" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
                  contact@dryogish.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-medical py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© 2025 Dr. Yogish Vijaya Kumar. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

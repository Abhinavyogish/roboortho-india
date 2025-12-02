import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const specialties = [
  { title: "Robotic Hip Replacement", href: "#specialties" },
  { title: "Robotic Knee Replacement", href: "#specialties" },
  { title: "Robotic Spine Surgery", href: "#specialties" },
  { title: "Minimally Invasive Arthroscopy", href: "#specialties" },
  { title: "Joint & Ligament Reconstruction", href: "#specialties" },
  { title: "Fracture & Trauma Care", href: "#specialties" },
  { title: "View All Services", href: "#specialties" },
];

const patientResources = [
  { title: "Patient Education", href: "#blog" },
  { title: "FAQs", href: "#faq" },
  { title: "Recovery Guides", href: "#blog" },
  { title: "Pre-Surgery Preparation", href: "#blog" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <nav className="container-medical flex h-20 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold text-lg">Y</span>
          </div>
          <div className="hidden sm:block">
            <p className="font-heading font-bold text-foreground text-sm leading-tight">Dr. Yogish Vijaya Kumar</p>
            <p className="text-xs text-muted-foreground">Robotic Orthopaedic Surgeon</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#about"
                  className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">
                  Specialties
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-1 p-4 md:w-[500px] md:grid-cols-2 bg-popover">
                    {specialties.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <a
                            href={item.href}
                            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">
                  Patient Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-1 p-4 bg-popover">
                    {patientResources.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <a
                            href={item.href}
                            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#contact"
                  className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+919876543210" className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
            <Phone className="h-4 w-4" />
            <span>+91 98765 43210</span>
          </a>
          <Button variant="medical" size="lg" asChild>
            <a href="#contact">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Now
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-slide-up">
          <div className="container-medical py-4 space-y-4">
            <a href="#about" className="block py-2 text-foreground hover:text-primary font-medium">About</a>
            <div>
              <p className="py-2 text-foreground font-medium">Specialties</p>
              <div className="pl-4 space-y-2">
                {specialties.map((item) => (
                  <a key={item.title} href={item.href} className="block py-1 text-muted-foreground hover:text-primary text-sm">
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="py-2 text-foreground font-medium">Patient Resources</p>
              <div className="pl-4 space-y-2">
                {patientResources.map((item) => (
                  <a key={item.title} href={item.href} className="block py-1 text-muted-foreground hover:text-primary text-sm">
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
            <a href="#contact" className="block py-2 text-foreground hover:text-primary font-medium">Contact</a>
            <div className="pt-4 border-t border-border space-y-3">
              <a href="tel:+919876543210" className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </a>
              <Button variant="medical" className="w-full" asChild>
                <a href="#contact">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

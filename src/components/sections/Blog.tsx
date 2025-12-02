import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const posts = [
  {
    title: "What is Robotic Knee Replacement?",
    excerpt: "Learn how robotic technology is revolutionizing knee replacement surgery with improved precision and faster recovery times.",
    date: "Dec 1, 2025",
    category: "Patient Education",
    readTime: "5 min read",
  },
  {
    title: "Recovery Timeline After Robotic Hip Surgery",
    excerpt: "A comprehensive guide to what you can expect during your recovery journey after robotic-assisted hip replacement.",
    date: "Nov 28, 2025",
    category: "Recovery Guides",
    readTime: "7 min read",
  },
  {
    title: "Minimally Invasive vs Traditional Surgery",
    excerpt: "Understanding the benefits of minimally invasive arthroscopic procedures compared to traditional open surgery.",
    date: "Nov 20, 2025",
    category: "Patient Education",
    readTime: "6 min read",
  },
  {
    title: "Preparing for Surgery: Diet & Physiotherapy",
    excerpt: "Essential pre-operative preparations to optimize your surgical outcomes and speed up your recovery.",
    date: "Nov 15, 2025",
    category: "Pre-Surgery",
    readTime: "8 min read",
  },
];

export function Blog() {
  return (
    <section id="blog" className="section-padding bg-secondary">
      <div className="container-medical">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">
              Patient Resources
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Latest Articles & Guides
            </h2>
          </div>
          <Button variant="medicalOutline" asChild>
            <a href="#blog">
              View All Articles
              <ArrowRight className="h-4 w-4 ml-2" />
            </a>
          </Button>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className="card-medical overflow-hidden group cursor-pointer bg-card"
            >
              {/* Placeholder Image */}
              <div className="h-48 bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                <span className="text-6xl opacity-50">📚</span>
              </div>
              
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-primary bg-accent px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
                
                <h3 className="font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {post.date}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Calendar, Search, Package, Code2, Infinity, Link, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in font-heading">
            SAST SCA Village
          </h1>

          {/* Event details */}
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-6 py-3 rounded-lg text-sm font-bold mb-8 animate-fade-in border border-accent/30">
            <Calendar className="w-4 h-4" />
            Seasides Conference, International Center Goa | 19 - 21 Feb 2026
          </div>

          {/* Description */}
          <p className="text-muted-foreground mb-12 text-lg text-center max-w-3xl mx-auto animate-fade-in">
            Welcome to the Application Security Village! Dive deep into the world of SAST, SCA, and secure development practices. Join us for hands-on workshops, tool demonstrations, and expert-led sessions on finding and fixing vulnerabilities in your code. Whether you're a developer, security engineer, or AppSec enthusiast, there's something here for everyone!
          </p>

          {/* Village Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 animate-fade-in">
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-accent/50 transition-all">
              <Search className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">SAST Analysis</h3>
              <p className="text-muted-foreground">Master static analysis tools and techniques for finding code vulnerabilities.</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-accent/50 transition-all">
              <Package className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Dependency Scanning</h3>
              <p className="text-muted-foreground">Learn SCA tools and managing vulnerable dependencies effectively.</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-accent/50 transition-all">
              <Code2 className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Defensive Coding</h3>
              <p className="text-muted-foreground">Learn defensive programming and secure development practices.</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-accent/50 transition-all">
              <Infinity className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">DevSecOps</h3>
              <p className="text-muted-foreground">Integrate security into your CI/CD pipeline and development workflow.</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-accent/50 transition-all">
              <Link className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Supply Chain Security</h3>
              <p className="text-muted-foreground">Protect your software supply chain from security threats.</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-accent/50 transition-all">
              <GitBranch className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Secure Code Review</h3>
              <p className="text-muted-foreground">Practice security-focused code review techniques and vulnerability hunting.</p>
            </div>
          </div>

          {/* Call to Action */}
          <p className="text-muted-foreground mb-8 text-lg animate-fade-in">
            Passionate about sharing your skills? Join our team as a Volunteer or Trainer — fill out the Call for Volunteers form below to get started!
          </p>
          
          <div className="flex items-center justify-center gap-4 animate-fade-in">
            <Button variant="outline" size="lg" className="hover:text-accent hover:border-accent transition-colors">
              <a href="mailto:hi@harekrishnarai.me" target="_blank" rel="noopener noreferrer">
                Join Us
              </a>
            </Button>
            <Button variant="outline" size="lg" className="hover:text-accent hover:border-accent transition-colors">
              <a href="static/media/pdf/SeasidesSponsorship_2025.pdf" target="_blank" rel="noopener noreferrer">
                Sponsor Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
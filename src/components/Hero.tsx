import { Calendar, Search, Package, Code2, Infinity, Link, GitBranch, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/CountdownTimer";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-start justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20 w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight animate-fade-in font-heading">
            Advance Your Secure Engineering Practice
          </h1>

          {/* Event details */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-accent mb-8 animate-fade-in">
            <span className="inline-flex items-center gap-2 bg-accent/15 text-accent px-4 py-2 rounded-lg text-sm font-semibold border border-accent/30">
              <Calendar className="w-4 h-4" /> 19 – 21 Feb 2026
            </span>
            <span className="inline-flex items-center gap-2 bg-accent/15 text-accent px-4 py-2 rounded-lg text-sm font-semibold border border-accent/30">
              <MapPin className="w-4 h-4" /> Seasides Conference, Goa
            </span>
          </div>

          {/* Countdown Timer - Between event details and description */}
          <div className="mb-8">
            <CountdownTimer />
          </div>

          {/* Description */}
          <p className="text-muted-foreground mb-10 text-lg text-center max-w-3xl mx-auto animate-fade-in">
            A focused conference on SAST, SCA, and supply chain integrity. Two days of hands‑on labs, real tooling, and evidence‑driven practices that help teams ship secure software faster.
          </p>

          <div className="flex items-center justify-center gap-4 animate-fade-in">
            <a href="/#register">
              <Button className="bg-accent text-white hover:bg-accent/90" size="lg">
                Register Now
              </Button>
            </a>
            <a href="/#agenda">
              <Button variant="outline" size="lg" className="hover:border-accent hover:text-accent">
                View Agenda
              </Button>
            </a>
          </div>

          {/* Value pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 animate-fade-in">
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-accent/50 transition-all">
              <Search className="w-7 h-7 text-accent mb-3" />
              <h3 className="text-lg font-bold mb-1">Secure Code Velocity</h3>
              <p className="text-muted-foreground text-sm">Integrate static analysis that reduces MTTR without blocking deploys.</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-accent/50 transition-all">
              <Package className="w-7 h-7 text-accent mb-3" />
              <h3 className="text-lg font-bold mb-1">Supply Chain Integrity</h3>
              <p className="text-muted-foreground text-sm">Strengthen SBOM workflows, signature verification, and governance.</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-accent/50 transition-all">
              <Code2 className="w-7 h-7 text-accent mb-3" />
              <h3 className="text-lg font-bold mb-1">Defensive Engineering</h3>
              <p className="text-muted-foreground text-sm">Policy‑as‑code, pipeline gates, and contextual risk scoring.</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-accent/50 transition-all">
              <Infinity className="w-7 h-7 text-accent mb-3" />
              <h3 className="text-lg font-bold mb-1">DevSecOps at Scale</h3>
              <p className="text-muted-foreground text-sm">Shift‑left automation with measurable quality and coverage.</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-accent/50 transition-all">
              <Link className="w-7 h-7 text-accent mb-3" />
              <h3 className="text-lg font-bold mb-1">Resilient Supply Chains</h3>
              <p className="text-muted-foreground text-sm">Prevent typosquatting, protestware, and dependency confusion.</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-accent/50 transition-all">
              <GitBranch className="w-7 h-7 text-accent mb-3" />
              <h3 className="text-lg font-bold mb-1">Secure Code Review</h3>
              <p className="text-muted-foreground text-sm">Tactical review techniques that eliminate high‑impact flaws.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Schedule from "@/components/Schedule";
// import Sponsors from "@/components/Sponsors";
import FeaturedSpeakers from "@/components/FeaturedSpeakers";
import CountdownTimer from "@/components/CountdownTimer";
import { REGISTRATION_FORM_URL } from "@/lib/links";

import heroImage from "@/assets/hacktober-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen animate-flicker relative">
      {/* Full page background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <img 
          src={heroImage} 
          alt="Background" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
        {/* Tech Pattern Overlay */}
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        {/* Animated dots */}
        <div className="absolute inset-0 tech-dots"></div>
        {/* Binary rain effect */}
        <div className="absolute inset-0 tech-binary"></div>
        {/* Circuit pattern */}
        <div className="absolute inset-0 tech-circuits"></div>
        {/* Data flow lines */}
        <div className="absolute inset-0 tech-data-flow"></div>
        {/* Glowing orbs */}
        <div className="absolute inset-0 tech-orbs"></div>
        {/* Glowing accents */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-accent/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-accent/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Navigation />

        <Hero />

        {/* Agenda Snapshot */}
  <section id="agenda" className="py-16 border-t border-border/50 bg-background/50 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold">Agenda Snapshot</h2>
              <p className="text-muted-foreground mt-2">Curated tracks for AppSec engineers, platform teams, and security leadership.</p>
            </div>
            <Schedule />
          </div>
        </section>

        {/* Speakers */}
  <section id="speakers" className="py-16 border-t border-border/50 bg-background/40 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">Featured Speakers</h2>
              <p className="text-muted-foreground mt-2">Industry experts sharing practical, vendor‑neutral techniques.</p>
            </div>
            <FeaturedSpeakers limit={6} />
          </div>
        </section>


        {/* Sponsorship */}
  <section id="sponsorship" className="py-16 border-t border-border/50 bg-background/50 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold">Sponsorship</h2>
              <p className="text-muted-foreground mt-2">Interested in partnering with us? Explore opportunities in the SeaSides 2026 Sponsorship brochure.</p>
            </div>
            <div className="max-w-xl mx-auto text-center">
              <a
                href="https://www.seasides.net/Seasides_Proposal.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-accent text-white px-6 py-4 font-medium hover:bg-accent/90 shadow-md"
              >
                View Sponsorship Brochure
              </a>
            </div>
          </div>
        </section>

        

        {/* Register via Google Form */}
  <section id="register" className="py-16 border-t border-border/50 bg-background/40 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold">Register</h2>
              <p className="text-muted-foreground mt-2">Registration is handled via Google Forms.</p>
            </div>
            <div className="max-w-xl mx-auto">
              <a
                href={REGISTRATION_FORM_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center rounded-md bg-accent text-white px-6 py-4 font-medium hover:bg-accent/90 shadow-md"
              >
                Open Registration Form
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Index;

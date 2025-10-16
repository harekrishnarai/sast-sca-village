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

        {/* Unified Action Section */}
  <section className="py-20 border-t border-border/50 bg-gradient-to-br from-background/60 via-background/50 to-background/40 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
                Get Involved
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Join us at SeaSides 2026 for cutting-edge security insights, networking, and collaboration.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Register Card */}
              <div className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 id="register" className="text-2xl font-bold scroll-mt-24">Attendees</h3>
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Secure your spot and be part of the conversation shaping the future of application security.
                  </p>
                  <a
                    href={REGISTRATION_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center rounded-md bg-accent text-white px-6 py-3 font-medium hover:bg-accent/90 transition-colors shadow-md hover:shadow-lg"
                  >
                    Register Now
                  </a>
                </div>
              </div>

              {/* Sponsor Card */}
              <div id="sponsorship" className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 scroll-mt-24">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">Partners</h3>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Amplify your brand and connect with security leaders through strategic sponsorship opportunities.
                  </p>
                  <a
                    href="https://www.seasides.net/Seasides_Proposal.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center rounded-md bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
                  >
                    View Sponsorship Brochure
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Index;

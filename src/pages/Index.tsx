import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
// import Sponsors from "@/components/Sponsors";
import FeaturedSpeakers from "@/components/FeaturedSpeakers";
import { REGISTRATION_FORM_URL, SPONSORSHIP_BROCHURE_URL } from "@/lib/links";

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

        {/* Agenda moved to /schedule page */}

        {/* Speakers */}
  <section id="speakers" className="py-16 border-t border-border/50 bg-background/40 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">2025 SAST SCA Village Speakers</h2>
              <p className="text-muted-foreground mt-2">Industry experts sharing practical, vendor‑neutral techniques.</p>
            </div>
            <FeaturedSpeakers limit={6} />
            <div className="mt-8 text-center">
              <a
                href="/schedule"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/90 hover:underline underline-offset-4"
              >
                View previous 2025 schedule
                <span aria-hidden>→</span>
              </a>
            </div>
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
                Join us at Seasides 2026 for cutting-edge security insights, networking, and collaboration.
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

              {/* Sponsor Us Card - Uniform layout */}
              <div id="sponsorship" className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 scroll-mt-24">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">Sponsor Us</h3>
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Amplify your brand and connect with security leaders through strategic sponsorship opportunities.
                  </p>
                  <a
                    href={SPONSORSHIP_BROCHURE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center rounded-md bg-accent text-white px-6 py-3 font-medium hover:bg-accent/90 transition-colors shadow-md hover:shadow-lg"
                  >
                    View Sponsorship Brochure
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Venue Map Section */}
        <section className="py-20 border-t border-border/50 bg-gradient-to-br from-background/60 via-background/50 to-background/40 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
                Find Us
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Join us at the beautiful coastal venue where innovation meets the sea
              </p>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden border-2 border-accent/20 shadow-2xl hover:shadow-accent/20 hover:border-accent/30 transition-all duration-300">
              {/* Map container with aspect ratio */}
              <div className="relative w-full h-[450px] md:h-[550px] lg:h-[650px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.789!2d73.8190312!3d15.4585566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc06b6a581441%3A0x4d1d5e0c7e5c5e5c!2sThe%20International%20Centre%20Goa!5e0!3m2!1sen!2sin!4v1634567890!5m2!1sen!2sin&markers=color:red%7C15.4585566,73.8190312"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Seasides Conference Venue - The International Centre Goa"
                  className="w-full h-full grayscale-[20%] contrast-[1.1]"
                ></iframe>
              </div>
              
              {/* Venue info overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-lg border-2 border-accent/30 rounded-xl p-5 md:p-7 shadow-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center flex-shrink-0 border border-accent/30">
                    <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-1.5 text-foreground">The International Centre Goa (ICG)</h3>
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                      Dr. E Borges Road, Dona Paula, Goa – 403 004, India
                    </p>
                    <a 
                      href="https://www.google.com/maps/dir//The+International+Centre+Goa/@15.4585566,73.8190312,17z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors group"
                    >
                      Get Directions
                      <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
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

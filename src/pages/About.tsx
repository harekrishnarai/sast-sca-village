import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { GithubIcon, TwitterIcon, LinkedinIcon, LightbulbIcon } from "lucide-react";

const About = () => {
  const organizers = [
    {
      name: "Hare Krishna Rai",
      role: "Organizer",
      bio: "Supply Chain Security Expert",
      image: "Hare_Krishna_Rai.jpg",
      socials: {
        twitter: "https://twitter.com/harekrishna_rai",
        github: "https://github.com/harekrishnarai",
        linkedin: "https://linkedin.com/in/harekrishnarai",
      },
    },
    {
      name: "Gaurav Joshi",
      role: "Organizer",
      bio: "Cloud Security Expert",
      image: "Gaurav_Joshi.jpg",
      socials: {
        twitter: "https://twitter.com/gauravjoshi",
        github: "https://github.com/gauravjoshii",
        linkedin: "https://linkedin.com/in/gauravjoshii",
      },
    },
  ];

  return (
    <div className="min-h-screen animate-flicker relative">
      {/* Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 max-w-6xl">
          {/* Header */}
          <header className="mb-12">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent drop-shadow-lg mb-2">
                About Us
              </h1>
              <div className="flex justify-center mb-6">
                <span className="inline-block rounded-full bg-accent/10 px-4 py-1 text-accent text-base font-semibold shadow-sm">
                  at <a href="https://seasides.net/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Seasides Conference</a>
                </span>
              </div>
            </div>
            <div className="max-w-3xl mx-auto text-lg text-muted-foreground space-y-4 md:text-center">
              <p>
                <span className="text-accent font-semibold">SAST & SCA Village</span> began as an inspiration from the <span className="text-primary font-semibold">DEF CON AppSec Village</span> format, uniting security practitioners, researchers, and tool developers focused on static analysis, software composition analysis, and the broader software supply chain security ecosystem.
              </p>
              <p>
                Our mission: promote <span className="text-accent font-semibold">arsenal releases</span>, <span className="text-accent font-semibold">original research</span>, and <span className="text-accent font-semibold">practical talks</span> that help teams ship secure software faster.
              </p>
            </div>
          </header>

          {/* Organizers Section */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-center mb-6 text-foreground">Organizers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:[grid-template-columns:repeat(auto-fit,minmax(250px,1fr))] gap-6 max-w-5xl mx-auto">
              {organizers.map((organizer) => (
                <Card key={organizer.name} className="h-full p-5 bg-card/60 backdrop-blur border-border/60 hover:border-accent/50 hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-3 border-2 border-accent/20">
                      <img 
                        src={`/${organizer.image}`} 
                        alt={organizer.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-0.5">{organizer.name}</h3>
                    <p className="text-xs text-accent font-medium mb-2">{organizer.role}</p>
                    <p className="text-muted-foreground text-sm mb-3">{organizer.bio}</p>
                    <div className="flex gap-3">
                      {organizer.socials.twitter && (
                        <a
                          href={organizer.socials.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          <TwitterIcon className="w-5 h-5" />
                        </a>
                      )}
                      {organizer.socials.github && (
                        <a
                          href={organizer.socials.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          <GithubIcon className="w-5 h-5" />
                        </a>
                      )}
                      {organizer.socials.linkedin && (
                        <a
                          href={organizer.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          <LinkedinIcon className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* What is Seasides? */}
          <section className="relative mb-12">
            <div className="max-w-5xl mx-auto">
              <div className="relative rounded-2xl border border-accent/40 bg-gradient-to-br from-accent/10 via-background/40 to-primary/10 p-6 md:p-10 shadow-xl overflow-hidden">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 grid md:grid-cols-[auto_1fr] gap-5 items-start">
                  <div className="flex items-center justify-center md:justify-start">
                    <div className="h-14 w-14 rounded-full bg-accent/15 border border-accent/40 flex items-center justify-center shadow-inner">
                      <LightbulbIcon className="h-7 w-7 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">What is Seasides?</h2>
                    <div className="space-y-3 text-muted-foreground leading-relaxed">
                      <p>
                        <a href="https://seasides.net/" target="_blank" rel="noopener noreferrer" className="text-accent underline hover:text-primary">Seasides</a> is India's most loved premier cybersecurity conference, bringing together experts, enthusiasts, and innovators to explore the future of digital security in the beautiful coastal setting of Goa.
                      </p>
                      <p>
                        Seasides' mission is to democratize access to top-tier cybersecurity education by offering free workshops and training sessions led by industry experts, along with fun and parties.
                      </p>
                      <p>
                        Seasides strives to create an inclusive environment where students and aspiring professionals can learn, collaborate, and grow together, equipping them with the tools they need to succeed in the rapidly evolving cybersecurity landscape.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Archive Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Archive</h2>
            <p className="text-muted-foreground mb-6">
              Explore past editions of the SAST & SCA Village
            </p>
            <div className="flex justify-center">
              <a 
                href="https://2025.village.scagoat.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 transition-all duration-300 font-medium"
              >
                2025 Village
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default About;

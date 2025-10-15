import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { scheduleData } from "@/components/Schedule";
import { GithubIcon, TwitterIcon, LinkedinIcon, ExternalLinkIcon, CalendarIcon, Clock3Icon } from "lucide-react";

const Speakers = () => {
  // Build a map from speaker identifier to their talks using scheduleData
  const speakerTalksMap = (() => {
    const map: Record<string, Array<{ title: string; description?: string; day: string; startTime: string; endTime: string; location: string }>> = {};
    scheduleData.forEach((day) => {
      day.events.forEach((event) => {
        if (!event.speakers || event.type === "break" || event.type === "social") return;
        event.speakers.forEach((sp) => {
          const keyCandidates = new Set<string>();
          if (sp.name) keyCandidates.add(sp.name.trim().toLowerCase());
          if (sp.image) keyCandidates.add(sp.image.trim().toLowerCase());
          keyCandidates.forEach((key) => {
            if (!map[key]) map[key] = [];
            map[key].push({
              title: event.title,
              description: event.description,
              day: day.day,
              startTime: event.startTime,
              endTime: event.endTime,
              location: event.location,
            });
          });
        });
      });
    });
    return map;
  })();

  const speakers = [
    {
      name: "Gaurav Joshi",
      //alias: "gauravjoshi",
      role: "Product Security Engineer @ Highradius",
      bio: "Cloud security expert focusing on secure cloud architecture and infrastructure security.",
      image: "Gaurav_Joshi.jpg",
      imageKey: "Gaurav_Joshi.jpg",
      socials: {
        twitter: "https://twitter.com/gauravjoshi",
        github: "https://github.com/gauravjoshi",
        linkedin: "https://linkedin.com/in/gauravjoshi"
      }
    },
    {
      name: "Kartik",
      //alias: "kartik",
      role: "Security Researcher II @ Microsoft",
      bio: "Security researcher with expertise in application security and vulnerability assessment.",
      image: "kartik_singh.jpeg",
      imageKey: "kartik_singh.jpeg",
      socials: {
        //twitter: "https://twitter.com/hsagnik",
        //github: "https://github.com/hsagnik",
        linkedin: "https://www.linkedin.com/in/kartik00013/"
      }
    },
    {
      name: "Hare Krishna Rai",
      //alias: "0xblurr3d",
      role: "Product Security Engineer @ Highradius",
      bio: "Security leader specializing in software supply chain security and secure development practices.",
      image: "Hare_Krishna_Rai.jpg",
      imageKey: "Hare_Krishna_Rai.jpg",
      socials: {
        twitter: "https://twitter.com/0xblurr3d",
        github: "https://github.com/0xblurr3d",
        linkedin: "https://linkedin.com/in/harekrishna"
      }
    },
    {
      name: "Nikhil Sahoo",
      //alias: "nikhilsahoo",
      role: "Security Researcher II @ Microsoft",
      bio: "Security researcher with expertise in application security and vulnerability assessment.",
      image: "nikhil_sahoo.jpeg",
      imageKey: "nikhil_sahoo.jpeg",
      socials: {
        //twitter: "https://twitter.com/hsagnik",
        //github: "https://github.com/hsagnik",
        linkedin: "https://www.linkedin.com/in/nikhil-sahoo-87204b106/"
      }
    },
    {
      name: "Ravindra Penumarthi",
      //alias: "ravindrapenumarthi",
      role: "Security Researcher II @ Microsoft",
      bio: "Security researcher with expertise in application security and vulnerability assessment.",
      image: "ravindra.jpeg",
      imageKey: "ravindra.jpeg",
      socials: {
        //twitter: "https://twitter.com/hsagnik",
        //github: "https://github.com/hsagnik",
        linkedin: "https://www.linkedin.com/in/ravindrapenumarthi/"
      }
    }
  ];

  return (
    <div className="min-h-screen animate-flicker relative">
      {/* Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        <div className="absolute inset-0 tech-dots"></div>
        <div className="absolute inset-0 tech-orbs"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        
        <main className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 font-heading">
            Featured Speakers
          </h1>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12">
            Learn from industry experts and thought leaders in application security, 
            SAST implementation, and software supply chain security.
          </p>

          <div className="grid grid-cols-1 gap-8">
            {speakers.map((speaker) => (
              <div key={speaker.name} className="bg-card/50 backdrop-blur-sm rounded-lg border border-border hover:border-accent/50 transition-all group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                
                {/* Scanner Lines */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="w-full h-0.5 bg-accent/30 absolute top-0 left-0 animate-pulse"></div>
                  <div className="w-0.5 h-full bg-accent/30 absolute top-0 left-0 animate-pulse delay-150"></div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 p-8">
                  {/* Speaker Image */}
                  <div className="w-40 h-40 mx-auto md:mx-0 relative group/image">
                    <div className="absolute inset-0 border border-accent/20 rounded-sm"></div>
                    <div className="absolute inset-2 border border-accent/20 rounded-sm"></div>
                    <div className="w-full h-full relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/50 to-accent-foreground/50 blur opacity-20"></div>
                      <img 
                        src={speaker.image} 
                        alt={speaker.name}
                        className="w-full h-full object-cover rounded-sm relative z-10"
                      />
                      {/* Corner Accents */}
                      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-accent/50"></div>
                      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-accent/50"></div>
                      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-accent/50"></div>
                      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-accent/50"></div>
                    </div>
                  </div>

                  {/* Speaker Info */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1 group-hover:text-accent transition-colors">{speaker.name}</h3>
                      {"alias" in speaker && (speaker as any).alias && (
                        <p className="text-accent/80 font-mono text-sm">{(speaker as any).alias}</p>
                      )}
                      <p className="text-accent font-medium mt-2">{speaker.role}</p>
                      <p className="text-muted-foreground mt-2">{speaker.bio}</p>
                    </div>

                    {/* Talk Details */}
                    {(() => {
                      const keyName = speaker.name.trim().toLowerCase();
                      const keyImage = (speaker as any).imageKey ? (speaker as any).imageKey.toLowerCase() : speaker.image.toLowerCase();
                      const talks = speakerTalksMap[keyName] || speakerTalksMap[keyImage] || [];
                      if (!talks.length) return null;
                      return (
                        <div className="bg-background/50 rounded-lg p-4 border border-border">
                          <h4 className="text-lg font-semibold flex items-center gap-2">
                            <ExternalLinkIcon className="w-4 h-4" />
                            Talks
                          </h4>
                          <div className="mt-3 space-y-3">
                            {talks.map((t, idx) => (
                              <div key={idx} className="border-b last:border-b-0 pb-3 last:pb-0">
                                <div className="font-medium">{t.title}</div>
                                {t.description && (
                                  <p className="text-muted-foreground mt-1">{t.description}</p>
                                )}
                                <div className="flex items-center gap-4 mt-2 text-sm text-accent/80">
                                  <span className="flex items-center gap-1">
                                    <CalendarIcon className="w-4 h-4" />
                                    {t.day}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Clock3Icon className="w-4 h-4" />
                                    {t.startTime} - {t.endTime}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <ExternalLinkIcon className="w-4 h-4" />
                                    {t.location}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })()}

                    {/* Social Links */}
                    <div className="flex gap-4">
                      {speaker.socials.github && (
                        <a 
                          href={speaker.socials.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          <GithubIcon className="w-5 h-5" />
                        </a>
                      )}
                      {speaker.socials.twitter && (
                        <a 
                          href={speaker.socials.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          <TwitterIcon className="w-5 h-5" />
                        </a>
                      )}
                      {speaker.socials.linkedin && (
                        <a 
                          href={speaker.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          <LinkedinIcon className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Speakers;
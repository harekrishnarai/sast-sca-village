import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { GithubIcon, TwitterIcon, LinkedinIcon, ExternalLinkIcon, CalendarIcon, Clock3Icon } from "lucide-react";

const Speakers = () => {
  const speakers = [
    {
      name: "Hare Krishna Rai",
      alias: "0xblurr3d",
      role: "Village Lead & Supply Chain Security Expert",
      bio: "Security leader specializing in software supply chain security and secure development practices.",
      image: "Hare_Krishna_Rai.jpg",
      talk: {
        title: "Understanding Software Supply Chain Security",
        description: "Deep dive into modern software supply chain attacks, defense strategies, and best practices for securing your development pipeline.",
        time: "10:00 AM",
        duration: "45 min"
      },
      socials: {
        twitter: "https://twitter.com/0xblurr3d",
        github: "https://github.com/0xblurr3d",
        linkedin: "https://linkedin.com/in/harekrishna"
      }
    },
    {
      name: "Gaurav Joshi",
      alias: "gauravjoshi",
      role: "Village Co-Lead & Cloud Security Expert",
      bio: "Cloud security expert focusing on secure cloud architecture and infrastructure security.",
      image: "Gaurav_Joshi.jpg",
      talk: {
        title: "Cloud Security in Modern Applications",
        description: "Exploring cloud security challenges, infrastructure as code security, and implementing zero-trust architecture in cloud environments.",
        time: "11:00 AM",
        duration: "45 min"
      },
      socials: {
        twitter: "https://twitter.com/gauravjoshi",
        github: "https://github.com/gauravjoshi",
        linkedin: "https://linkedin.com/in/gauravjoshi"
      }
    },
    {
      name: "Sagnik Haldar",
      alias: "sagnikhaldar",
      role: "Security Researcher",
      bio: "Security researcher with expertise in application security and vulnerability assessment.",
      image: "Sagnik_Haldar.jpeg",
      talk: {
        title: "Advanced Application Security Testing",
        description: "Hands-on exploration of modern SAST techniques, vulnerability assessment strategies, and securing modern web applications.",
        time: "12:00 PM",
        duration: "45 min"
      },
      socials: {
        twitter: "https://twitter.com/hsagnik",
        github: "https://github.com/hsagnik",
        linkedin: "https://linkedin.com/in/hsagnik"
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
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
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
                      <p className="text-accent/80 font-mono text-sm">{speaker.alias}</p>
                      <p className="text-accent font-medium mt-2">{speaker.role}</p>
                      <p className="text-muted-foreground mt-2">{speaker.bio}</p>
                    </div>

                    {/* Talk Details */}
                    <div className="bg-background/50 rounded-lg p-4 border border-border">
                      <h4 className="text-lg font-semibold flex items-center gap-2">
                        <ExternalLinkIcon className="w-4 h-4" />
                        {speaker.talk.title}
                      </h4>
                      <p className="text-muted-foreground mt-2">{speaker.talk.description}</p>
                      <div className="flex items-center gap-4 mt-3 text-sm text-accent/80">
                        <span className="flex items-center gap-1">
                          <CalendarIcon className="w-4 h-4" />
                          Day 1
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock3Icon className="w-4 h-4" />
                          {speaker.talk.time} ({speaker.talk.duration})
                        </span>
                      </div>
                    </div>

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
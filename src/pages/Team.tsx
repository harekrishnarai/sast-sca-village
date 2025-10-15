import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { GithubIcon, TwitterIcon, LinkedinIcon } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Hare Krishna Rai",
      alias: "0xblurr3d",
      role: "Village Lead & Supply Chain Security Expert",
      bio: "Security leader specializing in software supply chain security and secure development practices.",
      image: "Hare_Krishna_Rai.jpg",
      socials: {
        twitter: "https://twitter.com/harekrishna_rai",
        github: "https://github.com/harekrishnarai",
        linkedin: "https://linkedin.com/in/harekrishnarai",
      },
    },
    {
      name: "Gaurav Joshi",
      alias: "gauravjoshi",
      role: "Village Co-Lead & Cloud Security Expert",
      bio: "Cloud security expert focusing on secure cloud architecture and infrastructure security.",
      image: "Gaurav_Joshi.jpg",
      socials: {
        twitter: "https://twitter.com/gauravjoshi",
        github: "https://github.com/gauravjoshii",
        linkedin: "https://linkedin.com/in/gauravjoshii",
      },
    },
    {
      name: "Sagnik Haldar",
      alias: "sagnikhaldar",
      role: "Volunteer & Security Researcher",
      bio: "Security researcher with expertise in application security and vulnerability assessment.",
      image: "Sagnik_Haldar.jpeg",
      socials: {
        twitter: "https://twitter.com/hsagnik",
        github: "https://github.com/hsagnik",
        linkedin: "https://linkedin.com/in/hsagnik",
      },
    },
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
            Team
          </h1>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12">
            Meet our dedicated team of AppSec experts who have crafted this
            unique learning experience. From SAST specialists to secure coding
            mentors, our team brings together diverse expertise to help you
            master application security.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-border hover:border-accent/50 transition-all group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {/* Scanner Animation Lines */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="w-full h-0.5 bg-accent/30 absolute top-0 left-0 animate-pulse"></div>
                  <div className="w-0.5 h-full bg-accent/30 absolute top-0 left-0 animate-pulse delay-150"></div>
                </div>

                {/* Tech Grid Background */}
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-px pointer-events-none">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div
                      key={i}
                      className="border border-accent/5 opacity-0 group-hover:opacity-100 transition-all"
                      style={{ transitionDelay: `${i * 10}ms` }}
                    ></div>
                  ))}
                </div>

                <div className="w-40 h-40 mx-auto mb-6 relative group/image">
                  {/* Scanner Effect Container */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute w-full h-1/3 bg-gradient-to-b from-accent/20 to-transparent animate-bounce opacity-0 group-hover/image:opacity-100"></div>
                  </div>

                  {/* Image Container with Tech Border */}
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 border border-accent/20 rounded-sm"></div>
                    <div className="absolute inset-2 border border-accent/20 rounded-sm"></div>
                    <div className="w-full h-full relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/50 to-accent-foreground/50 blur opacity-20"></div>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-sm relative z-10 group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Corner Accents */}
                      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-accent/50 group-hover:w-6 group-hover:h-6 transition-all"></div>
                      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-accent/50 group-hover:w-6 group-hover:h-6 transition-all"></div>
                      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-accent/50 group-hover:w-6 group-hover:h-6 transition-all"></div>
                      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-accent/50 group-hover:w-6 group-hover:h-6 transition-all"></div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <h3 className="text-xl font-bold text-center mb-1 group-hover:text-accent transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-accent/80 font-mono text-sm text-center mb-2">
                    {member.alias}
                  </p>
                  <p className="text-accent font-medium text-center mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-center mb-6">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center gap-4 mt-4">
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors relative group/icon"
                      >
                        <GithubIcon className="w-5 h-5" />
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-accent/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity">
                          GitHub
                        </span>
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a
                        href={member.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors relative group/icon"
                      >
                        <TwitterIcon className="w-5 h-5" />
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-accent/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity">
                          Twitter
                        </span>
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors relative group/icon"
                      >
                        <LinkedinIcon className="w-5 h-5" />
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-accent/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity">
                          LinkedIn
                        </span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Team;

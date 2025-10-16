import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { scheduleData } from "@/components/Schedule";
import { GithubIcon, TwitterIcon, LinkedinIcon, ExternalLinkIcon, CalendarIcon, Clock3Icon } from "lucide-react";
import SpeakerCard from "@/components/SpeakerCard";
import { speakerSlug } from "@/lib/utils";

type Talk = {
  title: string;
  description?: string;
  day: string;
  startTime: string;
  endTime: string;
  location: string;
  topics?: string[];
};

type Speaker = {
  name: string;
  designation?: string;
  company?: string;
  image: string;
  bio?: string;
  socials?: { twitter?: string; github?: string; linkedin?: string };
};

const Speakers = () => {
  const speakerTalksMap: Record<string, Talk[]> = (() => {
    const map: Record<string, Talk[]> = {};
    for (const day of scheduleData) {
      for (const event of day.events) {
        if (!event.speakers || ["break", "social"].includes(event.type)) continue;
        for (const sp of event.speakers) {
          const candidates = new Set<string>();
          if (sp.name) candidates.add(sp.name.trim().toLowerCase());
          if (sp.image) candidates.add(sp.image.trim().toLowerCase());
          for (const key of candidates) {
            (map[key] ||= []).push({
              title: event.title,
              description: event.description,
              day: day.day,
              startTime: event.startTime,
              endTime: event.endTime,
              location: event.location,
              topics: event.topics,
            });
          }
        }
      }
    }
    return map;
  })();

  const speakers: Speaker[] = (() => {
    const unique = new Map<string, Speaker>();
    for (const day of scheduleData) {
      for (const event of day.events) {
        if (!event.speakers || ["break", "social"].includes(event.type)) continue;
        for (const sp of event.speakers) {
          const key = (sp.name || sp.image).toLowerCase();
          if (!unique.has(key)) {
            unique.set(key, {
              name: sp.name,
              designation: sp.designation,
              company: sp.company,
              image: sp.image,
              bio: sp.bio,
              socials: sp.socials,
            });
          }
        }
      }
    }
    return Array.from(unique.values());
  })();

  return (
    <div className="min-h-screen animate-flicker relative">
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        <div className="absolute inset-0 tech-dots"></div>
        <div className="absolute inset-0 tech-orbs"></div>
      </div>

      <div className="relative z-10">
        <Navigation />
        <main className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 font-heading">Featured Speakers</h1>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12">
            Learn from industry experts in SAST, SCA, and software supply chain security.
          </p>

          <div className="grid grid-cols-1 gap-8">
            {speakers.map((speaker) => {
              const keyName = speaker.name.trim().toLowerCase();
              const keyImage = speaker.image.toLowerCase();
              const talks = speakerTalksMap[keyName] || speakerTalksMap[keyImage] || [];

              const to = `/speakers/${speakerSlug(speaker.name, speaker.image)}`;
              return (
                <a key={speaker.name} href={to} className="block focus:outline-none focus:ring-2 focus:ring-accent/60 rounded-2xl">
                  <SpeakerCard
                    name={speaker.name}
                    designation={speaker.designation}
                    company={speaker.company}
                    image={speaker.image}
                    bio={speaker.bio}
                    socials={speaker.socials}
                  >
                    {talks.length > 0 && (
                      <div className="bg-background/50 rounded-lg p-4 border border-border/60">
                        <h4 className="text-sm font-semibold flex items-center gap-2 tracking-wide">
                          <ExternalLinkIcon className="w-4 h-4" /> Talks
                        </h4>
                        <div className="mt-3 grid gap-3">
                          {talks.map((t, idx) => (
                            <div key={idx} className="border-b last:border-b-0 pb-3 last:pb-0">
                              <div className="font-medium">{t.title}</div>
                              {t.description && (
                                <p className="text-muted-foreground mt-1 text-sm">{t.description}</p>
                              )}
                              <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-accent/80">
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
                    )}

                    {speaker.socials && (
                      <div className="flex gap-4 mt-3">
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
                    )}
                  </SpeakerCard>
                </a>
              );
            })}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Speakers;
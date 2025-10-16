import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { scheduleData } from "@/components/Schedule";
import { CalendarIcon, Clock3Icon, MapPin, ArrowLeft, GithubIcon, TwitterIcon, LinkedinIcon } from "lucide-react";
import { speakerSlug } from "@/lib/utils";

type Talk = {
  title: string;
  description?: string;
  day: string;
  startTime: string;
  endTime: string;
  location: string;
};

type Speaker = {
  name: string;
  designation?: string;
  company?: string;
  image: string;
  bio?: string;
  socials?: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
};

function collectSpeakers() {
  const map = new Map<string, Speaker & { talks: Talk[] }>();
  for (const day of scheduleData) {
    for (const ev of day.events) {
      if (!ev.speakers || ["break", "social"].includes(ev.type)) continue;
      for (const sp of ev.speakers) {
        const slug = speakerSlug(sp.name, sp.image);
        if (!map.has(slug)) {
          map.set(slug, {
            name: sp.name,
            designation: sp.designation,
            company: sp.company,
            image: sp.image,
            bio: sp.bio,
            talks: [],
          });
        }
        map.get(slug)!.talks.push({
          title: ev.title,
          description: ev.description,
          day: day.day,
          startTime: ev.startTime,
          endTime: ev.endTime,
          location: ev.location,
        });
      }
    }
  }
  return map;
}

export default function SpeakerDetail() {
  const { slug } = useParams();
  const speakers = collectSpeakers();
  const speaker = slug ? speakers.get(slug) : undefined;

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
          <div className="mb-6">
            <Link to="/speakers" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent">
              <ArrowLeft className="w-4 h-4" /> Back to Speakers
            </Link>
          </div>

          {!speaker ? (
            <div className="text-center text-muted-foreground">Speaker not found.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="rounded-2xl overflow-hidden border border-border/60 bg-card/60 p-2">
                  <img src={speaker.image && !speaker.image.startsWith('/') ? `/${speaker.image}` : speaker.image} alt={speaker.name} className="w-full h-auto rounded-xl" />
                </div>
              </div>
              <div className="md:col-span-2">
                <h1 className="text-3xl md:text-4xl font-bold">{speaker.name}</h1>
                {(speaker.designation || speaker.company) && (
                  <p className="text-accent mt-1">{[speaker.designation, speaker.company].filter(Boolean).join(" · ")}</p>
                )}
                {speaker.bio && <p className="text-muted-foreground mt-4">{speaker.bio}</p>}

                <div className="mt-8">
                  <h2 className="text-xl font-semibold mb-3">Sessions</h2>
                  <div className="grid gap-3">
                    {speaker.talks.map((t, i) => (
                      <div key={i} className="rounded-lg border border-border/60 bg-background/50 p-4">
                        <div className="font-medium">{t.title}</div>
                        {t.description && (
                          <p className="text-muted-foreground mt-1 text-sm">{t.description}</p>
                        )}
                        <div className="flex flex-wrap gap-4 text-xs text-accent/80 mt-2">
                          <span className="inline-flex items-center gap-1"><CalendarIcon className="w-4 h-4" />{t.day}</span>
                          <span className="inline-flex items-center gap-1"><Clock3Icon className="w-4 h-4" />{t.startTime} - {t.endTime}</span>
                          <span className="inline-flex items-center gap-1"><MapPin className="w-4 h-4" />{t.location}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}

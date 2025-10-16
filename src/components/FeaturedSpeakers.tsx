import { scheduleData } from "@/components/Schedule";
import { Button } from "@/components/ui/button";
import SpeakerCard from "@/components/SpeakerCard";
import { speakerSlug } from "@/lib/utils";

type SpeakerLite = {
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

function normalizeKey(name?: string, image?: string) {
  const n = (name || "").trim().toLowerCase();
  const i = (image || "").trim().toLowerCase();
  return n || i;
}

function getUniqueSpeakers(): SpeakerLite[] {
  const map = new Map<string, SpeakerLite>();
  for (const day of scheduleData) {
    for (const ev of day.events) {
      if (!ev.speakers || ["break", "social"].includes(ev.type)) continue;
      for (const s of ev.speakers) {
        const key = normalizeKey(s.name, s.image);
        if (!key) continue;
        if (!map.has(key)) {
          map.set(key, {
            name: s.name,
            designation: s.designation,
            company: s.company,
            image: s.image,
            bio: s.bio,
            socials: s.socials,
          });
        }
      }
    }
  }
  return Array.from(map.values());
}

export default function FeaturedSpeakers({ limit = 6 }: { limit?: number }) {
  const speakers = getUniqueSpeakers().slice(0, limit);

  if (!speakers.length) return null;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {speakers.map((sp) => {
          const to = `/speakers/${speakerSlug(sp.name, sp.image)}`;
          return (
            <a key={sp.name} href={to} className="block focus:outline-none focus:ring-2 focus:ring-accent/60 rounded-2xl">
              <SpeakerCard
                name={sp.name}
                designation={sp.designation}
                company={sp.company}
                image={sp.image}
                bio={sp.bio}
                compact
                socials={sp.socials}
              />
            </a>
          );
        })}
      </div>

      <div className="flex justify-center mt-8">
        <a href="/speakers">
          <Button variant="outline" className="hover:border-accent hover:text-accent">All speakers</Button>
        </a>
      </div>
    </div>
  );
}

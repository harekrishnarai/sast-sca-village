import React from "react";
import { GithubIcon, TwitterIcon, LinkedinIcon } from "lucide-react";

type Props = {
  name: string;
  designation?: string;
  company?: string;
  image: string;
  bio?: string;
  compact?: boolean;
  topicTags?: string[];
  socials?: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
  children?: React.ReactNode;
};

export default function SpeakerCard({ name, designation, company, image, bio, compact = false, topicTags = [], socials, children }: Props) {
  // Fix image path: prefix with '/' if not already present
  const imageUrl = image && !image.startsWith("/") ? `/${image}` : image;
  return (
    <article className="group relative rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover">
      {/* Gradient border wrapper */}
      <div className="rounded-2xl p-[1px] bg-gradient-to-br from-accent/40 via-[hsl(var(--border))] to-[hsl(var(--border))]">
        {/* Inner card */}
        <div className="rounded-2xl h-full w-full bg-card/70 backdrop-blur-sm border border-border/60 p-5">
          {/* top scan line */}
          <div className="absolute left-4 right-4 top-3 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

          <div className="flex flex-col sm:flex-row gap-5">
            {/* Image */}
            <div className="relative w-full sm:w-40 shrink-0">
              <div className="aspect-square rounded-xl overflow-hidden border border-border/60 bg-muted/20 ring-1 ring-accent/20">
                {/* decorative glow */}
                <div className="absolute inset-0 bg-[radial-gradient(120px_80px_at_20%_20%,hsl(var(--accent)/.15),transparent_60%)]" />
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img src={imageUrl} alt={name} className="relative z-10 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1">
              <div className="flex items-start gap-2">
                <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-accent/70 ring-2 ring-accent/20" />
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold tracking-tight group-hover:text-accent transition-colors line-clamp-1">{name}</h3>
                  {(designation || company) && (
                    <p className="text-accent/90 text-sm mt-0.5 truncate">{[designation, company].filter(Boolean).join(" · ")}</p>
                  )}
                </div>
              </div>

              {/* Topic tags */}
              {topicTags && topicTags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {topicTags.map((tag, idx) => (
                    <span key={idx} className="inline-block bg-accent/10 text-accent px-2 py-0.5 rounded text-xs font-medium border border-accent/20">{tag}</span>
                  ))}
                </div>
              )}

              {!compact && bio && (
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{bio}</p>
              )}

              {/* Social Media Links */}
              {socials && (socials.twitter || socials.github || socials.linkedin) && (
                <div className="flex gap-3 mt-3">
                  {socials.github && (
                    <a
                      href={socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {socials.twitter && (
                    <a
                      href={socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <TwitterIcon className="w-4 h-4" />
                    </a>
                  )}
                  {socials.linkedin && (
                    <a
                      href={socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              )}

              {/* Extra slot for talk details or socials */}
              {children && (
                <div className="mt-4">{children}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export function speakerSlug(name?: string, image?: string) {
  if (name && name.trim()) return slugify(name.trim());
  if (image && image.trim()) {
    const base = image.trim().replace(/^.*[\\/]/, "").replace(/\.[^.]+$/, "");
    return slugify(base);
  }
  return "speaker";
}

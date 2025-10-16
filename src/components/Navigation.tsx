import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DiscordIcon } from "@/components/ui/icons/DiscordIcon";
import { REGISTRATION_FORM_URL, SPONSORSHIP_BROCHURE_URL } from "@/lib/links";

const DISCORD_URL = "https://discord.com/invite/jNUHxbTYXP";

interface Props {
  className?: string;
}

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Conference-style primary navigation (anchors point to sections on the home page)
  const navItems = [
    { label: "Agenda", href: "/#agenda" },
    { label: "Speakers", href: "/#speakers" },
    { label: "CFP", href: "/cfp" },
    { label: "Sponsor Us", href: SPONSORSHIP_BROCHURE_URL, external: true },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full px-4 py-4">
      <div className={cn(
        "max-w-6xl mx-auto rounded-2xl backdrop-blur transition-all duration-300 py-2",
        isScrolled 
          ? "bg-background/70 border border-border/60 shadow-lg" 
          : "bg-background/40 border border-border/40 shadow-soft"
      )}>
        <div className="flex justify-between items-center px-4 py-2">
          {/* Logo */}
          <a href="/" className="flex-shrink-0 flex items-center gap-3 group">
            <img src="/sast-sca-cropped.png" alt="SAST & SCA Village" className="h-9 w-auto rounded-sm" />
            <span className="text-lg md:text-xl font-bold tracking-tight text-foreground">
              <span className="font-heading text-accent group-hover:text-primary transition-colors">SAST & SCA Village</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium nav-link-hover font-heading text-[14px] tracking-wide px-3 py-2 rounded-lg"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pl-2 ml-2 border-l border-border/50">
              <a href={REGISTRATION_FORM_URL} target="_blank" rel="noopener noreferrer" className="hidden lg:inline-flex">
                <Button className="bg-accent text-white hover:bg-accent/90">
                  Register
                </Button>
              </a>
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join our Discord"
              >
                <Button 
                  variant="ghost" 
                  className="hover:scale-105 transition-transform duration-300 p-2.5 h-11 w-11"
                >
                  <DiscordIcon />
                </Button>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              className="h-11 w-11"
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-3 border-t border-border/50">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium nav-link-hover font-heading tracking-wide px-4 py-2 mx-2 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 px-2 grid grid-cols-2 gap-2">
                <a href={REGISTRATION_FORM_URL} target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-accent text-white hover:bg-accent/90">Register</Button>
                </a>
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button 
                    variant="ghost" 
                    className="w-full hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2"
                  >
                    <DiscordIcon />
                    Discord
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
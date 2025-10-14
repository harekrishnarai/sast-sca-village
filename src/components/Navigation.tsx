import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DiscordIcon } from "@/components/ui/icons/DiscordIcon";

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

  const navItems = [
    { label: "Team", href: "/team" },
    { label: "Schedule", href: "/schedule" },
    { label: "Navigation", href: "/navigation" },
    { label: "Speakers", href: "/speakers" },
    { label: "Swag", href: "/swag" }
  ];

  return (
    <nav className="sticky top-0 z-50 w-full px-4 py-6">
      <div className={cn(
        "max-w-6xl mx-auto rounded-2xl backdrop-blur transition-all duration-300 py-2.5",
        isScrolled 
          ? "bg-black/20 shadow-lg" 
          : "bg-black/10 shadow-soft"
      )}>
        <div className="flex justify-between items-center px-4 py-3">
          {/* Logo */}
          <a href="/" className="flex-shrink-0 flex items-center space-x-3 group transition-transform hover:scale-[1.02] duration-300">
            <img src="/sast-sca-cropped.png" alt="SAST SCA Logo" className="h-9 w-auto" />
            <h1 className="text-2xl font-bold text-primary tracking-tight">
              <span className="font-heading text-accent group-hover:text-primary transition-colors duration-300">SAST SCA Village</span>
            </h1>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-all font-medium nav-link-hover font-heading text-[15px] tracking-wide px-4 py-2.5"
              >
                {item.label}
              </a>
            ))}
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4"
            >
              <Button 
                variant="ghost" 
                className="hover:scale-105 transition-transform duration-300 p-2.5 h-11 w-11"
              >
                <DiscordIcon />
              </Button>
            </a>
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
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium nav-link-hover font-heading tracking-wide px-4 py-2 mx-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 px-2">
                <a
                  href="https://discord.com/invite/jNUHxbTYXP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button 
                    variant="ghost" 
                    className="w-full hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2"
                  >
                    <svg
                      className="w-6 h-6 text-accent hover:text-primary transition-colors"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
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
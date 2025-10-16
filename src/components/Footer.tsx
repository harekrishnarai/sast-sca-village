import { Button } from "./ui/button";
import { CONTACT_EMAIL, SEASIDES_URL } from "@/lib/links";
import { Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/50 backdrop-blur-sm border-t border-border">
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left: Copyright */}
          <p className="text-sm text-muted-foreground order-1 md:order-1">
            &copy; {currentYear} SAST SCA Village. All rights reserved.
          </p>

          {/* Center: Attribution */}
          <p className="text-sm text-muted-foreground order-2 md:order-2 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            An initiative of{" "}
            <a
              href={SEASIDES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
            >
              Seasides Conference
            </a>
          </p>

          {/* Right: Contact */}
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-accent/50 hover:bg-accent/10 hover:border-accent order-3 md:order-3"
          >
            <a href={`mailto:${CONTACT_EMAIL}`}>
              <Mail className="mr-2 h-4 w-4" />
              Contact Us
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Button } from "./ui/button";
import { CONTACT_EMAIL } from "@/lib/links";
import { Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/50 backdrop-blur-sm border-t border-border">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left: Copyright */}
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              &copy; {currentYear} SAST SCA Village. All rights reserved.
            </p>
          </div>

          {/* Right: Contact CTA */}
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground hidden sm:block">Questions or want to contribute?</p>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-accent/50 hover:bg-accent/10 hover:border-accent"
            >
              <a href={`mailto:${CONTACT_EMAIL}`}>
                <Mail className="mr-2 h-4 w-4" />
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/50 backdrop-blur-sm border-t border-border">
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="flex justify-center">
          <p className="text-muted-foreground">
            &copy; {currentYear} SAST SCA Village. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
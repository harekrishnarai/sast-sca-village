const sponsors = [
  { name: "TechCorp", tier: "platinum", logo: "TECHCORP" },
  { name: "DevTools Inc", tier: "gold", logo: "DEVTOOLS" },
  { name: "CodeBase", tier: "gold", logo: "CODEBASE" },
  { name: "StartupLab", tier: "silver", logo: "STARTUPLAB" },
  { name: "OpenSource Foundation", tier: "silver", logo: "OPENSOURCE" },
  { name: "CloudHosting", tier: "silver", logo: "CLOUDHOST" },
  { name: "APIFirst", tier: "bronze", logo: "APIFIRST" },
  { name: "WebFrameworks", tier: "bronze", logo: "WEBFRAME" },
  { name: "MobileApps Co", tier: "bronze", logo: "MOBILEAPP" },
  { name: "DataAnalytics", tier: "bronze", logo: "DATALYTICS" }
];

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-16 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header - minimal */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Sponsors
          </h2>
        </div>

        {/* Sponsor logos - simplified grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
          {sponsors.slice(0, 6).map((sponsor, index) => (
            <div
              key={index}
              className="h-12 w-32 bg-muted/30 rounded flex items-center justify-center font-semibold text-muted-foreground hover:bg-muted/50 transition-colors cursor-pointer text-xs"
            >
              {sponsor.logo}
            </div>
          ))}
        </div>

        {/* Community partners */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-6">
            Community Partners
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {["Github", "GitLab", "Dev.to", "Stack Overflow"].map((partner, index) => (
              <div
                key={index}
                className="h-10 w-24 bg-muted/20 rounded flex items-center justify-center font-medium text-muted-foreground hover:bg-muted/40 transition-colors cursor-pointer text-xs"
              >
                {partner.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
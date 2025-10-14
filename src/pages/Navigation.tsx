import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const VillageNavigation = () => {
  const areas = [
    {
      name: "Main Workshop Area",
      description: "Primary space for hands-on SAST tool workshops and live demonstrations.",
      location: "Hall A - Central Space"
    },
    {
      name: "Team Collaboration Zone",
      description: "Dedicated area for group activities and collaborative vulnerability hunting.",
      location: "Hall A - North Wing"
    },
    {
      name: "Security Lab",
      description: "Specialized area for advanced security testing and analysis.",
      location: "Hall B - Secure Zone"
    }
    // Add more areas as needed
  ];

  return (
    <div className="min-h-screen animate-flicker relative">
      {/* Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        <div className="absolute inset-0 tech-dots"></div>
        <div className="absolute inset-0 tech-orbs"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        
        <main className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 font-heading">
            Village Floor Plan
          </h1>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12">
            Navigate through our village spaces designed for optimal learning, collaboration, 
            and hands-on experience with SAST and SCA tools.
          </p>

          {/* Floor Plan Visualization */}
          <div className="w-full max-w-4xl mx-auto mb-16 p-6 border border-border rounded-lg bg-card/50 backdrop-blur-sm">
            <div className="aspect-video bg-muted/20 rounded flex items-center justify-center">
              <p className="text-muted-foreground">Interactive Floor Plan Coming Soon</p>
            </div>
          </div>

          {/* Areas List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area) => (
              <div key={area.name} className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-accent/50 transition-all">
                <h3 className="text-lg font-bold mb-2">{area.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{area.description}</p>
                <p className="text-sm font-medium text-accent">{area.location}</p>
              </div>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default VillageNavigation;
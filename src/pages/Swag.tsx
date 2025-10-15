import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Swag = () => {
  const swagLevels = [
    {
      level: "SAST Master Sticker",
      requirements: "Master static analysis security testing and earn this exclusive sticker!",
      items: [
        "SAST SCA Village T-Shirt",
        "Village Stickers Pack",
        "Digital Badge"
      ],
    },
    {
      level: "SCA Champion Sticker",
      requirements: "Become a software composition analysis expert and claim your badge!",
      items: [
        "Limited Edition Security Toolkit",
        "Exclusive Workshop Access",
        "Recognition on Village Wall",
        "All Bronze Rewards"
      ],
    },
    {
      level: " DevSecOps Warrior Sticker",
      requirements: "Complete the DevSecOps challenge track to unlock this special sticker!",
      items: [
        "Limited Edition Security Toolkit",
        "Exclusive Workshop Access",
        "Recognition on Village Wall",
        "All Bronze Rewards"
      ],
    }
    // Add more levels as needed
  ];

  const difficultyColors = {
    Beginner: "text-green-400",
    Intermediate: "text-blue-400",
    Advanced: "text-purple-400",
    Expert: "text-red-400"
  };

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
            Village Rewards
          </h1>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12">
            Complete challenges across our AppSec villages to earn exclusive swag! From SAST master badges to DevSecOps champion stickers, each item represents your achievement in mastering different aspects of application security.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {swagLevels.map((level) => (
              <div key={level.level} className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-accent/50 transition-all">
                <h3 className="text-xl font-bold text-center mb-2">{level.level}</h3>
                <p className="text-sm text-accent font-medium text-center mb-4">
                  {level.requirements}
                </p>
                <div className="space-y-2">
                  {level.items.map((item, index) => (
                    <div key={index} className="flex items-center text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 mr-2"></span>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Swag;
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

import heroImage from "@/assets/hacktober-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen animate-flicker relative">
      {/* Full page background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <img 
          src={heroImage} 
          alt="Background" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
        {/* Tech Pattern Overlay */}
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        {/* Animated dots */}
        <div className="absolute inset-0 tech-dots"></div>
        {/* Binary rain effect */}
        <div className="absolute inset-0 tech-binary"></div>
        {/* Circuit pattern */}
        <div className="absolute inset-0 tech-circuits"></div>
        {/* Data flow lines */}
        <div className="absolute inset-0 tech-data-flow"></div>
        {/* Glowing orbs */}
        <div className="absolute inset-0 tech-orbs"></div>
        {/* Glowing accents */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-accent/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-accent/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Footer />
      </div>
    </div>
  );
};

export default Index;

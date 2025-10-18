import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SchedulePage from "./pages/Schedule";
import Team from "./pages/Team";
import About from "./pages/About";
import Speakers from "./pages/Speakers";
import CFP from "./pages/CFP";
import Swag from "./pages/Swag";
import SpeakerDetail from "./pages/SpeakerDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/speakers/:slug" element={<SpeakerDetail />} />
          <Route path="/swag" element={<Swag />} />
          <Route path="/cfp" element={<CFP />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

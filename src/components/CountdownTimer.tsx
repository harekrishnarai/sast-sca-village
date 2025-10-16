import { useEffect, useState } from "react";
import { Calendar, Clock } from "lucide-react";

export default function CountdownTimer() {
  const eventDate = new Date("2026-02-19T10:00:00").getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  return (
    <div className="relative py-6 overflow-hidden">      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-3">
          <div className="inline-flex items-center gap-2 text-accent/80 mb-2">
            <Clock className="w-3.5 h-3.5 animate-pulse" />
            <span className="text-[10px] md:text-xs font-medium uppercase tracking-wider">Event Starts In</span>
          </div>
        </div>

        {/* Countdown display - Compact version */}
        <div className="grid grid-cols-4 gap-2 md:gap-3 max-w-md mx-auto">
          {[
            { value: timeLeft.days, label: "DAYS", delay: "0s" },
            { value: timeLeft.hours, label: "HOURS", delay: "0.1s" },
            { value: timeLeft.minutes, label: "MINS", delay: "0.2s" },
            { value: timeLeft.seconds, label: "SECS", delay: "0.3s" },
          ].map((item, idx) => (
            <div
              key={item.label}
              className="countdown-card-compact relative group"
              style={{ animationDelay: item.delay }}
            >
              {/* Main card - Compact */}
              <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-md shadow-sm overflow-hidden">
                {/* Calendar icon strip at top */}
                <div className="h-5 bg-accent/10 border-b border-accent/20 flex items-center justify-center">
                  <Calendar className="w-3 h-3 text-accent/60" />
                </div>

                {/* Number display - Compact */}
                <div className="py-2 px-2">
                  <div className="relative flex items-center justify-center">
                    <span className="text-2xl md:text-3xl font-bold text-accent tabular-nums leading-none">
                      {String(item.value).padStart(2, '0')}
                    </span>
                  </div>
                  
                  {/* Horizontal tear line */}
                  <div className="h-px bg-border/30 my-1.5" />

                  {/* Label - Compact */}
                  <div className="text-center">
                    <span className="text-[9px] md:text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                      {item.label}
                    </span>
                  </div>
                </div>
              </div>

              {/* Shadow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { Clock, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const scheduleData = [
  {
    day: "Day 1 - October 15",
    events: [
      {
        time: "9:00 AM",
        title: "Registration & Welcome Coffee",
        speaker: "Village Team",
        location: "Main Hall",
        type: "registration"
      },
      {
        time: "10:00 AM",
        title: "Opening Keynote: The Future of Developer Communities",
        speaker: "Sarah Chen",
        location: "Auditorium",
        type: "keynote"
      },
      {
        time: "11:30 AM",
        title: "Workshop: Modern React Patterns",
        speaker: "Alex Rodriguez",
        location: "Workshop Room A",
        type: "workshop"
      },
      {
        time: "1:00 PM",
        title: "Lunch & Networking",
        speaker: "Community",
        location: "Dining Hall",
        type: "break"
      },
      {
        time: "2:30 PM",
        title: "Panel: Scaling Developer Teams",
        speaker: "Industry Leaders",
        location: "Auditorium",
        type: "panel"
      }
    ]
  },
  {
    day: "Day 2 - October 16",
    events: [
      {
        time: "9:00 AM",
        title: "Morning Coffee & Networking",
        speaker: "Community",
        location: "Main Hall",
        type: "break"
      },
      {
        time: "10:00 AM",
        title: "Lightning Talks: Community Projects",
        speaker: "Various Speakers",
        location: "Auditorium",
        type: "lightning"
      },
      {
        time: "12:00 PM",
        title: "Hackathon Kickoff",
        speaker: "Organizers",
        location: "Hack Space",
        type: "hackathon"
      },
      {
        time: "1:00 PM",
        title: "Working Lunch",
        speaker: "Teams",
        location: "Hack Space",
        type: "break"
      },
      {
        time: "6:00 PM",
        title: "Happy Hour & Demo Prep",
        speaker: "Community",
        location: "Lounge",
        type: "social"
      }
    ]
  },
  {
    day: "Day 3 - October 17",
    events: [
      {
        time: "9:00 AM",
        title: "Final Hackathon Push",
        speaker: "Teams",
        location: "Hack Space",
        type: "hackathon"
      },
      {
        time: "12:00 PM",
        title: "Project Presentations",
        speaker: "Hackathon Teams",
        location: "Auditorium",
        type: "presentation"
      },
      {
        time: "2:00 PM",
        title: "Awards & Recognition",
        speaker: "Judges",
        location: "Auditorium",
        type: "awards"
      },
      {
        time: "3:30 PM",
        title: "Closing Remarks",
        speaker: "Village Team",
        location: "Auditorium",
        type: "closing"
      }
    ]
  }
];

const getEventTypeColor = (type: string) => {
  switch (type) {
    case 'keynote':
      return 'bg-accent/20 text-accent border-accent/30';
    case 'workshop':
      return 'bg-blue-100 text-blue-700 border-blue-200';
    case 'hackathon':
      return 'bg-purple-100 text-purple-700 border-purple-200';
    case 'social':
      return 'bg-green-100 text-green-700 border-green-200';
    default:
      return 'bg-muted text-muted-foreground border-border';
  }
};

const Schedule = () => {
  return (
    <section id="schedule" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header - minimal */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            <span className="text-accent">Schedule</span>
          </h2>
          <p className="text-muted-foreground">
            Three days of workshops, talks, and networking.
          </p>
        </div>

        {/* Schedule grid - simplified */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {scheduleData.map((daySchedule, dayIndex) => (
            <div key={dayIndex} className="border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-6">
                {daySchedule.day}
              </h3>
              
              <div className="space-y-3">
                {daySchedule.events.map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className="flex flex-col md:flex-row md:items-center gap-4 p-3 rounded hover:bg-muted/20 transition-colors"
                  >
                    {/* Time */}
                    <div className="flex items-center gap-2 text-accent font-medium min-w-[120px] text-sm">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </div>

                    {/* Event details */}
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">
                        {event.title}
                      </h4>
                      
                      <div className="flex flex-wrap items-center gap-3 text-muted-foreground text-sm">
                        <span>{event.speaker}</span>
                        <span>•</span>
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA - simplified */}
        <div className="text-center mt-12">
          <Button variant="hacktober" size="lg">
            REGISTER NOW
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
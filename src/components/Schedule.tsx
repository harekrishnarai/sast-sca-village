"use client";

import { useState } from "react";
import {
  Clock,
  MapPin,
  Users,
  CalendarCheck,
  List,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Speaker {
  name: string;
  designation: string;
  company: string;
  image: string;
  bio?: string;
  socials?: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
}

interface Event {
  startTime: string;
  endTime: string;
  title: string;
  speakers?: Speaker[];
  location: string;
  type: string;
  registerLink: string;
  description?: string;
  topics?: string[];
  prerequisites?: string[];
}

interface DaySchedule {
  day: string;
  date: string;
  events: Event[];
}

export const scheduleData: DaySchedule[] = [
  {
    day: "Day 1",
    date: "19th Feb",
    events: [
      {
        startTime: "10:00 AM",
        endTime: "11:00 AM",
        title: "Introduction to SAST with Enterprise Tools",
        speakers: [
          {
            name: "Gaurav Joshi",
            designation: "Product Security Engineer",
            company: "Highradius",
            image: "Gaurav_Joshi.jpg",
            socials: {
              linkedin: "https://www.linkedin.com/in/gauravjoshi1",
              twitter: "https://twitter.com/gauravjoshi",
              github: "https://github.com/gauravjoshi"
            }
          },
        ],
        location: "Main Hall",
        type: "keynote",
        registerLink: "https://forms.google.com",
        description:
          "A comprehensive introduction to Static Application Security Testing tools used in enterprise environments.",
        topics: [
          "Overview of SAST methodology",
          "Enterprise SAST tools comparison",
          "Implementation strategies",
          "Best practices and common pitfalls"
        ],
      },
      {
        startTime: "11:15 AM",
        endTime: "12:45 AM",
        title: "Broken Chains: Unveiling Hidden Attack Surface in Package Managers",
        speakers: [
          {
            name: "Kartik Singh",
            designation: "Security Researcher",
            company: "Loginsoft",
            image: "kartik_singh.jpeg",
            bio: "",
            socials: {
              linkedin: "https://www.linkedin.com/in/kartiksingh",
              twitter: "https://twitter.com/kartiksingh",
              github: "https://github.com/kartiksingh"
            }
          },
        ],
        location: "Auditorium",
        type: "keynote",
        registerLink: "https://forms.google.com",
        description:
          "Deep dive into identifying and mitigating dependency-based attack vectors.",
        topics: [
          "Understanding dependency chains",
          "Attack surface analysis",
          "Detection methodologies",
          "Mitigation strategies"
        ],
      },
      {
        startTime: "12:45 AM",
        endTime: "1:30 AM",
        title: "BREAK",
        location: "Main Hall",
        type: "break",
        registerLink: "/register/morning-coffee",
      },
      {
        startTime: "1:30 AM",
        endTime: "2:30 PM",
        title: "Attacking and Defending CI/CD Pipelines",
        speakers: [
          {
            name: "Hare Krishna Rai",
            designation: "Product Security Engineer",
            company: "Highradius",
            image: "Hare_Krishna_Rai.jpg",
            bio: "",
            socials: {
              linkedin: "https://www.linkedin.com/in/harekrishnarai",
              twitter: "https://twitter.com/harekrishnarai",
              github: "https://github.com/harekrishnarai"
            }
          },
        ],
        location: "Workshop Room A",
        type: "keynote",
        registerLink: "https://forms.google.com",
        description:
          "Hands-on workshop exploring CI/CD pipeline vulnerabilities and security measures.",
        topics: [
          "Common pipeline vulnerabilities",
          "Attack scenarios",
          "Defense strategies",
          "Best practices"
        ],
      },
      {
        startTime: "2:45 AM",
        endTime: "4:45 PM",
        title: "Lightweight Secure Code Review: A Deep Dive into SAST with Semgrep (Part 1)",
        speakers: [
          {
            name: "Nikhil Sahoo",
            designation: "Security Engineer II",
            company: "Microsoft",
            image: "nikhil_sahoo.jpeg",
            bio: "",
            socials: {
              linkedin: "https://www.linkedin.com/in/nikhilsahoo",
              twitter: "https://twitter.com/nikhilsahoo",
              github: "https://github.com/nikhilsahoo"
            }
          },
          {
            name: "Ravindra Penumarthi",
            designation: "Security Engineer II",
            company: "Microsoft",
            image: "ravindra.jpeg",
            bio: "",
            socials: {
              linkedin: "https://www.linkedin.com/in/ravindrapenumarthi",
              twitter: "https://twitter.com/ravindrapenumarthi",
              github: "https://github.com/ravindrapenumarthi"
            }
          },
        ],
        location: "Workshop Room A",
        type: "keynote",
        registerLink: "https://forms.google.com",
        description:
          "First part of comprehensive training on using Semgrep for code analysis.",
        topics: [
          "Semgrep basics",
          "Pattern matching",
          "Rule writing",
          "Tool integration"
        ],
      },
    ],
  },
  {
    day: "Day 2",
    date: "20th Feb",
    events: [
      {
        startTime: "10:00 AM",
        endTime: "12:00 AM",
        title: "Lightweight Secure Code Review: A Deep Dive into SAST with Semgrep (Part 2)",
        speakers: [
          {
            name: "Nikhil Sahoo",
            designation: "Security Engineer II",
            company: "Microsoft",
            image: "nikhil_sahoo.jpeg",
            bio: "",
            
          },
          {
            name: "Ravindra Penumarthi",
            designation: "Security Engineer II",
            company: "Microsoft",
            image: "ravindra.jpeg",
            bio: "",
            
          },
        ],
        location: "Main Hall",
        type: "keynote",
        registerLink: "https://forms.google.com",
        description:
          "Advanced techniques in code review using Semgrep and other lightweight SAST tools.",
        topics: [
          "Advanced pattern matching",
          "Custom rule development",
          "Integration with CI/CD",
          "Performance optimization"
        ],
      },
      {
        startTime: "12:00 AM",
        endTime: "12:45 AM",
        title: "BREAK",
        location: "Main Hall",
        type: "break",
        registerLink: "/register/morning-coffee",
      },
      {
        startTime: "12:45 AM",
        endTime: "1:45 PM",
        title: "Introduction to SCA & evaluating Enterprise tools with SCAGoat",
        speakers: [
          {
            name: "Hare Krishna Rai",
            designation: "Product Security Engineer",
            company: "Highradius",
            image: "Hare_Krishna_Rai.jpg",
            bio: "",
          },
        ],
        location: "Workshop Room A",
        type: "keynote",
        registerLink: "https://forms.google.com",
        description:
          "Comprehensive overview of Software Composition Analysis and enterprise tooling.",
        topics: [
          "SCA fundamentals",
          "Enterprise tool comparison",
          "Implementation strategies",
          "Best practices"
        ],
      },
      {
        startTime: "12:45 AM",
        endTime: "1:45 PM",
        title: "How to Build Your Own SCA Tool?",
        speakers: [
          {
            name: "Hare Krishna Rai",
            designation: "Product Security Engineer",
            company: "Highradius",
            image: "Hare_Krishna_Rai.jpg",
            bio: "",
          },
        ],
        location: "Workshop Room A",
        type: "keynote",
        registerLink: "https://forms.google.com",
        description:
          "Comprehensive overview of Software Composition Analysis and enterprise tooling.",
        topics: [
          "Architecture design",
          "Data sources",
          "Vulnerability matching",
          "Performance considerations"
        ],
      },
    ],
  },
];

const getEventTypeColor = (type: string) => {
  switch (type) {
    case "keynote":
      return "bg-gradient-to-r from-accent/10 to-accent/5 text-accent";
    case "workshop":
      return "bg-gradient-to-r from-blue-500/10 to-blue-500/5 text-blue-500";
    case "hackathon":
      return "bg-gradient-to-r from-purple-500/10 to-purple-500/5 text-purple-500";
      case "break":
      case "social":
        // Neutral/muted to match the site's theme for non-primary events
        return "bg-gradient-to-r from-muted/10 to-muted/5 text-muted-foreground";
    case "awards":
      return "bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 text-yellow-500";
    default:
      return "bg-gradient-to-r from-muted/10 to-muted/5 text-muted-foreground";
  }
};

const shouldShowRegister = (type: string) => {
  return !["break", "social"].includes(type);
};

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState(0);

  return (
    <section id="schedule" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-accent">Event Schedule</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Join us for three days of inspiring talks, hands-on workshops, and
            collaborative hacking
          </p>
        </div>

        {/* Day selector buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {scheduleData.map((day, index) => (
            <button
              key={index}
              onClick={() => setSelectedDay(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                selectedDay === index
                  ? "bg-accent text-white shadow-lg scale-105"
                  : "bg-accent/10 text-accent hover:bg-accent/20"
              }`}
            >
              <div className="text-sm md:text-base">{day.day}</div>
              <div className="text-xs md:text-sm opacity-80">{day.date}</div>
            </button>
          ))}
        </div>

        {/* Schedule timeline */}
        <div className="relative pl-8 border-l-2 border-border/30 max-w-4xl mx-auto">
          {scheduleData[selectedDay].events.map((event, eventIndex) => (
            <div key={eventIndex} className="relative mb-10 last:mb-0">
              <div className="absolute -left-[41px] w-5 h-5 rounded-full border-4 border-background bg-accent"></div>

              <Dialog>
                <DialogTrigger asChild>
                  <div
                    className={`ml-16 p-6 rounded-lg border border-border/50 transition-all duration-200 hover:shadow-lg cursor-pointer ${getEventTypeColor(
                      event.type
                    )}`}
                  >
                    {/* Time bubble */}
                    <div className="absolute -left-[5.5rem] top-1/2 -translate-y-1/2 bg-background shadow-sm border border-border/50 rounded-full px-3 py-1 min-w-[4.5rem] text-center">
                      <div className="flex items-center justify-center gap-1 text-sm font-mono">
                        <Clock className="w-3 h-3" />
                        {event.startTime}
                      </div>
                    </div>

                    {/* Event content */}
                    <div>
                      <h4 className="text-lg font-bold mb-3">{event.title}</h4>

                      {event.speakers && (
                        <div className="flex flex-col gap-2 mb-3">
                          {event.speakers.map((speaker, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-3 text-sm text-muted-foreground"
                            >
                              <img
                                src={speaker.image}
                                alt={speaker.name}
                                className="w-10 h-10 rounded-full object-cover border"
                              />
                              <div>
                                <p className="font-medium text-foreground">
                                  {speaker.name}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  {speaker.designation} @ {speaker.company}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>
                            {event.startTime} - {event.endTime}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>

                      {/* Register button on card */}
                      {shouldShowRegister(event.type) && (
                        <div className="pt-2">
                          <Button
                            size="sm"
                            className="bg-accent text-white hover:bg-accent/90"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.location.href = event.registerLink;
                            }}
                          >
                            Register
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </DialogTrigger>

                {/* Dialog details */}
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{event.title}</DialogTitle>
                  </DialogHeader>

                  <div className="space-y-6 mt-4">
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <CalendarCheck className="w-4 h-4 text-accent" />
                        <span>
                          {event.startTime} - {event.endTime}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-accent" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    {event.description && (
                      <p className="text-muted-foreground">{event.description}</p>
                    )}

                    {event.topics && (
                      <div>
                        <h3 className="text-sm font-semibold flex items-center gap-2">
                          <List className="w-4 h-4 text-accent" /> Topics Covered
                        </h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                          {event.topics.map((topic, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <span className="text-accent">•</span>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {event.speakers && (
                      <div className="border-t pt-4 space-y-3">
                        <h3 className="text-sm font-semibold flex items-center gap-2">
                          <Users className="w-4 h-4 text-accent" /> Speakers
                        </h3>
                        {event.speakers.map((speaker, idx) => (
                          <div
                            key={idx}
                            className="flex gap-4 p-4 rounded-lg bg-muted/30"
                          >
                            <img
                              src={speaker.image}
                              alt={speaker.name}
                              className="w-14 h-14 rounded-full object-cover border"
                            />
                            <div>
                              <h4 className="font-semibold">{speaker.name}</h4>
                              <p className="text-sm text-muted-foreground">
                                {speaker.designation} @ {speaker.company}
                              </p>
                              {speaker.bio && (
                                <p className="text-sm text-muted-foreground mt-1">
                                  {speaker.bio}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {shouldShowRegister(event.type) && (
                      <div className="flex justify-center pt-4">
                        <Button
                          size="lg"
                          className="bg-accent text-white hover:bg-accent/90"
                          onClick={() =>
                            (window.location.href = event.registerLink)
                          }
                        >
                          Register for this session
                        </Button>
                      </div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;

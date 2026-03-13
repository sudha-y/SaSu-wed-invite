import { motion } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";
import { type AccessLevel } from "@/hooks/useAccessLevel";
import { generateGoogleCalendarUrl, downloadICS } from "@/lib/calendarUtils";
import zariBorder from "@/assets/zari-border.png";

interface WeddingEvent {
  id: string;
  title: string;
  tamilTitle: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  mapsUrl: string;
  description: string;
  access: AccessLevel[];
  startDate: Date;
  endDate: Date;
}

const events: WeddingEvent[] = [
  {
    id: "muhurtham",
    title: "Muhurtham",
    tamilTitle: "முகூர்த்தம்",
    date: "December 15, 2026",
    time: "6:30 AM - 8:30 AM",
    venue: "Sri Kapaleeshwarar Temple",
    address: "Mylapore, Chennai, Tamil Nadu 600004",
    mapsUrl: "https://maps.google.com/?q=Sri+Kapaleeshwarar+Temple+Mylapore+Chennai",
    description: "The sacred wedding ceremony with traditional Vedic rituals, tying of the Thali, and Saptapadi.",
    access: ["family", "vip"],
    startDate: new Date("2026-12-15T06:30:00+05:30"),
    endDate: new Date("2026-12-15T08:30:00+05:30"),
  },
  {
    id: "nichayathartham",
    title: "Nichayathartham",
    tamilTitle: "நிச்சயதார்த்தம்",
    date: "December 14, 2026",
    time: "10:00 AM - 12:00 PM",
    venue: "Kamadhenu Kalyana Mandapam",
    address: "T. Nagar, Chennai, Tamil Nadu 600017",
    mapsUrl: "https://maps.google.com/?q=T+Nagar+Chennai",
    description: "The formal engagement ceremony with exchange of rings and blessings from elders.",
    access: ["family"],
    startDate: new Date("2026-12-14T10:00:00+05:30"),
    endDate: new Date("2026-12-14T12:00:00+05:30"),
  },
  {
    id: "sangeet",
    title: "Sangeet & Mehendi",
    tamilTitle: "சங்கீத் & மெகந்தி",
    date: "December 14, 2026",
    time: "6:00 PM - 11:00 PM",
    venue: "The Leela Palace",
    address: "Adyar Seaface, MRC Nagar, Chennai 600028",
    mapsUrl: "https://maps.google.com/?q=The+Leela+Palace+Chennai",
    description: "An evening of music, dance, and celebration with henna for the bride and guests.",
    access: ["family", "vip"],
    startDate: new Date("2026-12-14T18:00:00+05:30"),
    endDate: new Date("2026-12-14T23:00:00+05:30"),
  },
  {
    id: "reception",
    title: "Wedding Reception",
    tamilTitle: "வரவேற்பு",
    date: "December 15, 2026",
    time: "6:00 PM - 10:00 PM",
    venue: "ITC Grand Chola",
    address: "63, Anna Salai, Guindy, Chennai 600032",
    mapsUrl: "https://maps.google.com/?q=ITC+Grand+Chola+Chennai",
    description: "A grand reception dinner celebrating the union of the two families. All are warmly invited.",
    access: ["family", "vip", "general"],
    startDate: new Date("2026-12-15T18:00:00+05:30"),
    endDate: new Date("2026-12-15T22:00:00+05:30"),
  },
];

interface EventsSectionProps {
  accessLevel: AccessLevel;
}

const EventsSection = ({ accessLevel }: EventsSectionProps) => {
  const visibleEvents = events.filter((e) => e.access.includes(accessLevel));

  const handleAddToCalendar = (event: WeddingEvent) => {
    const calendarEvent = {
      title: `${event.title} - Priya & Karthik's Wedding`,
      description: event.description,
      location: `${event.venue}, ${event.address}`,
      startDate: event.startDate,
      endDate: event.endDate,
    };

    // Try Google Calendar first, fallback to ICS
    const googleUrl = generateGoogleCalendarUrl(calendarEvent);
    window.open(googleUrl, "_blank");
  };

  const handleDownloadICS = (event: WeddingEvent) => {
    downloadICS({
      title: `${event.title} - Priya & Karthik's Wedding`,
      description: event.description,
      location: `${event.venue}, ${event.address}`,
      startDate: event.startDate,
      endDate: event.endDate,
    });
  };

  return (
    <section className="py-20 md:py-32 bg-primary relative overflow-hidden">
      {/* Top Zari Border */}
      <img src={zariBorder} alt="" className="absolute top-0 left-0 w-full h-12 md:h-16 object-cover opacity-40" />

      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-mustard-gold-light font-body text-lg tracking-[0.3em] uppercase mb-3">
            Wedding Events
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            Celebrations Await
          </h2>
          <p className="font-body text-xl text-mustard-gold-light/80 max-w-lg mx-auto">
            Join us as we celebrate our union with cherished traditions
          </p>
        </motion.div>

        <div className="grid gap-6 md:gap-8">
          {visibleEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className="event-card p-6 md:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-primary">
                      {event.title}
                    </h3>
                    <span className="font-tamil text-lg text-accent font-medium">
                      {event.tamilTitle}
                    </span>
                  </div>
                  <p className="font-body text-lg text-foreground mb-4">
                    {event.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span className="font-body text-base">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-accent" />
                      <span className="font-body text-base">{event.time}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 mt-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span className="font-body text-base">{event.venue}, {event.address}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 min-w-[160px]">
                  <a
                    href={event.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-body text-base font-medium hover:opacity-90 transition-opacity"
                  >
                    <MapPin className="w-4 h-4" />
                    View Location
                  </a>
                  <button
                    onClick={() => handleAddToCalendar(event)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-accent text-accent-foreground font-body text-base font-medium hover:opacity-90 transition-opacity"
                  >
                    <Calendar className="w-4 h-4" />
                    Google Cal
                  </button>
                  <button
                    onClick={() => handleDownloadICS(event)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md border border-border text-foreground font-body text-base hover:bg-muted transition-colors"
                  >
                    <Calendar className="w-4 h-4" />
                    Download .ics
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Zari Border */}
      <img src={zariBorder} alt="" className="absolute bottom-0 left-0 w-full h-12 md:h-16 object-cover opacity-40" />
    </section>
  );
};

export default EventsSection;

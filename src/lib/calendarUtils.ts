interface CalendarEvent {
  title: string;
  description: string;
  location: string;
  startDate: Date;
  endDate: Date;
}

export const generateGoogleCalendarUrl = (event: CalendarEvent): string => {
  const formatDate = (date: Date) =>
    date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    dates: `${formatDate(event.startDate)}/${formatDate(event.endDate)}`,
    details: event.description,
    location: event.location,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

export const generateICSFile = (event: CalendarEvent): string => {
  const formatDate = (date: Date) =>
    date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

  return `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${formatDate(event.startDate)}
DTEND:${formatDate(event.endDate)}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;
};

export const downloadICS = (event: CalendarEvent) => {
  const ics = generateICSFile(event);
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${event.title.replace(/\s+/g, "_")}.ics`;
  a.click();
  URL.revokeObjectURL(url);
};

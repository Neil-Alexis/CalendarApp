import { Navbar } from "../components/Navbar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar } from "react-big-calendar";
import { localizer } from "../../helpers/CalendarLocalizer";
import { addHours } from "date-fns";
import { getMessageES } from "../../helpers";
import { CalendarEvent } from "../components/CalendarEvent";
import { useState } from "react";
import { CalendarModal } from "../components/CalendarModal";

const events = [
  {
    title: "Big Meeting",
    notes: "Cumple del jefe",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: "#fafafa",
    user: {
      _id: "123",
      name: "John Doe",
    },
  },
];

export const CalendarPages = () => {
  const [lastWiew, setlastWiew] = useState(
    localStorage.getItem("lastView") || "week"
  );

  const eventStyleGetter = (event, start, end, isSelected) => {
    console.log({ event, start, end, isSelected });
  };

  const style = {
    backgroundColor: "#347CF7",
    borderRadius: "0px",
    opacity: 0.8,
    color: "white",
  };

  const onDoubleClick = (event) => {
    console.log({ doubleClick: event });
  };

  const onSelect = (event) => {
    console.log({ click: event });
  };

  const onViewChange = (event) => {
    localStorage.setItem("lastView", event);
    setlastWiew(event);
  };
  return (
    <>
      <Navbar />
      <div>
        <Calendar
          culture="es"
          localizer={localizer}
          events={events}
          defaultView={lastWiew}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "calc(100vh - 80px)" }}
          messages={getMessageES()}
          eventPropGetter={eventStyleGetter}
          components={{
            event: CalendarEvent,
          }}
          onDoubleClickEvent={onDoubleClick}
          onSelectEvent={onSelect}
          onView={onViewChange}
        />

        <CalendarModal />
      </div>
    </>
  );
};

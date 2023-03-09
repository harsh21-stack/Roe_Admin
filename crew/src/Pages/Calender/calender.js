import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import events from "./Components/events";
import Breadcumb from "./Components/Breadcumb";
import "./Calendar.css";
const Calender = () => {
  const handleDateSelect = (selectInfo) => {
    let title = prompt("Please enter a title for the event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        title,
        start: selectInfo.start,
        end: selectInfo.end,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo) => {
    clickInfo.event.remove();
  };

  return (
    <>
      <Breadcumb />
      <div className="container-fluid py-3" style={{ overflow: "auto" }}>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          allDaySlot={false}
          initialView="dayGridMonth"
          slotDuration={"01:00:00"}
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          nowIndicator={true}
          initialEvents={events}
          select={handleDateSelect}
          eventClick={handleEventClick}
          className="Scroll"
        />
      </div>
    </>
  );
};

export default Calender;

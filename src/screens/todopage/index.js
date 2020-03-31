import React, { useState } from "react";
import NavBar from "@/components/NavBar/";
import inbox from "@/assets/svgs/inbox.svg";
import inbox2 from "@/assets/svgs/inbox2.svg";
import focus from "@/assets/svgs/focus.svg";
import focus2 from "@/assets/svgs/focus2.svg";
import calendar from "@/assets/svgs/calendar.svg";
import calendar2 from "@/assets/svgs/calendar2.svg";
import completed from "@/assets/svgs/completed.svg";
import completed2 from "@/assets/svgs/completed2.svg";
import "./index.css";

const Todopage = () => {
  const [inboxState, setInboxState] = useState(inbox2);
  const [focusState, setFocusState] = useState(focus);
  const [calendarState, setCalendarState] = useState(calendar);
  const [completedState, setCompletedState] = useState(completed);

  return (
    <div className="Layout">
      <NavBar todopage={true} />
      <div className="Container">
        <div className="Content-Buttons">
          <div
            className="Buttons"
            style={
              inboxState === inbox2
                ? { color: "#548FE8" }
                : { color: "#000000" }
            }
          >
            <img src={inboxState} className="Button-Icon" alt="inbox" />
            Inbox
          </div>
          <div className="Buttons">
            <img src={focusState} className="Button-Icon" alt="focus" />
            Today
          </div>
          <div className="Buttons">
            <img src={calendarState} className="Button-Icon" alt="calendar" />
            Upcoming
          </div>
          <div className="Buttons">
            <img src={completedState} className="Button-Icon" alt="completed" />
            Completed
          </div>
        </div>
        <div className="Contents">
          <div className="Todo-Title">Inbox</div>
        </div>
      </div>
    </div>
  );
};

export default Todopage;

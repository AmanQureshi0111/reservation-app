import React, { useState } from "react";
import BpkText from "bpk-component-text";
import BpkButton from "bpk-component-button";
import BpkCalendar, { CALENDAR_SELECTION_TYPE } from "bpk-component-calendar";
import { cssModules } from "bpk-react-utils";
import STYLES from "./App.module.css";

const getClassName = cssModules(STYLES);

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className={getClassName("app")}>
      <BpkText tagName="h1" textStyle="xxl">
        Reservation Date
      </BpkText>

      <BpkCalendar
        id="calendar"
        onDateSelect={(date) => setSelectedDate(date)}
        date={selectedDate}
        selectionConfiguration={{
          type: CALENDAR_SELECTION_TYPE.single,
          date: selectedDate,
        }}
      />

      <BpkButton
        onClick={() => alert(`You selected: ${selectedDate}`)}
        disabled={!selectedDate}
      >
        Continue
      </BpkButton>
    </div>
  );
}

export default App;

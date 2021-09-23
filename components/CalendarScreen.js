import React, { useState } from "react";
import {
    Calendar,
    CalendarList,
    Agenda,
    LocaleConfig,
} from "react-native-calendars";

const CalendarScreen = ({ navigation }) => {
    let markedDate = {};
    const [select, setSelect] = useState(markedDate);

    return (
        <Calendar
            style={{
                borderWidth: 1,
                borderColor: "gray",
                height: "75%",
            }}
            onDayPress={(day) => {
                markedDate[day.dateString] = {
                    selected: true,
                    selectedColor: "blue",
                };
                setSelect(markedDate);
            }}
            markedDates={select}
        />
    );
};

export default CalendarScreen;

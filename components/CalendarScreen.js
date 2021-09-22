import React, { useState } from "react";
import {
    Calendar,
    CalendarList,
    Agenda,
    LocaleConfig,
} from "react-native-calendars";

const CalendarScreen = ({ navigation }) => {
    const [marked, setMarked] = useState();
    return (
        <Calendar
            style={{
                borderWidth: 1,
                borderColor: "gray",
                height: "75%",
            }}
            onDayPress={(day) => {
                console.log(day.dateString);
            }}
            markedDates={{
                "2021-09-16": {
                    selected: true,
                    marked: true,
                    selectedColor: "blue",
                },
                "2021-09-17": { marked: true },
                "2021-09-18": {
                    marked: true,
                    dotColor: "red",
                    activeOpacity: 0,
                },
                "2021-09-19": { disabled: true, disableTouchEvent: true },
            }}
        />
    );
};

export default CalendarScreen;

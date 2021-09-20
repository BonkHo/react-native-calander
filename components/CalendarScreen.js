import React from "react";
import { Calendar } from "react-native-calendars";

const CalendarScreen = ({ navigation }) => {
    return (
        <Calendar
            style={{
                borderWidth: 1,
                borderColor: "gray",
                height: "75%",
            }}
        />
    );
};

export default CalendarScreen;

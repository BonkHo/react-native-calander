import React, { useState } from "react";
import { View } from "react-native";
import {
    Calendar,
    CalendarList,
    Agenda,
    LocaleConfig,
} from "react-native-calendars";

const CalendarScreen = ({ navigation }) => {
    return (
        <Agenda
            items={{
                "2021-09-22": [{ name: "item 1 - any js object" }],
                "2021-09-23": [{ name: "item 2 - any js object", height: 80 }],
                "2021-09-24": [],
                "2021-09-25": [
                    { name: "item 3 - any js object" },
                    { name: "any js object" },
                ],
            }}
        />
    );
};

export default CalendarScreen;

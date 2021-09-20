import React from "react";
import moment from "moment";
import { Text } from "react-native";
import { Calendar } from "react-native-calendars";

const CalanderScreen = ({ navigation }) => {
    return (
        <Text>
            <Calendar />
        </Text>
    );
};

export default CalanderScreen;

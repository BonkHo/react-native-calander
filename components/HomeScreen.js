import React, { useState, useRef } from "react";
import { Text, View, TextInput } from "react-native";
import { Button } from "native-base";
import { NativeBaseProvider } from "native-base";
import moment from "moment";
import { formatTime } from "../utils/FormatTime";

const HomeScreen = ({ navigation }) => {
    const [timerOn, setTimerOn] = useState(false);
    const [timer, setTimer] = useState(0);
    const [activity, setActivity] = useState("Activity");
    const countRef = useRef(null);

    const startTimer = () => {
        setTimerOn(true);
        setTimer(1);
        countRef.current = setInterval(
            () => setTimer((timer) => timer + 1),
            1000
        );
    };

    const stopTimer = () => {
        setTimerOn(false);
        clearInterval(countRef.current);
        setTimer(0);
    };

    return (
        <NativeBaseProvider>
            <View style={{ flex: 1, flexDirection: "column" }}>
                <View
                    style={{
                        flex: 1,
                        alignContent: "center",
                        justifyContent: "center",
                        backgroundColor: "lightblue",
                    }}
                >
                    <Text
                        style={{
                            color: "black",
                            textAlign: "center",
                            fontSize: 20,
                        }}
                    >
                        Current Time: {moment().format("h:mm a")}
                    </Text>
                </View>

                <View
                    style={{
                        flex: 3,
                        textAlign: "center",
                        alignContent: "center",
                        justifyContent: "center",
                        backgroundColor: "coral",
                    }}
                >
                    <TextInput
                        style={{
                            textAlign: "center",
                            borderWidth: 1,
                            borderColor: "black",
                            margin: 40,
                        }}
                        placeholder="Activity"
                    />

                    <Text style={{ textAlign: "center" }}>
                        {formatTime(timer)}
                    </Text>
                    {timerOn ? (
                        <Button
                            onPress={stopTimer}
                            style={{
                                margin: 40,
                            }}
                        >
                            <Text style={{ color: "white" }}>Stop Timer</Text>
                        </Button>
                    ) : (
                        <Button
                            onPress={startTimer}
                            style={{
                                margin: 40,
                            }}
                        >
                            <Text style={{ color: "white" }}>Start Timer</Text>
                        </Button>
                    )}
                </View>

                <View
                    style={{
                        flex: 1,
                        textAlign: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "lightgreen",
                    }}
                >
                    <Button onPress={() => navigation.navigate("Calendar")}>
                        <Text style={{ color: "white" }}>Calendar</Text>
                    </Button>
                </View>
            </View>
        </NativeBaseProvider>
    );
};

export default HomeScreen;

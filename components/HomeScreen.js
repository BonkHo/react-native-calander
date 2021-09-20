import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";
import { Button } from "native-base";
import { NativeBaseProvider } from "native-base";
import Moment from "react-moment";
import "moment-timezone";
import moment from "moment";

const HomeScreen = ({ navigation }) => {
    const [timerOn, setTimerOn] = useState(false);
    const [timer, setTimer] = useState(0);

    const startTimer = () => {
        setTimerOn(false);
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
                            textAlign: "center",
                        }}
                    >
                        Current Time: {moment().format("h:mm a")}
                    </Text>
                </View>

                <View
                    style={{
                        flex: 1,
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

                    <Moment interval={30000}>
                        <Text></Text>
                    </Moment>

                    {timerOn ? (
                        <Button
                            onPress={startTimer}
                            style={{
                                margin: 40,
                            }}
                        >
                            <Text style={{ color: "white" }}>Stop Timer</Text>
                        </Button>
                    ) : (
                        <Button
                            onPress={() => setTimerOn(true)}
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

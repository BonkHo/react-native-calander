import React from "react";
import { Text, Alert } from "react-native";
import { Pressable } from "native-base";
import { NativeBaseProvider } from "native-base";
import moment from "moment";

const HomeScreen = ({ navigation }) => {
    return (
        <NativeBaseProvider>
            <Text
                style={{
                    textAlign: "center",
                }}
            >
                Current Time: {moment().format("h:mm a")}
            </Text>
            <Pressable
                onPress={() => navigation.navigate("Calander")}
                p={2}
                borderWidth={1}
                _light={{
                    borderColor: "dark.200",
                }}
                _dark={{
                    borderColor: "dark.600",
                }}
                style={{
                    textAlign: "center",
                    alignItems: "center",
                }}
            >
                <Text>Calander</Text>
            </Pressable>
        </NativeBaseProvider>
    );
};

export default HomeScreen;

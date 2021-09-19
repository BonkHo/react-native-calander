import React from "react";
import { Text, Alert } from "react-native";
import { Pressable } from "native-base";
import { NativeBaseProvider } from "native-base";

const HomeScreen = ({ navigation }) => {
    return (
        <NativeBaseProvider>
            <Text
                style={{
                    textAlign: "center",
                }}
            >
                Home Page
            </Text>
            <Pressable
                onPress={() => Alert.alert("hello")}
                p={2}
                borderWidth={1}
                _light={{
                    borderColor: "dark.200",
                }}
                _dark={{
                    borderColor: "dark.600",
                }}
            >
                <Text>Hello</Text>
            </Pressable>
        </NativeBaseProvider>
    );
};

export default HomeScreen;

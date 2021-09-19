import React from "react";
import { Text, View, Button } from "react-native";
import { Box } from "native-base";

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
            <Box></Box>
        </NativeBaseProvider>
    );
};

export default HomeScreen;

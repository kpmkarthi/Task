import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../auth/signIn";
import SignUp from "../auth/signUp";
import OtpVerify from "../auth/otpVerify";

const RootNavigation = () => {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"SignIn"} component={SignIn} />
                <Stack.Screen name={"SignUp"} component={SignUp} />
                <Stack.Screen name={"OtpVerification"} component={OtpVerify} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}
export default RootNavigation
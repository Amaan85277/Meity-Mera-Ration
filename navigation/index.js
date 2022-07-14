import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import OnboardingScreen from "../screens/OnboardingScreen";
import HomeScreen from "../screens/HomeScreen";
import RationScreen from "../screens/RationScreen";
import StatesScreen from "../screens/StatesScreen.js";
import StoresScreen from "../screens/StoresScreen";
import CriteriaScreen from "../screens/CriteriaScreen";
import SeedingScreen from "../screens/SeedingScreen";
import FeedbackScreen from "../screens/FeedbackScreen";

//RESULTS:
import RationResultScreen from "../screens/RationResultScreen";
import SeedingResultScreen from "../screens/SeedingResultScreen";
import CriteriaResultScreen from "../screens/CriteriaResultScreen";

const Stack = createNativeStackNavigator();

export default Navigation = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown : false}}>
                <Stack.Screen name="Onboard" component={OnboardingScreen}/>
                <Stack.Screen name="HomeScreen" component={HomeScreen}/>

                <Stack.Screen name="Ration" component={RationScreen}/>
                <Stack.Screen name="Store" component={StoresScreen}/>
                <Stack.Screen name="Criteria" component={CriteriaScreen}/>
                <Stack.Screen name="States" component={StatesScreen}/>
                <Stack.Screen name="Seeding" component={SeedingScreen}/>
                <Stack.Screen name="Feedback" component={FeedbackScreen}/>

                <Stack.Screen name="RationResult" component={RationResultScreen} />
                <Stack.Screen name="SeedingResult" component={SeedingResultScreen} />
                <Stack.Screen name="CriteriaResult" component={CriteriaResultScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
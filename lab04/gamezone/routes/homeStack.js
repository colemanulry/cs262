/* Home Stack file for Gamezone app, initializes stack in order to
progress through games */

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const screens = {
  /* Home Screen */
  Home: {
    screen: Home,
    navigationOptions: {
      title: "GameZone",
    },
  },
  /* Review Details Screen */
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: "Review Details",
    },
  },
};

/* Initialize Stack */
const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerStyle: { backgroundColor: "#ddd" } }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "GameZone",
          headerTitleStyle: { fontFamily: "nunito-bold" },
        }}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{
          title: "Review Details",
          headerTitleStyle: { fontFamily: "nunito-regular" },
        }}
      />
    </Stack.Navigator>
  );
}

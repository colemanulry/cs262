/* Coleman Ulry
   9-25-20
   CS262 - Lab 4 Gamezone
*/

import React, { useState } from "react";
import * as Font from "expo-font";
import Home from "./screens/home";
import About from "./screens/about";
import ReviewDetails from "./screens/reviewDetails";
import { AppLoading } from "expo";
import Navigator from "./routes/homeStack";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}

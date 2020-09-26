/* Review Details Screen file for Gamezone app, initializes review details screen */

import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ route, navigation }) {
  /* when button pressed, stack item popped, take you back one page */
  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    /* Display that item's review details, with button to take back to home screen*/
    <View style={globalStyles.container}>
      <Text>{route.params.title}</Text>
      <Text>{route.params.body}</Text>
      <Text>{route.params.rating}</Text>
      <Button title="Back to Home Screen" onPress={pressHandler}></Button>
    </View>
  );
}

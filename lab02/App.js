/* Coleman Ulry
   CS-262 Lab 2 */

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';

const App = () => {

  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState([]);
  const [count, setCount] = useState(0);
  const birthdayIncrement = () => {
    setBirthday(birthday.concat({ key: count.toString() }));
    setCount(oldCount => oldCount + 1);
  }


  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>

        <Text>Enter Name: </Text>
        <TextInput
          style={styles.input}
          placeholder='e.g. Bob Smith'
          onChangeText={(userName) => setName(userName)} />

        <Text>{name} is {count} years</Text>

      </View>

      <TouchableOpacity style={styles.buttonContainer}
        onPress={birthdayIncrement}><Text>Click when it's your birthday!</Text>
      </TouchableOpacity>

      <FlatList
        data={birthday}
        renderItem={({ item }) => (
          <Text>{item.key}</Text>
        )}>
      </FlatList>

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100
  },

  buttonContainer: {
    backgroundColor: "#00BFFF",
    alignItems: "center",
    padding: 8,
  },

  secondContainer: {
    padding: 12,
    alignItems: "center",
  },

  input: {
    borderWidth: 3,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },

  item: {
    paddingTop: 5,
    marginTop: 5,
    padding: 5,
  }
});

export default App;

import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Replika</Text>
      <Button style={styles.button} onPress={() => navigation.navigate('Component')} title="Component" />
      <Button style={styles.button} onPress={() => navigation.navigate('Image')} title="Image" />
      <Button style={styles.button} onPress={() => navigation.navigate('Counter')} title="Counter" />
      <Button style={styles.button} onPress={() => navigation.navigate('Color')} title="Color" />
      <Button style={styles.button} onPress={() => navigation.navigate('Square')} title="Square" />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginBottom: 10,
    textAlign: 'center'
  },
  button: {
    marginVertical: 10,
    padding: 20,
    marginTop: 10,
    textAlign: 'center'
  }
});

export default HomeScreen;

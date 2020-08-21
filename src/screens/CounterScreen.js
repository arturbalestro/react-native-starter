import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);
    return (
        <View>
            <Text style={styles.title}>Counter</Text>
            <Button onPress={() => { setCounter(counter + 1) }} title="increase" />
            <Button onPress={() => { setCounter(counter - 1) }} title="decrease" />
            <Text>Current count is: {counter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 45
    }
});

export default CounterScreen;
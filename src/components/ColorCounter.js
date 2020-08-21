import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
    return (
        <View>
            <Text style={styles.text}>{color}</Text>
            <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
            <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        marginTop: 10,
        textAlign: 'center'
    }
});

export default ColorCounter;
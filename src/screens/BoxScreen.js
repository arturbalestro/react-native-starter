import React from "react";
import { StyleSheet, View, Text } from "react-native";

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.text1Style}>Raja</Text>
            <Text style={styles.text2Style}>Sasha</Text>
            <Text style={styles.text3Style}>Sharon</Text>
            
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black',
        height: 200
    },
    text1Style: {
        borderWidth: 1,
        borderColor: 'red',
    },
    text2Style: {
        borderWidth: 1,
        borderColor: 'red',
        left: 10
    },
    text3Style: {
        borderWidth: 1,
        borderColor: 'red'
    }
});

export default BoxScreen;
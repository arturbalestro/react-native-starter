import React from "react";
import { Text, StyleSheet, View } from "react-native";

const TextScreen = () => {
    return (
        <View>
            <Text>Text Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderWidth: 1,
        fontWeight: 'bold',
        marginVertical: 50,
        padding: 20,
        textAlign: 'center',
        width: '100%'
    }
});

export default TextScreen;
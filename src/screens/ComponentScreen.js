import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
    const subtitle = <Text style={styles.subtitle}>This is a great way of practicing</Text>;

    return (
        <View>
            <Text style={styles.title}>Getting started with React Native</Text>
            {subtitle}
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 45
    },
    subtitle: {
        fontSize: 20,
        marginTop: 10
    }
});

export default ComponentScreen;
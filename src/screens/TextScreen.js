import React, {useState} from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const TextScreen = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View>
            <Text>Enter the name</Text>
            <TextInput style={styles.input} autoCapitalize="none" autoCorrect={false} value={name} onChangeText={(newValue) => setName(newValue)} />
            <Text>My name is {name}</Text>
            {name === 'Artur' ? <Text>Oh my god! You have the same name as me!</Text> : null}

            <View>
            <Text>Enter the password</Text>
            <TextInput style={styles.input} autoCapitalize="none" autoCorrect={false} value={password} onChangeText={(newValue) => setPassword(newValue)} />
            {password.length < 4 ? <Text>Password has less than 4 characters</Text> : null}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;
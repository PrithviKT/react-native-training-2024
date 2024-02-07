import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';

const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState('');

    const handleSignUp = () => {
        // Implement signup logic here
        console.log('Sign up with:', username, password);
    };

    const checkPasswordStrength = (value: any) => {
        // Implement password strength check logic here
        setPassword(value);
        // Example check: Minimum length of 6 characters
        if (value.length >= 6) {
            setPasswordStrength('Strong');
        } else {
            setPasswordStrength('Weak');
        }
    };

    return (
        <View style={styles.container}>
            <Input
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <Input
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={checkPasswordStrength}
            />
            <Input
                placeholder="Password Strength"
                value={passwordStrength}
                disabled
            />
            <Button title="Sign Up" onPress={handleSignUp} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SignUpScreen;
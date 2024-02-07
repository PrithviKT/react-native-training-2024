import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';

const WelcomeScreen = ({ navigation }: any) => {
    const handleLogout = () => {
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            <Text>Welcome</Text>
            <Button title="Logout" onPress={handleLogout} />
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

export default WelcomeScreen;
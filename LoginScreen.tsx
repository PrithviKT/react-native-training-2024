import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Text, Image } from 'react-native-elements';

const LoginScreen = ({ navigation }: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // Implement login logic here
    console.log('Login with:', username, password);
    if (username === "admin" && password === "admin") {
      handleReset();
      navigation.navigate('Welcome');
    } else {
      setErrorMessage('Invalid Username/Password');
    }
  };

  const handleSignUp = () => {
    handleReset();
    navigation.navigate('SignUp');
  }

  const handleReset = () => {
    setUsername('');
    setPassword('');
    setErrorMessage('');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./img/logo.png')} style={styles.logo} />
      <Input
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <Input
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.buttonContainer}>
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleLogin} />
        <Button title="Singup" onPress={handleSignUp} />
        <Button title="Reset" onPress={handleReset} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    gap: 5
  },
  errorMessage: {
    color: 'red',
    marginTop: 10
  },
  logo : {
    height: 50,
    width: 50
  }
});

export default LoginScreen;
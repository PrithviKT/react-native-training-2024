import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import WelcomeScreen from './WelcomeScreen';

const Stack = createStackNavigator();

const App = () => {
  // const insets = useSafeAreaInsets();
  return (
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: 'space-between',
    //     alignItems: 'center',

    //     // Paddings to handle safe area
    //     paddingTop: insets.top,
    //     paddingBottom: insets.bottom,
    //     paddingLeft: insets.left,
    //     paddingRight: insets.right,
    //   }}
    // >
    //   <Text>This is top text.</Text>
    //   <Text>This is bottom text.</Text>
    // </View>
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
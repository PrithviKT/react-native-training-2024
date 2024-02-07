import React, { createContext, useState, useContext, ReactNode } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Create a Context to manage global state
const CounterContext = React.createContext({
  count: 0,
  increment: () => { },
  decrement: () => { }
});

interface Props {
  children?: ReactNode
  // any props that come into the component
}

const CounterProvider = ({ children }: Props) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

const CounterApp = () => {
  const { count, increment, decrement } = useContext(CounterContext);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Counter: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={increment} />
        <Button title="Decrement" onPress={decrement} />
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
  counterText: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});

const App = () => {
  return (
    <CounterProvider>
      <CounterApp />
    </CounterProvider>
  );
};

export default App;
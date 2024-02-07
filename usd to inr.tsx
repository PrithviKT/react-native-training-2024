import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const App = () => {
  const [dollarAmount, setDollarAmount] = useState('');
  const [rupeeAmount, setRupeeAmount] = useState('');
  const [exchangeRate, setExchangeRate] = useState(0);

  useEffect(() => {
    // fetchExchangeRate();
    const rate = 83.06;
    setExchangeRate(rate);
  }, []);

  // const fetchExchangeRate = async () => {
  //   try {
  //     const response = await fetch('https://api.exchangeratesapi.io/latest?base=USD');
  //     const data = await response.json();
  //     console.log(data);
  //     const rate = data?.rates?.INR;
  //     setExchangeRate(rate);
  //   } catch (error) {
  //     console.error('Error fetching exchange rate:', error);
  //   }
  // };

  const handleTextChange = (text: any) => {
    // Regex to allow only positive float numbers
    const regex = /^[+]?\d*(?:[.]\d*)?$/;
    if (text !== null && text !== "" && !isNaN(text) && exchangeRate && regex.test(text)) {
      console.log('text value: ',text)
      const convertedRupee = parseFloat(text) * exchangeRate;
      setDollarAmount(text);
      setRupeeAmount(convertedRupee.toFixed(2)); // Round to 2 decimal places
    } else {
      setDollarAmount('');
      setRupeeAmount('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleTextChange}
        value={dollarAmount}
        keyboardType="numeric"
        placeholder="Enter Dollar Amount"
      />
      <Text style={styles.result}>Rupee Amount: {rupeeAmount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  result: {
    fontSize: 18,
  },
});

export default App;
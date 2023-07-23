import { StyleSheet, Text, View, Picker } from 'react-native';
import AppBar from './components/AppBar';
import Button from './components/Button';
import MyTextField from './components/MyTextField';
import { useState } from 'react';

export default function App() {
  const [value, setValue] = useState('');
  const [inputUnit, setInputUnit] = useState('km');
  const [outputUnit, setOutputUnit] = useState('miles');
  const [result, setResult] = useState('');

  const handleConvert = () => {
    let convertedValue;
    switch (inputUnit) {
      case 'km':
        if (outputUnit === 'miles') {
          convertedValue = parseFloat(value) / 1.609;
        } else if (outputUnit === 'm') {
          convertedValue = parseFloat(value) * 1000;
        }
        break;
      case 'kg':
        if (outputUnit === 'pounds') {
          convertedValue = parseFloat(value) * 2.205;
        }
        break;
      // Add more cases for other units
      default:
        break;
    }
    setResult(convertedValue.toFixed(2));
  };

  return (
    
    <View style={styles.container}>
      <AppBar title="Unit Converter" />
      <View style={styles.formContainer}>
        <MyTextField
          hintText="Enter Value"
          onChangeText={(text) => setValue(text)}
        />
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={inputUnit}
            onValueChange={(itemValue) => setInputUnit(itemValue)}
          >
            <Picker.Item label="Kilometers" value="km" />
            <Picker.Item label="Kilograms" value="kg" />
            {/* Add more items for other units */}
          </Picker>
          <Picker
            style={styles.picker}
            selectedValue={outputUnit}
            onValueChange={(itemValue) => setOutputUnit(itemValue)}
          >
            <Picker.Item label="Miles" value="miles" />
            <Picker.Item label="Meters" value="m" />
            <Picker.Item label="Pounds" value="pounds" />
            {/* Add more items for other units */}
          </Picker>
        </View>
        <Button title="Convert" onPress={handleConvert} />
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>
          {value} {inputUnit} is {result} {outputUnit}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  formContainer: {
    padding: 20,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  picker: {
    width: '48%',
    height: 40,
  },
  resultContainer: {
    padding: 20,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

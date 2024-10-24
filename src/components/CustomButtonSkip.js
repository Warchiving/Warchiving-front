import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CustomButtonSkip({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ECECEC',
    width:'100%',
    height:45,
    padding: 10,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent:'center',
    marginVertical:10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
  },
});

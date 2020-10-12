import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Button({children}) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 25,
    borderRadius: 30,
    backgroundColor: '#2A86FF',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

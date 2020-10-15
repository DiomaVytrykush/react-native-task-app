import React from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';

function CustomTextInput({onChangeText, children, required}) {
  return (
    <>
      <Text style={styles.text}>{children}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => onChangeText(text)}
        autoCorrect={false}
        required
      />
      {required && <Text> This field is required.</Text>}
    </>
  );
}
const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    color: 'grey',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
  },
});

export default CustomTextInput;

import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';

export default function InputField({icon, placeholder}) {
  return (
    <View style={styles.inputContainer}>
      {icon}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={'gray'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: 317,
    height: 56,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#E4DFDF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    gap: 10,
  },
  input: {
    flex: 1,
    color: 'black',
  },
});

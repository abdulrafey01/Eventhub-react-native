import {View, Text, StyleSheet, TextInput, Dimensions} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default function InputField({icon, placeholder}) {
  return (
    <View style={styles.inputContainer}>
      {icon}
      <TextInput
        style={[styles.input, {color: useTheme().colors.themeTextColor}]}
        placeholder={placeholder}
        placeholderTextColor={'gray'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: width * 0.85,
    height: height * 0.07,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#E4DFDF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.04,
    gap: width * 0.03,
  },
  input: {
    flex: 1,
    color: 'black',
  },
});

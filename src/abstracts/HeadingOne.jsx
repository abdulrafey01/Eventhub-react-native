import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default function HeadingOne({
  text,
  fontSize = width * 0.065,
  color,
  textAlign = 'left',
  family = 'AirbnbCereal_W_Md',
  style,
}) {
  return (
    <Text
      style={{
        ...styles.secondaryTextStyle,
        fontSize,
        color,
        textAlign,
        ...style,
        fontFamily: family === 'light' ? 'AirbnbCereal_W_Bk' : family,
      }}>
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  secondaryTextStyle: {
    fontFamily: 'AirbnbCereal_W_Md',
  },
});

import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function HeadingOne({
  text,
  fontSize = 19,
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

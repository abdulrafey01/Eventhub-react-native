import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function SimpleButton({
  width,
  height,
  color = '#5669FF',
  borderColor = '#5669FF',
  text,
  preIcon,
  postIcon,
}) {
  return (
    <View
      style={{
        ...styles.container,
        width,
        height,
        backgroundColor: color,
        borderRadius: 10,
        borderWidth: 1,
        borderColor,
      }}>
      <Text>{preIcon}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'space-between',
  },
});

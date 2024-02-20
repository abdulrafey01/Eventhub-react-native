import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import HeadingOne from './HeadingOne';

export default function GreenButton({text, style}) {
  return (
    <View style={{...styles.container, ...style}}>
      <HeadingOne text={text} color="white" fontSize={12} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: 72,
    height: 32,
    backgroundColor: '#00F8FF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

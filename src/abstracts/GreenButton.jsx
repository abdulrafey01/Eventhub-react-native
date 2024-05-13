import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import HeadingOne from './HeadingOne';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

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
    height: height * 0.04,
    backgroundColor: '#00F8FF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

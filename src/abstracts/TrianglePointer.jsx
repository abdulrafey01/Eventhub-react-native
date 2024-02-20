import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function TrianglePointer({style, color}) {
  return (
    <View
      style={{...styles.container, ...style, borderBottomColor: color}}></View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 5,
    height: 5,
    // backgroundColor: 'black',
    transform: [{rotate: '180deg'}],
    borderBottomColor: 'white',
    borderBottomWidth: 5,
    borderLeftColor: 'transparent',
    borderLeftWidth: 5,
    borderRightColor: 'transparent',
    borderRightWidth: 5,
    position: 'relative',
    right: 5,
  },
});

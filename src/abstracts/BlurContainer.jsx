import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function BlurContainer({width, height, style}) {
  return <View style={{...styles.container, width, height, ...style}}></View>;
}

const styles = StyleSheet.create({
  container: {
    // width: 36,
    // height: 36,
    borderRadius: 50,
    backgroundColor: 'white',
    opacity: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});

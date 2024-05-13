import {View, Text, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import {
  Directions,
  Gesture,
  GestureDetector,
} from 'react-native-gesture-handler';

import RangeThumb from '../../svgs/rangeThumb.svg';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: width * 0.04,
    alignItems: 'center',
  },
  line: {
    width: width * 0.7,
    height: height * 0.005,
    backgroundColor: '#E4DFDF',
  },
});
export default function CustomRangeSlider() {
  const pan = Gesture.Pan().onUpdate(() => {
    console.log('pan');
  });
  return (
    <View style={styles.container}>
      <GestureDetector gesture={pan}>
        <RangeThumb />
      </GestureDetector>
      <View style={styles.line} />
      <RangeThumb />
    </View>
  );
}

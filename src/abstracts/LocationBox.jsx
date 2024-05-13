import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import HeadingOne from './HeadingOne';
import TrianglePointer from './TrianglePointer';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
export default function LocationBox() {
  return (
    <View style={styles.container}>
      <View
        style={{flexDirection: 'row', gap: width * 0.03, alignItems: 'center'}}>
        <HeadingOne
          color={'white'}
          style={{opacity: 0.7}}
          text="Current Location"
          fontSize={width * 0.034}
        />
        <TrianglePointer color={'white'} />
      </View>
      <HeadingOne
        text="Faisalabad, Pakistan"
        fontSize={width * 0.035}
        color={'white'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

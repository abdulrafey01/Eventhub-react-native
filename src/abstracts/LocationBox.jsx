import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import HeadingOne from './HeadingOne';
import TrianglePointer from './TrianglePointer';

export default function LocationBox() {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
        <HeadingOne text="Current Location" fontSize={12} />
        <TrianglePointer color={'white'} />
      </View>
      <HeadingOne text="Faisalabad, Pakistan" fontSize={13} color={'white'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

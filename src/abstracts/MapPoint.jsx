import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function MapPoint() {
  return (
    <View style={styles.container}>
      <View style={styles.point}></View>
      <View style={styles.innerContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 42,
    height: 47,
    borderRadius: 10,
    backgroundColor: 'black',
    shadowColor: 'black',
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  point: {
    position: 'absolute',
    bottom: -5,
    transform: [{rotate: '45deg'}],
    borderRadius: 5,
    width: 20,
    height: 20,
    backgroundColor: 'black',
  },
  innerContainer: {
    height: 30,
    width: 30,
    borderRadius: 10,
    backgroundColor: 'green',
  },
});

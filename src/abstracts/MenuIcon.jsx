import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import React from 'react';

export default function MenuIcon({OnClick}) {
  return (
    <TouchableWithoutFeedback onPress={OnClick}>
      <View style={styles.container}>
        <View style={styles.firstLine}></View>
        <View style={styles.secondLine}></View>
        <View style={styles.firstLine}></View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 19.2,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  firstLine: {
    width: 24,
    height: 2.4,
    backgroundColor: 'white',
    borderRadius: 1.5,
  },
  secondLine: {
    width: 18,
    height: 2.4,
    backgroundColor: 'white',
    borderRadius: 1.5,
  },
});

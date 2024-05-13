import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import React from 'react';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
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
    width: width * 0.08,
    height: height * 0.025,
    // backgroundColor: 'red',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  firstLine: {
    width: width * 0.07,
    height: height * 0.0025,
    backgroundColor: 'white',
    borderRadius: 1.5,
  },
  secondLine: {
    width: width * 0.05,
    height: height * 0.0025,
    backgroundColor: 'white',
    borderRadius: 1.5,
  },
});

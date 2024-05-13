import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import Bell from '../svgs/bellicon.svg';
import BlurContainer from './BlurContainer';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
export default function BellIcon() {
  return (
    <View style={styles.container}>
      <Bell style={{position: 'absolute'}} />
      <BlurContainer width={width * 0.1} height={width * 0.1} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  round: {
    width: 36,
    height: 36,
    borderRadius: 100,
    backgroundColor: 'white',
    opacity: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});

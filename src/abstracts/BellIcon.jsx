import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Bell from '../svgs/bellicon.svg';
import BlurContainer from './BlurContainer';

export default function BellIcon() {
  return (
    <View style={styles.container}>
      <Bell style={{position: 'absolute'}} />
      <BlurContainer width={36} height={36} />
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

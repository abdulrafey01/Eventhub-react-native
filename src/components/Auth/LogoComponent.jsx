import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import EventHubIcon from '../../svgs/eventhublogo.svg';
export default function LogoComponent() {
  return (
    <View style={styles.logoContainer}>
      <EventHubIcon />
      <Text style={styles.logoTextStyle}>EventHub</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    gap: 10,
  },
  logoTextStyle: {
    color: 'black',
    fontSize: 35,
    fontFamily: 'AirbnbCereal_W_Bd',
  },
});

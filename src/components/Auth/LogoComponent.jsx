import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

import EventHubIcon from '../../svgs/eventhublogo.svg';
import {useTheme} from '@react-navigation/native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default function LogoComponent() {
  return (
    <View style={styles.logoContainer}>
      <EventHubIcon />
      <Text
        style={[
          styles.logoTextStyle,
          {color: useTheme().colors.themeTextColor},
        ]}>
        EventHub
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    gap: height * 0.015,
  },
  logoTextStyle: {
    color: 'black',
    fontSize: width * 0.09,
    fontFamily: 'AirbnbCereal_W_Bd',
  },
});

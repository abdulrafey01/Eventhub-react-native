import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import SplashLogo from '../svgs/splashlogo.svg';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('OnBoarding');
    }, 3000);
  }, []);

  return (
    <View style={styles.screen}>
      <StatusBar
        barStyle={'dark-content'}
        // translucent={true}
        backgroundColor="white"
      />
      {/* <LinearGradient
        start={{x: 0.5, y: 0}}
        end={{x: 0, y: 0}}
        colors={['rgba(197, 84, 146, 1)', 'rgba(236, 172, 173, 1)']}
        style={styles.gradient1}></LinearGradient> */}
      <SplashLogo />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient1: {
    width: 227,
    height: 209,
    borderRadius: 200,
    opacity: 0.2,
    position: 'absolute',
    top: -50,
    right: -100,
  },
});

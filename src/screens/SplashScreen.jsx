import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import SplashLogo from '../svgs/splashlogo.svg';
import {useTheme} from '@react-navigation/native';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('OnBoarding');
    }, 3000);
  }, []);

  const colors = useTheme().colors;
  return (
    <View style={[styles.screen, {backgroundColor: colors.themeColor}]}>
      <StatusBar
        barStyle={
          colors.themeColor === 'white' ? 'dark-content' : 'light-content'
        }
        // translucent={true}
        backgroundColor={colors.themeColor}
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

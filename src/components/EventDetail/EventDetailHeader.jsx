import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useEffect} from 'react';
import Backicon from '../../svgs/Back.svg';
import BackWhite from '../../svgs/backwhite.svg';
import {useTheme} from '@react-navigation/native';
import Scale from '../../../function/Scale';
import HeadingOne from '../../abstracts/HeadingOne';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
export default function EventDetailHeader({
  title,
  navigation,
  scrollValue,
  color = useTheme().colors.themeColor,
  darkHead,
}) {
  const headerSize = Scale(375, 375, 80);
  const styles = StyleSheet.create({
    container: {
      height: headerSize.HEIGHT,
      width: headerSize.WIDTH,
      paddingHorizontal: headerSize.WIDTH * 0.06,
      justifyContent: 'flex-end',
      backgroundColor: color,
    },
    sectionOne: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: headerSize.WIDTH * 0.03,
    },
    menu: {
      gap: headerSize.WIDTH * 0.007,
    },
    innerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });

  const animateStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollValue.value, [0, -110], [0, 1]),
    };
  });
  return (
    <>
      <Animated.View
        style={[
          styles.container,
          {
            backgroundColor:
              useTheme().colors.themeColor === 'white' ? 'white' : '#262626',
            position: 'absolute',
            top: 0,
          },
          animateStyles,
        ]}></Animated.View>
      <View style={[styles.container]}>
        <View style={styles.innerContainer}>
          <View style={styles.sectionOne}>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
              {darkHead ? <Backicon /> : <BackWhite />}
            </TouchableWithoutFeedback>
            <HeadingOne
              text={title}
              fontSize={headerSize.WIDTH * 0.065}
              color={darkHead ? 'black' : 'white'}
            />
          </View>
          <View style={styles.menu}>
            <View
              style={{
                height: headerSize.WIDTH * 0.01,
                width: headerSize.WIDTH * 0.01,
                backgroundColor: darkHead ? 'black' : 'white',
                borderRadius: 10,
              }}></View>
            <View
              style={{
                height: headerSize.WIDTH * 0.01,
                width: headerSize.WIDTH * 0.01,
                backgroundColor: darkHead ? 'black' : 'white',

                borderRadius: 10,
              }}></View>
            <View
              style={{
                height: headerSize.WIDTH * 0.01,
                width: headerSize.WIDTH * 0.01,
                backgroundColor: darkHead ? 'black' : 'white',

                borderRadius: 10,
              }}></View>
          </View>
        </View>
      </View>
    </>
  );
}

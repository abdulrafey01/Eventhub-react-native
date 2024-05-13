import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import Scale from './Scale';
import Backicon from '../svgs/Back.svg';
import BackWhite from '../svgs/backwhite.svg';
import HeadingOne from './HeadingOne';
import {useTheme} from '@react-navigation/native';
export default function HeaderComponent({
  title,
  navigation,
  color = useTheme().colors.themeColor,
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
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.sectionOne}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            {useTheme().colors.themeColor === 'white' ? (
              <Backicon />
            ) : (
              <BackWhite />
            )}
          </TouchableWithoutFeedback>
          <HeadingOne
            text={title}
            fontSize={headerSize.WIDTH * 0.065}
            color={useTheme().colors.themeTextColor}
          />
        </View>
        <View style={styles.menu}>
          <View
            style={{
              height: headerSize.WIDTH * 0.01,
              width: headerSize.WIDTH * 0.01,
              backgroundColor: useTheme().colors.themeTextColor,
              borderRadius: 10,
            }}></View>
          <View
            style={{
              height: headerSize.WIDTH * 0.01,
              width: headerSize.WIDTH * 0.01,
              backgroundColor: useTheme().colors.themeTextColor,
              borderRadius: 10,
            }}></View>
          <View
            style={{
              height: headerSize.WIDTH * 0.01,
              width: headerSize.WIDTH * 0.01,
              backgroundColor: useTheme().colors.themeTextColor,
              borderRadius: 10,
            }}></View>
        </View>
      </View>
    </View>
  );
}

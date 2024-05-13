import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import Calender from '../../svgs/calenderblue.svg';
import HeadingOne from '../../abstracts/HeadingOne';
import {useTheme} from '@react-navigation/native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    gap: width * 0.03,
  },
  IconContainer: {
    width: width * 0.13,
    height: width * 0.13,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blurContainer: {
    width: width * 0.14,
    height: width * 0.14,
    position: 'absolute',

    borderRadius: 10,
    backgroundColor: '#5669FF',
    opacity: 0.2,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
export default function EventDetailCard({icon, title, subTitle}) {
  return (
    <View style={styles.container}>
      <View style={styles.IconContainer}>
        <View style={styles.blurContainer}></View>
        {icon}
      </View>
      <View style={styles.textContainer}>
        <HeadingOne
          text={title}
          fontSize={width * 0.043}
          color={useTheme().colors.themeTextColor}
        />
        <HeadingOne text={subTitle} fontSize={width * 0.03} color={'gray'} />
      </View>
    </View>
  );
}

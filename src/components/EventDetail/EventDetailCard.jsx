import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Calender from '../../svgs/calenderblue.svg';
import HeadingOne from '../../abstracts/HeadingOne';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    gap: 10,
  },
  IconContainer: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blurContainer: {
    width: 48,
    height: 48,
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
        <HeadingOne text={title} fontSize={16} color={'black'} />
        <HeadingOne text={subTitle} fontSize={12} color={'gray'} />
      </View>
    </View>
  );
}

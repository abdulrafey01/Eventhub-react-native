import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import HeadingOne from './HeadingOne';

export default function OptionBox({
  color,
  text,
  icon,
  width,
  height = 39,
  fontSize = 15,
}) {
  return (
    <View style={{...styles.container, backgroundColor: color, width, height}}>
      {icon}
      <HeadingOne
        text={text}
        fontSize={fontSize}
        color={'white'}
        family="light"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // minWidth: 107,
    height: 39,
    backgroundColor: '#F0635A',
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
});

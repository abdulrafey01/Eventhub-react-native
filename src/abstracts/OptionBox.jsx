import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import HeadingOne from './HeadingOne';

const heightScreen = Dimensions.get('window').height;
const widthScreen = Dimensions.get('window').width;

export default function OptionBox({
  color,
  text,
  icon,
  width,
  height = heightScreen * 0.05,
  fontSize = widthScreen * 0.04,
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
    gap: widthScreen * 0.03,
  },
});

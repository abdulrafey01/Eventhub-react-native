import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import React, {useEffect} from 'react';

import ArrowIcon from '../svgs/arrowicon.svg';
export default function PurpleButton({onClick, text, type, style}) {
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={[styles.buttonStyle, style]}>
        <Text style={styles.buttonText}>{text}</Text>
        <ArrowIcon style={styles.btnIcon} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: 271,
    height: 58,
    backgroundColor: '#5669FF',
    alignSelf: 'center',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'AirbnbCereal_W_Bk',
    fontSize: 16,
    color: 'white',
  },
  btnIcon: {
    position: 'absolute',
    right: 15,
  },
});

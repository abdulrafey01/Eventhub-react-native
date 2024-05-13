import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import React, {useEffect} from 'react';

import ArrowIcon from '../svgs/arrowicon.svg';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
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
    width: width * 0.75,
    height: height * 0.08,
    backgroundColor: '#5669FF',
    alignSelf: 'center',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'AirbnbCereal_W_Bk',
    fontSize: width * 0.045,
    color: 'white',
  },
  btnIcon: {
    position: 'absolute',
    right: width * 0.035,
  },
});

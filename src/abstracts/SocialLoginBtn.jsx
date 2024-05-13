import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default function SocialLoginBtn({icon, text}) {
  return (
    <View style={styles.container}>
      {icon}
      <Text style={styles.btnText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.75,
    height: height * 0.075,
    flexDirection: 'row',
    gap: width * 0.05,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    elevation: 5,
    borderRadius: 15,
  },
  btnText: {
    fontFamily: 'AirbnbCereal_W_Bk',
    color: 'black',
  },
});

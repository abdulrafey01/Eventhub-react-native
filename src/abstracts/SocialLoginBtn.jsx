import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

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
    width: 273,
    height: 56,
    flexDirection: 'row',
    gap: 20,
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

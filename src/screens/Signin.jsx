import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import LogoComponent from '../components/Auth/LogoComponent';
import FormComponent from '../components/Auth/FormComponent';
import FooterComponent from '../components/Auth/FooterComponent';
export default function Signin({navigation}) {
  return (
    <View style={styles.screen}>
      <LogoComponent />
      <FormComponent navigation={navigation} />
      <FooterComponent navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },
});

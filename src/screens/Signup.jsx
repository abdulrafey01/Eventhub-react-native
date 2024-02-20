import {View, StyleSheet} from 'react-native';
import React from 'react';
import FormComponent from '../components/Auth/FormComponent';
import FooterComponent from '../components/Auth/FooterComponent';

export default function Signup({navigation}) {
  return (
    <View style={styles.screen}>
      <FormComponent navigation={navigation} type="Signup" />
      <FooterComponent navigation={navigation} type="Signup" />
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

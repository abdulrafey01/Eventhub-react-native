import {
  View,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React from 'react';
import FormComponent from '../components/Auth/FormComponent';
import FooterComponent from '../components/Auth/FooterComponent';
import {useTheme} from '@react-navigation/native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default function Signup({navigation}) {
  return (
    <View
      style={[styles.screen, {backgroundColor: useTheme().colors.themeColor}]}>
      <View
        style={[
          styles.screen,
          {backgroundColor: useTheme().colors.themeColor},
        ]}>
        <FormComponent navigation={navigation} type="Signup" />
        <FooterComponent navigation={navigation} type="Signup" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // marginTop: height * 0.06,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    gap: height * 0.05,
  },
});

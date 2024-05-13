import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Dimensions,
  ScrollView,
} from 'react-native';
import LogoComponent from '../components/Auth/LogoComponent';
import FormComponent from '../components/Auth/FormComponent';
import FooterComponent from '../components/Auth/FooterComponent';
import {useTheme} from '@react-navigation/native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default function Signin({navigation}) {
  const colors = useTheme().colors;
  return (
    <View style={[styles.screen, {backgroundColor: colors.themeColor}]}>
      <View style={[styles.screen, {backgroundColor: colors.themeColor}]}>
        <LogoComponent />
        <FormComponent navigation={navigation} />
        <FooterComponent navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    gap: height * 0.04,
  },
});

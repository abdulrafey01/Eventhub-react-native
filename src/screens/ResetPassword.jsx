import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import PurpleButton from '../abstracts/PurpleArrowButton';
import InputField from '../abstracts/InputField';
import MsgIcon from '../svgs/Message.svg';
import {useTheme} from '@react-navigation/native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default function ResetPassword({navigation}) {
  return (
    <View
      style={[styles.screen, {backgroundColor: useTheme().colors.themeColor}]}>
      <View style={styles.container}>
        <Text
          style={[
            styles.secondaryTextStyle,
            {color: useTheme().colors.themeTextColor},
          ]}>
          Reset Password
        </Text>
        <View>
          <Text
            style={[
              styles.resetText,
              {color: useTheme().colors.themeTextColor},
            ]}>
            Please enter your email address to
          </Text>
          <Text
            style={{
              ...styles.resetText,
              marginBottom: 10,
              color: useTheme().colors.themeTextColor,
            }}>
            {' '}
            request a password reset
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <InputField icon={<MsgIcon />} placeholder={'abc@gmail.com'} />
        </View>
        <PurpleButton
          text={'Send'}
          onClick={() => navigation.navigate('Home')}
        />
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
    // gap: 30,
  },
  container: {
    gap: height * 0.015,
  },
  secondaryTextStyle: {
    color: 'black',
    fontSize: width * 0.066,
    fontFamily: 'AirbnbCereal_W_Md',
  },

  resetText: {
    color: 'black',
    fontFamily: 'AirbnbCereal_W_Bk',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: height * 0.03,
  },
});

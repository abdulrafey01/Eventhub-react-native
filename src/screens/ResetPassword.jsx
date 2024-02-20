import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import PurpleButton from '../abstracts/PurpleArrowButton';
import InputField from '../abstracts/InputField';
import MsgIcon from '../svgs/Message.svg';
export default function ResetPassword({navigation}) {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.secondaryTextStyle}>Reset Password</Text>
        <View>
          <Text style={styles.resetText}>
            Please enter your email address to
          </Text>
          <Text style={{...styles.resetText, marginBottom: 10}}>
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
    gap: 30,
  },
  container: {
    gap: 10,
  },
  secondaryTextStyle: {
    color: 'black',
    fontSize: 24,
    fontFamily: 'AirbnbCereal_W_Md',
  },

  resetText: {
    color: 'black',
    fontFamily: 'AirbnbCereal_W_Bk',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  codeBox: {
    width: 55,
    height: 55,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E4DFDF',
    paddingHorizontal: 20,
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  footerText: {
    color: 'black',
    fontFamily: 'AirbnbCereal_W_Bk',
    alignSelf: 'center',
    marginTop: 10,
  },
});

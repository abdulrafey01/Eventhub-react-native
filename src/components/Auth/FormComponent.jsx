import {
  View,
  Text,
  StyleSheet,
  Switch,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React from 'react';
import InputField from '../../abstracts/InputField';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

import MsgIcon from '../../svgs/Message.svg';
import PwdIcon from '../../svgs/Password.svg';
import PurpleButton from '../../abstracts/PurpleArrowButton';

import ProfileIcon from '../../svgs/Profile.svg';
import {useTheme} from '@react-navigation/native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default function FormComponent({navigation, type}) {
  const [isEnabled, setIsEnabled] = React.useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };
  return (
    <View style={styles.formContainer}>
      <Text
        style={[
          styles.secondaryTextStyle,
          {color: useTheme().colors.themeTextColor},
        ]}>
        {type === 'Signup' ? 'Sign Up' : 'Sign In'}
      </Text>
      {type === 'Signup' && (
        <InputField icon={<ProfileIcon />} placeholder={'Full name'} />
      )}

      <InputField icon={<MsgIcon />} placeholder={'abc@gmail.com'} />
      <InputField icon={<PwdIcon />} placeholder={'Your Password'} />

      {type === 'Signup' ? (
        <InputField icon={<PwdIcon />} placeholder={'Confirm Password'} />
      ) : (
        <View style={styles.textRowContainer}>
          <View style={styles.rememberMeContainer}>
            <View style={styles.switchBackground}>
              <Switch
                thumbColor={'white'}
                trackColor={isEnabled ? {true: '#5669FF'} : {false: '#5669FF'}}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            <Text
              style={[
                styles.rememberMeText,
                {color: useTheme().colors.themeTextColor},
              ]}>
              Remember Me
            </Text>
          </View>
          <View>
            <Text
              style={[
                styles.forgotPasswordText,
                {color: useTheme().colors.themeTextColor},
              ]}>
              Forgot Password?
            </Text>
          </View>
        </View>
      )}
      <PurpleButton
        type={type}
        // navigation={navigation}
        onClick={
          type === 'Signup'
            ? () => navigation.navigate('Verify')
            : () => navigation.navigate('Signup')
        }
        text={type === 'Signup' ? 'SIGN UP' : 'SIGN IN'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    gap: height * 0.025,
    // width: '100%',
  },
  secondaryTextStyle: {
    color: 'black',
    fontSize: width * 0.065,
    fontFamily: 'AirbnbCereal_W_Md',
  },
  textRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: height * 0.02,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.03,
  },
  switchBackground: {
    backgroundColor: '#5669FF',
    borderRadius: 20,
  },
  rememberMeText: {color: 'black', fontFamily: 'AirbnbCereal_W_Bk'},
  forgotPasswordText: {color: 'black', fontFamily: 'AirbnbCereal_W_Bk'},
});

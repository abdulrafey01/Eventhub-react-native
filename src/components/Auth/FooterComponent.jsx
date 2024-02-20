import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import React from 'react';

import SocialLoginBtn from '../../abstracts/SocialLoginBtn';

import GoogleIcon from '../../svgs/googleicon.svg';
import FbIcon from '../../svgs/fbicon.svg';

export default function FooterComponent({navigation, type}) {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.orText}>OR</Text>
      <SocialLoginBtn icon={<GoogleIcon />} text={'Login with Google'} />
      <SocialLoginBtn icon={<FbIcon />} text={'Login with Facebook'} />
      <Text style={styles.footerText}>
        {type === 'Signup' ? (
          <>
            <Text>Already have an account? </Text>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Signin')}>
              <Text style={{color: '#5669FF'}}> Sign In</Text>
            </TouchableWithoutFeedback>
          </>
        ) : (
          <>
            <Text>Don't have an account? </Text>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Signup')}>
              <Text style={{color: '#5669FF'}}> Sign Up</Text>
            </TouchableWithoutFeedback>
          </>
        )}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  orText: {color: 'gray', fontFamily: 'AirbnbCereal_W_Bk'},
  footerText: {color: 'black', fontFamily: 'AirbnbCereal_W_Bk', marginTop: 10},
});

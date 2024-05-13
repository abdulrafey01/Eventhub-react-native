import {View, Text, StyleSheet, TextInput, Dimensions} from 'react-native';
import React from 'react';
import PurpleButton from '../abstracts/PurpleArrowButton';
import {useTheme} from '@react-navigation/native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default function Verification({navigation}) {
  return (
    <View
      style={[styles.screen, {backgroundColor: useTheme().colors.themeColor}]}>
      <View style={styles.container}>
        <Text
          style={[
            styles.secondaryTextStyle,
            {color: useTheme().colors.themeTextColor},
          ]}>
          Verification
        </Text>
        <View>
          <Text
            style={[
              styles.verificationText,
              {color: useTheme().colors.themeTextColor},
            ]}>
            We've send you the verification
          </Text>
          <Text
            style={{
              ...styles.verificationText,
              marginBottom: 10,
              color: useTheme().colors.themeTextColor,
            }}>
            {' '}
            code on +1 2620 0323 7631
          </Text>
        </View>
        <View style={styles.codeBoxesContainer}>
          <TextInput
            keyboardType="numeric"
            style={[styles.codeBox, {color: useTheme().colors.themeTextColor}]}
          />
          <TextInput
            keyboardType="numeric"
            style={[styles.codeBox, {color: useTheme().colors.themeTextColor}]}
          />
          <TextInput
            keyboardType="numeric"
            style={[styles.codeBox, {color: useTheme().colors.themeTextColor}]}
          />
          <TextInput
            keyboardType="numeric"
            style={[styles.codeBox, {color: useTheme().colors.themeTextColor}]}
          />
        </View>
        <PurpleButton
          text={'Continue'}
          onClick={() => navigation.navigate('ResetPass')}
        />
        <Text
          style={[
            styles.footerText,
            {color: useTheme().colors.themeTextColor},
          ]}>
          Re-send code in <Text style={{color: '#5669FF'}}>0:20</Text>
        </Text>
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
  },
  container: {
    gap: height * 0.03,
  },
  secondaryTextStyle: {
    color: 'black',
    fontSize: width * 0.066,
    fontFamily: 'AirbnbCereal_W_Md',
  },

  verificationText: {
    color: 'black',
    fontFamily: 'AirbnbCereal_W_Bk',
  },
  codeBoxesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: height * 0.02,
  },
  codeBox: {
    width: width * 0.15,
    height: height * 0.07,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E4DFDF',
    paddingHorizontal: width * 0.04,
    color: 'black',
    fontSize: width * 0.06,
    fontWeight: 'bold',
  },
  footerText: {
    color: 'black',
    fontFamily: 'AirbnbCereal_W_Bk',
    alignSelf: 'center',
    marginTop: height * 0.015,
  },
});

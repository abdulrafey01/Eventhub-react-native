import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import PurpleButton from '../abstracts/PurpleArrowButton';

export default function Verification({navigation}) {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.secondaryTextStyle}>Verification</Text>
        <View>
          <Text style={styles.verificationText}>
            We've send you the verification
          </Text>
          <Text style={{...styles.verificationText, marginBottom: 10}}>
            {' '}
            code on +1 2620 0323 7631
          </Text>
        </View>
        <View style={styles.codeBoxesContainer}>
          <TextInput keyboardType="numeric" style={styles.codeBox} />
          <TextInput keyboardType="numeric" style={styles.codeBox} />
          <TextInput keyboardType="numeric" style={styles.codeBox} />
          <TextInput keyboardType="numeric" style={styles.codeBox} />
        </View>
        <PurpleButton
          text={'Continue'}
          onClick={() => navigation.navigate('ResetPass')}
        />
        <Text style={styles.footerText}>
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

  verificationText: {
    color: 'black',
    fontFamily: 'AirbnbCereal_W_Bk',
  },
  codeBoxesContainer: {
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

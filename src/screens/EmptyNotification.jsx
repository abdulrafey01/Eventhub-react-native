import {
  Dimensions,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import HeaderComponent from '../abstracts/HeaderComponent';
import EmptyNotify from '../svgs/emptynotify.svg';
import HeadingOne from '../abstracts/HeadingOne';
import {useTheme} from '@react-navigation/native';
import Scale from '../../function/Scale';

const screenSize = Scale(375, 375, 812);
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: screenSize.WIDTH * 0.06,
    gap: screenSize.HEIGHT * 0.014,
  },
  shadow: {
    shadowColor: 'black',
    elevation: 15,
    opacity: 0.2,
    backgroundColor: 'white',
    borderRadius: 100,
    position: 'absolute',
    width: screenSize.WIDTH * 0.4,
    height: screenSize.WIDTH * 0.4,
    top: screenSize.HEIGHT * 0.055,
    left: screenSize.WIDTH * 0.05,
  },
});

export default function EmptyNotification({navigation}) {
  const height = Dimensions.get('window').height;
  const width = Dimensions.get('window').width;
  console.log(screenSize.WIDTH, screenSize.HEIGHT);
  console.log(width, height);
  return (
    <View
      style={[styles.screen, {backgroundColor: useTheme().colors.themeColor}]}>
      <HeaderComponent navigation={navigation} title={'Notification'} />
      <StatusBar
        barStyle={
          useTheme().colors.themeColor === 'white'
            ? 'dark-content'
            : 'light-content'
        }
      />
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('Notification');
          }}>
          <View>
            <View
              style={[
                styles.shadow,
                {
                  display:
                    useTheme().colors.themeTextColor === 'white'
                      ? 'none'
                      : 'flex',
                },
              ]}></View>
            <EmptyNotify />
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.textContainer}>
          <HeadingOne
            fontSize={screenSize.WIDTH * 0.05}
            text={'No Notifications!'}
            color={
              useTheme().colors.themeTextColor === 'white' ? 'white' : '#344B67'
            }
          />
          <HeadingOne
            fontSize={screenSize.WIDTH * 0.044}
            text={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor'
            }
            color={'gray'}
            family="AirbnbCereal_W_Lt"
            style={{textAlign: 'center'}}
          />
        </View>
      </View>
    </View>
  );
}

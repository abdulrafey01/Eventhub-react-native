import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import HeadingOne from '../abstracts/HeadingOne';
import SimpleButton2 from '../components/MyProfile/SimpleButton2';

import EditPencil from '../svgs/editpencil.svg';
import OptionBox from '../abstracts/OptionBox';
import ProfileTopSection from '../components/MyProfile/ProfileTopSection';
import {useTheme} from '@react-navigation/native';
import HeaderComponent from '../abstracts/HeaderComponent';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',

    gap: height * 0.025,
  },

  midContainer: {
    paddingHorizontal: width * 0.06,
    marginTop: height * 0.02,
    gap: height * 0.025,
  },
  bottomContainer: {
    paddingHorizontal: width * 0.06,
    marginTop: height * 0.02,
    gap: height * 0.025,
  },
  changeBtn: {
    width: width * 0.25,
    height: height * 0.04,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    zIndex: 1,
  },
  blurContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',

    borderRadius: 14,
    backgroundColor: '#5669FF',
    opacity: 0.2,
  },
});
export default function MyProfile({navigation}) {
  const [showFullText, setShowFullText] = useState(false);

  return (
    <View
      style={[styles.screen, {backgroundColor: useTheme().colors.themeColor}]}>
      <StatusBar
        barStyle={
          useTheme().colors.themeColor === 'white'
            ? 'dark-content'
            : 'light-content'
        }
      />
      <HeaderComponent navigation={navigation} />
      <ProfileTopSection
        name="Gokberk Demirci"
        avatar={require('../assets/pngs/avatar.png')}
      />
      <View style={styles.midContainer}>
        <HeadingOne
          text="About Me"
          fontSize={width * 0.05}
          color={useTheme().colors.themeTextColor}
        />
        {showFullText ? (
          <>
            <Text
              style={{
                fontSize: width * 0.045,
                fontFamily: 'AirbnbCereal_W_Bk',
                width: width * 0.9,
                color: useTheme().colors.themeTextColor,
              }}>
              lorem ipsum dolor sit amet consectetur adipisicing elit
              adipisicing elit lorem ipsum dolor sit amet consectetur
              adipisicing elit adipisicing elit Full Text{' '}
              <TouchableWithoutFeedback
                onPress={() => {
                  setShowFullText(!showFullText);
                }}>
                <Text
                  style={{
                    color: '#5669FF',
                    color: '#5669FF',
                    fontFamily: 'AirbnbCereal_W_Bk',
                    fontSize: width * 0.045,
                  }}>
                  {' '}
                  Wrap
                </Text>
              </TouchableWithoutFeedback>
            </Text>
          </>
        ) : (
          <>
            <Text
              style={{
                fontSize: width * 0.045,
                color: useTheme().colors.themeTextColor,
                fontFamily: 'AirbnbCereal_W_Bk',
                width: width * 0.9,
              }}>
              {' '}
              lorem ipsum dolor sit amet consectetur adipisicing elit
              adipisicing elit lorem ipsum dolor sit amet consectetur
              adipisicing elit adipisicing elit{' '}
              <TouchableWithoutFeedback
                onPress={() => {
                  setShowFullText(!showFullText);
                }}>
                <Text
                  style={{
                    color: '#5669FF',
                    fontFamily: 'AirbnbCereal_W_Bk',
                    fontSize: width * 0.045,
                  }}>
                  {' '}
                  Read More
                </Text>
              </TouchableWithoutFeedback>
            </Text>
          </>
        )}
      </View>
      <View style={styles.bottomContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <HeadingOne
            text="Interest"
            fontSize={18}
            color={useTheme().colors.themeTextColor}
          />
          <View style={styles.changeBtn}>
            <View style={styles.blurContainer}></View>
            <View style={{flexDirection: 'row', gap: 5}}>
              <EditPencil />
              <HeadingOne text="CHANGE" fontSize={10} color="#5669FF" />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            columnGap: width * 0.02,
            rowGap: height * 0.015,
            flexWrap: 'wrap',
          }}>
          <OptionBox
            text={'Games Online'}
            color={'#6B7AED'}
            fontSize={width * 0.035}
            width={width * 0.3}
            height={height * 0.042}
          />
          <OptionBox
            text={'Concert'}
            color={'#EE544A'}
            fontSize={width * 0.035}
            width={width * 0.22}
            height={height * 0.042}
          />
          <OptionBox
            text={'Music'}
            color={'#EE544A'}
            fontSize={width * 0.035}
            width={width * 0.2}
            height={height * 0.042}
          />
          <OptionBox
            text={'Art'}
            color={'#7D67EE'}
            fontSize={width * 0.035}
            width={width * 0.16}
            height={height * 0.042}
          />
          <OptionBox
            text={'Movie'}
            color={'#29D697'}
            fontSize={width * 0.035}
            width={width * 0.2}
            height={height * 0.042}
          />
          <OptionBox
            text={'Others'}
            color={'#39D1F2'}
            fontSize={width * 0.035}
            width={width * 0.2}
            height={height * 0.042}
          />
        </View>
      </View>
    </View>
  );
}

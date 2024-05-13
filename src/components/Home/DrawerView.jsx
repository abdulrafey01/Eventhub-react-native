import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import React from 'react';

import SmallProfileIcon from '../../svgs/profileicon.svg';
import SmallMessageIcon from '../../svgs/smallmessage.svg';
import SmallCalenderIcon from '../../svgs/smallcalender.svg';
import SmallBookmarkIcon from '../../svgs/smallbookmark.svg';
import SmallContactusIcon from '../../svgs/smallcontactus.svg';
import SmallSettingIcon from '../../svgs/smallsetting.svg';
import SmallFaqIcon from '../../svgs/smallfaq.svg';
import SmallSignoutIcon from '../../svgs/smallsignout.svg';
import Crown from '../../svgs/crown.svg';
import HeadingOne from '../../abstracts/HeadingOne';
import {useNavigation, useTheme} from '@react-navigation/native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function DrawerView({drawer}) {
  const navigation = useNavigation();
  return (
    <View
      style={[styles.screen, {backgroundColor: useTheme().colors.themeColor}]}>
      <View style={{gap: 10}}>
        <Image
          style={styles.avatarStyle}
          source={require('../../assets/pngs/avatar.png')}
        />
        <HeadingOne
          text="Gokberk Demirci"
          fontSize={19}
          color={useTheme().colors.themeTextColor}
        />
      </View>
      <View style={styles.menuContainer}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('MyProfile');
            drawer.current.closeDrawer();
          }}>
          <View style={styles.singleMenuContainer}>
            <SmallProfileIcon />
            <Text
              style={[
                styles.tertiaryTextStyle,
                {color: useTheme().colors.themeTextColor},
              ]}>
              My Profile
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('EmptyNotification');

            drawer.current.closeDrawer();
          }}>
          <View style={styles.singleMenuContainer}>
            <SmallMessageIcon />
            <Text
              style={[
                styles.tertiaryTextStyle,
                {color: useTheme().colors.themeTextColor},
              ]}>
              Message
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.singleMenuContainer}>
          <SmallCalenderIcon />
          <Text
            style={[
              styles.tertiaryTextStyle,
              {color: useTheme().colors.themeTextColor},
            ]}>
            Calender
          </Text>
        </View>
        <View style={styles.singleMenuContainer}>
          <SmallBookmarkIcon />
          <Text
            style={[
              styles.tertiaryTextStyle,
              {color: useTheme().colors.themeTextColor},
            ]}>
            Bookmark
          </Text>
        </View>
        <View style={styles.singleMenuContainer}>
          <SmallContactusIcon />
          <Text
            style={[
              styles.tertiaryTextStyle,
              {color: useTheme().colors.themeTextColor},
            ]}>
            Contact Us
          </Text>
        </View>
        <View style={styles.singleMenuContainer}>
          <SmallSettingIcon />
          <Text
            style={[
              styles.tertiaryTextStyle,
              {color: useTheme().colors.themeTextColor},
            ]}>
            Settings
          </Text>
        </View>
        <View style={styles.singleMenuContainer}>
          <SmallFaqIcon />
          <Text
            style={[
              styles.tertiaryTextStyle,
              {color: useTheme().colors.themeTextColor},
            ]}>
            Helps & FAQs
          </Text>
        </View>
        <View style={styles.singleMenuContainer}>
          <SmallSignoutIcon />
          <Text
            style={[
              styles.tertiaryTextStyle,
              {color: useTheme().colors.themeTextColor},
            ]}>
            Sign Out
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Crown />
        <Text style={styles.upgradeTextStyle}>Upgrade Pro</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: height * 0.07,
    paddingLeft: width * 0.075,
  },

  avatarStyle: {
    width: width * 0.17,
    height: width * 0.17,
    borderRadius: 50,
  },
  menuContainer: {
    gap: height * 0.025,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  singleMenuContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: width * 0.03,
  },
  secondaryTextStyle: {
    color: 'black',
    fontSize: width * 0.037,
    fontFamily: 'AirbnbCereal_W_Md',
  },
  tertiaryTextStyle: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'AirbnbCereal_W_Bk',
  },
  buttonContainer: {
    marginTop: height * 0.06,
    width: width * 0.45,
    height: height * 0.06,
    backgroundColor: 'rgba(0, 248, 255, 0.2)',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: width * 0.03,
  },
  upgradeTextStyle: {
    color: '#00F8FF',
  },
});

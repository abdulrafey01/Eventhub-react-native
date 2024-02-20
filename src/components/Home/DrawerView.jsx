import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
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

export default function DrawerView({navigation}) {
  return (
    <View style={styles.screen}>
      <View style={{gap: 10}}>
        <Image
          style={styles.avatarStyle}
          source={require('../../assets/pngs/avatar.png')}
        />
        <HeadingOne text="Gokberk Demirci" fontSize={19} color="black" />
      </View>
      <View style={styles.menuContainer}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('MyProfile');
          }}>
          <View style={styles.singleMenuContainer}>
            <SmallProfileIcon />
            <Text style={styles.tertiaryTextStyle}>My Profile</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.singleMenuContainer}>
          <SmallMessageIcon />
          <Text style={styles.tertiaryTextStyle}>Message</Text>
        </View>
        <View style={styles.singleMenuContainer}>
          <SmallCalenderIcon />
          <Text style={styles.tertiaryTextStyle}>Calender</Text>
        </View>
        <View style={styles.singleMenuContainer}>
          <SmallBookmarkIcon />
          <Text style={styles.tertiaryTextStyle}>Bookmark</Text>
        </View>
        <View style={styles.singleMenuContainer}>
          <SmallContactusIcon />
          <Text style={styles.tertiaryTextStyle}>Contact Us</Text>
        </View>
        <View style={styles.singleMenuContainer}>
          <SmallSettingIcon />
          <Text style={styles.tertiaryTextStyle}>Settings</Text>
        </View>
        <View style={styles.singleMenuContainer}>
          <SmallFaqIcon />
          <Text style={styles.tertiaryTextStyle}>Helps & FAQs</Text>
        </View>
        <View style={styles.singleMenuContainer}>
          <SmallSignoutIcon />
          <Text style={styles.tertiaryTextStyle}>Sign Out</Text>
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
    gap: 50,
    paddingLeft: 30,
  },

  avatarStyle: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  menuContainer: {
    gap: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  singleMenuContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
  },
  secondaryTextStyle: {
    color: 'black',
    fontSize: 19,
    fontFamily: 'AirbnbCereal_W_Md',
  },
  tertiaryTextStyle: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'AirbnbCereal_W_Bk',
  },
  buttonContainer: {
    marginTop: 50,
    width: 150,
    height: 46,
    backgroundColor: 'rgba(0, 248, 255, 0.2)',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  upgradeTextStyle: {
    color: '#00F8FF',
  },
});

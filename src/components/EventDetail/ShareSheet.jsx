import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import React from 'react';
import HeadingOne from '../../abstracts/HeadingOne';
import {useTheme} from '@react-navigation/native';
import CopyLink from '../../svgs/copylink.svg';
import Whatsapp from '../../svgs/whatsapp.svg';
import Facebook from '../../svgs/facebook.svg';
import Messenger from '../../svgs/messenger.svg';
import Twitter from '../../svgs/twitter.svg';
import Instagram from '../../svgs/instagram.svg';
import Skype from '../../svgs/skype.svg';
import Message from '../../svgs/messageshareicon.svg';
import Scale from '../../../function/Scale';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import FollowPerson from '../Notification/FollowPerson';
import CancelBtn from './CancelBtn';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const cancelbtnSize = Scale(375, 271, 58);
const styles = StyleSheet.create({
  container: {
    gap: height * 0.02,
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.02,
    flex: 1,
  },
  blurContainer: {
    width: width * 0.12,
    height: width * 0.12,
    // position: 'absolute',

    borderRadius: 10,
    backgroundColor: '#EFE9E9',
    // bottom: height * 0.035,
    opacity: 0.8,
  },
  cancelBtn: {
    width: cancelbtnSize.WIDTH,
    height: cancelbtnSize.HEIGHT,
    borderRadius: 15,
    alignSelf: 'center',
    backgroundColor: '#EEEEEF',
    opacity: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default function ShareSheet({onCancel}) {
  return (
    <View style={styles.container}>
      <HeadingOne
        text={'Share with friends'}
        fontSize={width * 0.064}
        family="AirbnbCereal_W_Bd"
        color={useTheme().colors.themeTextColor}
      />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          gap: height * 0.02,
        }}>
        <View style={{flexDirection: 'row', gap: width * 0.05}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor: 'red',
              // height: height * 0.1,
              gap: height * 0.015,
            }}>
            <View
              style={[
                styles.blurContainer,
                {justifyContent: 'center', alignItems: 'center'},
              ]}>
              <CopyLink />
            </View>
            <HeadingOne
              fontSize={width * 0.035}
              color={'gray'}
              text={'Copy Link'}
              // style={{position: 'relative', top: height * 0.017}}
            />
            {/* <Image source={require('../../assets/pngs/copylink.png')} /> */}
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Whatsapp />
            <HeadingOne
              fontSize={width * 0.035}
              color={'gray'}
              text={'WhatsApp'}
              style={{position: 'relative', top: -height * 0.006}}
            />
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Facebook />
            <HeadingOne
              fontSize={width * 0.035}
              color={'gray'}
              text={'Facebook'}
              style={{position: 'relative', top: -height * 0.006}}
            />
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Messenger />
            <HeadingOne
              fontSize={width * 0.035}
              color={'gray'}
              text={'Messenger'}
              style={{position: 'relative', top: -height * 0.006}}
            />
          </View>
        </View>

        <View style={{flexDirection: 'row', gap: width * 0.05}}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Twitter />
            <HeadingOne
              fontSize={width * 0.035}
              color={'gray'}
              text={'Twitter'}
              style={{position: 'relative', top: -height * 0.006}}
            />
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Instagram />
            <HeadingOne
              fontSize={width * 0.035}
              color={'gray'}
              text={'Instagram'}
              style={{position: 'relative', top: -height * 0.006}}
            />
          </View>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Skype />
            <HeadingOne
              fontSize={width * 0.035}
              color={'gray'}
              text={'Skype'}
              style={{position: 'relative', top: -height * 0.006}}
            />
          </View>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Message />
            <HeadingOne
              fontSize={width * 0.035}
              color={'gray'}
              text={'Message'}
              style={{position: 'relative', top: -height * 0.006}}
            />
          </View>
        </View>
      </View>

      {/* <View style={styles.cancelBtn}>
        <HeadingOne text={'CANCEL'} color={'black'} fontSize={width * 0.047} />
      </View> */}
      <CancelBtn onCancel={onCancel} />
    </View>
  );
}

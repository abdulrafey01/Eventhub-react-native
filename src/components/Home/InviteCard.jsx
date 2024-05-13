import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import React from 'react';
import HeadingOne from '../../abstracts/HeadingOne';
import GreenButton from '../../abstracts/GreenButton';
import InviteSvg from '../../svgs/invite.svg';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
export default function InviteCard() {
  return (
    <View style={styles.container}>
      <View style={{gap: height * 0.015, marginLeft: width * 0.06}}>
        <HeadingOne
          text="Invite Your Friends"
          fontSize={width * 0.05}
          color={'black'}
        />
        <HeadingOne
          text="Get $20 For Ticket"
          fontSize={width * 0.035}
          color={'gray'}
        />
        <GreenButton text="INVITE" style={{width: width * 0.1}} />
      </View>
      <View style={styles.imageStyle}>
        <Image
          resizeMode="contain"
          source={require('../../assets/pngs/invite.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: height * 0.18,
    backgroundColor: '#d6feff',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflow: 'hidden',
  },
  imageStyle: {
    position: 'absolute',
    // right:,
    left: width * 0.3,
    top: 0,
  },
});

import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import HeadingOne from '../../abstracts/HeadingOne';
import GreenButton from '../../abstracts/GreenButton';
import InviteSvg from '../../svgs/invite.svg';

export default function InviteCard() {
  return (
    <View style={styles.container}>
      <View style={{gap: 10, marginLeft: 20}}>
        <HeadingOne text="Invite Your Friends" fontSize={18} color={'black'} />
        <HeadingOne text="Get $20 For Ticket" fontSize={13} color={'gray'} />
        <GreenButton text="INVITE" style={{width: 72}} />
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
    width: 328,
    height: 127,
    backgroundColor: '#d6feff',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflow: 'hidden',
  },
  imageStyle: {
    position: 'absolute',
    right: -20,
    top: 0,
  },
});

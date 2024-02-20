import {View, Image, Text, StyleSheet} from 'react-native';
import React from 'react';
import HeadingOne from '../../abstracts/HeadingOne';
import SimpleButton2 from './SimpleButton2';
import EditIcon from '../../svgs/editicon.svg';
import FollowIcon from '../../svgs/follow.svg';
import MsgIcon from '../../svgs/message2.svg';

const styles = StyleSheet.create({
  topContainer: {
    // backgroundColor: 'red',
    alignItems: 'center',
    gap: 20,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 100,
    backgroundColor: 'red',
    overflow: 'hidden',
  },
  line: {
    width: 1,
    backgroundColor: 'gray',
    height: 30,
  },
});

export default function ProfileTopSection({name, avatar, type}) {
  return (
    <View style={styles.topContainer}>
      <View style={styles.avatar}>
        <Image style={styles.avatar} resizeMode="cover" source={avatar} />
      </View>
      <HeadingOne text={name} fontSize={24} color="black" />
      <View style={{flexDirection: 'row', gap: 20, alignItems: 'center'}}>
        <View style={{alignItems: 'center'}}>
          <HeadingOne text="350" fontSize={16} color="black" />
          <HeadingOne text="Following" fontSize={14} color="gray" />
        </View>
        <View style={styles.line}></View>
        <View style={{alignItems: 'center'}}>
          <HeadingOne text="346" fontSize={16} color="black" />
          <HeadingOne text="Followers" fontSize={14} color="gray" />
        </View>
      </View>
      <View style={{flexDirection: 'row', gap: 10}}>
        {type === 'Organizer' ? (
          <>
            <SimpleButton2
              preIcon={<FollowIcon />}
              text={'Follow'}
              width={154}
              height={50}
              color="#5669FF"
              textColor="white"
            />
            <SimpleButton2
              preIcon={<MsgIcon />}
              text={'Messages'}
              width={154}
              height={50}
              color="white"
            />
          </>
        ) : (
          <SimpleButton2
            preIcon={<EditIcon />}
            text={'Edit Profile'}
            width={154}
            height={50}
            color="white"
          />
        )}
      </View>
    </View>
  );
}

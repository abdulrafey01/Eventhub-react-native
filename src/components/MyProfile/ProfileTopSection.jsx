import {View, Image, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import HeadingOne from '../../abstracts/HeadingOne';
import SimpleButton2 from './SimpleButton2';
import EditIcon from '../../svgs/editicon.svg';
import FollowIcon from '../../svgs/follow.svg';
import MsgIcon from '../../svgs/message2.svg';
import {useTheme} from '@react-navigation/native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  topContainer: {
    // backgroundColor: 'red',
    alignItems: 'center',
    gap: height * 0.03,
  },
  avatar: {
    width: width * 0.27,
    height: width * 0.27,
    borderRadius: 100,
    backgroundColor: 'red',
    overflow: 'hidden',
  },
  line: {
    width: 1,
    backgroundColor: 'gray',
    height: height * 0.04,
  },
});

export default function ProfileTopSection({name, avatar, type}) {
  return (
    <View style={styles.topContainer}>
      <View style={styles.avatar}>
        <Image style={styles.avatar} resizeMode="cover" source={avatar} />
      </View>
      <HeadingOne
        text={name}
        fontSize={width * 0.057}
        color={useTheme().colors.themeTextColor}
      />
      <View
        style={{flexDirection: 'row', gap: width * 0.06, alignItems: 'center'}}>
        <View style={{alignItems: 'center'}}>
          <HeadingOne
            text="350"
            fontSize={width * 0.044}
            color={useTheme().colors.themeTextColor}
          />
          <HeadingOne text="Following" fontSize={width * 0.037} color="gray" />
        </View>
        <View style={styles.line}></View>
        <View style={{alignItems: 'center'}}>
          <HeadingOne
            text="346"
            fontSize={width * 0.044}
            color={useTheme().colors.themeTextColor}
          />
          <HeadingOne text="Followers" fontSize={width * 0.037} color="gray" />
        </View>
      </View>
      <View style={{flexDirection: 'row', gap: width * 0.03}}>
        {type === 'Organizer' ? (
          <>
            <SimpleButton2
              preIcon={<FollowIcon />}
              text={'Follow'}
              width={width * 0.42}
              height={height * 0.067}
              color="#5669FF"
              textColor="white"
            />
            <SimpleButton2
              preIcon={<MsgIcon />}
              text={'Messages'}
              width={width * 0.42}
              height={height * 0.067}
              color={useTheme().colors.themeColor}
            />
          </>
        ) : (
          <SimpleButton2
            preIcon={<EditIcon />}
            text={'Edit Profile'}
            width={width * 0.42}
            height={height * 0.067}
            color={useTheme().colors.themeColor}
          />
        )}
      </View>
    </View>
  );
}

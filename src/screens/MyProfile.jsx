import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import HeadingOne from '../abstracts/HeadingOne';
import SimpleButton2 from '../components/MyProfile/SimpleButton2';

import EditPencil from '../svgs/editpencil.svg';
import OptionBox from '../abstracts/OptionBox';
import ProfileTopSection from '../components/MyProfile/ProfileTopSection';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',

    gap: 20,
  },

  midContainer: {
    paddingHorizontal: 20,
    marginTop: 15,
    gap: 20,
  },
  bottomContainer: {
    paddingHorizontal: 20,
    marginTop: 15,
    gap: 20,
  },
  changeBtn: {
    width: 90,
    height: 28,
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
export default function MyProfile() {
  const [showFullText, setShowFullText] = useState(false);

  return (
    <View style={styles.screen}>
      <StatusBar barStyle={'dark-content'} />
      <ProfileTopSection
        name="Gokberk Demirci"
        avatar={require('../assets/pngs/avatar.png')}
      />
      <View style={styles.midContainer}>
        <HeadingOne text="About Me" fontSize={18} color="black" />
        {showFullText ? (
          <>
            <Text
              style={{
                fontSize: 16,
                color: 'black',
                fontFamily: 'AirbnbCereal_W_Bk',
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
                    fontSize: 16,
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
                fontSize: 16,
                color: 'black',
                fontFamily: 'AirbnbCereal_W_Bk',
                width: 323,
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
                    fontSize: 16,
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
          <HeadingOne text="Interest" fontSize={18} color="black" />
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
            columnGap: 5,
            rowGap: 10,
            flexWrap: 'wrap',
          }}>
          <OptionBox
            text={'Games Online'}
            color={'#6B7AED'}
            fontSize={13}
            width={116}
            height={31}
          />
          <OptionBox
            text={'Concert'}
            color={'#EE544A'}
            fontSize={13}
            width={81}
            height={31}
          />
          <OptionBox
            text={'Music'}
            color={'#EE544A'}
            fontSize={13}
            width={66}
            height={31}
          />
          <OptionBox
            text={'Art'}
            color={'#7D67EE'}
            fontSize={13}
            width={51}
            height={31}
          />
          <OptionBox
            text={'Movie'}
            color={'#29D697'}
            fontSize={13}
            width={67}
            height={31}
          />
          <OptionBox
            text={'Others'}
            color={'#39D1F2'}
            fontSize={13}
            width={73}
            height={31}
          />
        </View>
      </View>
    </View>
  );
}

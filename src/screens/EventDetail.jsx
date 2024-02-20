import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import AvatarGroup from '../svgs/avatargroup.svg';
import HeadingOne from '../abstracts/HeadingOne';
import Calender from '../svgs/calenderblue.svg';
import LocationIcon from '../svgs/locblue.svg';
import EventDetailCard from '../components/EventDetail/EventDetailCard';
import PurpleButton from '../abstracts/PurpleArrowButton';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // gap: 20,
  },
  section1: {
    width: 375,
    height: 'auto',
    // backgroundColor: 'red',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  roundContainer: {
    width: 295,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 30,
    alignSelf: 'center',
    position: 'relative',
    bottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: 'gray',
    elevation: 25,
  },
  roundContainerInside1: {
    width: 173,
    height: 34.18,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  purpleButton: {
    width: 67,
    height: 28,
    borderRadius: 7,
    backgroundColor: '#5669FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  section2: {
    // backgroundColor: 'purple',
    flex: 1,
    gap: 20,
    paddingHorizontal: 20,
  },
  organizerInfo: {
    width: 'auto',
    // backgroundColor: 'red',
    flexDirection: 'row',
    gap: 10,
  },
  organizerAvatarContainer: {
    width: 44,
    height: 44,
    borderRadius: 15,
    overflow: 'hidden',
  },

  organizerAvatar: {
    width: 44,
    height: 44,
    // borderRadius: 5,
  },
  followBtn: {
    width: 60,
    height: 28,
    position: 'absolute',
    right: 10,
    top: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  aboutContainer: {
    gap: 10,
    height: 110,
  },
  blurContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#5669FF',
    opacity: 0.2,
    borderRadius: 7,
  },
});
export default function EventDetail({navigation}) {
  return (
    <View style={styles.screen}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.section1}>
        <Image
          resizeMode="cover"
          source={require('../assets/pngs/EventDetail.png')}
        />
        <View style={styles.roundContainer}>
          <View style={styles.roundContainerInside1}>
            <AvatarGroup />
            <HeadingOne text={'+ 20 Going'} color={'#3F38DD'} fontSize={15} />
          </View>
          <View style={styles.purpleButton}>
            <HeadingOne text="Invite" color={'white'} fontSize={12} />
          </View>
        </View>
      </View>
      <View style={styles.section2}>
        <HeadingOne
          text="International Band Music Concert"
          fontSize={35}
          color={'black'}
          family="AirbnbCereal_W_Bk"
        />
        <EventDetailCard
          icon={<Calender />}
          title={'14 December, 2022'}
          subTitle={'Tuesday, 4:00PM - 9:00PM'}
        />
        <EventDetailCard
          icon={<LocationIcon />}
          title={'Gala Convention Center'}
          subTitle={'36 Guild Street London, UK'}
        />
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('OrganizerProfile')}>
          <View style={styles.organizerInfo}>
            <View style={styles.organizerAvatarContainer}>
              <Image
                style={styles.organizerAvatar}
                resizeMode="cover"
                source={require('../assets/pngs/avatar2.png')}
              />
            </View>
            <View style={styles.organizerText}>
              <HeadingOne
                text="David Silbia"
                fontSize={15}
                color={'black'}
                family="AirbnbCereal_W_Bk"
              />
              <HeadingOne
                text="Organizer"
                fontSize={12}
                color={'gray'}
                family="AirbnbCereal_W_Bk"
              />
            </View>
            <View style={styles.followBtn}>
              <View style={styles.blurContainer}></View>
              <HeadingOne text={'Follow'} color={'#5669FF'} fontSize={12} />
            </View>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.aboutContainer}>
          <HeadingOne text={'About Event'} fontSize={18} color={'black'} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <HeadingOne
              text={
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
              }
              fontSize={18}
              color={'black'}
              family="AirbnbCereal_W_Bk"
            />
          </ScrollView>
        </View>
        <View
          style={{
            width: 'auto',
            position: 'absolute',
            bottom: 10,
            left: 40,
          }}>
          <PurpleButton
            style={{shadowColor: 'white', elevation: 5}}
            text={'BUY TICKET $120'}
          />
        </View>
      </View>
    </View>
  );
}

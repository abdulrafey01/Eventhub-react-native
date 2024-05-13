import {
  View,
  StyleSheet,
  DrawerLayoutAndroid,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import React, {useRef} from 'react';
import DrawerView from '../components/Home/DrawerView';
import TopBlueContainer from '../components/Home/TopBlueContainer';
import EventCardsList from '../components/Home/EventCardsList';
import InviteCard from '../components/Home/InviteCard';
import HeadingOne from '../abstracts/HeadingOne';
import TrianglePointer from '../abstracts/TrianglePointer';
import ProfileIcon from '../svgs/profilebottom.svg';
import ExploreIcon from '../svgs/explore.svg';
import AddBoxIcon from '../svgs/add_box.svg';
import CalenderIcon from '../svgs/Calendar.svg';

import MapIcon from '../svgs/loc.svg';
import {useTheme} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import EventTab from '../components/OrganizerProfile/EventTab';
import NearbyEvents from '../components/Home/NearbyEvents';
import RnRangeSlider from 'rn-range-slider';

import RangeThumb from '../svgs/rangeThumb.svg';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function Home({navigation, drawer}) {
  return (
    <View
      style={[styles.screen, {backgroundColor: useTheme().colors.themeColor}]}>
      <TopBlueContainer
        navigation={navigation}
        OnClick={() => drawer.current.openDrawer()}
      />
      <View
        style={{
          height: height * 0.7,
        }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: height * 0.01,
            paddingBottom: height * 0.08,
          }}>
          <EventCardsList navigation={navigation} />
          <InviteCard />
          <View style={styles.nearbyText}>
            <HeadingOne
              text="Nearby You"
              fontSize={width * 0.05}
              color={useTheme().colors.themeTextColor}
            />
            <View
              style={{
                flexDirection: 'row',
                gap: width * 0.03,
                alignItems: 'center',
              }}>
              <HeadingOne
                text="See All"
                fontSize={width * 0.04}
                color={'gray'}
              />
              <TrianglePointer
                color={'gray'}
                style={{transform: [{rotate: '90deg'}]}}
              />
            </View>
          </View>
          <NearbyEvents />
        </ScrollView>
      </View>

      <View
        style={[
          styles.footerContainer,
          {backgroundColor: useTheme().colors.cardColor},
        ]}>
        <View style={styles.oneTabContainer}>
          <ExploreIcon />
          <HeadingOne
            text="Explore"
            fontSize={width * 0.032}
            color={'#5669FF'}
          />
        </View>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('AllEvents');
          }}>
          <View style={styles.oneTabContainer}>
            <CalenderIcon />
            <HeadingOne
              text="Events"
              fontSize={width * 0.032}
              color={'#D2D4D9'}
            />
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.roundTab}>
          <AddBoxIcon />
        </View>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('MapView')}>
          <View style={styles.oneTabContainer}>
            <MapIcon />
            <HeadingOne text="Map" fontSize={width * 0.032} color={'#D2D4D9'} />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('MyProfile')}>
          <View style={styles.oneTabContainer}>
            <ProfileIcon />
            <HeadingOne
              text="Profile"
              fontSize={width * 0.032}
              color={'#D2D4D9'}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: height * 0.025,
  },
  nearbyText: {
    width: width * 0.9,
    height: height * 0.05,
    // backgroundColor: 'red',
    marginTop: height * 0.02,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerContainer: {
    width: width * 1,
    height: height * 0.08,
    backgroundColor: 'white',
    // borderWidth: 1,
    position: 'absolute',
    bottom: 0,
    // bottom: height * 0.02,
    flexDirection: 'row',
    justifyContent: 'space-around',
    shadowColor: 'gray',
    elevation: 1,
  },
  oneTabContainer: {
    alignItems: 'center',
    position: 'relative',
    top: height * 0.015,
  },
  roundTab: {
    height: height * 0.07,
    width: height * 0.07,
    backgroundColor: '#5669FF',
    borderRadius: 50,
    position: 'relative',
    bottom: height * 0.04,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

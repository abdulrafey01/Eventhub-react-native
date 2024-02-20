import {
  View,
  StyleSheet,
  DrawerLayoutAndroid,
  Button,
  TouchableWithoutFeedback,
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
export default function Home({navigation}) {
  const drawer = useRef(null);

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerBackgroundColor={'white'}
      drawerWidth={300}
      renderNavigationView={() => <DrawerView navigation={navigation} />}
      onDrawerOpen={() => console.log('open')}
      onDrawerClose={() => console.log('close')}
      drawerPosition="left">
      <View style={styles.screen}>
        <TopBlueContainer
          navigation={navigation}
          OnClick={() => drawer.current.openDrawer()}
        />
        <TouchableWithoutFeedback>
          <EventCardsList navigation={navigation} />
        </TouchableWithoutFeedback>
        <InviteCard />
        <View style={styles.nearbyText}>
          <HeadingOne text="Nearby You" fontSize={18} color={'black'} />
          <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
            <HeadingOne text="See All" fontSize={14} color={'gray'} />
            <TrianglePointer
              color={'gray'}
              style={{transform: [{rotate: '90deg'}]}}
            />
          </View>
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.oneTabContainer}>
            <ExploreIcon />
            <HeadingOne text="Explore" fontSize={12} color={'#5669FF'} />
          </View>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('AllEvents');
            }}>
            <View style={styles.oneTabContainer}>
              <CalenderIcon />
              <HeadingOne text="Events" fontSize={12} color={'#D2D4D9'} />
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.roundTab}>
            <AddBoxIcon />
          </View>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('MapView')}>
            <View style={styles.oneTabContainer}>
              <MapIcon />
              <HeadingOne text="Map" fontSize={12} color={'#D2D4D9'} />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('MyProfile')}>
            <View style={styles.oneTabContainer}>
              <ProfileIcon />
              <HeadingOne text="Profile" fontSize={12} color={'#D2D4D9'} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 20,
  },
  nearbyText: {
    width: 327,
    height: 34,
    // backgroundColor: 'red',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerContainer: {
    width: 375,
    height: 88,
    // backgroundColor: 'red',
    // borderWidth: 1,
    position: 'relative',
    bottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    shadowColor: 'gray',
    elevation: 1,
  },
  oneTabContainer: {
    alignItems: 'center',
    position: 'relative',
    top: 10,
  },
  roundTab: {
    height: 46,
    width: 46,
    backgroundColor: '#5669FF',
    borderRadius: 50,
    position: 'relative',
    bottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

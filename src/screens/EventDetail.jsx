import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import AvatarGroup from '../svgs/avatargroup.svg';
import HeadingOne from '../abstracts/HeadingOne';
import Calender from '../svgs/calenderblue.svg';
import LocationIcon from '../svgs/locblue.svg';
import EventDetailCard from '../components/EventDetail/EventDetailCard';
import PurpleButton from '../abstracts/PurpleArrowButton';
import {useTheme} from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Scale from '../abstracts/Scale';
import ShareSheet from '../components/EventDetail/ShareSheet';
import HeaderComponent from '../abstracts/HeaderComponent';

import EventDetailHeader from '../components/EventDetail/EventDetailHeader';
import Animated, {
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {
  Directions,
  Gesture,
  GestureDetector,
} from 'react-native-gesture-handler';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const rbSheetSize = Scale(375, 375, 359);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // gap: 20,
  },
  section1: {
    width: width,
    backgroundColor: 'blue',
    // height: height * 0.36,
  },
  roundContainer: {
    width: width * 0.8,
    height: height * 0.08,
    backgroundColor: 'white',
    borderRadius: 30,
    alignSelf: 'center',
    position: 'absolute',
    top: -height * 0.04,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: 'gray',
    elevation: height * 0.05,
  },
  roundContainerInside1: {
    width: width * 0.5,
    // backgroundColor: 'red',
    height: height * 0.05,
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.03,
  },
  purpleButton: {
    width: width * 0.17,
    height: height * 0.04,
    borderRadius: 7,
    backgroundColor: '#5669FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  section2: {
    gap: height * 0.025,
    paddingHorizontal: width * 0.05,
    height: height,
  },
  organizerInfo: {
    width: 'auto',
    // backgroundColor: 'red',
    flexDirection: 'row',
    gap: width * 0.03,
  },
  organizerAvatarContainer: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: 15,
    overflow: 'hidden',
  },

  organizerAvatar: {
    width: width * 0.12,
    height: width * 0.12,
    // borderRadius: 5,
  },
  followBtn: {
    width: width * 0.15,
    height: height * 0.04,
    position: 'absolute',
    right: width * 0.02,
    top: height * 0.008,
    justifyContent: 'center',
    alignItems: 'center',
  },
  aboutContainer: {
    gap: height * 0.012,
    // height: height * 0.14,
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
  const refRBSheet = useRef();
  const scrollValue = useSharedValue(0);
  const [darkbar, setDarkbar] = React.useState(true);
  const [darkhead, setDarkhead] = React.useState(false);

  // console.log(height);

  let themeColor = useTheme().colors.themeColor;
  const barFunc = translationY => {
    if (translationY <= -90 && themeColor !== 'white') {
      setDarkbar(false);
    } else if (translationY >= -20) {
      setDarkbar(true);
    }
  };

  const headFunc = translationY => {
    if (translationY <= -90 && themeColor === 'white') {
      setDarkhead(true);
    } else if (translationY >= -20) {
      setDarkhead(false);
    }
  };
  const pan = Gesture.Pan().onUpdate(e => {
    // bounding the limit to be dragged
    // First i calculated static values and then made responsive
    if (e.translationY <= -115) {
      scrollValue.value = withSpring(-115);
    } else if (e.translationY >= 0) {
      // changes for bottom drag
      scrollValue.value = withSpring(0);
      runOnJS(headFunc)(e.translationY);
      runOnJS(barFunc)(e.translationY);
    } else {
      // changes for top drag
      scrollValue.value = withSpring(e.translationY);
      runOnJS(barFunc)(e.translationY);
      runOnJS(headFunc)(e.translationY);
    }
    console.log(scrollValue.value);
  });

  const animateStyles1 = useAnimatedStyle(() => ({
    borderRadius: interpolate(
      scrollValue.value,
      [0, -90],
      [30, 0],
      Extrapolation.CLAMP,
    ),
    width: interpolate(scrollValue.value, [0, -90], [width * 0.8, width]),
    elevation: interpolate(
      scrollValue.value,
      [0, -90],
      [height * 0.02, 0],
      Extrapolation.CLAMP,
    ),
  }));
  const animateStyles2 = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: scrollValue.value,
      },
    ],
  }));

  return (
    <View
      style={[styles.screen, {backgroundColor: useTheme().colors.themeColor}]}>
      <StatusBar
        animated={true}
        barStyle={darkbar ? 'dark-content' : 'light-content'}
      />
      <View style={{position: 'absolute', top: 0, zIndex: 1}}>
        <EventDetailHeader
          scrollValue={scrollValue}
          title={'Event Details'}
          color={'transparent'}
          navigation={navigation}
          eventDetail={true}
          darkHead={darkhead}
        />
      </View>
      <Animated.View style={[styles.section1]}>
        <Image
          resizeMode="cover"
          style={{width: width}}
          source={require('../assets/pngs/EventDetail.png')}
        />
      </Animated.View>
      <GestureDetector gesture={pan}>
        <Animated.View
          style={[
            styles.section2,
            animateStyles2,
            {backgroundColor: useTheme().colors.themeColor, width: width},
          ]}>
          <View style={{height: height * 0.04}}>
            <TouchableWithoutFeedback onPress={() => refRBSheet.current.open()}>
              <Animated.View
                style={[
                  styles.roundContainer,
                  {
                    backgroundColor:
                      useTheme().colors.themeColor === 'white'
                        ? 'white'
                        : '#262626',
                  },
                  animateStyles1,
                ]}>
                <View style={styles.roundContainerInside1}>
                  <AvatarGroup />
                  <HeadingOne
                    text={'+ 20 Going'}
                    color={'#3F38DD'}
                    fontSize={width * 0.04}
                  />
                </View>
                <View style={styles.purpleButton}>
                  <HeadingOne
                    text="Invite"
                    color={'white'}
                    fontSize={width * 0.035}
                  />
                </View>
              </Animated.View>
            </TouchableWithoutFeedback>
          </View>
          <HeadingOne
            text="International Band Music Concert"
            fontSize={width * 0.09}
            color={useTheme().colors.themeTextColor}
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
                  fontSize={width * 0.045}
                  color={useTheme().colors.themeTextColor}
                  family="AirbnbCereal_W_Bk"
                />
                <HeadingOne
                  text="Organizer"
                  fontSize={width * 0.035}
                  color={'gray'}
                  family="AirbnbCereal_W_Bk"
                />
              </View>
              <View style={styles.followBtn}>
                <View style={styles.blurContainer}></View>
                <HeadingOne
                  text={'Follow'}
                  color={'#5669FF'}
                  fontSize={width * 0.034}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.aboutContainer}>
            <HeadingOne
              text={'About Event'}
              fontSize={width * 0.05}
              color={useTheme().colors.themeTextColor}
            />
            <HeadingOne
              text={
                'Lorem Ipsum is simply dummy text of the printing an Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
              }
              fontSize={width * 0.05}
              color={useTheme().colors.themeTextColor}
              family="AirbnbCereal_W_Bk"
            />
          </View>
        </Animated.View>
      </GestureDetector>
      <View
        style={{
          width: 'auto',
          position: 'absolute',
          bottom: height * 0.015,
          left: width * 0.1,
        }}>
        <PurpleButton
          onClick={() => {
            navigation.navigate('EmptyEvent');
          }}
          text={'BUY TICKET $120'}
        />
      </View>
      {/* </Animated.ScrollView> */}
      <RBSheet
        ref={refRBSheet}
        height={rbSheetSize.HEIGHT}
        animationType="slide"
        closeOnDragDown={true}
        dragFromTopOnly={true}
        customStyles={{
          container: {
            borderTopEndRadius: 38,
            backgroundColor: useTheme().colors.themeColor,
            borderTopStartRadius: 38,
          },
        }}>
        <ShareSheet onCancel={() => refRBSheet.current.close()} />
      </RBSheet>
    </View>
  );
}

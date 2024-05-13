import {
  View,
  Text,
  StatusBar,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import HeaderComponent from '../abstracts/HeaderComponent';
import Scale from '../../function/Scale';
import PurpleButton from '../abstracts/PurpleArrowButton';
import EmptyEventIcon from '../svgs/emptyevent.svg';
import HeadingOne from '../abstracts/HeadingOne';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const topSectionSize = Scale(375, 295, 45.06);
const topInnerSize = Scale(375, 145, 35.04);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: screenHeight * 0.03,
  },
  topSection: {
    height: topSectionSize.HEIGHT,
    width: topSectionSize.WIDTH,
    backgroundColor: '#F8F8F8',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: topSectionSize.WIDTH * 0.02,
    flexDirection: 'row',
  },
  topInner: {
    height: topInnerSize.HEIGHT,
    width: topInnerSize.WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default function EmptyEvent({navigation}) {
  const [opt1, setOpt1] = React.useState(true);
  return (
    <View style={styles.screen}>
      <StatusBar
        barStyle={
          useTheme().colors.themeColor === 'white'
            ? 'dark-content'
            : 'light-content'
        }
      />
      <HeaderComponent
        title={'Events'}
        navigation={navigation}
        color={
          useTheme().colors.themeColor === 'white'
            ? 'white'
            : useTheme().colors.cardColor
        }
      />
      <View style={styles.container}>
        <View style={styles.topSection}>
          <TouchableWithoutFeedback onPress={() => setOpt1(true)}>
            <View
              style={[
                styles.topInner,
                opt1
                  ? {
                      backgroundColor: 'white',
                      borderRadius: 100,
                      elevation: 5,
                      shadowColor: 'black',
                    }
                  : {width: topInnerSize.WIDTH * 0.98},
              ]}>
              <HeadingOne
                text={'UPCOMING'}
                fontSize={15}
                color={opt1 ? '#5669FF' : 'gray'}
                family="AirbnbCereal_W_Bk"
              />
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => setOpt1(false)}>
            <View
              style={[
                styles.topInner,
                !opt1
                  ? {
                      backgroundColor: 'white',
                      borderRadius: 100,
                      elevation: 5,
                      shadowColor: 'black',
                    }
                  : {width: topInnerSize.WIDTH * 0.98},
              ]}>
              <HeadingOne
                text={'PAST EVENTS'}
                fontSize={15}
                color={!opt1 ? '#5669FF' : 'gray'}
                family="AirbnbCereal_W_Bk"
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={{alignItems: 'center', gap: screenHeight * 0.04}}>
          <View>
            <EmptyEventIcon />
          </View>
          <View style={{gap: screenHeight * 0.02}}>
            <HeadingOne
              text={'No Upcoming Events'}
              fontSize={screenWidth * 0.063}
              color={useTheme().colors.themeTextColor}
            />
            <HeadingOne
              text={'Lorem ipsum dolor sit amet, consectetur  '}
              fontSize={screenWidth * 0.044}
              style={{textAlign: 'center', width: screenWidth * 0.6}}
              family="AirbnbCereal_W_Bk"
              color={'gray'}
            />
          </View>
        </View>
        <PurpleButton
          // style={{shadowColor: useTheme().colors.themeTextColor, elevation: 5}}
          text={'INVITE'}
        />
      </View>
    </View>
  );
}

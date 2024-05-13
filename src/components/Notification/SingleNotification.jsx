import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import Scale from '../../../function/Scale';
import HeadingOne from '../../abstracts/HeadingOne';
import TimeButton from '../Search/TimeButton';
import {useTheme} from '@react-navigation/native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const avatarSize = Scale(375, 45, 45);
const buttonSize = Scale(375, 95, 36);
const styles = StyleSheet.create({
  container: {
    padding: screenWidth * 0.04,
    gap: screenHeight * 0.003,
  },
  avatar: {
    width: avatarSize.WIDTH,
    height: avatarSize.HEIGHT,
    borderRadius: 100,
  },
  partOne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {width: screenWidth * 0.55},

  partTwo: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: screenWidth * 0.03,
  },
});
export default function SingleNotification({
  image,
  name,
  text,
  time,
  showBtn,
  onClick,
}) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onClick}>
        <View style={styles.partOne}>
          <View style={{flexDirection: 'row', gap: screenWidth * 0.025}}>
            <Image style={styles.avatar} source={image} />
            <View style={styles.textContainer}>
              <Text
                style={[
                  {
                    fontFamily: 'AirbnbCereal_W_Md',
                    color: useTheme().colors.themeTextColor,
                  },
                ]}>
                {name}
                <HeadingOne
                  fontSize={screenWidth * 0.04}
                  text={'  ' + text}
                  color={'gray'}
                />
              </Text>
            </View>
          </View>
          <HeadingOne
            fontSize={screenWidth * 0.033}
            text={time}
            color={'gray'}
          />
        </View>
      </TouchableWithoutFeedback>

      {showBtn && (
        <View style={styles.partTwo}>
          <TimeButton
            title={'Reject'}
            txtColor={'gray'}
            width={buttonSize.WIDTH}
            height={buttonSize.HEIGHT}
            borderRadius={6}
          />
          <TimeButton
            isSelected={true}
            title={'Accept'}
            txtColor={'gray'}
            width={buttonSize.WIDTH}
            height={buttonSize.HEIGHT}
            borderRadius={6}
          />
        </View>
      )}
    </View>
  );
}

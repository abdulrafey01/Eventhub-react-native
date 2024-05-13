import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';

import Scale from '../../abstracts/Scale';
import HeadingOne from '../../abstracts/HeadingOne';
import {useTheme} from '@react-navigation/native';
import TickYes from '../../svgs/tickyes.svg';
import TickNo from '../../svgs/tickno.svg';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const avatarSize = Scale(375, 45, 45);
const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'lightgreen',
    paddingHorizontal: screenWidth * 0.04,
    paddingVertical: screenHeight * 0.01,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: avatarSize.WIDTH,
    height: avatarSize.HEIGHT,
    borderRadius: 100,
  },
  firstView: {
    flexDirection: 'row',
    gap: screenWidth * 0.03,
  },
});
export default function FollowPerson({name, followers, image}) {
  const [checked, setChecked] = React.useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.firstView}>
        <Image style={styles.avatar} source={image} />
        <View>
          <HeadingOne
            text={name}
            family="AirbnbCereal_W_Md"
            color={useTheme().colors.themeTextColor}
            fontSize={screenWidth * 0.04}
          />
          <HeadingOne
            text={`${followers} Followers`}
            family="AirbnbCereal_W_Bk"
            color={'gray'}
            fontSize={screenWidth * 0.04}
          />
        </View>
      </View>
      {checked ? (
        <TouchableWithoutFeedback onPress={() => setChecked(!checked)}>
          {<TickYes />}
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback onPress={() => setChecked(!checked)}>
          {<TickNo />}
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}

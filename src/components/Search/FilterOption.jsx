import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import HeadingOne from '../../abstracts/HeadingOne';
import SportIcon from '../../svgs/sportsFilter.svg';
import {useTheme} from '@react-navigation/native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: height * 0.02,
  },
  round: {
    width: width * 0.18,
    height: width * 0.18,
    backgroundColor: '#5669FF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#E1E4FF',
    elevation: 5,
  },
});

export default function FilterOption({icon, title, isSelected}) {
  const [isBlue, setIsBlue] = useState(isSelected);
  return (
    <TouchableWithoutFeedback onPress={() => setIsBlue(!isBlue)}>
      <View style={styles.container}>
        <View
          style={[
            styles.round,
            {
              backgroundColor: isBlue
                ? '#5669FF'
                : useTheme().colors.themeColor,
              elevation: isBlue ? 10 : 0,
              borderWidth: isBlue ? 0 : 1,
              borderColor: isBlue ? '#5669FF' : '#E4DFDF',
            },
          ]}>
          <View
            style={{
              backgroundColor: isBlue
                ? '#5669FF'
                : title === 'Music' || title === 'Food'
                ? 'white'
                : 'gray',
              borderRadius: 100,
              borderWidth: isBlue
                ? 0
                : title === 'Music' || title === 'Food'
                ? 0
                : 1,
            }}>
            {icon}
          </View>
        </View>
        <HeadingOne
          text={title}
          color={useTheme().colors.themeTextColor}
          fontSize={width * 0.04}
          family="AirbnbCereal_W_Bk"
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

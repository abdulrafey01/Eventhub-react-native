import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import HeadingOne from '../../abstracts/HeadingOne';
import {useTheme} from '@react-navigation/native';

const heightScreen = Dimensions.get('window').height;
const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    width: widthScreen * 0.25,
    // height: height * 0.05,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#E4DFDF',
    flexDirection: 'row',
    gap: widthScreen * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: widthScreen * 0.03,
  },
});
export default function TimeButton({
  title,
  isSelected,
  width,
  icon,
  endIcon,
  height = heightScreen * 0.06,
  fontSize = widthScreen * 0.036,
  txtColor = 'gray',
  borderRadius = 10,
}) {
  const [isBlue, setIsBlue] = useState(isSelected);
  return (
    <TouchableWithoutFeedback onPress={() => setIsBlue(!isBlue)}>
      <View
        style={[
          styles.container,
          {width},
          {height},
          {
            backgroundColor: isBlue ? '#5669FF' : 'white',
            justifyContent: icon ? 'flex-start' : 'center',
          },
          {borderRadius},
        ]}>
        {icon}
        <HeadingOne
          text={title}
          fontSize={fontSize}
          color={isBlue ? 'white' : txtColor}
        />
        <View style={{position: 'absolute', right: widthScreen * 0.06}}>
          {endIcon}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: width * 0.055,
  },
});
export default function AboutTab() {
  const [showFullText, setShowFullText] = useState(false);
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: useTheme().colors.themeColor},
      ]}>
      {showFullText ? (
        <Text
          style={{
            fontSize: width * 0.045,
            color: useTheme().colors.themeTextColor,
            fontFamily: 'AirbnbCereal_W_Bk',
          }}>
          {' '}
          Enjoy your favorite dishe and a lovely your friends and family and
          have a great time. Food from local food trucks will be available for
          purchase. Enjoy your favorite dishe and a lovely your friends and
          family and have a great time. Food from local food trucks will be
          available for purchase.{' '}
          <TouchableWithoutFeedback onPress={() => setShowFullText(false)}>
            <Text
              style={{
                color: '#5669FF',
                color: '#5669FF',
                fontFamily: 'AirbnbCereal_W_Bk',
                fontSize: width * 0.045,
              }}>
              Wrap
            </Text>
          </TouchableWithoutFeedback>
        </Text>
      ) : (
        <Text
          style={{
            fontSize: width * 0.045,
            color: useTheme().colors.themeTextColor,
            fontFamily: 'AirbnbCereal_W_Bk',
          }}>
          {' '}
          Enjoy your favorite dishe and a lovely your friends and family and
          have a great time. Food from local food trucks will be available for
          purchase.{' '}
          <TouchableWithoutFeedback onPress={() => setShowFullText(true)}>
            <Text
              style={{
                color: '#5669FF',
                color: '#5669FF',
                fontFamily: 'AirbnbCereal_W_Bk',
                fontSize: width * 0.045,
              }}>
              Read More
            </Text>
          </TouchableWithoutFeedback>
        </Text>
      )}
    </View>
  );
}

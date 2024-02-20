import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import React, {useState} from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
});
export default function AboutTab() {
  const [showFullText, setShowFullText] = useState(false);
  return (
    <View style={styles.container}>
      {showFullText ? (
        <Text
          style={{
            fontSize: 16,
            color: 'black',
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
                fontSize: 16,
              }}>
              Wrap
            </Text>
          </TouchableWithoutFeedback>
        </Text>
      ) : (
        <Text
          style={{
            fontSize: 16,
            color: 'black',
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
                fontSize: 16,
              }}>
              Read More
            </Text>
          </TouchableWithoutFeedback>
        </Text>
      )}
    </View>
  );
}

import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeadingOne from '../abstracts/HeadingOne';
export default function OnBoarding({navigation}) {
  const data = {
    img: [
      require('../assets/pngs/onboarding1.png'),
      require('../assets/pngs/onboarding2.png'),
      require('../assets/pngs/onboarding3.png'),
    ],
    text: [
      ' Explore Upcoming and Nearby Events ',
      ' Web Have Modern Events Calendar Feature',
      '  To Look Up More Events or Activities Nearby By Map',
    ],
  };
  const [index, setIndex] = useState(0);

  useEffect(() => {
    console.log(index);
  }, [index]);

  // next button
  const handleNext = () => {
    if (index === 2) {
      navigation.navigate('Signin');
    } else {
      setIndex(index + 1);
    }
  };
  return (
    <View style={styles.screen}>
      <View>
        <Image source={data.img[index]} />
      </View>
      <View style={styles.blueContainer}>
        <HeadingOne
          text={data.text[index]}
          color="white"
          fontSize={22}
          textAlign="center"
        />
        <HeadingOne
          text=" In publishing and graphic design, Lorem is a placeholder text commonly"
          // color="white"
          fontSize={15}
          textAlign="center"
        />
        <View style={styles.btnContainer}>
          <TouchableWithoutFeedback
            // stop from going out of bounds
            onPress={() => {
              setIndex(index === 0 ? 0 : index - 1);
              console.log('Clicked');
            }}>
            <Text style={styles.btnText}>Skip</Text>
          </TouchableWithoutFeedback>
          <View style={styles.dotsContainer}>
            <View
              style={{...styles.dot, opacity: index === 0 ? 1 : 0.5}}></View>
            <View
              style={{...styles.dot, opacity: index === 1 ? 1 : 0.5}}></View>
            <View
              style={{...styles.dot, opacity: index === 2 ? 1 : 0.5}}></View>
          </View>
          <TouchableWithoutFeedback onPress={handleNext}>
            <Text style={{...styles.btnText, color: 'white'}}>Next</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  blueContainer: {
    width: 375,
    height: 288,
    backgroundColor: '#5669FF',
    borderTopStartRadius: 48,
    borderTopEndRadius: 48,
    shadowColor: 'black',
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    gap: 20,
  },

  btnContainer: {
    // backgroundColor: 'black',
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnText: {
    fontFamily: 'AirbnbCereal_W_Md',
  },
  dotsContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: 'white',
    borderRadius: 100,
    opacity: 0.5,
  },
});

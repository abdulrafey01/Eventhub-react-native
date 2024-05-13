import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeadingOne from '../abstracts/HeadingOne';
import {useTheme} from '@react-navigation/native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default function OnBoarding({navigation}) {
  console.log(width, height, 'yes');
  const colors = useTheme().colors;

  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: colors.themeColor,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    blueContainer: {
      width: width,
      height: height * 0.35,
      backgroundColor: '#5669FF',
      borderTopStartRadius: 48,
      borderTopEndRadius: 48,
      shadowColor: 'black',
      elevation: 5,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: width * 0.1,
      gap: height * 0.03,
    },

    btnContainer: {
      // backgroundColor: 'black',
      marginTop: height * 0.04,
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
      gap: width * 0.013,
    },
    dot: {
      width: width * 0.02,
      height: height * 0.01,
      backgroundColor: 'white',
      borderRadius: 100,
      opacity: 0.5,
    },
  });
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
      <View style={{width: width}}>
        <View
          style={{
            width: width,
            height: height * 0.1,
            backgroundColor: 'white',
            opacity: 0.5,
            position: 'absolute',
            bottom: 0,
            left: 0,
          }}></View>
      </View>
      <View style={styles.blueContainer}>
        <HeadingOne
          text={data.text[index]}
          color="white"
          fontSize={22}
          textAlign="center"
        />
        <HeadingOne
          color={'white'}
          style={{opacity: 0.7}}
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
            <Text style={[styles.btnText, {opacity: 0.7, color: 'white'}]}>
              Skip
            </Text>
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

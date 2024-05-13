import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import React, {useEffect} from 'react';
import Scale from '../../abstracts/Scale';
import HeadingOne from '../../abstracts/HeadingOne';
import LocIcon from '../../svgs/location.svg';
import AvatarGroup from '../../svgs/avatargroup.svg';
import BookMarkIcon from '../../svgs/bookmark.svg';
import {useTheme} from '@react-navigation/native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
export default function EventCard({title, location, image, navigation}) {
  const cardSize = Scale(375, 237, 255);
  const imageSize = Scale(375, 218, 131);
  useEffect(() => {
    // console.log();
  }, []);

  const styles = StyleSheet.create({
    container: {
      width: cardSize.WIDTH,
      height: cardSize.HEIGHT,
      borderRadius: 18,
      backgroundColor: 'white',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      gap: height * 0.02,
      padding: width * 0.027,
      marginHorizontal: width * 0.015,
    },
    imageContainer: {
      width: imageSize.WIDTH,
      height: imageSize.HEIGHT,
      backgroundColor: 'yellow',
      borderRadius: 18,
      overflow: 'hidden',
    },
    dateContainer: {
      width: width * 0.13,
      height: height * 0.061,
      borderRadius: 10,
      backgroundColor: 'white',
      opacity: 0.8,
      position: 'absolute',
      top: height * 0.015,
      left: width * 0.022,
      justifyContent: 'center',
      alignItems: 'center',
    },
    bookMarkContainer: {
      width: width * 0.08,
      height: width * 0.08,
      borderRadius: 7,
      backgroundColor: 'white',
      opacity: 0.8,
      position: 'absolute',
      top: height * 0.015,
      right: width * 0.03,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('EventDetail')}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: useTheme().colors.cardColor,
            shadowColor: useTheme().colors.themeTextColor,
          },
        ]}>
        <View style={styles.imageContainer}>
          <Image
            style={{width: '100%', height: '100%'}}
            resizeMode="cover"
            source={image}
          />
          <View style={styles.dateContainer}>
            <HeadingOne
              text="10"
              fontSize={width * 0.047}
              color={'#F0635A'}
              family="AirbnbCereal_W_Bd"
            />
            <HeadingOne
              text="JUNE"
              fontSize={width * 0.037}
              color={'#F0635A'}
            />
          </View>
          <View style={styles.bookMarkContainer}>
            <BookMarkIcon />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            gap: height * 0.01,
          }}>
          <HeadingOne
            text={title}
            fontSize={width * 0.047}
            color={useTheme().colors.themeTextColor}
          />
          <View
            style={{
              flexDirection: 'row',
              gap: width * 0.02,
              alignItems: 'center',
            }}>
            <AvatarGroup />
            <HeadingOne
              text={'+ 20 Going'}
              color={'#3F38DD'}
              fontSize={width * 0.032}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: width * 0.01,
              alignItems: 'center',
            }}>
            <LocIcon />
            <HeadingOne
              text={location}
              fontSize={width * 0.035}
              color={'gray'}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

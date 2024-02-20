import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useEffect} from 'react';
import Scale from '../../abstracts/Scale';
import HeadingOne from '../../abstracts/HeadingOne';
import LocIcon from '../../svgs/location.svg';
import AvatarGroup from '../../svgs/avatargroup.svg';
import BookMarkIcon from '../../svgs/bookmark.svg';
export default function EventCard({title, location, image, navigation}) {
  useEffect(() => {
    console.log(Scale(375, 237, 255));
  }, []);
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('EventDetail')}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image resizeMode="contain" source={image} />
          <View style={styles.dateContainer}>
            <HeadingOne
              text="10"
              fontSize={18}
              color={'#F0635A'}
              family="AirbnbCereal_W_Bd"
            />
            <HeadingOne text="JUNE" fontSize={13} color={'#F0635A'} />
          </View>
          <View style={styles.bookMarkContainer}>
            <BookMarkIcon />
          </View>
        </View>
        <HeadingOne text={title} fontSize={18} color={'black'} />
        <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
          <AvatarGroup />
          <HeadingOne text={'+ 20 Going'} color={'#3F38DD'} fontSize={12} />
        </View>
        <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
          <LocIcon />
          <HeadingOne text={location} fontSize={13} color={'gray'} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 237,
    height: 245,
    borderRadius: 18,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 5,
    padding: 10,
    shadowColor: 'black',
    elevation: 5,
    marginHorizontal: 4,
  },
  imageContainer: {
    width: 218,
    height: 131,
    backgroundColor: 'yellow',
    borderRadius: 18,
    overflow: 'hidden',
  },
  dateContainer: {
    width: 45,
    height: 46,
    borderRadius: 10,
    backgroundColor: 'white',
    opacity: 0.8,
    position: 'absolute',
    top: 10,
    left: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookMarkContainer: {
    width: 30,
    height: 30,
    borderRadius: 7,
    backgroundColor: 'white',
    opacity: 0.8,
    position: 'absolute',
    top: 10,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

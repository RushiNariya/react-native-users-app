import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function UserItem({user, addToFavoriteHandler}: any) {
  return (
    <View style={styles.userCard}>
      <View style={styles.imageBox}>
        <Image
          source={{
            uri: user.picture.large,
          }}
          resizeMode="cover"
          style={{
            height: '100%',
            width: '100%',
            borderRadius: 1000,
          }}
        />
      </View>
      <View style={styles.userDetail}>
        <Text style={styles.title}>
          {user.name.title} {user.name.first} {user.name.last}
        </Text>
        <Text style={styles.subTitle}>
          {user.location.state}, {user.location.country}
        </Text>
        <View style={styles.infoContainer}>
          <Text style={styles.info}>{user.phone}</Text>
          <View style={{marginBottom: 10}}>
            <Pressable
              android_ripple={{
                color: '#eeb2cf',
              }}
              style={({pressed}) => [pressed && {opacity: 0.2}]}
              onPress={() => addToFavoriteHandler(user.email)}>
              {user.isFavorite ? (
                <AntDesign color={'#c9005f'} name="heart" size={16} />
              ) : (
                <AntDesign color={'#c9005f'} name="hearto" size={16} />
              )}
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userCard: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 85,
    borderRadius: 5,
    paddingHorizontal: 16,
    backgroundColor: '#fdfafa',
  },
  imageBox: {
    flex: 1.9,
    alignSelf: 'auto',
  },
  userDetail: {
    flex: 5,
    alignItems: 'stretch',
    justifyContent: 'space-between',
    marginLeft: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    // marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '400',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  info: {},
});

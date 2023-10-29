import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
const UserProfile = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={{
              uri: 'https://expertphotography.b-cdn.net/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg',
            }}
            style={styles.profileImage}
          />
          <View style={{marginLeft: 20}}>
            <Text
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}>
              John Doe
            </Text>
            <Text style={styles.caption}>j_doe@gmail.com</Text>
          </View>
        </View>

        <View style={styles.divider} />
      </View>

      <View style={styles.menuWrapper}>
        <Pressable
          onPress={() => {
            navigation.navigate('favorites' as never, {} as never);
          }}
          style={({pressed}) => [pressed && styles.menuItemRipple]}>
          <View style={styles.menuItem}>
            <MaterialIcons name="favorite-outline" color="#111" size={22} />
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {}}
          style={({pressed}) => [pressed && styles.menuItemRipple]}>
          <View style={styles.menuItem}>
            <Ionicons name="settings-outline" color="#111" size={22} />
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </Pressable>

        <Pressable
          onPress={() => {}}
          style={({pressed}) => [pressed && styles.menuItemRipple]}>
          <View style={styles.menuItem}>
            <AntDesign name="infocirlceo" color="#111" size={22} />
            <Text style={styles.menuItemText}>About Us</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {}}
          style={({pressed}) => [pressed && styles.menuItemRipple]}>
          <View style={styles.menuItem}>
            <AntDesign name="logout" color="#111" size={22} />
            <Text style={styles.menuItemText}>Sign Out</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#808080',
    marginHorizontal: 10,
    alignItems: 'flex-start',
    marginTop: 20,
    marginRight: 40,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
  },
  menuItemRipple: {
    backgroundColor: '#ebebeb',
    opacity: 0.8,
    borderRadius: 10,
  },
});

export default UserProfile;

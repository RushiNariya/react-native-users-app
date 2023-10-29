/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Orders from './screens/Orders';
import UserDetails from './screens/UserDetails';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Provider} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import store from './redux/store';
import Users from './screens/Users';
import UserFavorites from './screens/UserFavourites';
import UserProfile from './screens/UserProfile';
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
const TabScreen1 = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <Pressable
        onPress={() => navigation.navigate('details' as never)}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>users page</Text>
      </Pressable>
    </View>
  );
};
const TabScreen2 = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <Text>orders page</Text>
    </View>
  );
};

const Stack1 = () => (
  <Stack.Navigator initialRouteName="details">
    <Stack.Screen name="details" component={UserDetails} />
  </Stack.Navigator>
);

const Tabs = () => (
  <Tab.Navigator
    initialRouteName="users"
    screenOptions={{
      tabBarStyle: {
        backgroundColor: 'white',
        paddingTop: 10,
      },
    }}>
    <Tab.Screen
      options={{
        tabBarIcon: () => <Feather name="users" size={20} />,
        tabBarLabel: 'Friends',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}
      name="users"
      component={Users}
    />
    <Tab.Screen
      options={{
        tabBarIcon: () => <Ionicons name="chatbubbles-outline" size={20} />,
        tabBarLabel: 'Chats',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}
      name="orders"
      component={Orders}
    />
    <Tab.Screen
      options={{
        tabBarIcon: () => <AntDesign name="profile" size={20} />,
        tabBarLabel: 'Profile',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}
      name="profile"
      component={UserProfile}
    />
  </Tab.Navigator>
);

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen
            options={{
              headerShown: true,
            }}
            name="favorites"
            component={UserFavorites}
          />
          {/* <Stack.Screen name="users" component={Stack1} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default App;

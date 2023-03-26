import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTabNow from 'react-native-vector-icons/Entypo';
import SearchTabNow from 'react-native-vector-icons/Feather';
import ListTabNow from 'react-native-vector-icons/MaterialCommunityIcons';
import PersonTabNow from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/authScreens/HomeScreen';
import SearchScreen from '../screens/authScreens/SearchScreen';
import MyOrdersScreen from '../screens/authScreens/MyOrdersScreen';
import MyAccountScreen from '../screens/authScreens/MyAccountScreen';
import {colors} from '../global/styles';
const Tab = createBottomTabNavigator();
export default function RootClientTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.buttons,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <HomeTabNow name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <SearchTabNow name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name=" MyOrdersScreen"
        component={MyOrdersScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'My Orders',
          tabBarIcon: ({color, size}) => (
            <ListTabNow name="view-list" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MyAccountScreen"
        component={MyAccountScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'My Account',
          tabBarIcon: ({color, size}) => (
            <PersonTabNow name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

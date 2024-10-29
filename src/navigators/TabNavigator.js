import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator';
import LikeScreen from '../screens/LikeScreen';
import MypageScreen from '../screens/MypageScreen';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Likes"
      component={LikeScreen}
      options={{
        tabBarLabel: '찜',
        headerShown: false,
        // tabBarIcon: ({ color, size }) => (
        //   <Image source={require('../../assets/ic_todo.png')} style={{ width: size, height: size, tintColor: color }} />
        // ),
      }}
    />
    <Tab.Screen
      name="HomeStack"
      component={HomeStackNavigator}
      options={{
        tabBarLabel: '홈',
        headerShown: false,
        // tabBarIcon: ({ color, size }) => (
        //   <Image source={require('../../assets/ic_home.png')} style={{ width: size, height: size, tintColor: color }} />
        // ),
      }}
    />
    <Tab.Screen
      name="MyPage"
      component={MypageScreen}
      options={{
        tabBarLabel: '마이페이지',
        headerShown: false,
        // tabBarIcon: ({ color, size }) => (
        //   <Image source={require('../../assets/ic_mypage.png')} style={{ width: size, height: size, tintColor: color }} />
        // ),
      }}
    />
  </Tab.Navigator>
);

export default TabNavigator;

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator';
import LikeScreen from '../screens/like/LikeScreen';
import MypageScreen from '../screens/MypageScreen';
import { Image } from 'react-native';
import colors from '../components/colors';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
  initialRouteName="HomeStack" // 메인 홈을 처음 화면으로 설정
  screenOptions={{
    tabBarActiveTintColor: colors.Pink900, // 활성 상태일 때의 색상
    tabBarInactiveTintColor: 'gray', // 비활성 상태일 때의 색상
  }}>
    <Tab.Screen
      name="Likes"
      component={LikeScreen}
      options={{
        tabBarLabel: '찜',
        headerShown: true,
        headerTitle: '찜',
        tabBarIcon: ({ color, size }) => (
          <Image source={require('../../assets/ic_heart.png')} style={{ width: size, height: size, tintColor: color }} />
        ),
      }}
    />
    <Tab.Screen
      name="HomeStack"
      component={HomeStackNavigator}
      options={{
        tabBarLabel: '홈',
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Image source={require('../../assets/ic_home.png')} style={{ width: size, height: size, tintColor: color }} />
        ),
      }}
    />
    <Tab.Screen
    name="MyPage"
    component={MypageScreen}
    options={{
      tabBarLabel: '마이페이지',
      headerShown: true,
      headerTitle: '마이페이지',
      tabBarIcon: ({ color, size }) => (
        <Image source={require('../../assets/ic_mypage.png')} style={{ width: size, height: size, tintColor: color }} />
        ),
    }}
  />
  </Tab.Navigator>
);

export default TabNavigator;

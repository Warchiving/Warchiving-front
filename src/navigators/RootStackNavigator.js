import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import TabNavigator from './TabNavigator';
import HallPriceScreen from '../screens/HallPriceScreen';
import HallTagsScreen from '../screens/HallTagsScreen';
import HallGuarantorScreen from '../screens/HallGuarantorScreen';
import HallLoadingScreen from '../screens/HallLoadingScreen';
import HallDetailScreen from '../screens/HallDetailScreen';
import ReservationScreen from '../screens/ReservationScreen';

import LikeEditScreen from '../screens/like/LikeEditScreen';
import LikePeoductsScreen from '../screens/like/LikedProductsScreen';
import ReservationSuccessScreen from '../screens/ReservationSuccessScreen';
import { TouchableOpacity, Image } from 'react-native';


const Stack = createStackNavigator();

const RootStackNavigator = () => (
  <Stack.Navigator initialRouteName="Splash">
    <Stack.Screen
      name="Splash"
      component={SplashScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="TabNavigator"
      component={TabNavigator}
      options={{ headerShown: false }}
    />
    
    <Stack.Screen
      name="HallPrice"
      component={HallPriceScreen}
      options={({ navigation }) => ({
        headerTitle: '웨딩홀 알아보기',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/left.png')} style={{ height: 24, width: 24, marginLeft: 10 }} />
          </TouchableOpacity>
        ),
      })}
    />
    <Stack.Screen
      name="HallTags"
      component={HallTagsScreen}
      options={({ navigation }) => ({
        headerTitle: '웨딩홀 알아보기',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/left.png')} style={{ height: 24, width: 24, marginLeft: 10 }} />
          </TouchableOpacity>
        ),
      })}
    />
    <Stack.Screen
      name="HallGuarantor"
      component={HallGuarantorScreen}
      options={({ navigation }) => ({
        headerTitle: '웨딩홀 알아보기',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/left.png')} style={{ height: 24, width: 24, marginLeft: 10 }} />
          </TouchableOpacity>
        ),
      })}
    />
    <Stack.Screen
      name="HallLoading"
      component={HallLoadingScreen}
      options={({ navigation }) => ({
        headerTitle: '웨딩홀 알아보기',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/left.png')} style={{ height: 24, width: 24, marginLeft: 10 }} />
          </TouchableOpacity>
        ),
      })}
    />
    <Stack.Screen
      name="HallDetail"
      component={HallDetailScreen}
      options={({ route, navigation }) => ({
        headerTitle: route.params?.hall?.name || '웨딩홀 상세',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/left.png')} style={{ height: 24, width: 24, marginLeft: 10 }} />
          </TouchableOpacity>
        ),
      })}
    />
    <Stack.Screen
      name="Reservation"
      component={ReservationScreen}
      options={({ route, navigation }) => ({
        headerTitle: '예약하기',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/left.png')} style={{ height: 24, width: 24, marginLeft: 10 }} />
          </TouchableOpacity>
        ),
      })}
    />
    <Stack.Screen
      name="LikeEdit"
      component={LikeEditScreen}
      options={({ route, navigation }) => ({
        headerTitle: '제목 없음',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/left.png')} style={{ height: 24, width: 24, marginLeft: 10 }} />
          </TouchableOpacity>
        ),
      })}
    />
    <Stack.Screen
      name="LikeProducts"
      component={LikePeoductsScreen}
      options={({ route, navigation }) => ({
        headerTitle: '찜 목록',
      name="ReservationSuccess"
      component={ReservationSuccessScreen}
      options={({ route, navigation }) => ({
        headerTitle: '예약하기',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/left.png')} style={{ height: 24, width: 24, marginLeft: 10 }} />
          </TouchableOpacity>
        ),
      })}
    />
  </Stack.Navigator>
);

export default RootStackNavigator;

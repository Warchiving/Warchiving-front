import React from 'react';
import HallPriceScreen from '../screens/HallPriceScreen';
import HallTagsScreen from '../screens/HallTagsScreen';
import HallGuarantorScreen from '../screens/HallGuarantorScreen';
import HallLoadingScreen from '../screens/HallLoadingScreen';
import HallDetailScreen from '../screens/HallDetailScreen';
import { TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HallScreens = () => (
  <>
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
  </>
);

export default HallScreens;

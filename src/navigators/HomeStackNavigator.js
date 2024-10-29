import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import HallListScreen from '../screens/HallListScreen';
import { TouchableOpacity, Image } from 'react-native';

const Stack = createStackNavigator();

const HomeStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Main"
      component={MainScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="HallList"
      component={HallListScreen}
      options={({ navigation }) => ({
        headerTitle: '웨딩홀 알아보기',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/left.png')} style={{ height: 24, width: 24, marginLeft: 10 }} />
          </TouchableOpacity>
        ),
      })}
    />
  </Stack.Navigator>
);

export default HomeStackNavigator;

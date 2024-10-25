import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Image, Text } from 'react-native';
// import colors from '../../config/colors';
// import { fonts } from '../../config/fonts';

import MainScreen from './src/screens/MainScreen';
import LikeScreen from './src/screens/LikeScreen';
import MypageScreen from './src/screens/MypageScreen';
import HallPriceScreen from './src/screens/HallPriceScreen';  // 새로운 화면 (탭 없는 화면)
import HallListScreen from './src/screens/HallListScreen';  // 새로운 화면 (탭 없는 화면)
import HallTagsScreen from './src/screens/HallTagsScreen';
import HallGuarantorScreen from './src/screens/HallGuarantorScreen'
import HallLoadingScreen from './src/screens/HallLoadingScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Main" 
        component={MainScreen} 
        options={{ headerShown: false }}
      />
      <Stack.Screen
          name="HallList"
          component={HallListScreen}  // 새 화면을 위한 컴포넌트
          options={({ navigation }) => ({
            headerTitle: '웨딩홀 알아보기',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('./assets/left.png')} style={{ height: 24, width: 24, marginLeft:10, }} />
              </TouchableOpacity>
            ),
          })} // 필요에 따라 상단바를 숨기거나 보이게 설정 가능
        />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Likes"
        component={LikeScreen}
        options={{
          tabBarLabel: '찜',
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Main"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: '홈',
          headerShown: false
        }}
      />
      <Tab.Screen
        name="My Page"
        component={MypageScreen}
        options={{
          tabBarLabel: '마이페이지',
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* 바텀탭 네비게이션 */}
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}  // 탭 네비게이션의 상단바 숨김
        />

        {/* 바텀탭 없이 표시될 새로운 화면 */}
        <Stack.Screen
          name="HallPrice"
          component={HallPriceScreen}  // 새 화면을 위한 컴포넌트
          options={({ navigation }) => ({
            headerTitle: '웨딩홀 알아보기',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('./assets/left.png')} style={{ height: 24, width: 24, marginLeft: 10, }} />
              </TouchableOpacity>
            ),
          })} // 필요에 따라 상단바를 숨기거나 보이게 설정 가능
        />

        <Stack.Screen
          name="HallTags"
          component={HallTagsScreen}  // 새 화면을 위한 컴포넌트
          options={({ navigation }) => ({
            headerTitle: '웨딩홀 알아보기',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('./assets/left.png')} style={{ height: 24, width: 24, marginLeft: 10, }} />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="HallGuarantor"
          component={HallGuarantorScreen}  // 새 화면을 위한 컴포넌트
          options={({ navigation }) => ({
            headerTitle: '웨딩홀 알아보기',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('./assets/left.png')} style={{ height: 24, width: 24, marginLeft: 10, }} />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="HallLoading"
          component={HallLoadingScreen}  // 새 화면을 위한 컴포넌트
          options={({ navigation }) => ({
            headerTitle: '웨딩홀 알아보기',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('./assets/left.png')} style={{ height: 24, width: 24, marginLeft: 10, }} />
              </TouchableOpacity>
            ),
          })}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

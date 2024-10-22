import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './src/screens/MainScreen';
import LikeScreen from './src/screens/LikeScreen';
import MypageScreen from './src/screens/MypageScreen';
import HallPriceScreen from './src/screens/HallPriceScreen';  // 새로운 화면 (탭 없는 화면)

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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
        component={MainScreen}
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
          options={{ headerShown: true }}  // 필요에 따라 상단바를 숨기거나 보이게 설정 가능
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

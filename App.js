import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './src/MainScreen';
import LikeScreen from './src/LikeScreen';
import MypageScreen from './src/MypageScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen
          name="Main"
          component={MainScreen}
          options={{ 
            tabBarLabel: '홈',  // Change the label to 'Home'
            headerShown: false    // Hides the top bar for MainScreen
          }}  
        />
        <Tab.Screen 
        name="Likes" 
        component={LikeScreen}
        options={{ 
          tabBarLabel: '찜',  // Change the label to 'Home'
          headerShown: false    // Hides the top bar for MainScreen
        }}   />
        <Tab.Screen 
        name="My Page" 
        component={MypageScreen}
        options={{ 
          tabBarLabel: '마이페이지',  // Change the label to 'Home'
          headerShown: false    // Hides the top bar for MainScreen
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

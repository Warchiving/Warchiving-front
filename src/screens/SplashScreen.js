// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      // 2초 후 메인 화면으로 이동
      navigation.replace('Login');  
    }, 2000);

    return () => clearTimeout(timer);  // 타이머 해제
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/MainLogo.png')} style={styles.MainLogo}/>
      <Image source={require('../../assets/TextLogo.png')} style={styles.TextLogo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  MainLogo:{
    width:150,
    height:100,
    resizeMode: 'contain',
  },
  TextLogo:{
    width:120,
    height:25,
    resizeMode: 'contain',
    marginLeft:15,
  }
});

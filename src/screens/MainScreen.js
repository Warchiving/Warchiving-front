// MainScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import CustomButton from '../components/CustomButton';  // 버튼 컴포넌트 불러오기

export default function MainScreen({ navigation }) {

  const categories = [
    { image: require('../../assets/Folder.png'), text: '웨딩홀', screen: 'HallPrice' },
    { image: require('../../assets/Folder.png'), text: '파티룸', screen: 'HallPrice' },
    { image: require('../../assets/Folder.png'), text: '레스토랑', screen: 'HallPrice' },
    { image: require('../../assets/Folder.png'), text: '카페', screen: 'HallPrice' },
    { image: require('../../assets/Folder.png'), text: '미팅룸', screen: 'HallPrice' },
  ];

  return (
    <View style={styles.container}>

      {/* 카테고리 */}
      <View style={styles.category}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} 
          style={styles.categoryContainer} 
          activeOpacity={0.5}
          onPress={() => navigation.navigate(category.screen)}>

            <Image source={category.image} style={styles.categoryImg} />
            <Text>{category.text}</Text>
            
          </TouchableOpacity>
        ))}
      </View>

      {/* <CustomButton title="Click Me" onPress={() => alert('Button Pressed!')} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryImg: {
    width: 60,
    height: 60,
  },
  categoryContainer: {
    alignItems: 'center',
    padding:5,
  },
  category: {
    flexDirection: 'row',
  }
});

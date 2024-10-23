// MainScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import CustomButton from '../components/CustomButton';  // 버튼 컴포넌트 불러오기

export default function MainScreen({ navigation }) {

  const categories = [
    { image: require('../../assets/Folder.png'), text: '웨딩홀', screen: 'HallPrice' },
    { image: require('../../assets/Folder.png'), text: '파티룸', screen: 'HallPrice' },
    { image: require('../../assets/Folder.png'), text: '레스토랑', screen: 'HallPrice' },
    { image: require('../../assets/Folder.png'), text: '카페', screen: 'HallPrice' },
    { image: require('../../assets/Folder.png'), text: '미팅룸', screen: 'HallPrice' },
  ];

  const Hallimages = [
    require('../../assets/GreyImg.png'),
    require('../../assets/GreyImg.png'),
    require('../../assets/GreyImg.png'),
    require('../../assets/GreyImg.png'),
    require('../../assets/GreyImg.png'),
    require('../../assets/GreyImg.png'),
  ];


  const Hallimages2 = [
    require('../../assets/GreyImg.png'),
    require('../../assets/GreyImg.png'),
    require('../../assets/GreyImg.png'),
    require('../../assets/GreyImg.png'),
    require('../../assets/GreyImg.png'),
    require('../../assets/GreyImg.png'),
  ];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: "25%" }} />
        <View style={{
          backgroundColor: "grey", width: '90%', height: '30%', marginLeft: 15,
        }} />

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

        <View style={{ marginTop: 40 }}>
          <Text style={{ marginLeft: 20, marginBottom: 10, }}>
            <Text style={{ color: 'red', }}>#추가비용없는</Text> 메이크업 샵
          </Text>
          <ScrollView style={styles.Imglist} horizontal={true} showsHorizontalScrollIndicator={false}>
            {Hallimages.map((img, index) => (
              <Image key={index} source={img} style={[styles.Hallimage, index === 0 && { marginLeft: 20 }]} />
            ))}
          </ScrollView>
        </View>

        <View style={{ marginTop: 30 }}>
          <Text style={{ marginLeft: 20, marginBottom: 10, }}>
            <Text style={{ color: 'red', }}>#서비스가좋은</Text> 드레스샵
          </Text>
          <ScrollView style={styles.Imglist} horizontal={true} showsHorizontalScrollIndicator={false}>
            {Hallimages2.map((img, index) => (
              <Image key={index} source={img} style={[styles.Hallimage, index === 0 && { marginLeft: 20 }]} />
            ))}
          </ScrollView>
        </View>

        <View style={{ marginTop: 30 }}>
          <Text style={{ marginLeft: 20, marginBottom: 10, }}>
            <Text style={{ color: 'red', }}>#서비스가좋은</Text> 드레스샵
          </Text>
          <ScrollView style={styles.Imglist} horizontal={true} showsHorizontalScrollIndicator={false}>
            {Hallimages2.map((img, index) => (
              <Image key={index} source={img} style={[styles.Hallimage, index === 0 && { marginLeft: 20 }]} />
            ))}
          </ScrollView>
        </View>

        <View style={{ marginBottom: 350, }} />




        {/* <CustomButton title="Click Me" onPress={() => alert('Button Pressed!')} /> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  categoryImg: {
    width: 60,
    height: 60,
  },
  categoryContainer: {
    alignItems: 'center',
    padding: 5,
  },
  category: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Imglist: {
    flexDirection: 'row',
  },
  Hallimage: {
    width: 100,
    height: 120,
    borderRadius: 7,
    marginHorizontal: 6,
  },
});

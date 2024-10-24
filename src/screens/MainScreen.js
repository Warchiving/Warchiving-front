// MainScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import CustomButton from '../components/CustomButton';  // 버튼 컴포넌트 불러오기
import SearchBar from '../components/SearchBar';  // SearchBar 컴포넌트 불러오기
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

export default function MainScreen({ navigation }) {

  const onSearch = () => {
    // 검색 버튼을 눌렀을 때 실행할 동작
    console.log('Search button pressed');
  };

  const categories = [
    { image: require('../../assets/Folder.png'), text: '전체', screen: 'HallPrice' },
    { image: require('../../assets/Folder.png'), text: '스튜디오', screen: 'HallPrice' },
    { image: require('../../assets/Folder.png'), text: '웨딩홀', screen: 'HallTags' },
    { image: require('../../assets/Folder.png'), text: '드레스', screen: 'HallPrice' },
    { image: require('../../assets/Folder.png'), text: '메이크업', screen: 'HallList' },
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

  const slides = [
    {
      image: require('../../assets/Mainbanner1.png'),
      title: '트렌디한 메이크업 스튜디오',
      subText: '00 메이크업, 99 메이크업',
    },
    {
      image: require('../../assets/Mainbanner2.png'),
      title: '럭셔리 웨딩홀 패키지',
      subText: 'AAA 웨딩, BBB 패키지',
    },
    {
      image: require('../../assets/Mainbanner3.png'),
      title: '아름다운 드레스 컬렉션',
      subText: 'CCC 드레스, DDD 콜라보',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={{ padding: 10, marginTop: 60, flexDirection: 'row', alignItems: 'center' }}>
        {/* 왼쪽 빈 공간 */}
        <View style={{ flex: 1 }} />

        {/* 로고 중앙 정렬 */}
        <Image source={require('../../assets/MainLogo.png')} style={styles.MainLogo} />

        {/* 오른쪽 아이콘들 */}
        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end' }}>
          <Image source={require('../../assets/Basket.png')} style={styles.BasketImg} />
          <Image source={require('../../assets/bell.png')} style={styles.bellImg} />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{ alignItems: 'center', padding: 15, }}>
          <SearchBar placeholder="업체를 검색해보세요" onSearch={onSearch} />
        </View>

        {/* 메인 사진 3개 스와이퍼 */}
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          autoplay={true}
          autoplayTimeout={3}
          dotStyle={styles.dot}
          activeDotStyle={styles.activeDot}
        >
          {slides.map((slide, index) => (
            <View key={index} style={styles.slideContainer}>
              <Image source={slide.image} style={styles.image} />

              {/* 이미지 위에 텍스트 추가 */}
              <View style={styles.bannertextContainer}>
                <Text style={styles.banner}>{slide.title}</Text>
                <Text style={styles.bannersub}>{slide.subText}</Text>
              </View>
            </View>
          ))}
        </Swiper>

        <Text style={{ fontWeight: 700, marginLeft: 20, }}>나에게 맞는 스드메홀은?</Text>


        {/* 카테고리 */}
        <View style={styles.category}>
          {categories.map((category, index) => (
            <TouchableOpacity key={index}
              style={styles.categoryContainer}
              activeOpacity={0.5}
              onPress={() => navigation.navigate(category.screen)}>

              <Image source={category.image} style={styles.categoryImg} />
              <Text style={styles.categroyText}>{category.text}</Text>

            </TouchableOpacity>
          ))}
        </View>

        <View style={{ marginTop: 40 }}>
          <Text style={{ marginLeft: 20, marginBottom: 10, }}>
            <Text style={{ color: 'red', }}>#추가_비용_없는</Text> 메이크업 샵
          </Text>
          <ScrollView style={styles.Imglist} horizontal={true} showsHorizontalScrollIndicator={false}>
            {Hallimages.map((img, index) => (
              <Image key={index} source={img} style={[styles.Hallimage, index === 0 && { marginLeft: 20 }]} />
            ))}
          </ScrollView>
        </View>

        <View style={{ marginTop: 30 }}>
          <Text style={{ marginLeft: 20, marginBottom: 10, }}>
            <Text style={{ color: 'red', }}>#서비스가_좋은</Text> 드레스샵
          </Text>
          <ScrollView style={styles.Imglist} horizontal={true} showsHorizontalScrollIndicator={false}>
            {Hallimages2.map((img, index) => (
              <Image key={index} source={img} style={[styles.Hallimage, index === 0 && { marginLeft: 20 }]} />
            ))}
          </ScrollView>
        </View>

        <View style={{ marginTop: 30 }}>
          <Text style={{ marginLeft: 20, marginBottom: 10, }}>
            <Text style={{ color: 'red', }}>#서비스가_좋은</Text> 드레스샵
          </Text>
          <ScrollView style={styles.Imglist} horizontal={true} showsHorizontalScrollIndicator={false}>
            {Hallimages2.map((img, index) => (
              <Image key={index} source={img} style={[styles.Hallimage, index === 0 && { marginLeft: 20 }]} />
            ))}
          </ScrollView>
        </View>

        <View style={{ marginBottom: 200, }} />



      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
  },
  categoryImg: {
    width: 60,
    height: 60,
  },
  MainLogo: {
    width: 50,
    height: 35,
  },
  BasketImg: {
    width: 30,
    height: 30,
  },
  bellImg: {
    width: 25,
    height: 25,
    marginTop: 3,
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
  categroyText: {
    marginTop: 6,
    fontWeight: 700,
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
  wrapper: {
    height: 350,
  },
  slideContainer: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width,
    height: 300,
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 10,
  },
  activeDot: {
    backgroundColor: 'black',
    width: 8,
    height: 8,
    borderRadius: 5,
    margin: 10,
  },
  bannertextContainer: {
    position: 'absolute',  // 텍스트를 이미지 위에 배치
    bottom: 20,  // 텍스트를 이미지 하단에 배치
    left: 20,
  },
  banner: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bannersub: {
    color: 'white',
    fontSize: 14,
    marginTop: 5,
  },
});

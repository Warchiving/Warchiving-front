// MainScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import CustomButton from '../components/CustomButton';  // 버튼 컴포넌트 불러오기
import SearchBar from '../components/SearchBar';  // SearchBar 컴포넌트 불러오기
import Swiper from 'react-native-swiper';
import colors from '../components/colors';

const { width } = Dimensions.get('window');

export default function MainScreen({ navigation }) {

  const onSearch = () => {
    // 검색 버튼을 눌렀을 때 실행할 동작
    console.log('Search button pressed');
  };

  const categories = [
    { image: require('../../assets/entire_icon.png'), text: '전체', screen: 'HallPrice' },
    { image: require('../../assets/hall_icon.png'), text: '웨딩홀', screen: 'HallPrice' },
    { image: require('../../assets/studio_icon.png'), text: '스튜디오', screen: 'HallTags' },
    { image: require('../../assets/makeup_icon.png'), text: '메이크업', screen: 'HallPrice' },
    { image: require('../../assets/dress_icon.png'), text: '드레스', screen: 'HallPrice' },
  ];

  const Hallimages = [
    require('../../assets/hall/hall_img1.jpg'),
    require('../../assets/hall/hall_img2.jpg'),
    require('../../assets/hall/hall_img3.jpg'),
    require('../../assets/hall/hall_img4.jpg'),
    require('../../assets/hall/hall_img5.jpg'),
  ];


  const Hallimages2 = [
    require('../../assets/studio/studio_img1.jpg'),
    require('../../assets/studio/studio_img2.jpg'),
    require('../../assets/studio/studio_img5.jpg'),
    require('../../assets/studio/studio_img4.jpg'),
    require('../../assets/studio/studio_img3.jpg'),
  ];

  const Makeupimages = [
    require('../../assets/makeup/makeup_img1.jpg'),
    require('../../assets/makeup/makeup_img2.jpg'),
    require('../../assets/makeup/makeup_img3.jpg'),
    require('../../assets/makeup/makeup_img4.jpg'),
    require('../../assets/makeup/makeup_img5.jpg'),
  ];

  const slides = [
    {
      image: require('../../assets/Mainbanner1.png'),
      title: '트렌디한 메이크업 스튜디오',
      subText: '글로우 메이크업 모아보기',
    },
    {
      image: require('../../assets/Mainbanner2.png'),
      title: '럭셔리 웨딩홀 특가',
      subText: '르비르모어 선릉, 더베뉴지 서울',
    },
    {
      image: require('../../assets/Mainbanner3.png'),
      title: '지인들만을 위한 특별한 스몰웨딩',
      subText: '야외 스몰웨딩 모아보기',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={{ padding: 10, marginTop: 60, flexDirection: 'row', alignItems: 'center' }}>
        {/* 왼쪽 빈 공간 */}
        <View style={{ flex: 1 }} />

        {/* 로고 중앙 정렬 */}
        <Image source={require('../../assets/MainScreenLogo.png')} style={styles.MainLogo} />

        {/* 오른쪽 아이콘들 */}
        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end' }}>
          <Image source={require('../../assets/Basket.png')} style={styles.BasketImg} />
          <Image source={require('../../assets/bell.png')} style={styles.bellImg} />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* 검색창 */}
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

                        {/* 메이크업 추천 */}
                        <View style={{ marginTop: 30 }}>
          <Text style={{ marginLeft: 20, marginBottom: 10, fontWeight: '600' }}>
            <Text style={styles.HallText}>#추가_비용_없는</Text> 메이크업 샵
          </Text>
          <ScrollView style={styles.Imglist} horizontal={true} showsHorizontalScrollIndicator={false}>
            {Makeupimages.map((img, index) => (
              <View key={index} style={[styles.imageWrapper, index === 0 && { marginLeft: 20 }]}>
                {/* Main Image */}
                <Image source={img} style={styles.Hallimage} />

                {/* Icons overlay */}
                <View style={styles.iconContainer}>
                  <Image source={require('../../assets/heart_icon.png')} style={styles.icon} />
                  <Image source={require('../../assets/bag_icon.png')} style={[styles.icon,]} />
                </View>
              </View>
            ))}
          </ScrollView>
        </View>


                {/* 드레스 추천 */}
                <View style={{ marginTop: 30 }}>
          <Text style={{ marginLeft: 20, marginBottom: 10, fontWeight: '600' }}>
            <Text style={styles.HallText}>#서비스가_좋은</Text> 드레스샵
          </Text>
          <ScrollView style={styles.Imglist} horizontal={true} showsHorizontalScrollIndicator={false}>
            {Hallimages2.map((img, index) => (
              <View key={index} style={[styles.imageWrapper, index === 0 && { marginLeft: 20 }]}>
              {/* Main Image */}
              <Image source={img} style={styles.Hallimage} />

              {/* Icons overlay */}
              <View style={styles.iconContainer}>
                <Image source={require('../../assets/heart_icon.png')} style={styles.icon} />
                <Image source={require('../../assets/bag_icon.png')} style={styles.icon} />
              </View>
            </View>
            ))}
          </ScrollView>
        </View>

        {/* 홀 추천 */}
        <View style={{ marginTop: 40 }}>
          <Text style={{ marginLeft: 20, marginBottom: 10, fontWeight: '600' }}>
            <Text style={styles.HallText}>#생화가_유명한</Text> 웨딩홀
          </Text>
          <ScrollView style={styles.Imglist} horizontal={true} showsHorizontalScrollIndicator={false}>
            {Hallimages.map((img, index) => (
              <View key={index} style={[styles.imageWrapper, index === 0 && { marginLeft: 20 }]}>
                {/* Main Image */}
                <Image source={img} style={styles.Hallimage} />

                {/* Icons overlay */}
                <View style={styles.iconContainer}>
                  <Image source={require('../../assets/heart_icon.png')} style={styles.icon} />
                  <Image source={require('../../assets/bag_icon.png')} style={[styles.icon,]} />
                </View>
              </View>
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
    width: 45,
    height: 45,
    marginTop:10,
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
    padding: 12,
  },
  category: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categroyText: {
    marginTop: 15,
    fontWeight: 700,
    fontWeight:'500'
  },
  Imglist: {
    flexDirection: 'row',
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
  HallText: {
    color: colors.Pink900,
  },
  imageWrapper: {
    position: 'relative',
  },
  Hallimage: {
    width: 130,
    height: 150,
    borderRadius: 7,
    marginRight:13,
  },
  iconContainer: {
    position: 'absolute',
    top: 5,
    right: 105,
    flexDirection: 'row',
  },
  icon: {
    width: 16,
    height: 16,
  },
});

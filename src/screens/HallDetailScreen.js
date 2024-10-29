// HallDetailScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import colors from '../components/colors';

const { width } = Dimensions.get('window');

export default function HallDetailScreen({ route, navigation }) {
  const { hall } = route.params;

  // 슬라이드 이미지 배열
  const slides = [
    require('../../assets/Mainbanner1.png'),
    require('../../assets/Mainbanner2.png'),
    require('../../assets/Mainbanner3.png'),
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {/* 메인 사진 스와이퍼 */}
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          autoplay={true}
          autoplayTimeout={3}
          dotStyle={styles.dot}
          activeDotStyle={styles.activeDot}
        >
          {slides.map((image, index) => (
            <View key={index} style={styles.slideContainer}>
              <Image source={image} style={styles.image} />
            </View>
          ))}
        </Swiper>

        <View style={styles.detailsContainer}>
          <View style={styles.tagContainer}>
            <Text style={[styles.tag, styles.tagText]}>{hall.halltag1}</Text>
            <Text style={[styles.tag, styles.tagText]}>{hall.halltag2}</Text>
          </View>

          <Text style={styles.title}>{hall.name}</Text>
          <Text style={styles.location}>{hall.location}</Text>

          <Text style={styles.price}>{hall.price}</Text>

          {/* 버튼 영역 상단에 선 추가 */}
          <View style={styles.actionsContainer}>
            <View style={styles.topBorder} />
            <TouchableOpacity style={styles.actionButton}>
              <Image source={require('../../assets/heart.png')} style={styles.icon} />
              <Text style={styles.actionText}>찜</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Image source={require('../../assets/add.png')} style={styles.icon} />
              <Text style={styles.actionText}>견적 추가</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Image source={require('../../assets/review.png')} style={styles.icon} />
              <Text style={styles.actionText}>리뷰 쓰기</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Image source={require('../../assets/share.png')} style={styles.icon} />
              <Text style={styles.actionText}>공유 하기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity 
      style={styles.bookButton}
      onPress={() => navigation.navigate('Reservation', { hall })}
      >
        <Text style={styles.bookText}>예약 선택</Text>
      </TouchableOpacity>
      
    </View>

  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: 'white'
  },
  container: {
    flex:1,
    backgroundColor: 'white'
  },
  wrapper: {
    height: 298,
  },
  slideContainer: {
    width: width,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: { width: width, height: 250 },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  activeDot: {
    backgroundColor: colors.Black,
    width: 8,
    height: 8,
    borderRadius: 5,
  },
  detailsContainer: { paddingTop: 0, paddingHorizontal: 20, paddingBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
  location: { fontSize: 16, color: colors.Grey600, marginVertical: 10 },

  // 태그 디자인 수정
  tagContainer: { flexDirection: 'row', marginVertical: 10 },
  tag: {
    borderWidth: 1.3,
    borderColor: colors.Pink700,
    borderRadius: 10,
    paddingHorizontal: 3,
    paddingVertical: 1,
    marginRight: 7,
    marginBottom: 3,
    alignSelf: 'flex-start'
  },
  tagText: {
    fontSize: 13,
    color: colors.Grey600,
  },

  price: { fontSize: 20, fontWeight: 'bold', marginVertical: 20 },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: colors.Grey600,
    width: '100%',
  },
  actionButton: {
    alignItems: 'center',
    width: 70,
  },
  icon: { width: 24, height: 24, marginBottom: 5 },
  actionText: { color: colors.Grey600, fontSize: 12, textAlign: 'center' },
  bookButton: { 
    marginHorizontal:20,
    backgroundColor: colors.Black, 
    padding: 15, 
    alignItems: 'center', 
    borderRadius: 10,
    marginBottom:30,
   },
  bookText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});

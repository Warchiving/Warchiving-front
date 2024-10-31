import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import colors from '../components/colors';

const { width } = Dimensions.get('window');

export default function HallDetailScreen({ route, navigation }) {
  const { hall } = route.params;
  
  // 하트 상태 관리
  const [isLiked, setIsLiked] = useState(false);

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

          {/* 버튼 영역 상단에 선 추가 */}
          <View style={styles.actionsContainer}>
            <View style={styles.topBorder} />
            <TouchableOpacity 
              style={styles.actionButton}
              onPress={() => setIsLiked(!isLiked)} // 하트 클릭 시 상태 변경
            >
              <Image 
                source={isLiked ? require('../../assets/fullheart.png') : require('../../assets/heart.png')} 
                style={styles.icon} 
              />
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

            {/* 가격과 상담예약, 바로구매 */}
            <View style={styles.footer}>
                <Text style={styles.price}>350,000원</Text>

                {/* 상담예약 */}
                <TouchableOpacity 
                style={styles.cartButton}
                onPress={() => navigation.navigate('Reservation', { hall })}>
                    <Text style={styles.cartButtonText}>상담예약</Text>
                </TouchableOpacity>
                
                {/* 바로구매 */}
                <TouchableOpacity 
                style={styles.confirmButton}       
                onPress={() => navigation.navigate('Reservation', { hall })}>
                    <Text style={styles.confirmButtonText}>바로구매</Text>
                </TouchableOpacity>
            </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: 'white'
  },
  container: {
    flex: 1,
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
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#E3E3E3',
    width: '100%',
  },
  actionButton: {
    alignItems: 'center',
    width: 70,
  },
  icon: { width: 24, height: 24, marginBottom: 5 },
  actionText: { color: colors.Grey600, fontSize: 12, textAlign: 'center' },
  footerPrice: { 
    fontSize: 18,  // 크기 축소
    fontWeight: 'bold', 
    color: colors.Black,
  },
  bookButton: { 
    backgroundColor: colors.Black, 
    paddingVertical: 8,  // 세로 패딩 축소
    paddingHorizontal: 20,  // 가로 패딩 축소
    borderRadius: 8,  // 버튼 모서리 반경 축소
  },
  bookText: { 
    color: 'white', 
    fontSize: 16,  // 텍스트 크기 축소
    fontWeight: 'bold' 
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    padding: 20,
    marginBottom: 20,
},
price: {
    fontSize: 18,
    fontWeight: 'bold',
    width: '48%',
},
cartButton: {
  backgroundColor: '#ddd',
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 5,
  marginRight: 10,
},
cartButtonText: {
  color: 'black',
},
confirmButton: {
  backgroundColor: 'black',
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 5,
},
confirmButtonText: {
  color: 'white',
  fontWeight: 'bold'
},
});

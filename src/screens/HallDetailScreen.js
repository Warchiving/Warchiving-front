import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import colors from '../components/colors';
import InfoCard from '../components/InfoCard';
import InfoCardTags from '../components/InfoCardTags'

const { width } = Dimensions.get('window');

export default function HallDetailScreen({ route, navigation }) {
  const { hall } = route.params;

  // 하트 상태 관리
  const [isLiked, setIsLiked] = useState(false);

  // 슬라이드 이미지 배열
  const slides = [
    hall.detailImages[0],
    hall.detailImages[1],
    hall.detailImages[2],
  ];

  const points = [
    "2024년 3/30 그랜드오픈!",
    "편리한 교통, 선릉역(2호선/분당선) 1번 출구 위치",
    "분당, 강남, 송파 중간 지점, 접근성 용이",
    "단독홀, 1시간 반 여유롭게 단독웨딩 진행",
    "밝은홀 or 어두운홀 2가지 컨셉 중 선택 가능",
    "강남 최대 규모의 신부대기실(파우더룸과 화장실 有)",
    "특급호텔 출신 셰프의 프리미엄 뷔페",
    "로비 대형스크린 설치(식전영상 및 식 생중계 상영)",
    "웰컴드링크 제공 서비스",
  ];

  const user_name = '오구밍'

  const [selectedCategory, setSelectedCategory] = useState('전체');

  const categories = ['전체', '신부대기실', '연회장'];
  const images = [
    { category: '전체', source: require('../../assets/detail_img/detail_image1.jpg') },
    { category: '전체', source: require('../../assets/detail_img/detail_image2.jpg') },
    { category: '전체', source: require('../../assets/detail_img/detail_image3.jpg') },
    { category: '신부대기실', source: require('../../assets/detail_img/detail_image2.jpg') },
    { category: '신부대기실', source: require('../../assets/detail_img/detail_image3.jpg') },
    { category: '연회장', source: require('../../assets/detail_img/detail_image4.jpg') },
    { category: '연회장', source: require('../../assets/detail_img/detail_image5.jpg') },
    // 추가 이미지가 있다면 여기에 추가하세요
  ];

  const filteredImages = images.filter(image => selectedCategory === '전체' || image.category === selectedCategory);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>

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

        {/* 태그 */}
        <View style={styles.detailsContainer}>
          <View style={styles.tagContainer}>
            <Text style={[styles.tag, styles.tagText]}>{hall.halltag1}</Text>
            <Text style={[styles.tag, styles.tagText]}>{hall.halltag2}</Text>
          </View>

          {/* 샵 이름, 위치 */}
          <Text style={styles.title}>{hall.name}</Text>
          <Text style={styles.explaination}>The New Luxury Wedding Venue, 로맨틱한 순백의 공간에서 우아하고 감각적인 웨딩을 경험하세요.</Text>
          <View style={{ flexDirection: 'row', marginVertical: 15, }}>
            <Image source={require('../../assets/Pin_fill.png')} style={styles.pinImg} />
            <Text style={styles.location}>{hall.location} <Text style={{ color: '#FD7372' }}>지도 보기</Text></Text>
          </View>

          {/* 버튼 영역 상단에 선 추가 */}
          <View style={styles.actionsContainer}>
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

        {/* 구분선 추가 */}
        <Image source={require('../../assets/detailScreen_line.png')} style={{ height: 13, }} />

        {/* 카드 */}
        <View style={{ marginTop: 30 }}>
          <Text style={{ fontSize: 17, fontWeight: '600', marginLeft: 25 }}>
            <Text style={{ color: '#FD7372' }}>{user_name}</Text>님의 취향에 맞춘
          </Text>
          <Text style={{ fontSize: 17, fontWeight: '600', marginLeft: 25, marginTop: 2 }}>
            맞춤 웨딩홀입니다!
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ flexDirection: 'row', paddingVertical: 20 }} // 자식 요소를 가로로 나열
          >
            <InfoCard
              title="추가금 없는"
              subtitle="웨딩홀 예약금"
              imageSource={require('../../assets/detail_icon/money.png')}
              infoText={`1,100,000원`}
            />
            <InfoCard
              title="몇명까지 수용가능한가요?"
              subtitle="수용인원"
              imageSource={require('../../assets/detail_icon/person.png')}
              infoText={`최대 300명`}
            />
            <InfoCardTags
              title="화려한 생화와 깔끔한 버진로드"
              subtitle="예쁜_웨딩홀"
              imageSource={require('../../assets/detail_icon/hall.png')}
            />
            <InfoCardTags
              title="하객들이 오기에 편한"
              subtitle="교통편의"
              imageSource={require('../../assets/detail_icon/car.png')}
            />
          </ScrollView>
        </View>

        {/* key points! 설명서 */}
        <View style={{ padding: 25, }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
            르비르모어 선릉 <Text style={styles.highlight}>Advantages!</Text>
          </Text>
          <View style={styles.pointContainer}>
            {points.map((point, index) => (
              <Text key={index} style={styles.point}>• {point}</Text>
            ))}
          </View>
        </View>
        
        {/* 이미지 뷰 */}
        <View style={styles.picButtonContainer}>
        {categories.map(category => (
          <TouchableOpacity
            key={category}
            style={[styles.picButton, selectedCategory === category && styles.picButtonActive]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={[styles.picButtonText, selectedCategory === category && styles.picButtonTextActive]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView contentContainerStyle={styles.picImageContainer} horizontal showsHorizontalScrollIndicator={false}>
        {filteredImages.map((image, index) => (
          <Image key={index} source={image.source} style={styles.picImage} />
        ))}
      </ScrollView>

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
  title: { fontSize: 20, fontWeight: 'bold' },
  location: { fontSize: 14, color: colors.Grey600, marginVertical: 10 },

  // 태그 디자인 수정
  tagContainer: { flexDirection: 'row', marginVertical: 10 },
  tag: {
    borderWidth: 1.3,
    borderColor: colors.Pink700,
    borderRadius: 11,
    padding: 3,
    paddingHorizontal: 11,
    marginRight: 7,
    marginBottom: 3,
    alignSelf: 'flex-start'
  },
  tagText: {
    fontSize: 13,
    color: colors.Grey600,
  },
  actionsContainer: {
    alignItems: 'center',
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
  topBorder: {
    alignItems: 'center',
  },
  explaination: {
    fontSize: 15,
    color: colors.Black,
    marginTop: 8,
  },
  pinImg: {
    width: 25,
    height: 25,
    marginTop: 7,
  },
  highlight: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FD7372', // 핑크색 강조
  },
  pointContainer: {
    marginTop: 10,
  },
  point: {
    fontSize: 16,
    color: '#333',
    marginVertical: 5,
  },
  picButtonContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    marginLeft:20,
    marginTop:20,
  },
  picButton: {
    padding:10,
    paddingVertical: 8,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    alignItems: 'center',
  },
  picButtonActive: {
    borderWidth: 1,
    borderColor: colors.Black,
  },
  picButtonText: {
    fontSize: 14,
    color: '#ccc',
  },
  picButtonTextActive: {
    color: colors.Black
  },
  picImageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  picImage: {
    width: 320,
    height: 240,
    marginLeft:25,
    borderRadius:2,
  },
});

// HallListScreen.js
import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';  // SearchBar 컴포넌트 불러오기
import HallItem from '../components/HallItem';  // HallItem 컴포넌트 불러오기
import SortFilterComponent from '../components/SortFilterComponent';  // 새로 만든 정렬 및 필터 컴포넌트 불러오기

const hallList = [
  {
    id: 1,
    halltag1: '예쁜 웨딩홀',
    halltag2: '교통 편의',
    name: '양재 AT 웨딩홀',
    location: '서울특별시 서초구 양재동',
    price: '350,000원부터 시작',
    image: require('../../assets/GreyImg.png'),
  },
  {
    id: 2,
    halltag1: '주차장',
    halltag2: '신부 대기',
    name: '밀리토피아 호텔',
    location: '경기도 성남시 창곡동',
    price: '370,000원 균일가',
    image: require('../../assets/GreyImg.png'),
  },
  {
    id: 3,
    halltag1: '생화 장식',
    halltag2: '교통 편의',
    name: '더 컨벤션',
    location: '서울특별시 영등포구',
    price: '400,000원부터 시작',
    image: require('../../assets/GreyImg.png'),
  },
  {
    id: 4,
    halltag1: '주차장',
    halltag2: '교통 편의',
    name: '밀리토피아 호텔',
    location: '경기도 성남시 창곡동',
    price: '400,000원부터 시작',
    image: require('../../assets/GreyImg.png'),
  },
  // 필요한 만큼 추가 가능
];

export default function HallListScreen({ navigation }) {

  const onSearch = () => {
    console.log('Search button pressed');
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* 검색 바 */}
        <View style={{ alignItems: 'center', padding: 15 }}>
          <SearchBar placeholder="업체를 검색해보세요" onSearch={onSearch} />
        </View>
        
        {/* 필터와 정렬 버튼 */}
        <SortFilterComponent />

        {/* 업체 리스트 */}
        <View style={styles.listContainer}>
          {hallList.map((hall) => (
            <HallItem key={hall.id} hall={hall} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  listContainer: {
    paddingHorizontal: 20,
  },
});
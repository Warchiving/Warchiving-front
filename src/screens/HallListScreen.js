import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import SearchBar from '../components/SearchBar';
import HallItem from '../components/HallItem';
import SortFilter from '../components/SortFilter';

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
    name: '롯데 호텔',
    location: '서울특별시 XX구',
    price: '400,000원부터 시작',
    image: require('../../assets/GreyImg.png'),
  },
];

// 필터 적용 시 리스트 교체를 위한 임의의 필터된 리스트
const filteredHallList = [
  {
    id: 5,
    halltag1: '신부대기실 완비',
    halltag2: '교통 편리',
    name: '서울 웨딩홀',
    location: '서울특별시 강남구',
    price: '450,000원부터 시작',
    image: require('../../assets/GreyImg.png'),
  },
  {
    id: 6,
    halltag1: '주차장',
    halltag2: '접근성 우수',
    name: '신라 호텔',
    location: '서울특별시 중구',
    price: '500,000원부터 시작',
    image: require('../../assets/GreyImg.png'),
  },
  {
    id: 7,
    halltag1: '럭셔리 인테리어',
    halltag2: '전통 미',
    name: '그랜드 하얏트 호텔',
    location: '서울특별시 용산구',
    price: '550,000원부터 시작',
    image: require('../../assets/GreyImg.png'),
  },
  {
    id: 8,
    halltag1: '대형 연회장',
    halltag2: '야외 공간 제공',
    name: '조선 팰리스',
    location: '서울특별시 강남구',
    price: '600,000원부터 시작',
    image: require('../../assets/GreyImg.png'),
  },
];

export default function HallListScreen({ navigation }) {
  const [hallListState, setHallListState] = useState(hallList);
  const [isFilterApplied, setIsFilterApplied] = useState(false); // 필터 적용 상태 관리

  const onSearch = () => {
    console.log('Search button pressed');
  };

  // 맞춤 필터 적용 시와 그렇지 않을 때의 리스트 처리
  const toggleFilter = (filterApplied) => {
    setIsFilterApplied(filterApplied);
    if (filterApplied) {
      setHallListState(filteredHallList);  // 필터가 적용되면 다른 리스트로 교체
    } else {
      setHallListState(hallList);  // 필터가 해제되면 원래 리스트로 복원
    }
  };

  // 랜덤 정렬 함수 적용해서 보여주기
  const randomizeHallList = () => {
    const shuffledList = [...hallListState].sort(() => Math.random() - 0.5);
    setHallListState(shuffledList);
  };

  return (
    <View style={styles.container}>
      {/* 검색 바 */}
      <View style={{ alignItems: 'center', padding: 15 }}>
        <SearchBar placeholder="업체를 검색해보세요" onSearch={onSearch} />
      </View>

      {/* 필터와 정렬 버튼 */}
      <SortFilter onSortChange={randomizeHallList} onFilterChange={toggleFilter} />

      {/* FlatList를 사용한 리스트 렌더링 */}
      <FlatList
        data={hallListState}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <HallItem hall={item} />}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
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
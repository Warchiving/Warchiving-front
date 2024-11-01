import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import colors from '../../components/colors';
import LikedProductCard from '../../components/LikedProductCard';
import SearchBar from '../../components/SearchBar';

// 필터 탭 컴포넌트
const FilterTabs = ({ activeFilter, onFilterChange }) => {
  const filters = ['전체', '스튜디오', '메이크업', '드레스', '홀'];

  return (
    <View style={styles.filterContainer}>
      {filters.map((filter) => (
        <TouchableOpacity
          key={filter}
          style={[styles.filterButton, activeFilter === filter && styles.activeFilterButton]}
          onPress={() => onFilterChange(filter)}
        >
          <Text style={[styles.filterText, activeFilter === filter && styles.activeFilterText]}>
            {filter}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const LikedProductsScreen = () => {
  const [activeFilter, setActiveFilter] = useState('전체');

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  // 예시 데이터
  const products = [
    { id: '1', category: '메이크업', title: '세모 메이크업', price: 20000 },
    { id: '2', category: '스튜디오', title: '별이 스튜디오', price: 50000 },
    { id: '3', category: '드레스', title: '엘레강스 드레스', price: 30000 },
    // 추가 데이터...
  ];

  // 선택된 필터에 따라 제품 목록 필터링
  const filteredProducts = activeFilter === '전체' 
    ? products 
    : products.filter((product) => product.category === activeFilter);

  return (
    <View style={styles.container}>
      <SearchBar 
        containerStyle={styles.searchBarContainer} 
        inputContainerStyle={styles.searchInputContainer}
      />
      <FilterTabs activeFilter={activeFilter} onFilterChange={handleFilterChange} />
      
      {/* 필터링된 데이터 FlatList로 렌더링 */}
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => (
          <LikedProductCard
            title={item.title}
            price={item.price}
            // 추가적으로 필요한 props가 있으면 여기에 전달
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : colors.White,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  filterButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: colors.White,
    marginHorizontal: 5,
    borderWidth : 1,
    borderColor : colors.Grey300 , 
  },
  activeFilterButton: {
    backgroundColor: colors.Pink900, 
    borderWidth : 1,
    borderColor : colors.Pink900,
  },
  filterText: {
    fontSize: 14,
    color: '#555',
  },
  searchBarContainer: {
    margin : 10 , 
  },
  searchInputContainer: {
    backgroundColor: '#e0e0e0', // 검색창 내부 색상 설정
    borderRadius: 10,
  },
});

export default LikedProductsScreen;

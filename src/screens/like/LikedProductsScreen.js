import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import colors from '../../components/colors';
import LikedProductCard from '../../components/LikedProductCard';
import BlackCard from '../../components/Blackcard';
import SearchBar from '../../components/SearchBar';
import { useNavigation } from '@react-navigation/native';

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
  const [selectedProducts, setSelectedProducts] = useState({});
  const navigation = useNavigation();

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handleCardPress = (id) => {
    setSelectedProducts((prevSelected) => ({
      ...prevSelected,
      [id]: !prevSelected[id],
    }));
  };

  const isAnySelected = Object.values(selectedProducts).some((isSelected) => isSelected);

  const products = [
    {
      id: '1',
      category: '홀',
      title: '르비르모어 선릉',
      price: '11,000,000',
      imageSrc: require('../../../assets/HallList/Hall6.png'),
      onHeartPress: () => console.log('찜하기 눌림'),
      onCartPress: () => console.log('장바구니 추가 눌림'),
      isFavorite: true,
    },
    {
      id: '2',
      category: '홀',
      title: '메종디탈리',
      price: '12,100,000',
      imageSrc: require('../../../assets/HallDetail/Detail4.png'),
      onHeartPress: () => console.log('찜하기 눌림'),
      onCartPress: () => console.log('장바구니 추가 눌림'),
      isFavorite: true,
    },
    {
      id: '3',
      category: '홀',
      title: '소노펠리체컨벤션',
      price: '8,000,000',
      imageSrc: require('../../../assets/HallDetail/Detail18.png'),
      onHeartPress: () => console.log('찜하기 눌림'),
      onCartPress: () => console.log('장바구니 추가 눌림'),
      isFavorite: true,
    },
    {
      id: '4',
      category: '메이크업',
      title: '웨딩 메이크업',
      price: '80,000',
      imageSrc: require('../../../assets/makeup/makeup_img1.jpg'),
      onHeartPress: () => console.log('찜하기 눌림'),
      onCartPress: () => console.log('장바구니 추가 눌림'),
      isFavorite: true,
    },
    {
      id: '5',
      category: '메이크업',
      title: '오늘',
      price: '80,000',
      imageSrc: require('../../../assets/makeup/makeup_img6.jpg'),
      onHeartPress: () => console.log('찜하기 눌림'),
      onCartPress: () => console.log('장바구니 추가 눌림'),
      isFavorite: true,
    },
    {
      id: '6',
      category: '스튜디오',
      title: '스튜디오 M',
      price: '500,000',
      imageSrc: require('../../../assets/studio/studio_img3.jpg'),
      onHeartPress: () => console.log('찜하기 눌림'),
      onCartPress: () => console.log('장바구니 추가 눌림'),
      isFavorite: true,
    },
    {
      id: '7',
      category: '홀',
      title: '노블발렌티 대치점',
      price: '9,500,000',
      imageSrc: require('../../../assets/HallList/Hall4.png'),
      onHeartPress: () => console.log('찜하기 눌림'),
      onCartPress: () => console.log('장바구니 추가 눌림'),
      isFavorite: true,
    },
  ];

  // 선택된 필터에 따라 제품 목록 필터링
  const filteredProducts = activeFilter === '전체' 
    ? products 
    : products.filter((product) => product.category === activeFilter);

  return (
    <View style={styles.container}>
      <View style={styles.searchBarWrapper}>
        <SearchBar
          containerStyle={styles.searchBarContainer} 
          inputContainerStyle={styles.searchInputContainer}
        />
      </View>
      <FilterTabs activeFilter={activeFilter} onFilterChange={handleFilterChange} />
      
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCardPress(item.id)}>
            {selectedProducts[item.id] ? (
              <BlackCard
                title={item.title}
                price={item.price}
                imageSrc={item.imageSrc}
              />
            ) : (
              <LikedProductCard
                title={item.title}
                price={item.price}
                imageSrc={item.imageSrc}
              />
            )}
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.flatListContentContainer}
        style={styles.flatList}
      />

      <View style={{ backgroundColor: 'white', flex: 1 }}>
        {/* 흰색 배경 위에 버튼 */}
        <TouchableOpacity
  style={[
    styles.saveButton,
    isAnySelected && styles.saveButtonActive // 선택 시 활성화 스타일 추가
  ]}
  onPress={() => navigation.navigate('LikeFin')}
  disabled={!isAnySelected} // 선택된 항목이 없으면 버튼 비활성화
>
  <Text style={[styles.saveButtonText, isAnySelected && styles.saveButtonTextActive]}>
    선택 완료
  </Text>
</TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 6,
    marginBottom: 4,
  },
  filterButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: colors.White,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: colors.Grey300,
  },
  activeFilterButton: {
    backgroundColor: colors.Pink900,
    borderWidth: 1,
    borderColor: colors.Pink900,
  },
  filterText: {
    fontSize: 14,
    color: '#555',
  },
  searchBarWrapper: {
    padding: 10,
    width: '98%',
  },
  searchBarContainer: {},
  searchInputContainer: {
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
  },
  activeFilterText: {
    color: colors.White,
  },
  flatListContentContainer: {
    paddingBottom: 160, // 저장하기 버튼과 겹치지 않도록 추가 패딩
  },
  saveButton: {
    backgroundColor: '#cccccc',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    position: 'absolute', // 절대 위치 지정
    bottom: 20, // 화면 하단에서 20pt 위에 고정
    left: 16,
    right: 16,
  },
  saveButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  saveButtonActive: {
    backgroundColor: 'black', // 활성화 시 검정색 배경
  },
  saveButtonTextActive: {
    color: 'white', // 활성화 시 텍스트 흰색
  },
  
});

export default LikedProductsScreen;

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import SelectedCard from '../../components/SelectedCard';
import colors from '../../components/colors';
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

const SelectedItems = ({ items }) => {
  const navigation = useNavigation(); // 네비게이션 훅 추가

  return (
    <View style={styles.selectedItemsContainer}>
      <Text style={styles.selectedItemsTitle}>선택된 업체 {items.length}개</Text>
      <FlatList
        data={[...items, { id: 'add', isAddButton: true }]} // 플러스 박스 추가
        renderItem={({ item }) => (
          item.isAddButton ? (
            <TouchableOpacity
              style={styles.addBox}
              onPress={() => navigation.navigate('LikeProducts')} // 플러스 박스 클릭 시 네비게이션
            >
              <Text style={styles.addIcon}>+</Text>
            </TouchableOpacity>
          ) : (
            <SelectedCard
              title={item.title}
              price={item.price}
              onHeartPress={item.onHeartPress}
              onCartPress={item.onCartPress}
              isFavorite={item.isFavorite}
              imageSource={item.imageSource}
            />
          )
        )}
        keyExtractor={(item, index) => item.id || index.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};


// 메인 컴포넌트
const LikeEditScreen = () => {
  const [activeFilter, setActiveFilter] = useState('전체');
  const products = [
    {
      title: '오늘',
      price: '80,000',
      onHeartPress: () => console.log('찜하기 눌림'),
      onCartPress: () => console.log('장바구니 추가 눌림'),
      imageSource: require('../../../assets/makeup/makeup_img6.jpg'),
      isFavorite: true,
    },
    // 추가 상품들...
  ];

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    console.log(`${filter} 필터 선택됨`);
  };

  return (
    <View style={styles.container}>
      {/* 상단 메인 이미지 */}
      <View style={styles.mainImageContainer}>
        <Image source={require('../../../assets/img_edit_sample.png')} style={styles.mainImage} />
      </View>
      <FilterTabs activeFilter={activeFilter} onFilterChange={handleFilterChange} />
      <View style={styles.separator} />
      <SelectedItems items={products} />

      {/* 저장하기 버튼 */}
      <TouchableOpacity style={styles.saveButton} onPress={() => console.log('저장하기 눌림')}>
        <Text style={styles.saveButtonText}>저장하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
  },
  mainImageContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  mainImage: {
    width: 150, 
    height: 150,
    resizeMode: 'contain',
    borderRadius: 10,
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
  activeFilterText: {
    color: '#fff', // 활성 필터의 텍스트 색상 (흰색)
  },
  selectedItemsContainer: {
    padding: 16,
  },
  selectedItemsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  columnWrapper: {
    justifyContent: 'flex-start',
  },
  contentContainer: {
    paddingBottom: 20,
  },
  separator: {
    height: 4,
    backgroundColor: colors.Grey300 , 
    marginHorizontal: 0, // 좌우 여백
    marginTop: 8,
  },
  addBox: {
    height : 168, 
    width: 112,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft : 12, 
  },
  addIcon: {
    fontSize: 40,
    color: '#cccccc',
  },
  saveButton: {
    backgroundColor: '#f2f2f2', // 회색 배경
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    borderRadius: 8,
    marginTop : 140,
  },
  saveButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LikeEditScreen;

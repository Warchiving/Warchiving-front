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
  const navigation = useNavigation();
  const numColumns = 3;
  

  // addBox 아이템을 items 배열의 마지막에 추가
  const itemsWithAddBox = [
    ...items,
    { id: 'addBox', isAddButton: true }
  ];

  return (
    <View style={styles.selectedItemsContainer}>
      <Text style={styles.selectedItemsTitle}>선택된 업체 {items.length}개</Text>
      
      <FlatList
        data={itemsWithAddBox}
        renderItem={({ item }) =>
          item.isAddButton ? (
            <TouchableOpacity
              style={styles.addBox}
              onPress={() => navigation.navigate('LikeProducts')}
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
        }
        keyExtractor={(item, index) => item.id || index.toString()}
        numColumns={numColumns}
        key={numColumns}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};


// 메인 컴포넌트
const LikeFinScreen = () => {
  const [activeFilter, setActiveFilter] = useState('전체');
  const navigation = useNavigation();

  const products = [
    {
      title: '오늘',
      price: '80,000',
      onHeartPress: () => console.log('찜하기 눌림'),
      onCartPress: () => console.log('장바구니 추가 눌림'),
      imageSource: require('../../../assets/makeup/makeup_img6.jpg'),
      isFavorite: true,
    },
    {
      title: '르비르모어 선릉',
      price: '11,000,000',
      onHeartPress: () => console.log('찜하기 눌림'),
      onCartPress: () => console.log('장바구니 추가 눌림'),
      imageSource: require('../../../assets/HallList/Hall6.png'),
      isFavorite: true,
    },
    {
      title: '스튜디오 M',
      price: '9,500,000',
      onHeartPress: () => console.log('찜하기 눌림'),
      onCartPress: () => console.log('장바구니 추가 눌림'),
      imageSource: require('../../../assets/HallList/Hall4.png'),
      isFavorite: true,
    },
  
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
      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => navigation.navigate('LikeMade')} // LikeMade 화면으로 이동
      >
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
    padding: 6,
    marginTop : 10,
    flex: 1, // 이 부분 추가
  },
  selectedItemsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  columnWrapper: {
    justifyContent: 'flex-start',
  },
  contentContainer: {
    paddingBottom: 100, // 저장하기 버튼이 덮이지 않도록 여백 추가
  },
  separator: {
    height: 4,
    backgroundColor: colors.Grey300 , 
    marginHorizontal: 0,
    marginTop: 8,
  },
  addBox: {
    height : 168, 
    width: 112,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    marginTop : 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft : 12, 
  },
  addIcon: {
    fontSize: 40,
    color: '#cccccc',
  },
  saveButton: {
    backgroundColor: '#222222',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    position: 'absolute', // 버튼을 하단에 고정
    bottom: 20, // 화면 하단에서 약간 위로 띄워서 배치
    left: 16,
    right: 16,
  },
  saveButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LikeFinScreen;

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet , FlatList} from 'react-native';
import colors from '../components/colors';
import ProductCard from '../components/ProductCard';
import ArchiveCard from '../components/ArchiveCard';
import { useNavigation } from '@react-navigation/native';


const ProductsScreen = () => {
  const [activeTab, setActiveTab] = useState('찜한 상품');

  return (
    <View style={styles.tabContainer}>
      <View style={[styles.bottomTabContainer, { flexDirection: 'row', justifyContent: 'flex-start' }]}>
        <TouchableOpacity
          style={[
            styles.bottomTabButton,
            activeTab === '찜한 상품' ? styles.activeBottomTab : styles.inactiveBottomTab
          ]}
          onPress={() => setActiveTab('찜한 상품')}
          disabled={activeTab === '찜한 상품'} // 비활성화 상태 추가
        >
          <Text style={activeTab === '찜한 상품' ? styles.activeBottomTabText : styles.inactiveTabText}>
            찜한 상품
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.bottomTabButton,
            activeTab === '나의 아카이브' ? styles.activeBottomTab : styles.inactiveBottomTab
          ]}
          onPress={() => setActiveTab('나의 아카이브')}
          disabled={activeTab === '나의 아카이브'} // 비활성화 상태 추가
        >
          <Text style={activeTab === '나의 아카이브' ? styles.activeBottomTabText : styles.inactiveTabText}>
            나의 아카이브
          </Text>
        </TouchableOpacity>
      </View>

      {/* 선택된 하위 탭에 따라 다른 컴포넌트 표시 */}
      {activeTab === '찜한 상품' ? (
        <View>
          <ProductList products={products} />
        </View>
      ) : (
        <View>
          <ArchiveList archives={archives} />
        </View>
      )}
    </View>
  );
};


// 임시 데이터 (나중에 실제 데이터로 변경)
const products = [
  {
    title: '세모 메이크업',
    price: 20000,
    onHeartPress: () => console.log('찜하기 눌림'),
    onCartPress: () => console.log('장바구니 추가 눌림'),
    isFavorite: true,
  },
  {
    title: '세모 메이크업',
    price: 20000,
    onHeartPress: () => console.log('찜하기 눌림'),
    onCartPress: () => console.log('장바구니 추가 눌림'),
    isFavorite: true,
  },
];

const archives = [
  {
    id: '1',
    title: '내가 만든 견적',
    date: '2024.09.02 최종 편집',
    imageSrc: require('../../assets/arc_sample.png'),
    onOptionsPress: () => console.log('옵션 버튼 눌림'),
  },
  {
    id: '2',
    title: '내가 만든 견적',
    date: '2024.09.02 최종 편집',
    imageSrc: require('../../assets/arc_sample.png'),
    onOptionsPress: () => console.log('옵션 버튼 눌림'),
  },
];


// ProductList 컴포넌트
const ProductList = ({ products }) => {
  return (
    <View style={styles.productGrid}>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          title={product.title}
          price={product.price}
          onHeartPress={product.onHeartPress}
          onCartPress={product.onCartPress}
          isFavorite={product.isFavorite}
        />
      ))}
    </View>
  );
};

// ArchiveList 컴포넌트
const ArchiveList = ({ archives }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.productGrid}>
      {archives.map((archives, index) => (
        <ArchiveCard
            title={archives.title}
            date={archives.date}
            imageSrc={archives.imageSrc}
            onOptionsPress={() => navigation.navigate('LikeEdit')}
          />
        ))}
    </View>
  );
};


const InfoScreen = () => (
  <View style={styles.content}>
    <Text>정보 페이지</Text>
  </View>
);

// 커스텀 상단 탭 네비게이터 정의
const TopTabsNavigator = () => {
  const [activeTopTab, setActiveTopTab] = useState('상품');

  return (
    <View style={styles.container}>
      {/* 상단 탭 */}
      <View style={styles.topTabContainer}>
      <TouchableOpacity
        style={[
          styles.topTabButton,
          activeTopTab === '상품' ? styles.activeTopTab : styles.inactiveTopTab
        ]}
        onPress={() => setActiveTopTab('상품')}
      >
        <Text style={activeTopTab === '상품' ? styles.activeTabText : styles.inactiveTopTabText}>
          상품
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.topTabButton,
          activeTopTab === '정보' ? styles.activeTopTab : styles.inactiveTopTab
        ]}
        onPress={() => setActiveTopTab('정보')}
      >
        <Text style={activeTopTab === '정보' ? styles.activeTabText : styles.inactiveTopTabText}>
          정보
        </Text>
      </TouchableOpacity>   
      </View>

      {/* 선택된 상단 탭에 따라 다른 컴포넌트 표시 */}
      {activeTopTab === '상품' ? <ProductsScreen /> : <InfoScreen />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
  },
  // 상단 탭 스타일
  topTabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff',
  },
  topTabButton: {
    flex: 1, // 탭 버튼을 균등하게 나눔
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeTopTab: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    width: '50%', // 각 탭의 절반을 차지하도록 설정
  },
  activeTabText: {
    color: colors.Black,
    fontWeight: 'bold',
  },
  inactiveTabText: {
    color: colors.White,
  },
  inactiveBottomTab: {
    backgroundColor: colors.Grey300, // 비활성화 시 회색 배경
  },

  // 하단 탭 스타일
  tabContainer: {
    flex: 1,
    backgroundColor: colors.White,
  },
  bottomTabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff',
  },
  bottomTabButton: {
    width: 95, 
    height: 30,
    alignItems: 'center', // 버튼 텍스트 가운데 정렬
    justifyContent: 'center', // 버튼 텍스트 세로 가운데 정렬
    marginLeft: 15, // 버튼 사이 간격 추가
    borderRadius: 5,
  },
  activeBottomTab: {
    backgroundColor: 'black',
  },
  activeBottomTabText: {
    color: colors.White,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTopTabText : {
    color : colors.Black,
  },
  inactiveTopTabText : {
    color : colors.Grey300,
  },
  activeTopTab: {
    borderBottomColor: 'black',  // 활성화된 탭의 진한 하단 선
    borderBottomWidth: 2,        // 두께 설정
  },
  inactiveTopTab: {
    borderBottomColor: 'lightgray',  // 비활성화된 탭의 연한 하단 선
    borderBottomWidth: 1,            // 두께 설정
  },
  activeTabText: {
    color: 'black',  // 활성화된 탭의 진한 글씨 색상
    fontWeight: 'bold',
  },
  inactiveTopTabText: {
    color: 'lightgray',  // 비활성화된 탭의 연한 글씨 색상
  },  
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
});

export default TopTabsNavigator;

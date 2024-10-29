import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../components/colors';

const ProductsScreen = () => {
  const [activeTab, setActiveTab] = useState('찜한 상품');

  return (
    <View style={styles.tabContainer}>
      <View style={styles.bottomTabContainer}>
        <TouchableOpacity
          style={[styles.bottomTabButton, activeTab === '찜한 상품' ? styles.activeBottomTab : {}]}
          onPress={() => setActiveTab('찜한 상품')}
        >
          <Text style={activeTab === '찜한 상품' ? styles.activeBottomTabText : styles.inactiveTabText}>
            찜한 상품
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.bottomTabButton, activeTab === '나의 아카이브' ? styles.activeBottomTab : {}]}
          onPress={() => setActiveTab('나의 아카이브')}
        >
          <Text style={activeTab === '나의 아카이브' ? styles.activeBottomTabText : styles.inactiveTabText}>
            나의 아카이브
          </Text>
        </TouchableOpacity>
      </View>

      {/* 선택된 하위 탭에 따라 다른 컴포넌트 표시 */}
      {activeTab === '찜한 상품' ? (
        <View style={styles.content}>
          <Text>찜한 상품 페이지</Text>
        </View>
      ) : (
        <View style={styles.content}>
          <Text>나의 아카이브 페이지</Text>
        </View>
      )}
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
          style={[styles.topTabButton, activeTopTab === '상품' ? styles.activeTopTab : {}]}
          onPress={() => setActiveTopTab('상품')}
        >
          <Text style={activeTopTab === '상품' ? styles.activeTabText : styles.inactiveTabText}>
            상품
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.topTabButton, activeTopTab === '정보' ? styles.activeTopTab : {}]}
          onPress={() => setActiveTopTab('정보')}
        >
          <Text style={activeTopTab === '정보' ? styles.activeTabText : styles.inactiveTabText}>
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
    color: 'gray',
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
    width: 80, 
    height: 30,
    alignItems: 'center', // 버튼 텍스트 가운데 정렬
    justifyContent: 'center', // 버튼 텍스트 세로 가운데 정렬
    marginLeft: 10, // 버튼 사이 간격 추가
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
});

export default TopTabsNavigator;

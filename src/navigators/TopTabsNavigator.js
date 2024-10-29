import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// 상단 탭에 연결될 화면들
const ProductsScreen = () => {
  const [activeTab, setActiveTab] = useState('찜한 상품');

  return (
    <View style={styles.container}>
      {/* 하위 버튼 탭 */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === '찜한 상품' ? styles.activeTab : {}]}
          onPress={() => setActiveTab('찜한 상품')}
        >
          <Text style={activeTab === '찜한 상품' ? styles.activeTabText : styles.inactiveTabText}>
            찜한 상품
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === '나의 아카이브' ? styles.activeTab : {}]}
          onPress={() => setActiveTab('나의 아카이브')}
        >
          <Text style={activeTab === '나의 아카이브' ? styles.activeTabText : styles.inactiveTabText}>
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
  },
  topTabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  topTabButton: {
    padding: 10,
    borderRadius: 5,
  },
  activeTopTab: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tabButton: {
    padding: 10,
    borderRadius: 5,
  },
  activeTab: {
    backgroundColor: 'black',
  },
  activeTabText: {
    color: 'white',
    fontWeight: 'bold',
  },
  inactiveTabText: {
    color: 'gray',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TopTabsNavigator;

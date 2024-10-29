import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList, Animated, TouchableWithoutFeedback } from 'react-native';
import colors from './colors';

const SortFilter = ({ onSortChange, onFilterChange }) => {
  const [isFilterApplied, setIsFilterApplied] = useState(false); // 필터 상태 관리
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState('좋아요 순');
  const slideAnim = new Animated.Value(300);  // 드롭다운이 시작할 위치 (화면 아래)

  useEffect(() => {
    if (isModalVisible) {
      // 드롭다운이 올라오는 애니메이션
      Animated.timing(slideAnim, {
        toValue: 0, // 화면 위로 올라올 위치
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      // 드롭다운이 내려가는 애니메이션
      Animated.timing(slideAnim, {
        toValue: 300, // 다시 화면 아래로 내려갈 위치
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isModalVisible]);

  const sortOptions = ['좋아요 순', '가격 낮은 순', '가격 높은 순', '최신 순'];

  const handleSortOptionPress = (option) => {
    setSelectedSortOption(option);
    setIsModalVisible(false);

    // 정렬을 변경할 때 호출
    if (onSortChange) {
      onSortChange();
    }
  };

  const handleFilterPress = () => {
    const newFilterState = !isFilterApplied;
    setIsFilterApplied(newFilterState);

    // 필터 상태 변경 시 호출
    if (onFilterChange) {
      onFilterChange(newFilterState);
    }
  };

  return (
    <View style={styles.container}>
      {/* 필터 적용 버튼 */}
      <TouchableOpacity
        style={[styles.filterButton, isFilterApplied && styles.filterApplied]}
        onPress={handleFilterPress} // 필터 상태 변경 시 호출
      >
        <Text style={styles.filterButtonText}>
          {isFilterApplied ? '맞춤 필터 적용중' : '맞춤 필터 적용 안됨'}
        </Text>
      </TouchableOpacity>

      {/* 정렬 버튼 */}
      <TouchableOpacity
        style={styles.sortButton}
        onPress={() => setIsModalVisible(true)}
      >
        <Text style={styles.sortButtonText}>
          {selectedSortOption} ▼
        </Text>
      </TouchableOpacity>

      {/* Modal을 사용한 드롭다운 */}
      <Modal
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="none"  // 애니메이션 적용 제거
      >
        {/* 어두운 배경을 고정 */}
        <TouchableWithoutFeedback onPress={() => setIsModalVisible(false)}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>

        {/* 드롭다운만 애니메이션 */}
        <Animated.View style={[styles.modalContainer, { transform: [{ translateY: slideAnim }] }]}>
          <FlatList
            data={sortOptions}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.modalItem}
                onPress={() => handleSortOptionPress(item)}
              >
                <Text style={styles.modalItemText}>{item}</Text>
              </TouchableOpacity>
            )}
            ListFooterComponent={<View style={{ height: 50 }} />}  // 모달 선택 밑에 공백 조절
          />
        </Animated.View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.Black,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  filterApplied: {
    backgroundColor: '#000',
  },
  filterButtonText: {
    color: '#fff',
  },
  sortButton: {
    borderWidth: 1,
    borderColor: colors.Black,
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  sortButtonText: {
    color: colors.Black,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',  // 어두운 배경 고정
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    elevation: 5,
  },
  modalItem: {
    paddingVertical: 20,  // 각 항목의 위아래 간격을 넓게 설정
    paddingHorizontal: 15,
  },
  modalItemText: {
    fontSize: 16,
    color: colors.Black,
    textAlign: 'center',  // 텍스트를 중앙 정렬
    fontWeight: 'bold',   // 텍스트를 볼드체로 설정
  },
});

export default SortFilter;
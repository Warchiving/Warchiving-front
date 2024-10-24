// components/SortFilterComponent.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList } from 'react-native';

const SortFilterComponent = () => {
  const [isFilterApplied, setIsFilterApplied] = useState(false);
  const [sortModalVisible, setSortModalVisible] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState('좋아요순');

  const sortOptions = ['좋아요순', '가격 낮은 순', '가격 높은 순', '최근 순'];

  return (
    <View style={styles.container}>
      {/* 필터 적용 버튼 */}
      <TouchableOpacity
        style={[styles.filterButton, isFilterApplied && styles.filterApplied]}
        onPress={() => setIsFilterApplied(!isFilterApplied)}
      >
        <Text style={styles.filterButtonText}>
          {isFilterApplied ? '맞춤 필터 적용중' : '맞춤 필터 적용 안됨'}
        </Text>
      </TouchableOpacity>

      {/* 정렬 버튼 */}
      <TouchableOpacity
        style={styles.sortButton}
        onPress={() => setSortModalVisible(true)}
      >
        <Text style={styles.sortButtonText}>
          {selectedSortOption} ▼
        </Text>
      </TouchableOpacity>

      {/* 정렬 선택 모달 */}
      <Modal
        transparent={true}
        visible={sortModalVisible}
        animationType="slide"
        onRequestClose={() => setSortModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <FlatList
              data={sortOptions}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => {
                    setSelectedSortOption(item);
                    setSortModalVisible(false);
                  }}
                >
                  <Text style={styles.modalItemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
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
    backgroundColor: '#444',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  filterApplied: {
    backgroundColor: '#000',
  },
  filterButtonText: {
    color: '#fff',
  },
  sortButton: {
    borderWidth: 1,
    borderColor: '#444',
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  sortButtonText: {
    color: '#444',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    width: 250,
    borderRadius: 10,
    padding: 15,
  },
  modalItem: {
    paddingVertical: 10,
  },
  modalItemText: {
    fontSize: 16,
    color: '#444',
  },
});

export default SortFilterComponent;


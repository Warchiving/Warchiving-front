import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList, Animated, TouchableWithoutFeedback } from 'react-native';
import colors from './colors';

const SortFilter = ({ onSortChange, onFilterChange }) => {
  const [isFilterApplied, setIsFilterApplied] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState('좋아요 순');
  const slideAnim = new Animated.Value(300);

  useEffect(() => {
    if (isModalVisible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: 300,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isModalVisible]);

  const sortOptions = ['좋아요 순', '가격 낮은 순', '가격 높은 순', '최신 순'];

  const handleSortOptionPress = (option) => {
    setSelectedSortOption(option);
    setIsModalVisible(false);

    if (onSortChange) {
      onSortChange(option);  // 선택된 옵션을 전달
    }
  };

  const handleFilterPress = () => {
    const newFilterState = !isFilterApplied;
    setIsFilterApplied(newFilterState);

    if (onFilterChange) {
      onFilterChange(newFilterState);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.filterButton,
          isFilterApplied ? styles.filterApplied : styles.filterNotApplied,
        ]}
        onPress={handleFilterPress}
      >
        <Text style={styles.filterButtonText}>
          {isFilterApplied ? '맞춤 필터 적용중' : '맞춤 필터 적용 안됨'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.sortButton}
        onPress={() => setIsModalVisible(true)}
      >
        <Text style={styles.sortButtonText}>
          {selectedSortOption} ▼
        </Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="none"
      >
        <TouchableWithoutFeedback onPress={() => setIsModalVisible(false)}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>

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
            ListFooterComponent={<View style={{ height: 50 }} />}
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
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  filterApplied: {
    backgroundColor: colors.Black,
  },
  filterNotApplied: {
    backgroundColor: colors.Grey600,
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
    backgroundColor: 'rgba(0,0,0,0.5)',
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
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  modalItemText: {
    fontSize: 16,
    color: colors.Black,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default SortFilter;

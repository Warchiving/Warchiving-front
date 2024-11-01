import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import SearchBar from '../components/SearchBar';
import HallItem from '../components/HallItem';
import SortFilter from '../components/SortFilter';
import hallList from '../components/HallListData'; // hallList 데이터 import
import filteredHallList from '../components/FilteredHallListData'; // filteredHallList 데이터 import

export default function HallListScreen({ navigation }) {
  const [hallListState, setHallListState] = useState(hallList);
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  const onSearch = () => {
    console.log('Search button pressed');
  };

  const toggleFilter = (filterApplied) => {
    setIsFilterApplied(filterApplied);
    if (filterApplied) {
      setHallListState(filteredHallList);
    } else {
      setHallListState(hallList);
    }
  };

  const sortHallList = (sortOption) => {
    let sortedList = [...hallListState];

    if (sortOption === '가격 낮은 순') {
      sortedList.sort((a, b) => parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, '')));
    } else if (sortOption === '가격 높은 순') {
      sortedList.sort((a, b) => parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, '')));
    } else if (sortOption === '좋아요 순' || sortOption === '최신 순') {
      sortedList.sort(() => Math.random() - 0.5);
    }

    setHallListState(sortedList);
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', padding: 15 }}>
        <SearchBar placeholder="업체를 검색해보세요" onSearch={onSearch} />
      </View>

      <SortFilter onSortChange={sortHallList} onFilterChange={toggleFilter} />

      <FlatList
        data={hallListState}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <HallItem hall={item} navigation={navigation} />}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  listContainer: {
    paddingHorizontal: 20,
  },
});
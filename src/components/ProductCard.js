import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ProductCard = ({ title, price, onHeartPress, onCartPress, isFavorite, isSelected }) => {
  return (
    <View style={[styles.card, isSelected && styles.selectedCard]}>
      <View style={styles.imagePlaceholder}>
        {/* 아이콘 컨테이너 */}
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={onHeartPress}>
            <Image
              source={require('../../assets/heart.png')}
              style={[styles.icon, isFavorite && styles.favoriteIcon]}
            />
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={onCartPress}>
            <Image
              source={require('../../assets/box.png')}
              style={styles.icon}
            />
          </TouchableOpacity> */}
        </View>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}원</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '45%',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    marginLeft: 12,
  },
  selectedCard: {
    backgroundColor: '#e0f7fa', // 선택된 카드 배경색 (예: 밝은 청록색)
  },
  imagePlaceholder: {
    width: '100%',
    height: 120,
    backgroundColor: '#ccc', // 회색 처리
    borderRadius: 8,
    marginBottom: 8,
    position: 'relative', // 아이콘을 위치시킬 기준이 됩니다.
  },
  iconContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 3,
  },
  favoriteIcon: {
    tintColor: 'red', // 즐겨찾기일 경우 색상 변경
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#555',
    marginVertical: 4,
  },
});

export default ProductCard;

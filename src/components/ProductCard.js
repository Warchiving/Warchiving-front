import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ProductCard = ({ title, price, onHeartPress, onCartPress, imageSource,isFavorite, isSelected }) => {
  return (
    <View style={[styles.card, isSelected && styles.selectedCard]}>
        <Image source={imageSource} style={styles.imagePlaceholder} />
        {/* 아이콘 컨테이너 */}
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={onHeartPress}>
            <Image
              source={require('../../assets/img_fill_heart.png')}
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
    marginTop: 12, // 모든 카드에 상단 여백 추가
  },
  selectedCard: {
    backgroundColor: '#e0f7fa', 
  },
  imagePlaceholder: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
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
    marginLeft: 6,
  },

  favoriteIcon: {
    margin : 5, 
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

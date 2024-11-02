import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const LikedProductCard = ({ title, price, onHeartPress, onCartPress, isFavorite, imageSrc }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={imageSrc} style={styles.image} />
        {/* 아이콘 컨테이너 */}
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={onHeartPress}>
            <Image
              source={require('../../assets/img_fill_heart.png')}
              style={[styles.icon, isFavorite && styles.favoriteIcon]}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}원</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 176,
    height: 220,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    marginLeft: 12,
    marginTop: 20,
  },
  imageContainer: {
    width: '100%',
    height: 140, // 원하는 높이로 설정
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 8,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
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
    margin: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#555',
    marginVertical: 2,
  },
});

export default LikedProductCard;

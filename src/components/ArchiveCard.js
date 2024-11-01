import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ArchiveCard = ({ title, date, imageSrc, onOptionsPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card} onPress={onOptionsPress}>
        <View style={styles.imageContainer}>
          <Image source={imageSrc} style={styles.image} />
        </View>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity onPress={onOptionsPress} style={styles.optionsButton}>
            <Text style={styles.optionsIcon}>⋮</Text> 
          </TouchableOpacity>
        </View>
        <Text style={styles.date}>{date}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  card: {
    width: 173,
    height: 222,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    padding: 8,
  },
  imageContainer: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    width: '100%',
    paddingHorizontal: 8,
    marginTop: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop : 5, 
  },
  optionsButton: {
    paddingHorizontal: 8,
  },
  optionsIcon: {
    fontSize: 20,
    marginTop : 3,
    color: '#555',
    marginEnd : -25, 
  },
  date: {
    fontSize: 12,
    color: '#777',
    marginTop: 4,
    marginLeft : -30 ,
  },
});

export default ArchiveCard;

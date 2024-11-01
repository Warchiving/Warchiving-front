import React, { useState } from 'react'; // Import from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import Slider from '@react-native-community/slider';
import ProgressBar from '../components/ProgressBar';  // 버튼 컴포넌트 불러오기
import CustomButton from '../components/CustomButton';  // 버튼 컴포넌트 불러오기
import CustomButtonSkip from '../components/CustomButtonSkip';  // 버튼 컴포넌트 불러오기
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import colors from '../components/colors';

export default function HallPriceScreen({navigation}) {

  const [priceRange, setPriceRange] = useState([200, 500]); // Initial range [minPrice, maxPrice]

  const handleValueChange = (values) => {
    setPriceRange(values); // Update the range
  };

  const CustomMarker = ({ currentValue }) => {
    return (
      <View style={styles.markerContainer}>
        <Text style={styles.markerText}>{currentValue}만원</Text>
        <View style={styles.marker} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* progress bar */}
      <View style={{ marginBottom: 20, }}>
        <ProgressBar step={2} totalSteps={3} />
      </View>

      {/* 관심태그 Text 안내 */}
      <View style={{ marginTop: 50, }}>
        <Text style={styles.title}>원하는 <Text style={{ fontWeight: 'bold' }}>웨딩홀 가격</Text>을</Text>
        <Text style={styles.title}>선택해주세요</Text>
      </View>

      {/* 슬라이더 */}
      <View style={styles.sliderContainer}>
        <MultiSlider
          values={[priceRange[0], priceRange[1]]}
          sliderLength={310}
          onValuesChange={handleValueChange}
          min={200}
          max={500}
          step={1}
          selectedStyle={{ backgroundColor: colors.Pink900, height: 10 }} // Customize the selected range
          unselectedStyle={{ backgroundColor: '#EDEDED', height: 10 }}
          customMarker={(e) => <CustomMarker currentValue={e.currentValue} />}
        />
      </View>

      <View style={{ marginLeft: 150 }}>
        <Image source={require('../../assets/Pin.png')} style={styles.pinImg} />
        <Text>평균가격</Text>
      </View>

      <Image source={require('../../assets/HallPriceImg.png')} style={styles.hallPriceImg} />

      {/* 하단 버튼 */}
      <View style={{ alignItems: 'center', marginTop:90, }}>
        <CustomButton title="다음" onPress={() => navigation.navigate('HallGuarantor')} />
        <CustomButtonSkip title="건너뛰기" onPress={() => navigation.navigate('HallGuarantor')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 18,
  },
  title: {
    fontSize: 18,
    marginVertical: 3,
    marginLeft: 7,
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginLeft: 20,
  },
  priceText: {
    fontSize: 16,
    color: '#FF7E7E',
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  averageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  averageText: {
    fontSize: 18,
    color: '#FF7E7E',
  },
  markerContainer: {
    width: 55,
    height: 30,
    alignItems: 'center',
    marginBottom: 20, // Adjust marker label position
  },
  markerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.Pink700,
  },
  marker: {
    height: 25,
    width: 10,
    backgroundColor: '#FF7E7E',
    borderWidth: 2,
    borderColor: '#FF7E7E',
  },
  hallPriceImg:{
    width: 310, 
    height: 125, 
    resizeMode: 'contain',  // Maintain aspect ratio
    alignSelf:'center',
    marginTop:100,
  },
  pinImg:{
    width: 35, height: 35, marginLeft: 5, 
  }
});

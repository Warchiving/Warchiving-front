import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CustomButton from '../components/CustomButton';  // 버튼 컴포넌트 불러오기

export default function ReservationSuccessScreen ({ navigation }) {
  return (
    <View style={styles.container}>

            {/* 설명 */}
            <Text style={styles.titleText}>예약이 완료되었습니다!</Text>

            {/* 이미지 */}
            <View style={{marginTop:50,}}>
                {/* <Image source={images[currentImageIndex]} style={styles.VectorImg} /> */}
                <Image source={require('../../assets/HallLoading/confetti2.gif')} style={styles.VectorImg} />
                <Image source={require('../../assets/HallLoading/W.png')} style={styles.VectorImg2} />
            </View>

            {/* 하단 버튼 */}
            <View style={{ alignItems: 'center', marginTop: 90, }}>
                <CustomButton title="홈으로 돌아가기" onPress={() => navigation.navigate('Main')} />
            </View>

            {/* 하단 버튼 */}
            <View style={{ alignItems: 'center', marginTop: 10, }}>
                <CustomButton title="나의 예약 내역 보러가기" onPress={() => navigation.navigate('HallList')} />
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
    VectorImg: {
        width: 350,  // Set the desired width
        height: 200,
        resizeMode: 'contain',  // Maintain aspect ratio
        alignSelf: 'center',
    },
    VectorImg2:{
        width: 250,  // Set the desired width
        height: 200,
        resizeMode: 'contain',  // Maintain aspect ratio
        alignSelf: 'center',
        marginTop:-80,
    },
    titleText: {
        marginTop:50,
        textAlign:'center',
        fontSize: 25,
        color: '#333',
        fontWeight:'bold',
    },
});
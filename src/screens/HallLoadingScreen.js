import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ProgressBar from '../components/ProgressBar';  // 버튼 컴포넌트 불러오기
import CustomButton from '../components/CustomButton';  // 버튼 컴포넌트 불러오기
import colors from '../components/colors';

export default function HallLoadingScreen({ navigation }) {

    const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track the current image index

    // Array of images to switch between
    const images = [
        require('../../assets/HallLoading/Vector1.png'),
        require('../../assets/HallLoading/Vector2.png'),
        require('../../assets/HallLoading/Vector3.png'),
        require('../../assets/HallLoading/Vector4.png'),
    ];

    useEffect(() => {
        // Set an interval to change the image every second
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle through images
        }, 500); // 1000ms = 1 second

        // Cleanup the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.container}>
            {/* progress bar */}
            <View style={{ marginBottom: 20, }}>
                <ProgressBar step={3} totalSteps={3} />
            </View>

            {/* 설명 */}
            <Text style={styles.titleText}> <Text style={styles.boldText}>오구님</Text>과 딱맞는</Text>
            <Text style={styles.titleText}> 웨딩홀이 추천될거에요!</Text>

            {/* 이미지 */}
            <View style={{marginTop:90,}}>
                {/* <Image source={images[currentImageIndex]} style={styles.VectorImg} /> */}
                <Image source={require('../../assets/HallLoading/Vector.png')} style={styles.VectorImg} />
                <Image source={require('../../assets/HallLoading/W.png')} style={styles.VectorImg2} />
            </View>

            {/* 하단 버튼 */}
            <View style={{ alignItems: 'center', marginTop: 90, }}>
                <CustomButton title="시작하기" onPress={() => navigation.navigate('HallList')} />
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
        width: 300,  // Set the desired width
        height: 200,
        resizeMode: 'contain',  // Maintain aspect ratio
        alignSelf: 'center',
    },
    VectorImg2:{
        width: 300,  // Set the desired width
        height: 200,
        resizeMode: 'contain',  // Maintain aspect ratio
        alignSelf: 'center',
        marginTop:-70,
    },
    titleText: {
        fontSize: 18,
        color: '#333',
        fontWeight:'500',
    },
    boldText: {
        fontWeight: 'bold',
        color: colors.Pink900
    },
});
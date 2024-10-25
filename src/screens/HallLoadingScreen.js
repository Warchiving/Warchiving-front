import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ProgressBar from '../components/ProgressBar';  // 버튼 컴포넌트 불러오기
import CustomButton from '../components/CustomButton';  // 버튼 컴포넌트 불러오기

export default function HallLoadingScreen({navigation}) {

    const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track the current image index

    // Array of images to switch between
    const images = [
        require('../../assets/HallLoading/Vector2.png'),
        require('../../assets/HallLoading/Vector3.png'),
        require('../../assets/HallLoading/Vector4.png'),
    ];

    useEffect(() => {
        // Set an interval to change the image every second
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle through images
        }, 1000); // 1000ms = 1 second

        // Cleanup the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.container}>
            {/* progress bar */}
            <View style={{ marginBottom: 20, }}>
                <ProgressBar step={3} totalSteps={3} />
            </View>

            {/* 움직이는 이미지 */}
            {/* <Image source={images[currentImageIndex]} style={styles.VectorImg} /> */}

            {/* 하단 버튼 */}
            <View style={{ alignItems: 'center', marginTop: 60, }}>
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
    VectorImg:{
        width: 50,  // Set the desired width
        height: 50,
        resizeMode: 'contain',  // Maintain aspect ratio
    }
});

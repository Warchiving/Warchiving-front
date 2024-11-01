import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars'; // LocaleConfig 추가
import Icon from 'react-native-vector-icons/MaterialIcons';

// Locale 설정을 추가하여 달력에 한글을 적용
LocaleConfig.locales['kr'] = {
    monthNames: [
        '1월', '2월', '3월', '4월', '5월', '6월',
        '7월', '8월', '9월', '10월', '11월', '12월'
    ],
    monthNamesShort: [
        '1월', '2월', '3월', '4월', '5월', '6월',
        '7월', '8월', '9월', '10월', '11월', '12월'
    ],
    dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    today: '오늘'
};
LocaleConfig.defaultLocale = 'kr'; // 기본 로케일을 kr로 설정

export default function MypageScreen() {
    const [selectedDate, setSelectedDate] = useState('');

    const onDayPress = (day) => {
        setSelectedDate(day.dateString);
    };

    // 커스텀 날짜 렌더링 함수
    const renderDay = (day) => {
        const isMarked = day?.dateString === '2024-11-13';
        return (
            <View style={styles.dayContainer}>
                {isMarked && <View style={styles.dot} />} 
                <Text style={styles.dayText}>{day?.day ? day.day.toString() : ''}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {/* Fixed Profile Section */}
            <View style={styles.profileContainer}>
                <Image
                    source={require('../../assets/profile.png')}
                    style={styles.profileImage}
                />
                <View style={styles.profileTextContainer}>
                    <Text style={styles.profileName}>오구 님</Text>
                    <Text style={styles.eventCountdown}>웨딩홀 상담 D-12</Text>
                </View>
                <TouchableOpacity style={styles.editIconContainer}>
                    <Image
                        source={require('../../assets/edit.png')}
                        style={styles.editIcon}
                    />
                </TouchableOpacity>
            </View>

            {/* Scrollable Content */}
            <ScrollView style={styles.scrollableContent}>
                {/* Preferences Section */}
                <View style={styles.preferenceContainer}>
                    <TouchableOpacity style={styles.preferenceButton}>
                        <Image
                            source={require('../../assets/cloud.png')}
                            style={styles.preferenceImage}
                        />
                        <Text style={styles.preferenceText}>나의 취향 모아보기</Text>
                        <Icon name="chevron-right" size={24} color="#aaa" />
                    </TouchableOpacity>
                </View>

                {/* Calendar Section */}
                <View style={styles.calendarContainer}>
                    <Calendar
                        onDayPress={onDayPress}
                        style={{ borderWidth: 1, borderRadius: 10, borderColor: '#EDEDED' }}
                        dayComponent={({ date }) => renderDay(date)}
                        theme={{
                            selectedDayBackgroundColor: '#ff6b6b',
                            arrowColor: 'black',
                            todayTextColor: '#ff6b6b',
                        }}
                        monthFormat={'yyyy년 MM월'}
                    />
                </View>

                {/* Options Section */}
                <View style={styles.optionsContainer}>
                    {['환경설정', '공지사항', '문의사항'].map((option, index) => (
                        <TouchableOpacity key={index} style={styles.optionButton}>
                            <Text style={styles.optionText}>{option}</Text>
                            <Icon name="chevron-right" size={24} color="#aaa" />
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'white' },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderBottomColor: '#ddd',
        backgroundColor: 'white',
    },
    profileImage: { width: 60, height: 60, borderRadius: 30, marginRight: 10 },
    profileTextContainer: { flex: 1 },
    profileName: { fontSize: 18, fontWeight: 'bold' },
    eventCountdown: { fontSize: 14, color: 'gray' },

    editIconContainer: {
        padding: 5,
    },
    editIcon: {
        width: 20,
        height: 20,
        tintColor: '#aaa',
    },

    scrollableContent: { flex: 1 },

    preferenceContainer: {
        marginHorizontal: 20,
        marginVertical: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#EDEDED',
        overflow: 'hidden',
    },
    preferenceButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
    },
    preferenceImage: { width: 33, height: 19, marginRight: 10 },
    preferenceText: { fontSize: 16, color: '#333', flex: 1 },

    calendarContainer: {
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 20,
        borderBottomWidth: 7,
        borderBottomColor: '#ddd',
    },

    optionsContainer: { paddingHorizontal: 20, paddingTop: 20 },
    optionButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    optionText: { fontSize: 16 },

    dayContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end', // 텍스트가 항상 하단에 정렬되도록 설정
        width: 20, // 각 날짜 셀의 너비 고정
        height: 30, // 각 날짜 셀의 높이 고정
        paddingBottom: 8, // 날짜와 셀 하단 간 간격 조절
    },
    dot: {
        width: 5,
        height: 5,
        borderRadius: 2.5,
        backgroundColor: '#ff6b6b',
        position: 'absolute', // 점을 절대 위치로 설정
        top: -5, // 점의 위치를 텍스트 위로 설정
    },
    dayText: {
        fontSize: 16,
        color: '#333',
    },
});
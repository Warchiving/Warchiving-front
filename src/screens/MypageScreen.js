// MypageScreen.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function MypageScreen() {
    const [selectedDate, setSelectedDate] = useState('');

    const onDayPress = (day) => {
        setSelectedDate(day.dateString);
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
                    <Text style={styles.eventCountdown}>스튜디오 촬영 D-3</Text>
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
                        markedDates={{
                            [selectedDate]: { selected: true, selectedColor: '#ff6b6b' },
                        }}
                        theme={{
                            selectedDayBackgroundColor: '#ff6b6b',
                            arrowColor: 'black',
                            todayTextColor: '#ff6b6b',
                        }}
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
        //borderBottomWidth: 1,
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
        width: 20, // 원하는 크기로 설정하세요
        height: 20,
        tintColor: '#aaa', // 아이콘 색상을 변경할 때 사용
    },

    scrollableContent: { flex: 1 },

    preferenceContainer: {
        marginHorizontal: 20,
        marginVertical: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#EDEDED',
        overflow: 'hidden', // 테두리 밖으로 내용이 나가지 않도록 설정
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
});

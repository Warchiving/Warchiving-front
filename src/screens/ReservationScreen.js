import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Button, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function ReservationScreen({ route, navigation }) {
    const { hall } = route.params;  // assuming hall details are passed as route parameters

    const [date, setDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(null);
    const [additionalNotes, setAdditionalNotes] = useState('');

    const [selectedDate, setSelectedDate] = useState('');

    const onDayPress = (day) => {
        setSelectedDate(day.dateString);
    };

    return (
        <View style={styles.container}>

            {/* Hall Information */}
            <View style={styles.hallInfoContainer}>
                <Image source={{ uri: hall.imageUrl }} style={styles.hallImage} />
                <View>
                    <Text style={styles.hallName}>{hall.name}</Text>
                    <Text style={styles.hallLocation}>{hall.location}</Text>
                </View>
            </View>

            <ScrollView style={styles.container2}>
                {/* 캘린더 */}
                <Text style={styles.sectionTitle}>예약할 날짜를 선택해주세요</Text>
                <Calendar
                    style={{
                        marginBottom: 20,
                        borderRadius: 10,
                        shadowColor: '#000',  // Adds shadow (iOS)
                        shadowOpacity: 0.1,
                        shadowRadius: 15,
                        padding: 10,
                    }}
                    onDayPress={onDayPress}
                    markedDates={{
                        [selectedDate]: { selected: true, selectedColor: '#00adf5', selectedTextColor: 'black' },
                    }}
                    theme={{
                        backgroundColor: 'white',
                        calendarBackground: 'white',
                        textSectionTitleColor: 'grey', // Color of weekday titles (월, 화, 수, etc.)
                        selectedDayBackgroundColor: '#FD7372',
                        selectedDayTextColor: 'black',
                        todayTextColor: '#FD7372',
                        dayTextColor: 'black',
                        textDisabledColor: 'lightgrey',  // Disabled days color (e.g., days outside current month)
                        arrowColor: 'black',
                        monthTextColor: 'black',
                        textMonthFontWeight: 'bold',
                        textDayFontSize: 13,
                        textMonthFontSize: 13,
                        textDayHeaderFontSize: 10,
                    }}
                />

                {/* <Text style={styles.selectedDateText}>
        선택된 날짜: {selectedDate || '날짜를 선택하세요'}
      </Text> */}

                {/* Time Selector */}
                <Text style={styles.sectionTitle}>예약할 시간대를 선택해주세요</Text>
                <View style={styles.timeContainer}>
                    {['오전', '오후', '종일'].map((time) => (
                        <TouchableOpacity
                            key={time}
                            style={[
                                styles.timeButton,
                                selectedTime === time && styles.selectedTimeButton,
                            ]}
                            onPress={() => setSelectedTime(time)}
                        >
                            <Text style={[
                                styles.timeText,
                                selectedTime === time && styles.selectedTimeText,
                            ]}>{time}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Additional Notes */}
                <Text style={styles.sectionTitle}>추가적으로 남기고 싶은 말이 있으신가요?</Text>
                <TextInput
                    style={styles.notesInput}
                    placeholder="ex. 홀 제공 음식은 A 코스로 선택하겠습니다"
                    value={additionalNotes}
                    onChangeText={setAdditionalNotes}
                />


            </ScrollView>


            {/* Footer with Price and Buttons */}
            <View style={styles.footer}>
                <Text style={styles.price}>350,000원</Text>
                <TouchableOpacity style={styles.cartButton}>
                    <Text style={styles.cartButtonText}>장바구니</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.confirmButton}>
                    <Text style={styles.confirmButtonText}>예약 확정</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        backgroundColor: 'white'
    },
    container2: {
        padding: 20,
        backgroundColor: '#F8F8F8'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
    },
    hallInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
    },
    hallImage: {
        width: 50,
        height: 50,
        borderRadius: 5,
        marginRight: 10
    },
    hallName: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    hallLocation: {
        fontSize: 13,
        color: 'grey'
    },
    sectionTitle: {
        fontSize: 16,
        marginVertical: 10
    },
    timeContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        shadowColor: '#000',  // Adds shadow (iOS)
        shadowOpacity: 0.1,
        shadowRadius: 15,
        marginRight: 0,
    },
    timeButton: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 20,
        width: '20%',
        alignItems: 'center',
        backgroundColor: 'white',
        marginRight:5,
    },
    selectedTimeButton: {
        backgroundColor: '#FD7372'
    },
    timeText: {
        fontSize: 16
    },
    selectedTimeText: {
        color: 'white'
    },
    notesInput: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        shadowColor: '#000',  // Adds shadow (iOS)
        shadowOpacity: 0.1,
        shadowRadius: 15,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        padding: 20,
        marginBottom: 20,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        width: '48%',
    },
    cartButton: {
        backgroundColor: '#ddd',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginRight: 10,
    },
    cartButtonText: {
        color: 'black',
    },
    confirmButton: {
        backgroundColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    confirmButtonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10
    },
    selectedDateText: {
        fontSize: 16,
        color: 'grey',
        marginTop: 20
    },
});
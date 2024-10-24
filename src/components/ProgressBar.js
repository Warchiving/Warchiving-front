import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressBar = ({ step, totalSteps }) => {
    const progress = step / totalSteps;

    return (
        <View style={styles.container}>
            <View style={styles.progressBarContainer}>
                <View style={[styles.progressBar, { flex: progress }]} />
                <View style={[styles.progressBarBackground, { flex: 1 - progress }]} />
            </View>
            <Text style={styles.progressText}>{`${step}/${totalSteps}`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    progressBarContainer: {
        flexDirection: 'row',
        height: 10,
        flex: 1,
        borderRadius: 3,
        backgroundColor: '#EDEDED',
    },
    progressBar: {
        backgroundColor: '#333',
        borderRadius: 3,
    },
    progressBarBackground: {
        backgroundColor: '#EDEDED',
    },
    progressText: {
        marginLeft: 10,
        color: '#999',
        fontSize: 12,
    },
});

export default ProgressBar;

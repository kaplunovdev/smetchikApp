import React, { useState } from 'react';
import {
    TouchableOpacity,
    StyleSheet, Text, View, Button
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import NewSmetaModal from '../components/NewSmetaModal'
import { SmetaList } from './SmetaList';


export const WelcomePage = () => {



    return (
        <View style={styles.container}>
            <Text style={styles.titleMain}>Сметчик</Text>

            <FontAwesome
                name="save"
                size={40}
                color="#3914AF"
                style={styles.saveIcon}
                onPress={() => alert('Список смет')}
            />
            <SmetaList />

        </View>


    );

};
const styles = StyleSheet.create({
    titleMain: {
        fontSize: 50,
        textAlign: 'center',
        color: '#303030',
        marginBottom: 20,
        marginTop: 50

    },
    container: {
        flex: 1,
        width: '100%',
        textAlign: 'center',
        backgroundColor: '#ccc'
    },
    buttonAdd: {
        fontSize: 30,
    },
    saveIcon: {
        position: 'absolute',
        top: 65,
        right: 25
    }
})
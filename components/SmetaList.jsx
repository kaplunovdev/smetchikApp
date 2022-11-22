import React, { useState } from 'react';

import {
    StyleSheet, View, ScrollView
} from 'react-native';
import {
    Text,
} from "@react-native-material/core";
import NewSmetaModal from '../components/NewSmetaModal'



export const SmetaList = () => {

    return (
        <>

            <Text style={{ textAlign: 'center', marginTop: 10, elevation: 0 }}>Список пуст</Text>
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.listSmets}>
                    <Text style={styles.smetsItem}>Поляковское 16А</Text>
                    <Text style={styles.smetsItem}>Сызранова 2Б</Text>
                    <Text style={styles.smetsItem}>Ленина 14</Text>
                </ScrollView>
            </View>
            <NewSmetaModal />
        </>
    )
};

const styles = StyleSheet.create({
    button: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20

    },
    textButton: {
        fontSize: 20,
        textAlign: 'center'
    },
    listSmets: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 20,
        flex: 1

    },
    smetsItem: {
        fontSize: 23,
        textAlign: 'center',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        textShadowColor: '#ccc',
        color: '#303030',
        marginBottom: 20,
        shadowColor: '#171717',
        elevation: 5,
        marginLeft: 20,
        marginRight: 20

    }

})


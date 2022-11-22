import React from 'react';
import { BigButton } from '../components/BigButton'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    Pressable,
    TouchableOpacity,

} from 'react-native';


export const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.boxFirstScreen}>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Список смет')
                }
                style={styles.button}>
                <Text style={styles.textButton}>Сметы</Text>
            </TouchableOpacity>
        </View>

    );
};



const styles = StyleSheet.create({
    titleApp: {
        fontSize: 55,
        textAlign: 'center',
        marginBottom: 50,
    },
    boxFirstScreen: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    firstScreen: {
        backgroundColor: '#F1F1F1',
        textAlign: 'center',
        marginBottom: 20,
        minHeight: '100%'
    },
    buttons: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 0,
        marginLeft: 20,
        marginRight: 20
    },
    button: {
        minWidth: '100%',
        fontSize: 23,
        width: '100%',
        textAlign: 'center',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        textShadowColor: '#ccc',
        color: '#303030',
        marginBottom: 30,
        shadowColor: '#171717',
        elevation: 5

    },
    textButton: {
        fontSize: 20,
        textAlign: 'center'
    }
})
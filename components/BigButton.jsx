import React from 'react';
import {
    TouchableOpacity,
    StyleSheet, Text
} from 'react-native';

export const BigButton = ({ navigation, name, title }) => {

    // const handlePress = (navigation, name) => {

    //     navigation.navigate(name)

    // }

    return (

        <TouchableOpacity
            //onPress={() => navigation.navigate(name)}
            style={styles.button}>
            <Text style={styles.textButton}>{title}</Text>
        </TouchableOpacity>

    );

};
const styles = StyleSheet.create({
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
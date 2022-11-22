import React, { useState } from "react";
import {
    Provider,
    Stack,
    Button,
    Dialog,
    DialogHeader,
    DialogContent,
    DialogActions,
    Text,
    TextInput,
} from "@react-native-material/core";
import {

    StyleSheet, View
} from 'react-native';


export const NewSmetaModal = () => {
    const [visible, setVisible] = useState(false);

    return (

        < >
            <Button
                title='Создать'
                style={styles.buttonModal}
                onPress={() => setVisible(true)}
            />
            <Dialog
                visible={visible}
                onDismiss={() => setVisible(false)}
                style={styles.container}
            >
                <DialogHeader title="Новая смета" />
                <DialogContent >
                    <Stack spacing={1}>
                        <TextInput style={{ marginBottom: -10 }} label="Имя" variant="outlined" />
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button
                        title="Отмена"
                        compact
                        variant="text"
                        onPress={() => setVisible(false)}
                    />
                    <Button
                        title="Ok"
                        compact
                        variant="text"
                        onPress={() => setVisible(false)}
                    />
                </DialogActions>
            </Dialog>
        </>
    );
};

const styles = StyleSheet.create({


    buttonModal: {
        width: 150,
        padding: 5,
        position: 'absolute',
        bottom: 40,
        left: '50%',
        transform: [{ translateX: -75 }],
    },

})


const AppProvider = () => (
    <Provider>
        <NewSmetaModal />
    </Provider>
);

export default AppProvider;
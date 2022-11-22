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


const NewSmetaModal = () => {
    const [visible, setVisible] = useState(false);

    return (

        < >
            <Button
                title='+'
                style={styles.buttonModal}
                onPress={() => setVisible(true)}
            />
            <Dialog
                visible={visible}
                onDismiss={() => setVisible(false)}
                style={{ marginTop: 100 }}
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
    modal: {
        marginTop: 100

    },

    buttonModal: {
        position: 'absolute',
        right: 10,
        top: 8,

    }

})


const AppProvider = () => (
    <Provider>
        <NewSmetaModal />
    </Provider>
);

export default AppProvider;
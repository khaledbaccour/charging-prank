import { Modal, ModalProps, StyleSheet, View, TouchableOpacity, Text, TouchableWithoutFeedback } from 'react-native';

type MyModalProps = ModalProps & {
    visible: boolean;
    closeModal: () => void;
};

const MyModal = ({ visible, children, closeModal }: MyModalProps) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={closeModal}
        >
            <TouchableWithoutFeedback onPress={closeModal}>
                <View style={styles.container}>
                    <TouchableWithoutFeedback>
                        <View style={styles.childrenCont}>
                            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                                <Text style={styles.closeButtonText}>×</Text>
                            </TouchableOpacity>
                            {children}
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

export default MyModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    childrenCont: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        position: 'relative',
    },
    closeButton: {
        position: 'absolute',
        top: 2,
        right: 10,
        zIndex: 1,
    },
    closeButtonText: {
        fontSize: 30,
        color: 'black',
        fontFamily: 'futurino',
    },
});

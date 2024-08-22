import { StyleSheet,Text,View, TouchableOpacity } from 'react-native';

interface StopBtnProps {
    onClick: () => void;
}

const styles  = StyleSheet.create({
    button: {
        margin: 20,
        padding: 10,
        backgroundColor: '#ba67f5',
        borderRadius: 5,
        paddingHorizontal: 30,
    },
    textBtn: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'futurino',
    }
});

const StopBtn: React.FC<StopBtnProps> = ({ onClick }) => {
    return (
        <TouchableOpacity onPress={onClick}>
            <View style={styles.button}>
                <Text style={styles.textBtn}>Stop</Text>
            </View>
        </TouchableOpacity>
    );
};

export default StopBtn;

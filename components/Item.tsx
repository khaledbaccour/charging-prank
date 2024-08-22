import { useEffect } from "react";
import { View,Text,StyleSheet,TouchableOpacity,Image } from "react-native";

type ItemProps = {
    id: string;
    title: string;
    img: any;
    sound: any;
};

const Item = ({ id, title , img, sound}: ItemProps) => {
    
    return (
        <TouchableOpacity style={styles.container} >
            <View style={styles.miniContainer1}>
                <Image source={img} style={styles.image} />
            </View>
            <View style={styles.miniContainer2}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};
export default Item;

const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: '#fff',
        width: 150,
        height: 150,
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'futurino',
    },
    miniContainer1: {
        backgroundColor: '#fff',
        width: '100%',
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    miniContainer2: {
        backgroundColor: '#F543FB',
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});

import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import StopBtn from '@/components/StopBtn';
import Item from '@/components/Item';
import data from '@/data/ItemsData';
import { useEffect, useState } from 'react';
import MyModal from '@/components/MyModal';
import { playSound } from '@/utils/manage-sound/play-sound';
import { useBatteryState } from 'expo-battery';


export default function HomeScreen() {
  const [soundSrc, setSoundSrc] = useState<number | null>(null);
  const [chargeSoundSource, setChargeSoundSource] = useState<number | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  

  const handleItemPress = (sound: number) => {
    setSoundSrc(sound);
    setModalVisible(true);
  };
  

  //useEffect(() => {
    //if (batteryState == 2 && chargeSoundSource) {
    //  playSound(chargeSoundSource);
   // }
//}, [batteryState]);

// create a batteyState that keeps changing even if app is in background (not yet killed)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Charging Sounds Prank</Text>
      <StopBtn onClick={() => {}} />
      <MyModal
        visible={modalVisible}
        transparent
        animationType="slide"
        statusBarTranslucent
        onRequestClose={() => {
          console.log('close modal');
        }}
        closeModal={() => {
          setModalVisible(false);
        }}
      >
        <TouchableOpacity onPress={() => {setChargeSoundSource(soundSrc)}}>
          <Text style={styles.txt}>Set Charging Prank</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (soundSrc) {
              playSound(soundSrc);
            }
          }}
        >
          <Text style={styles.txt}>Play Sound</Text>
        </TouchableOpacity>
      </MyModal>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Item
            id={item.id.toString()}
            title={item.title}
            img={item.img}
            sound={item.sound}
            handleItemPress={handleItemPress}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#e6e8eb',
  },
  title: {
    margin: 10,
    fontSize: 35,
    color: '#ffffff', // Text color set to white
    textAlign: 'center',
    fontFamily: 'futurino',
    textShadowColor: '#333333', // Dark outline color (almost black)
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1, // Controls the thickness of the outline
  },
  txt: {
    fontSize: 20,
    fontFamily: 'futurino',
    color: 'black',
  },
});

import { FlatList, StyleSheet,Text,  View } from 'react-native';
import StopBtn from '@/components/StopBtn';
import Item from '@/components/Item';
import data from '@/data/ItemsData';
import { useState } from 'react';


export default function HomeScreen() {

  const [soundSrc, setSoundSrc] = useState('');

  const openModal = (soundSrc:any) => {
    setSoundSrc(soundSrc);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Charging Sounds Prank</Text>
      <StopBtn onClick={()=>{}}/>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Item id={item.id.toString()} title={item.title}
         img={item.img} sound={item.sound} />}
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
});

import { Audio } from 'expo-av';

export async function playSound(soundSrc: number) {
  try {
    console.log('Loading Sound', soundSrc);
    const { sound } = await Audio.Sound.createAsync(soundSrc);
    console.log('Playing Sound');
    await sound.playAsync();
  } catch (error) {
    console.error('Error playing sound:', error);
  }
}
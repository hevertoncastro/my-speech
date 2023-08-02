import { StatusBar } from 'expo-status-bar';
import * as Speech from 'expo-speech';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const speak = () => {
    const thingToSay = 'Tentando falar português';
    Speech.speak(thingToSay, {
      language: 'pt-BR',
      pitch: 1,
      rate: 1,
      voice: 'pt-br-x-afs#female_3-local',
      volume: 1,
    });
    Speech.getAvailableVoicesAsync().then((voices) => {
      console.log(JSON.stringify(voices, null, 2));
    });
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title="Press to hear some words" onPress={speak} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

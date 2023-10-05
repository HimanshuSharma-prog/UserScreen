import { StatusBar } from 'expo-status-bar';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colours } from './components/Colours';
import Header from './components/Header';
import ImageDiv from './components/ImageDiv';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={{
          flex: 1,
        }}
      >
        <Header />
        <ImageDiv/>
      </ScrollView>
      <StatusBar style="light" backgroundColor={colours.blue} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colours.dark,
  },
});

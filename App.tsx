import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigation from './navigation/RootStackNavigation';
export default function App() {
  return (
    <NavigationContainer>
      <RootStackNavigation/>
      {/* <View style={styles.container}>
        <Text>Open up App.tsxs to start working on your app!</Text>
        <StatusBar style="auto" />
      </View> */}
    </NavigationContainer>
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

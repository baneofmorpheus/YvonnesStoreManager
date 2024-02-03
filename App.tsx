if (__DEV__) {
  import("./ReactotronConfig");
}
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigation from './navigation/RootStackNavigation';
import { PaperProvider } from 'react-native-paper';
import 'react-native-gesture-handler';
import {
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { enGB, en, registerTranslation } from 'react-native-paper-dates'
import 'expo-dev-client';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Provider } from 'react-redux';
import store from "./store/index"
import { PersistGate } from 'redux-persist/integration/react'
import { persistedStore } from './store/index';

GoogleSignin.configure({
  webClientId: "874439575137-hmf8pu0e4go2v0vim49tt8tlqsv3539o.apps.googleusercontent.com",

});
registerTranslation('en-GB', enGB)
registerTranslation('en', en)
export default function App() {
  return (
    <PaperProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistedStore}>
              <NavigationContainer>
                <RootStackNavigation />
              </NavigationContainer>
            </PersistGate>
          </Provider>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </PaperProvider>
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


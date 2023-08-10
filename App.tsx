import React from 'react';
import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import ChatGpt from './src/Screens/ChatGpt';
import ImageGenerate from './src/Screens/ImageGenerate';
import {PaperProvider} from 'react-native-paper';
const Stack = createNativeStackNavigator();
function App() {
  return (
    // <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ChatGpt" component={ChatGpt} />
          <Stack.Screen name="GenerateImage" component={ImageGenerate} />
        </Stack.Navigator>
      </NavigationContainer>
    // </PaperProvider>
  );
}

export default App;

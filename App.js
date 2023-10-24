// App.js

import * as React from 'react'; 
import { NavigationContainer, DefaultTheme} from '@react-navigation/native';
import AppNavigator from './AppNavigator';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#00192A',
    background:'white',
    
  },
};


function App() {
  return (
    <NavigationContainer    theme={MyTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;

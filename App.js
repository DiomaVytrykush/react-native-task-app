import React from 'react';
import {Home, Card} from './screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerTintColor:"#2A86FF"}} component={Home} />
        <Stack.Screen name="Card" component={Card} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

import React from 'react';
import {Home, Card, AddCard} from './screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  const options = {
    headerTintColor: '#2A86FF',
    headerStyle: {elevation: 0.8, shadowOpacity: 0.8},
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={options} component={Home} />
        <Stack.Screen name="Card" options={options} component={Card} />
        <Stack.Screen name="AddCard" options={options} component={AddCard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

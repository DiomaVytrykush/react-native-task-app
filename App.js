import React from 'react';
import {Home, Card} from './screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{
            headerTintColor: '#2A86FF',
            headerStyle: {elevation: 0.8, shadowOpacity: 0.8},
          }}
          component={Home}
        />
        <Stack.Screen
          name="Card"
          options={{
            headerTintColor: '#2A86FF',
            headerStyle: {elevation: 0.8, shadowOpacity: 0.8},
          }}
          component={Card}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

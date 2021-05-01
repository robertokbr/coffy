import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../pages/Home';
import TabRouter from './tab.routes';
import colors from '../styles/colors';
import CreateOrder from '../pages/CreateOrder';

const Stack = createStackNavigator();

const StackRoutes: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator
      headerMode="none"
      initialRouteName="Tabs"
      screenOptions={{ 
        cardStyle: {
          backgroundColor: colors.background,
        }}
      }
    >
      <Stack.Screen  name="Home" component={Home} />
      <Stack.Screen  name="CreateOrder" component={CreateOrder} />
      <Stack.Screen  name="Tabs" component={TabRouter} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default StackRoutes;
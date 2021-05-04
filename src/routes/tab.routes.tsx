import React from 'react';
import { View as MotiView } from 'moti';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import colors from '../styles/colors';
import Gallery from '../pages/Gallery';
import Orders from '../pages/Orders';

const Tab = createBottomTabNavigator();

const TabBarIconContainer: React.FC<{ focused: boolean }> = ({
  focused,
  children,
}) => (
  <MotiView
    animate={{
      scale: focused ? 1 : 0.8,
      height: 48,
      width: 48,
    }}
    style={{
      borderRadius: 24,
      backgroundColor: focused ? colors.backgroundThree : colors.backgroundTwo,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {children}
  </MotiView>
);

const TabRoutes: React.FC = () => (
  <Tab.Navigator
    sceneContainerStyle={{ backgroundColor: colors.background }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size, focused }) => {
        if (route.name === 'Gallery') {
          return (
            <TabBarIconContainer focused={focused}>
              <Feather name="grid" size={size} color={color} />
            </TabBarIconContainer>
          );
        }
        if (route.name === 'Orders') {
          return (
            <TabBarIconContainer focused={focused}>
              <Feather name="list" size={size} color={color} />
            </TabBarIconContainer>
          );
        }
      },
    })}
    tabBarOptions={{
      style: {
        height: 64,
        backgroundColor: colors.backgroundTwo,
        borderTopWidth: 0,
        marginBottom: 16,
        marginHorizontal: 16,
        borderRadius: 16,
      },
      tabStyle: {
        alignItems: `center`,
        justifyContent: `center`,
      },
      iconStyle: {
        width: 20,
        height: 20,
        marginBottom: 0,
      },
      inactiveTintColor: colors.blackTwo,
      activeTintColor: colors.primary,
      showLabel: false,
    }}
    initialRouteName="Gallery"
  >
    <Tab.Screen name="Gallery" component={Gallery} />
    <Tab.Screen name="Orders" component={Orders} />
  </Tab.Navigator>
);

export default TabRoutes;

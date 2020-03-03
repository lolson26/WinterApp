import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SnowRemoval from '../screens/SnowRemoval';
import Parking from '../screens/Parking';
import Activites from '../screens/Activities';
import Report from '../screens/Report';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {

  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        }}
      />
      <BottomTab.Screen
        name="SnowRemoval"
        component={SnowRemoval}
        options={{
          title: 'Snow Removal',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-snow" />,
        }}
      />
      <BottomTab.Screen
        name="Parking"
        component={Parking}
        options={{
          title: 'Parking',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-calendar" />,
        }}
      />
      <BottomTab.Screen
        name="Activities"
        component={Activites}
        options={{
          title: 'Activities',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-walk" />,
        }}
      />
      <BottomTab.Screen
        name="Report"
        component={Report}
        options={{
          title: 'Report',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-chatbubbles" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'SnowRemoval':
      return 'Snow Removal';
    case 'Parking':
      return 'Parking';
    case 'Activities':
      return 'Activities';
    case 'Report':
      return 'Report';
  }
}

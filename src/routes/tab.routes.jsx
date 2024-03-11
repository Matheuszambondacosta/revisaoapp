import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Category from '../screens/Category';

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: () => (<Feather name="home" size={24} color="black" />

        )
      }} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Category" component={Category} />
    </Tab.Navigator>
  );
}

export default TabRoutes;

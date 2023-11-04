import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Drinks from './screens/Drinks';
import FoodScreen from './screens/FoodScreen';
import OrdersScreen from './screens/OrderScreen';
import PayScreen from './screens/PayScreen';
import KitchenUIScreen from './screens/KitchenUIScreen';
import OrdersPerTableScreen from './screens/OrderPerTableScreen';
import OrdersToPrepareScreen from './screens/OrdersToPrepareScreen';
import PreparedOrdersScreen from './screens/PreparedOrdersScreen';
import StartScreen from './screens/StartScreen';
import { iconImages, defaultIcon, Tab, Stack } from './utils/Utilities';

const HomeTabs: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <Text style={styles.barText}>Table 3</Text>
        <Text style={styles.barText}>Round 2/5</Text>
        <Text style={styles.barText}>12/20 </Text>
        <Text style={styles.barText}>43:30</Text>
      </View>

      <View style={styles.content}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: () => {
              const iconName = route.name in iconImages ? iconImages[route.name] : null;

              return <Image source={iconName ? iconName : defaultIcon} style={styles.tabIcon} />;
            },
            tabBarStyle: {
              height: 120,
            },
            tabBarLabelStyle: {
              fontSize: 13,
            }
          })}
        >
          <Tab.Screen
            name="Drinks"
            component={Drinks}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Food"
            component={FoodScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="My order"
            component={OrdersScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Pay"
            component={PayScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Kitchen UI"
            component={KitchenUIScreen}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </View>
    </View>
  );
};


////////////////////////////////////////////////////////////////////////////////////////////

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }} />
        <Stack.Screen name="OrdersPerTableScreen" component={OrdersPerTableScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CurrentOrdersToPrepareScreen" component={OrdersToPrepareScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PreparedOrdersScreen" component={PreparedOrdersScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );

};

const styles = StyleSheet.create({
  tabIcon: {
    width: 50, // Customize the width as needed
    height: 50, // Customize the height as needed
  },
  container: {
    flex: 1,
    paddingTop: 50, // Adjust the value to create space between the top of the screen and the bar
  },
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  barText: {
    flex: 1,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    paddingTop: 10, // Adjust the value to create space between the bar and the content below
  },
});

export default App;
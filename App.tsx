import React, { useEffect, useState } from 'react';
import { Alert, TextInput, Button, StyleSheet, SafeAreaView, View, Text, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
        <Text style={styles.barText}>Table Nr.</Text>
        <Text style={styles.barText}>Round Nr.</Text>
        <Text style={styles.barText}>TotalItem Nr.</Text>
        <Text style={styles.barText}>Time</Text>
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
            options={{ headerShown: false }} // Hide header for this screen
          />
          <Tab.Screen
            name="Food"
            component={FoodScreen}
            options={{ headerShown: false }} // Hide header for this screen
          />
          <Tab.Screen
            name="My order"
            component={OrdersScreen}
            options={{ headerShown: false }} // Hide header for this screen
          />
          <Tab.Screen
            name="Pay"
            component={PayScreen}
            options={{ headerShown: false }} // Hide header for this screen
          />
          <Tab.Screen
            name="Kitchen UI"
            component={KitchenUIScreen}
            options={{ headerShown: false }} // Hide header for this screen
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
    paddingHorizontal: 20,
    paddingBottom: 5,
    backgroundColor: '#eee',
  },
  barText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingTop: 10, // Adjust the value to create space between the bar and the content below
  },
});

export default App;
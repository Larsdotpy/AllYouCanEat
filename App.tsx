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
        },
      })}
    >
      <Tab.Screen name="Drinks" component={Drinks} />
      <Tab.Screen name="Food" component={FoodScreen} />
      <Tab.Screen name="My order" component={OrdersScreen} />
      <Tab.Screen name="Pay" component={PayScreen} />
      <Tab.Screen name="Kitchen UI" component={KitchenUIScreen} />
    </Tab.Navigator>
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
  }
});

export default App;
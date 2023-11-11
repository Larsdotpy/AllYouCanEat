import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Modal from 'react-native-modal';
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

const HomeTabs: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [timer, setTimer] = useState(2 * 60 * 60); // Initial value is 2 hours in seconds
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentRound, setCurrentRound] = useState(1); // Initial value is 1

  // Helper function to format time in HH:MM:SS format
  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };
  
  // Function to decrement the timer every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    if (timer === 0) {
      console.log('Timer has reached zero');
      setIsModalVisible(true);
      clearInterval(intervalId); // Stop the interval
    }
    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [timer]);
  
  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <Text style={styles.barText}>Table 3</Text>
        <Text style={styles.barText}>{`Round ${currentRound}/5`}</Text>
        <Text style={styles.barText}>12/20 </Text>
        <Text style={styles.barText}>{formatTime(timer)}</Text>
      </View>

      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.Text}>Time has expired!</Text>
          <Button
            title="Return to Start Screen"
            onPress={() => {
              setIsModalVisible(false);
              // Navigate back to the Start Screen
              navigation.navigate('Start');
            }}
          />
        </View>
      </Modal>

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
            options={{ headerShown: false }}
          >
            {(props) => <OrdersScreen {...props} updateRound={setCurrentRound} />}
          </Tab.Screen>
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
  Text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 10
  }
});

export default App;
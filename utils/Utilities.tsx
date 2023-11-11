import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";


export const iconImages = {
    Drinks: require('../assets/images/drink.png'),
    Food: require('../assets/images/food.png'),
    'My order': require('../assets/images/order.png'),
    Pay: require('../assets/images/bill.png'),
    'Kitchen UI': require('../assets/images/kitchen.png'),
  };
  export const defaultIcon = require('../assets/images/mainlogo.png');
  export const Tab = createBottomTabNavigator();
  export const Stack = createStackNavigator();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    cameraContainer: {
      flex: 1,
      width: '100%',
    },
    camera: {
      flex: 1,
    },
  });
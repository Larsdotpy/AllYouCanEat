import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

export const iconImages = {
    Drinks: require('../assets/images/drink.png'),
    Food: require('../assets/images/food.png'),
    'My order': require('../assets/images/order.png'),
    Pay: require('../assets/images/bill.png'),
    'Kitchen UI': require('../assets/images/kitchen.png'),
  };
  export  const defaultIcon = require('../assets/images/mainlogo.png');
  export  const Tab = createBottomTabNavigator();
  export const Stack = createStackNavigator();


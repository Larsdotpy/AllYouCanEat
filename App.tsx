import React, { useState } from 'react';
import { Alert, TextInput, Button, StyleSheet, SafeAreaView, View, Text, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Drinks from './screens/Drinks';

const DrinksScreen: React.FC = () => {
  return (
    <View style={styles.categoryContainer}>
      <Image source={require('./assets/images/bill.png')} style={styles.image} />
      <Text>Category 1 Text</Text>
    </View>
  );
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FoodScreen: React.FC = () => {
  const data = [
    // Your 6 items for the second tab
    { id: 1, name: 'Maki', image: require('./assets/images/maki.png') },
    { id: 2, name: 'Nigiri', image: require('./assets/images/nigiri.png') },
    { id: 3, name: 'Temaki', image: require('./assets/images/temaki.png') },
    { id: 4, name: 'Tempura', image: require('./assets/images/tempura.png') },
    { id: 5, name: 'Ice-Cream', image: require('./assets/images/ice-cream.png') },
    { id: 6, name: 'xxx', image: require('./assets/images/kitchen.png') },
  ];

  const renderGrid = () => {
    const items = data.map((item, index) => (
      <View key={item.id} style={styles.itemContainer}>
        <Image source={item.image} style={styles.imageGrid} />
        <Text style={styles.imageText}>{item.name}</Text>
      </View>
    ));

    const column1 = items.slice(0, 3); // Items for the first column
    const column2 = items.slice(3); // Items for the second column

    return (
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          {column1}
        </View>
        <View style={{ flex: 1 }}>
          {column2}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Category 2</Text>
      {renderGrid()}
    </View>
  );
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const MyOrderScreen: React.FC = () => {
  return (
    <View style={styles.categoryContainer}>
      <Image source={require('./assets/images/bill.png')} style={styles.image} />
      <Text>Category 2 Text</Text>
    </View>
  );
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const PayScreen = () => {
  const data = [
    // Your data for the FlatList
    { id: 1, itemName: '4 person dinner', amount: 1, price: 95 },
    { id: 2, itemName: 'Large water', amount: 1, price: 8 },
    { id: 3, itemName: 'Beer 50cl.', amount: 1, price: 3 },
    { id: 4, itemName: 'Mojito', amount: 1, price: 13 },
    { id: 5, itemName: 'Ice Tea', amount: 1, price: 3 },
    { id: 6, itemName: 'Wine', amount: 1, price: 15 },
    // Add more items as needed
  ];

  const renderItem = ({ item }) => (
    <View style={styles.rowPayScreen}>
      <Text style={styles.columnPayScreen}>{item.itemName}</Text>
      <Text style={styles.columnPayScreen}>{item.amount}</Text>
      <Text style={styles.columnPayScreen}>${item.price}</Text>
    </View>
  );

  const header = (
    <View style={styles.headerPayScreen}>
      <Text style={styles.headerTextPayScreen}>Item Name</Text>
      <Text style={styles.headerTextPayScreen}>Amount</Text>
      <Text style={styles.headerTextPayScreen}>Price</Text>
    </View>
  );
  const subtotal = data.reduce((acc, item) => acc + item.price, 0);
  const tax = subtotal * 0.1; // Assuming 10% tax, change this value as needed
  const total = subtotal + tax;

  const totals = [
    { label: 'Subtotal', value: subtotal },
    { label: 'Tax', value: tax },
    { label: 'Total', value: total },
  ];

  const renderTotals = () => (
    <View style={styles.totalsContainerPayScreen}>
      {totals.map((item, index) => (
        <View style={styles.rowPayScreen} key={index}>
          <Text style={styles.columnPayScreen}>{item.label}</Text>
          <Text style={styles.columnPayScreen}>${item.value.toFixed(2)}</Text>
        </View>
      ))}
    </View>
  );

  const handleCashPayment = () => {
    // Logic for handling cash payment
    console.log('Payment with cash initiated');
    // You can add your payment handling code here
  };

  const handleCardPayment = () => {
    // Logic for handling card payment
    console.log('Payment with card initiated');
    // You can add your payment handling code here
  };

  const renderButtons = () => (
    <View style={styles.buttonContainerPayScreen}>
      <TouchableOpacity style={styles.buttonPayScreen} onPress={handleCashPayment}>
        <Text style={styles.buttonTextPayScreen}>Pay with cash</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonPayScreen} onPress={handleCardPayment}>
        <Text style={styles.buttonTextPayScreen}>Pay with card</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.containerPayScreen}>
      {header}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      {renderTotals()}
      {renderButtons()}
    </View>
  );
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const KitchenUIScreen: React.FC = () => {
  const data = [
    { id: 1, name: 'Orders per table' },
    { id: 2, name: 'Current orders to prepare' },
    { id: 3, name: 'Done' },
  ];

  const renderGrid = () => {
    const items = data.map((item, index) => (
      <View key={item.id} style={styles.itemContainerKitchen}>
        <Text style={styles.imageText}>{item.name}</Text>
      </View>
    ));

    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        {items}
      </View>
    );
  };

  return (
    <View style={[styles.container, { justifyContent: 'center' }]}>
      {renderGrid()}
    </View>
  );
};


////////////////////////////////////////////////////////////////////////////////////////////
const iconImages = {
  Drinks: require('./assets/images/drink.png'),
  Food: require('./assets/images/food.png'),
  'My order': require('./assets/images/order.png'),
  Pay: require('./assets/images/bill.png'),
  'Kitchen UI': require('./assets/images/kitchen.png'),
};
const defaultIcon = require('./assets/images/mainlogo.png');
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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
      <Tab.Screen name="My order" component={MyOrderScreen} />
      <Tab.Screen name="Pay" component={PayScreen} />
      <Tab.Screen name="Kitchen UI" component={KitchenUIScreen} />
    </Tab.Navigator>
  );
};

const StartScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [inputText, setInputText] = useState('');

  const handleButtonPress = () => {
    if (inputText.trim() === '1234') {
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Please enter the correct code.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={(text) => setInputText(text)}
          placeholder="Enter text here"
          secureTextEntry // Mask the input for passwords
        />
        <Button title="Start" onPress={handleButtonPress} />
      </View>
    </SafeAreaView>
  );
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={StartScreen} options={{ title: 'Start' }} />
        <Stack.Screen name="Home" component={HomeTabs} options={{ title: 'Home' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  content: {
    width: '80%',
    alignItems: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    padding: 10,
    margin: 10,
    width: '100%',
  },
  categoryContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#171717'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  tabIcon: {
    width: 50, // Customize the width as needed
    height: 50, // Customize the height as needed
  },
  imageText: {
    color: 'white',
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20,
  },
  listContainer: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  itemContainer: {
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 20,
    borderRadius: 10,
  },
  imageGrid: {
    width: '80%',
    height: 100,
    marginBottom: 10,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  totalDetails: {
    flexDirection: 'column',
  },
  totalPrices: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  containerPayScreen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  rowPayScreen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  columnPayScreen: {
    flex: 1,
    textAlign: 'center',
  },
  headerPayScreen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    paddingVertical: 10,
  },
  headerTextPayScreen: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  totalsContainerPayScreen: {
    marginTop: 20,
    borderTopWidth: 2,
    borderTopColor: 'black',
  },
  buttonContainerPayScreen: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 20
  },
  buttonPayScreen: {
    backgroundColor: 'grey', // Change button styles as needed
    padding: 15,
    borderRadius: 8,
  },
  buttonTextPayScreen: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  itemContainerKitchen: {
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 20,
    borderRadius: 10,
    width: 600
  }
});

export default App;
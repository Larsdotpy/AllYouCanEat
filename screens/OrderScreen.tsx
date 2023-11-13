import { useState } from "react";
import { FlatList, View, StyleSheet, TouchableOpacity, Text, Alert } from "react-native";
import { useMyContext } from '../utils/MyContext';

interface OrdersScreenProps {
  updateRound: (prevRound: number) => number;
}

const OrdersScreen: React.FC<OrdersScreenProps> = ({ updateRound }) => {
  const [currentRound, setCurrentRound] = useState<number>(1);
  const [orderPlacedInRound5, setOrderPlacedInRound5] = useState<boolean>(false);
  const { orders, addItemToList, logList, clearOrders } = useMyContext();
  
  const OrderItem: React.FC<{ orderDetails: string }> = ({ orderDetails }) => {
    return (
      <View style={styles.orderItem}>
        <Text>{orderDetails}</Text>
        {/* You can add more details or components to display for each order */}
      </View>
    );
  };
  
    // const orders = [
    //   "Order 1 details",
    //   "Order 2 details",
    //   "Order 3 details",
    //   "Order 4 details",
    //   "Order 5 details",
    //   "Order 6 details",
    //   "Order 7 details",
    //   "Order 8 details",
    //   "Order 9 details",
    //   "Order 10 details",
    //   "Order 11 details",
    //   "Order 12 details",
    //   "Order 13 details",
    //   "Order 14 details",
    //   "Order 15 details",
    //   // Add more orders or retrieve from your data source
    // ];
  
    const placeOrderHandler = () => {
      if (currentRound < 5 || (currentRound === 5 && !orderPlacedInRound5)) {
        // Show a confirmation dialog before placing the order
        Alert.alert(
          'Confirmation',
          'Are you sure you want to place the order?',
          [
            {
              text: 'No',
              style: 'cancel',
            },
            {
              text: 'Yes',
              onPress: () => {
                // Functionality to handle placing an order
                // Add your logic here
                // ==> stuur order data naar Kafka topic
                console.log('Placing the order...');
                logList();

                // Clear the orders after placing the order
                clearOrders();
                
                // Update the round number (with a maximum of 5)
                updateRound((prevRound) => {
                  console.log('Previous Round:', prevRound);
                  const newRound = prevRound < 5 ? prevRound + 1 : 5;
                  console.log('New Round:', newRound);
                  setCurrentRound(newRound);
  
                  if (newRound === 5) {
                    setOrderPlacedInRound5(true);
                  }
  
                  return newRound;
                });
              },
            },
          ],
          { cancelable: false }
        );
      } else {
        Alert.alert(
          'Round Limit Reached',
          'You cannot place more orders.'
        );
      }
    };
  
    return (
      <View style={styles.ordersContainer}>
        <FlatList
          data={orders}
          renderItem={({ item }) => <OrderItem orderDetails={item} />}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.listContainer}
        />
  
        <TouchableOpacity style={styles.placeOrderButton} onPress={placeOrderHandler}>
          <Text style={styles.placeOrderText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const styles = StyleSheet.create({
    ordersContainer: {
      flex: 1,
      padding: 20,
      backgroundColor: '#ffffff',
    },
    orderItem: {
      borderWidth: 1,
      borderColor: '#cccccc',
      borderRadius: 8,
      padding: 15,
      marginBottom: 10,
    },
    orderDetails: {
      fontSize: 16,
    },
    placeOrderButton: {
      // Styles for the "Place Order" button
      // Center the button and style it accordingly
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'blue', // Example background color
      padding: 10,
      marginTop: 20, // Adjust the margin based on your design
    },
    placeOrderText: {
      // Styles for the text inside the "Place Order" button
      color: 'white',
      fontSize: 16,
    },
    listContainer: {
        paddingHorizontal: 10,
        marginTop: 10,
    }
});  

export default OrdersScreen;
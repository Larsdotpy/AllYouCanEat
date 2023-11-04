import { FlatList, View, StyleSheet, TouchableOpacity, Text } from "react-native";

const OrdersScreen = () => {

    const OrderItem = ({ orderDetails }) => {
      return (
        <View style={styles.orderItem}>
          <Text>{orderDetails}</Text>
          {/* You can add more details or components to display for each order */}
        </View>
      );
    };
  
    const orders = [
      "Order 1 details",
      "Order 2 details",
      "Order 3 details",
      "Order 4 details",
      "Order 5 details",
      "Order 6 details",
      "Order 7 details",
      "Order 8 details",
      "Order 9 details",
      "Order 10 details",
      "Order 11 details",
      "Order 12 details",
      "Order 13 details",
      "Order 14 details",
      "Order 15 details",
      // Add more orders or retrieve from your data source
    ];
  
    const placeOrderHandler = () => {
      // Functionality to handle placing an order
      // Add your logic here
      console.log('Placing the order...');
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
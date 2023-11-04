import { useEffect, useState } from "react";
import { View, SafeAreaView, FlatList, Text, StyleSheet } from "react-native";

const OrdersPerTableScreen = ({ navigation }) => {
    // Assuming you have an array of orders for different tables
    const [orders, setOrders] = useState([]);
  
    // Function to fetch orders for a specific table from an API or database
    const fetchOrdersForTable = (tableNumber) => {
      // Fetch orders based on the table number and set the state
      // This is a hypothetical function, you should replace it with your data fetching logic
      // For example:
      // const ordersData = await fetchOrdersFromDatabase(tableNumber);
      // setOrders(ordersData);
    };
  
    useEffect(() => {
      // Fetch orders for a default table (e.g., table 1) when the component mounts
      fetchOrdersForTable(1);
    }, []);
  
    // Render individual order items
    const renderOrderItem = ({ item }) => {
      return (
        <View style={styles.orderItemPerTable}>
          <Text>{item.orderName}</Text>
          <Text>{item.orderDetails}</Text>
        </View>
      );
    };
  
    return (
      <SafeAreaView style={styles.containerPerTable}>
        <FlatList
          data={orders}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderOrderItem}
        />
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    containerPerTable: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    orderItemPerTable: {
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    }
  });  

export default OrdersPerTableScreen;  
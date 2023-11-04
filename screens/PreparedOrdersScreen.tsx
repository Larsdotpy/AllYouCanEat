import { View, SafeAreaView, FlatList, Text, StyleSheet } from "react-native";

const PreparedOrderItem = ({ orderType, amount, table }) => {
    return (
      <View style={styles.itemPreparedOrdersScreen}>
        <Text style={styles.columnPreparedOrdersScreen}>{orderType}</Text>
        <Text style={styles.columnPreparedOrdersScreen}>{amount}</Text>
        <Text style={styles.columnPreparedOrdersScreen}>{table}</Text>
      </View>
    );
  };
  
  const PreparedOrdersScreen = () => {
    const ordersData = [
      { orderType: 'Salmon Maki', amount: '3', table: 'Table 1' },
      { orderType: 'Tuna Nigiri', amount: '7', table: 'Table 4' },
      { orderType: 'Corn Gunkan', amount: '2', table: 'Table 2' },
      // Add more order data as needed
    ];
  
    return (
      <SafeAreaView style={styles.containerPreparedOrdersScreen}>
        <FlatList
          data={ordersData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <PreparedOrderItem
              orderType={item.orderType}
              amount={item.amount}
              table={item.table}
            />
          )}
        />
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    containerPreparedOrdersScreen: {
      flex: 1,
      marginTop: 20,
      marginHorizontal: 10,
    },
    itemPreparedOrdersScreen: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    columnPreparedOrdersScreen: {
      flex: 1,
      textAlign: 'center',
    }
  });
  
export default PreparedOrdersScreen;  
import { FlatList, TouchableOpacity, View, Text, StyleSheet } from "react-native";

const PayScreen = () => {
    const data = [
      // Your data for the FlatList
      { id: 1, itemName: '4 person dinner', amount: 1, price: 95 },
      { id: 2, itemName: 'Large water', amount: 1, price: 8 },
      { id: 3, itemName: 'Beer 50cl.', amount: 1, price: 3 },
      { id: 4, itemName: 'Mojito', amount: 2, price: 13 },
      { id: 5, itemName: 'Ice Tea', amount: 1, price: 3 },
      { id: 6, itemName: 'Wine', amount: 1, price: 15 },
      { id: 7, itemName: 'Beer 150cl.', amount: 1, price: 6 },
      { id: 8, itemName: 'Calpis Soda', amount: 1, price: 4 },
      { id: 9, itemName: 'Sprite', amount: 1, price: 4 },
      { id: 10, itemName: 'Orange Juice', amount: 1, price: 3.50 },
      { id: 11, itemName: 'Sake', amount: 1, price: 6 },
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

const styles = StyleSheet.create({
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
    }
  });

export default PayScreen;  
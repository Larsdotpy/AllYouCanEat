import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const KitchenUIScreen = ({ navigation }) => {
    const data = [
      { id: 1, name: 'Orders per table', screenName: 'OrdersPerTableScreen' },
      { id: 2, name: 'Current orders to prepare', screenName: 'CurrentOrdersToPrepareScreen' },
      { id: 3, name: 'Prepared orders', screenName: 'PreparedOrdersScreen' },
    ];
  
    const handleItemPress = (screenName) => {
      navigation.navigate(screenName);
    };
  
    const renderGrid = () => {
      const items = data.map((item, index) => (
        <TouchableOpacity
          key={item.id}
          style={styles.itemContainerKitchen}
          onPress={() => handleItemPress(item.screenName)}
        >
          <Text style={styles.imageText}>{item.name}</Text>
        </TouchableOpacity>
      ));
  
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          {items}
        </View>
      );
    };
  
    return (
      <View style={[styles.container, { justifyContent: 'center' }]}>
        <Image
          source={require('../assets/images/monitoring.png')} // Update this with the path to your image
          style={styles.imageMonitoring} // Define styles for your image
        />
        {renderGrid()}
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    },
    itemContainerKitchen: {
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 20,
    borderRadius: 10,
    width: 600
    },
    imageMonitoring: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 50
    },
    imageText: {
    color: 'white',
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    },
});

export default KitchenUIScreen;
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

const FoodScreen: React.FC = ({ navigation }) => {
  const data = [
    { id: 1, name: 'Maki', image: require('../assets/images/maki.png'), screenName: 'MakiScreen' },
    { id: 2, name: 'Nigiri', image: require('../assets/images/nigiri.png'), screenName: 'NigiriScreen' },
    { id: 3, name: 'Temaki', image: require('../assets/images/temaki.png'), screenName: 'TemakiScreen' },
    { id: 4, name: 'Tempura', image: require('../assets/images/tempura.png'), screenName: 'TempuraScreen' },
    { id: 5, name: 'Gunkan', image: require('../assets/images/gunkan.png'), screenName: 'GunkanScreen' },
    { id: 6, name: 'Pokebowl', image: require('../assets/images/pokebowl.png'), screenName: 'PokebowlScreen' },
  ];

    const handleItemPress = (screenName) => {
      navigation.navigate(screenName);
    };
  
    const renderGrid = () => {
      const items = data.map((item, index) => (
        <TouchableOpacity
          key={item.id}
          style={styles.itemContainer}
          onPress={() => handleItemPress(item.screenName)}
        >
          <Image source={item.image} style={styles.imageGrid} />
          <Text style={styles.imageText}>{item.name}</Text>
        </TouchableOpacity>
      ));
  
      const column1 = items.slice(0, 3);
      const column2 = items.slice(3);
  
      return (
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>{column1}</View>
          <View style={{ flex: 1 }}>{column2}</View>
        </View>
      );
    };
  
    const handlePress = (item: { id: number; name: string; image: any }) => {
      // Handle press action for the item
      console.log('Item pressed:', item);
      // You can navigate to another screen, show details, etc.
    };
  
    return (
      <View style={styles.container}>
        {renderGrid()}
      </View>
    );
  };


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center', // Vertically center content
      alignItems: 'center', // Center content horizontally
    },
    imageText: {
        color: 'white',
        marginTop: 8,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    imageGrid: {
        width: '80%',
        height: 100,
        marginBottom: 10,
    },
    itemContainer: {
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        padding: 20,
        borderRadius: 10,
    }
  });

export default FoodScreen;
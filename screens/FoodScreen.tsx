import { View, Image, Text, StyleSheet } from "react-native";

const FoodScreen: React.FC = () => {
    const data = [
      // Your 6 items for the second tab
      { id: 1, name: 'Maki', image: require('../assets/images/maki.png') },
      { id: 2, name: 'Nigiri', image: require('../assets/images/nigiri.png') },
      { id: 3, name: 'Temaki', image: require('../assets/images/temaki.png') },
      { id: 4, name: 'Tempura', image: require('../assets/images/tempura.png') },
      { id: 5, name: 'Gunkan', image: require('../assets/images/gunkan.png') },
      { id: 6, name: 'Pokebowl', image: require('../assets/images/pokebowl.png') },
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
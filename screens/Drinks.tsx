import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const drink1 = require("../assets/images/drinks/water-blauw-fles.png");
const drink2 = require("../assets/images/drinks/water-rood-fles.png");
const drink3 = require("../assets/images/drinks/cola.jpg");
const drink4 = require("../assets/images/drinks/ice-tea.jpg");
const drink5 = require("../assets/images/drinks/sinas.jpg");
const drink6 = require("../assets/images/drinks/sprite.jpg");
const drink7 = require("../assets/images/drinks/beer.jpg");
const drink8 = require("../assets/images/drinks/cocktail.jpg");
const drink9 = require("../assets/images/drinks/wine.jpg");


const drinksData = [
  { id: 1, name: 'Sourcy blauw', image: drink1 },
  { id: 2, name: 'Sourcy rood', image: drink2 },
  { id: 3, name: 'Coca Cola', image: drink3 },
  { id: 4, name: 'Ice Tea', image: drink4 },
  { id: 5, name: 'Sinas', image: drink5 },
  { id: 6, name: 'Sprite', image: drink6 },
  { id: 7, name: 'Beer', image: drink7 },
  { id: 8, name: 'Cocktail', image: drink8 },
  { id: 9, name: 'Wine', image: drink9 },


  // Add more drink items as needed
];

const Drinks = () => {
  const [drinkQuantities, setDrinkQuantities] = useState({});

  const incrementQuantity = (id: string | number) => {
    setDrinkQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      updatedQuantities[id] = (updatedQuantities[id] || 0) + 1;
      return updatedQuantities;
    });
  };

  const decrementQuantity = (id) => {
    setDrinkQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      if (updatedQuantities[id] > 0) {
        updatedQuantities[id] -= 1;
      }
      return updatedQuantities;
    });
  };

  const renderItem = ({ item }) => {
    const drinkId = item.id;

    return (
      <View style={styles.itemContainer}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.imageText}>{item.name}</Text>
        <View style={styles.quantityControls}>
          <TouchableOpacity onPress={() => decrementQuantity(drinkId)}>
            <Text style={styles.controlText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.controlText}>{drinkQuantities[drinkId] || 0}</Text>
          <TouchableOpacity onPress={() => incrementQuantity(drinkId)}>
            <Text style={styles.controlText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Drinks</Text>
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={drinksData}
        numColumns={3}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const SPACING = 10; // Set your desired spacing value

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20,
  },
  listContainer: {
    alignItems: 'center',
    paddingHorizontal: SPACING,
  },
  itemContainer: {
    alignItems: 'center',
    marginBottom: SPACING,
    marginHorizontal: SPACING,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  imageText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  quantityControls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  controlButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 4,
    padding: 5,
  },
  controlText: {
    color: 'white',
    fontSize: 20,
    marginLeft: 5,
    marginRight: 5,
    fontWeight: 'bold'
  },
});

export default Drinks;

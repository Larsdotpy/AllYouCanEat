import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Modal, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Bar from '../utils/Bar';
import { useAppContext } from '../utils/AppContext';

const maki1 = require("../assets/images/maki/maki1.jpg");
const maki2 = require("../assets/images/maki/maki2.jpg");
const maki3 = require("../assets/images/maki/maki3.jpg");
const maki4 = require("../assets/images/maki/maki4.jpg");
const maki5 = require("../assets/images/maki/maki5.jpg");
const maki6 = require("../assets/images/maki/maki6.jpg");
const maki7 = require("../assets/images/maki/maki7.jpg");
const maki8 = require("../assets/images/maki/maki8.jpg");
const maki9 = require("../assets/images/maki/maki9.jpg");


const makiData = [
  { id: 1, name: 'Salmon avocado', image: maki1 },
  { id: 2, name: 'Tuna avocado', image: maki2 },
  { id: 3, name: 'Crab avocado', image: maki3 },
  { id: 4, name: 'Salmon cucumber', image: maki4 },
  { id: 5, name: 'Salmon cream', image: maki5 },
  { id: 6, name: 'Spawn', image: maki6 },
  { id: 7, name: 'Tuna egg', image: maki7 },
  { id: 8, name: 'Shrimp avocado', image: maki8 },
  { id: 9, name: 'Tuna cream', image: maki9 },
];

const MakiScreen = () => {
  const { tableNumber, currentRound, timer, setTimer, setCurrentRound } = useAppContext();
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Function to decrement the timer every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    if (timer === 0) {
      console.log('Timer has reached zero');
      setIsModalVisible(true);
      clearInterval(intervalId); // Stop the interval
    }
    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [timer]);

  const navigation = useNavigation();
  const [makiQuantities, setMakiQuantities] = useState({});

  const incrementQuantity = (id) => {
    setMakiQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      updatedQuantities[id] = (updatedQuantities[id] || 0) + 1;
      return updatedQuantities;
    });
  };

  const decrementQuantity = (id) => {
    setMakiQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      if (updatedQuantities[id] > 0) {
        updatedQuantities[id] -= 1;
      }
      return updatedQuantities;
    });
  };

  const renderItem = ({ item }) => {
    const makiId = item.id;

    return (
      <View style={styles.itemContainer}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.imageText}>{item.name}</Text>
        <View style={styles.quantityControls}>
          <TouchableOpacity onPress={() => decrementQuantity(makiId)}>
            <Text style={styles.controlText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.controlText}>{makiQuantities[makiId] || 0}</Text>
          <TouchableOpacity onPress={() => incrementQuantity(makiId)}>
            <Text style={styles.controlText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Bar tableNumber="3" currentRound={currentRound} timer={timer} />

      <Modal visible={isModalVisible}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.Text}>Time has expired!</Text>
          <Button
            title="Return to Start Screen"
            onPress={() => {
              setIsModalVisible(false);
              // Navigate back to the Start Screen
              navigation.navigate('Start');
            }}
          />
        </View>
      </Modal>

      <TouchableOpacity
        style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15, marginTop: "10%" }}
        onPress={() => navigation.goBack()}
      >
        <Icon name="ios-arrow-back" size={30} color="black" />
        <Text style={{ marginLeft: 5, fontSize: 20, fontWeight: 'bold' }}>Return</Text>
      </TouchableOpacity>

      <FlatList
        contentContainerStyle={styles.listContainer}
        data={makiData}
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
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%'
  },
  listContainer: {
    flexGrow: 1,
    width: '100%',
    paddingHorizontal: SPACING,
    justifyContent: 'center',
  },
  itemContainer: {
    alignItems: 'center',
    marginBottom: SPACING,
    marginHorizontal: SPACING / 2
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
    color: '#171717',
  },
  quantityControls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  controlText: {
    color: '#171717',
    fontSize: 20,
    marginLeft: 5,
    marginRight: 5,
    fontWeight: 'bold',
  },
  Text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 10
  }
});

export default MakiScreen;

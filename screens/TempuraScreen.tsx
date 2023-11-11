import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TempuraScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={{ marginLeft: 15, marginTop: "10%" }}
        onPress={() => navigation.goBack()}
      >
        <Icon name="ios-arrow-back" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default TempuraScreen;

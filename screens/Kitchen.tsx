import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const MuchMore = () => (
    <View>

        <Text style={styles.text}>More ideas are yet to come...
            </Text>      
    </View>
)

const styles = StyleSheet.create({
    text: {
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20,
    }
  });

export default MuchMore;
import { useState } from "react";
import { Alert, SafeAreaView, View, TextInput, Button, StyleSheet } from "react-native";

const StartScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [inputText, setInputText] = useState('');
  
    const handleButtonPress = () => {
      if (inputText.trim() === '1234') {
        navigation.navigate('Home');
      } else {
        Alert.alert('Error', 'Please enter the correct code.');
      }
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={(text) => setInputText(text)}
            placeholder="Enter text here"
            secureTextEntry
          />
          <Button title="Start" onPress={handleButtonPress} />
        </View>
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    content: {
      width: '80%',
      alignItems: 'center'
    },
    input: {
      borderWidth: 1,
      borderColor: '#888',
      padding: 10,
      margin: 10,
      width: '100%',
    }
  });
  
  export default StartScreen;
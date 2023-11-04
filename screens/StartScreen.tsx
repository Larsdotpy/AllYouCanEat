import { useState } from "react";
import { Alert, SafeAreaView, View, TextInput, Button, StyleSheet } from "react-native";
import { QRCodeScanner } from "../utils/Utilities"; // Import your QR code scanner utility

const StartScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [inputText, setInputText] = useState('');
    const [isScanning, setIsScanning] = useState(false); // State to manage the scanner visibility

    const handleButtonPress = () => {
        if (inputText.trim() === '1234') {
            navigation.navigate('Home');
        } else {
            Alert.alert('Error', 'Please enter the correct code.');
        }
    };

    const handleScanButtonPress = () => {
        setIsScanning(true); // Set state to open the scanner
    };

    const handleQRCodeScan = (scannedData: string) => {
        // Handle scanned QR code data here, e.g., validation or further processing
        setInputText(scannedData); // Fill the input field with the scanned data
        setIsScanning(false); // Close the scanner after successful scan
    };

    return (
        <SafeAreaView style={styles.container}>
            {isScanning ? ( // Conditionally render the scanner or input form based on the state
                <QRCodeScanner onScan={handleQRCodeScan} /> // Use the QR code scanner component
            ) : (
                <View style={styles.content}>
                    <TextInput
                        style={styles.input}
                        value={inputText}
                        onChangeText={(text) => setInputText(text)}
                        placeholder="Enter text here"
                        secureTextEntry
                    />
                    <Button title="Start" onPress={handleButtonPress} />
                    <Button title="Scan QR Code" onPress={handleScanButtonPress} />
                </View>
            )}
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

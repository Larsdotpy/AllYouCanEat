import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { View, Button, PermissionsAndroid, Text, StyleSheet } from "react-native";
import { BarCodeReadEvent, RNCamera } from 'react-native-camera';

export const iconImages = {
    Drinks: require('../assets/images/drink.png'),
    Food: require('../assets/images/food.png'),
    'My order': require('../assets/images/order.png'),
    Pay: require('../assets/images/bill.png'),
    'Kitchen UI': require('../assets/images/kitchen.png'),
  };
  export const defaultIcon = require('../assets/images/mainlogo.png');
  export const Tab = createBottomTabNavigator();
  export const Stack = createStackNavigator();

  interface QRCodeScannerProps {
    // Define any specific props for the QR code scanner
  }
  
  export const QRCodeScanner: React.FC<QRCodeScannerProps> = () => {
    const [scanned, setScanned] = useState<boolean>(false);
    const [hasCameraPermission, setHasCameraPermission] = useState<boolean>(false);
  
    useEffect(() => {
      const requestPermissions = async () => {
        const cameraPermission = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs access to your camera',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
  
        const audioPermission = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          {
            title: 'Audio Permission',
            message: 'App needs access to record audio',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
  
        if (
          cameraPermission === PermissionsAndroid.RESULTS.GRANTED &&
          audioPermission === PermissionsAndroid.RESULTS.GRANTED
        ) {
          setHasCameraPermission(true);
        } else {
          setHasCameraPermission(false);
        }
      };
  
      requestPermissions();
    }, []);
  
    const onBarCodeRead = (event: BarCodeReadEvent) => {
      if (!scanned) {
        setScanned(true);
        console.log(event.data);
        // Handle the scanned QR code data here
        // For example, you can navigate to a new screen using the scanned data
      }
    };
  
    const handleScan = async () => {
      setScanned(false);
    };
  
    if (!hasCameraPermission) {
      return (
        <View style={styles.container}>
          <Text>No access to camera or audio</Text>
        </View>
      );
    }
  
    return (
      <View style={styles.container}>
        <View style={styles.cameraContainer}>
          <RNCamera
            style={styles.camera}
            onBarCodeRead={onBarCodeRead}
            captureAudio={false}
          />
        </View>
        <Button title="Scan QR Code" onPress={handleScan} />
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
    cameraContainer: {
      flex: 1,
      width: '100%',
    },
    camera: {
      flex: 1,
    },
  });
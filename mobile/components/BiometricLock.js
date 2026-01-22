import React, { useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNReactNativeBiometrics from 'react-native-biometrics';

const BiometricLock = ({ children }) => {
  const [unlocked, setUnlocked] = useState(false);
  const biometrics = new RNReactNativeBiometrics();

  useEffect(() => {
    checkBiometrics();
  }, []);

  const checkBiometrics = async () => {
    const { available } = await biometrics.isSensorAvailable();
    if (available) authenticate();
    else setUnlocked(true);
  };

  const authenticate = async () => {
    try {
      const { success } = await biometrics.simplePrompt({ promptMessage: 'Unlock SafeHaven' });
      if (success) setUnlocked(true);
      else authenticate();
    } catch (err) {
      Alert.alert('Error', 'Biometric auth unavailable.');
    }
  };

  if (!unlocked) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
        <Text style={{ color: '#fff', fontSize: 18 }}>🔒 SafeHaven Locked</Text>
      </View>
    );
  }

  return children;
};

export default BiometricLock;

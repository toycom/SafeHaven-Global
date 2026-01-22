import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import ConnectBank from './screens/ConnectBank';
import BiometricLock from './components/BiometricLock';

export default function App() {
  return (
    <BiometricLock>
      <NavigationContainer>
        {/* Your navigation setup */}
        <HomeScreen />
      </NavigationContainer>
    </BiometricLock>
  );
    }

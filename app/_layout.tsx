import { Stack } from "expo-router";
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Gyroscope } from "expo-sensors";

export default function RootLayout() {
  const [gyroData, setGyroData] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const subscription = Gyroscope.addListener(gyroscopeData => {
      setGyroData(gyroscopeData);
    });

    Gyroscope.setUpdateInterval(100); // Update every 1000 milliseconds

    return () => subscription && subscription.remove();
  }, []);

  return (
    
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Text>Gyroscope Data:</Text>
        <Text>X: {gyroData.x.toFixed(2)}</Text>
        <Text>Y: {gyroData.y.toFixed(2)}</Text>
        <Text>Z: {gyroData.z.toFixed(2)}</Text>
      </View>
    </SafeAreaView>
  );
}

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

    Gyroscope.setUpdateInterval(10); // Update every 1000 milliseconds

    return () => subscription && subscription.remove();
  }, []);

  return (
    
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.text}>Gyroscope Data:</Text>
        <Text style={styles.text}>X: {gyroData.x.toFixed(2)}</Text>
        <Text style={styles.text}>Y: {gyroData.y.toFixed(2)}</Text>
        <Text style={styles.text}>Z: {gyroData.z.toFixed(2)}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text:{
    fontSize: 18,
    fontWeight: '600'
  }
})

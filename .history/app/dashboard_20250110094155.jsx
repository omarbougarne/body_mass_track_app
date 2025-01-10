import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Dashboard() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const data = await AsyncStorage.getItem('userInfo');
        if (data) {
          setUserInfo(JSON.parse(data));
        }
      } catch (error) {
        console.error('Failed to fetch user info', error);
      }
    };
    fetchUserInfo();
  }, []);

  const calculateBMI = (height, weight) => {
    if (!height || !weight) return null;
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    return bmi
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      {userInfo ? (
        <View>
          <Text>Name: {userInfo.name}</Text>
          <Text>Age: {userInfo.age}</Text>
          <Text>Height: {userInfo.height} cm</Text>
          <Text>Weight: {userInfo.weight} kg</Text>
          <Text>BMI: {calculateBMI(userInfo.height, userInfo.weight)}</Text>

          {file ? (
                <View style={styles.imageContainer}>
                    <Image source={{ uri: file }}
                        style={styles.image} />
                </View>
            ) : (
                <Text style={styles.errorText}>{error}</Text>
            )}
            
        </View>
      ) : (
        <Text>No user info available.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Dashboard;
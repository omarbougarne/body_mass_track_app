import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Dashboard() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const data = await AsyncStorage.getItem('userInfo');
        if (data) {
          const parsedData = JSON.parse(data);
          console.log('Fetched user info:', parsedData); // Debugging statement
          setUserInfo(parsedData);
        } else {
          console.log('No user info found in AsyncStorage'); // Debugging statement
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
    return bmi.toFixed(2);
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
          {userInfo.file ? (
            <View style={styles.imageContainer}>
              <Image source={{ uri: userInfo.file }} style={styles.image} />
            </View>
          ) : (
            <Text>No Image Selected</Text>
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
  imageContainer: {
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
  },
  errorText: {
    color: 'red',
    marginTop: 16,
  },
});

export default Dashboard;
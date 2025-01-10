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
          console.log('Fetched user info:', parsedData); 
          setUserInfo(parsedData);
        } else {
          console.log('No user info found in AsyncStorage'); 
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
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Name: {userInfo.name}</Text>
          <Text style={styles.infoText}>Age: {userInfo.age}</Text>
          <Text style={styles.infoText}>Height: {userInfo.height} cm</Text>
          <Text style={styles.infoText}>Weight: {userInfo.weight} kg</Text>
          <Text style={styles.infoText}>BMI: {calculateBMI(userInfo.height, userInfo.weight)}</Text>
          {/* {userInfo.file ? ( */}
            <View style={styles.imageContainer}>
              <Image source={{ uri: userInfo.file }} style={styles.image} />
            </View>
          {/* // ) : (
          //   <Text>No Image Selected</Text>
          // )} */}
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
    backgroundColor: '#f0f4f7',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  infoText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
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
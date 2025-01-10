
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';

function UserInfoForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [file, setFile] = useState(null);
  const image = async () =>{
    const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if(status !== 'granted'){
      alert('Permission denied');
      return;
    }else{
      const result = await ImagePicker.launchImageLibraryAsync();
      if(!result.canceled){
        setFile(result.uri)
      }
    }
  }
  const handleSave = async () => {
    const userInfo = { name, age, height, weight, file };
    try {
      await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      Alert.alert('Info Saved', 'Your information has been saved.');
    } catch (error) {
      console.error('Failed to save user info', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter User Info</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
      />
      <TextInput
        style={styles.input}
        placeholder="Height (cm)"
        value={height}
        onChangeText={setHeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        value={weight}
        onChangeText={setWeight}
      />
      <TouchableOpacity style={styles.button} onPress={image}>
        <Text style={styles.title}>Pick an Image</Text>
      </TouchableOpacity>
      {file ? (
        <View style={styles.container}>
          <Image source={{uri: file}} style={{width: 200, height: 200}} />
        </View>
      ) : (
        <Text>No Image Selected</Text>
      )

    }
      <Button title="Save" onPress={handleSave} />
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
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
        backgroundColor: "#007AFF",
        padding: 10,
        borderRadius: 8,
        marginBottom: 16,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5,
    },
});

export default UserInfoForm;
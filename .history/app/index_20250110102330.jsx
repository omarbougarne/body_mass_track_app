import { Link } from 'expo-router';
import {React, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, file } from 'react-native';

function Index() {
  // const [authenticated, setAuthenticated] = useState();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Body Mass Index App 💪🧠</Text>
      <TouchableOpacity style={styles.button}>
        <Link href="/forms/LoginForm" style={styles.linkText}>
          Login
        </Link>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Link href="/forms/RegisterForm" style={styles.linkText}>
          Register
        </Link>
      </TouchableOpacity>
      
      {/* {authenticated ? (
        <> */}
       
        {file ? (
        <View style={styles.imageContainer}>
          <Image source={{ uri: file }} style={styles.image} />
        </View>
      ) : (
        <Text>No Image Selected</Text>
      )}
      <TouchableOpacity style={styles.button}>
        <Link href="/forms/UserInfoForm" style={styles.linkText}>
          Enter User Info
        </Link>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Link href="/dashboard" style={styles.linkText}>
          Dashboard
        </Link>
      </TouchableOpacity>
      {/* </>
      ) : (
        <Text>Authenticate first.</Text>
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#00CED1'
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  linkText: {
    color: '#fff',
    fontSize: 16,
  },
  imageContainer: {
        borderRadius: 8,
        marginBottom: 16,
        shadowColor: "#000000",
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
        color: "red",
        marginTop: 16,
    },
});

export default Index;
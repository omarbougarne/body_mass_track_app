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
  linkText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Index;
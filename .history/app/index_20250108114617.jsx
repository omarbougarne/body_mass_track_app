import { Link } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Body Mass Index App</Text>
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
      {this.state.authenticated ? (
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
      ) : (
        <Text>Authenticate first.</Text>
      )
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
});

export default Index;
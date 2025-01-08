import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Appearance } from 'react-native';
import { Colors } from '@/constants/Colors';

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerStyle: { backgroundColor: theme.headerBackground }, headerTintColor: theme.text, headerShadowVisible: false }}>
      <Stack.Screen name="index" options={{ headerShown: false, title: 'Home' }} />
      <Stack.Screen name="contact" options={{ headerShown: true, title: 'Contact Us' }} />
      <Stack.Screen name="forms/LoginForm" options={{ headerShown: true, title: 'Login' }} />
      <Stack.Screen name="forms/RegisterForm" options={{ headerShown: true, title: 'Register' }} />
      <Stack.Screen name="forms/UserInfoForm" options={{ headerShown: true, title: 'Enter User Info' }} />
      <Stack.Screen name="dashboard" options={{ headerShown: true, title: 'Dashboard' }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
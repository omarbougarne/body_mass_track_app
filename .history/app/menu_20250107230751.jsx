import { StyleSheet, Appearence, Platform, SafeAreaView, ScrollView } from 'react-native';
import { Colors } from  'constants/Colors';

export default function MenuScreen() {
    const colorScheme = Appearence.getColorScheme();
    const theme = 'dark' ? Colors.dark: Colors.light;
    const styles = createStyles(theme, colorScheme);
    const Container = Platform.OS === 'web' ? SafeAreaView : SafeAreaView;
function createStyles(theme, colorScheme) {
  return  StyleSheet.create({
});
}
}
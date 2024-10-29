import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import PillInforBox from './pillinforbox';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={backgroundStyle}>
        <PillInforBox>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>top text</Text>
            <Text style={styles.sectionTitle}>BOTTOM TEXT</Text>
          </View>
        </PillInforBox>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    color: 'white',
  },
});

export default App;

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useScreenStore } from './store/store'; 

const HomeScreen: React.FC = () => {
  const { currentScreen, setScreen } = useScreenStore();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.squareButton} onPress={() => {setScreen('search')}}>
        <Text>MEBİ</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.squareButton} onPress={() => {setScreen('search')}}>
        <Text>EBA</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,       // üst/alt boşluk
    justifyContent: 'space-around', // butonları sayfaya yayar
    alignItems: 'center',     // yatayda ortala
    backgroundColor: '#FFFFFF',
  },

  // ortak kare buton stili
  squareButton: {
    width: '60%',             // ekran genişliğinin yüzde olarak ayarı (responsive)
    aspectRatio: 1,           // genişlik = yükseklik => kare
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,         // köşeleri yuvarla
    elevation: 4,             // android shadow
    shadowColor: '#000',      // ios shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },

  // renk varyantları
  primary: {
    backgroundColor: '#0A84FF',
  },
  secondary: {
    backgroundColor: '#34C759',
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default HomeScreen;

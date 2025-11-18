import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useScreenStore } from '../store/store'; 

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
               
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },


  squareButton: {
    width: '100%',
    height: "50%",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },


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

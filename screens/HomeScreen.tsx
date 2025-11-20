import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useScreenStore } from '../store/store'; 

const HomeScreen: React.FC = () => {
  const { currentScreen, setScreen } = useScreenStore();
  return (
    <View style={styles.buttonContainer}>
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
  buttonContainer: {  
    paddingTop: 300,
    flexDirection: "row",
    justifyContent: 'center', 
    alignItems: 'center',     
    width: '100%', 
    gap:10,                              
  },

  squareButton: {
    backgroundColor: "#63b1ffff",
    width: '40%',
    height: "80%",
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
    color: '#0a84ffff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default HomeScreen;

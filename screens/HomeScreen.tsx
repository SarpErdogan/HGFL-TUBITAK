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
    paddingVertical: 40,      
    justifyContent: 'space-around', 
    alignItems: 'center',    
    backgroundColor: '#FFFFFF',
  },


  squareButton: {
    width: '60%',            
    aspectRatio: 1,          
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,         
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

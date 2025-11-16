import React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import { useScreenStore } from './store/store'; 

const ProfileScreen: React.FC = () => {
  const { currentScreen, setScreen } = useScreenStore();
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#99f3fdff' }}>
      <Text>Profile Screen</Text>
      <TouchableOpacity style={styles.homeButton} onPress ={()=> {setScreen("search")}}>
        <Text style={styles.homeButtonText}>◀</Text>
      </TouchableOpacity>
    </View>
    
  );
};
const styles = StyleSheet.create({
homeButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: '#222',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    elevation: 6, // Android gölgesi
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  homeButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
});
export default ProfileScreen;

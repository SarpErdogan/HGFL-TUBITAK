import React from 'react';
import { View, Text, TouchableOpacity,StyleSheet, Image } from 'react-native';
import { useScreenStore } from '../store/store'; 

const ProfileScreen: React.FC = () => {
  const { currentScreen, setScreen } = useScreenStore();
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#e2fcffff' }}>
      <Text style={styles.text}>Öncelikle kendi göreviniz için hazırlanmış giriş sayfasına tıklayınız.</Text>
      <Text style={styles.text}>Ardından EBA hesabınız ile giriş yapmak için TC Kimlik numaranızı yeşil kutuyla belirtilmiş bölmeye girin.</Text>
      <Text style={styles.text}>Şifrenizi de mavi kutu ile belirtilmiş bölmeye girin.</Text>
      <Image source={require('../assets/example-page.png')} style={{ width: 360, height: 400, marginVertical: 20 }} />
      <Text style={styles.text}>Eğer EBA şifreniz yoksa kırmızı kutuyla işaretlenmiş bölmeden nasıl eba şifresi alacağınızı öğrenebilirsiniz.</Text>
      <TouchableOpacity style={styles.homeButton} onPress ={()=> {setScreen("search")}}>
        <Text style={styles.homeButtonText}>◀</Text>
      </TouchableOpacity>
    </View>
    
  );
};
const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    backgroundColor:'#e2fcffff',
  },
  homeButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: '#222',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    elevation: 6, 
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

import React from 'react';
import { View, Text, TextInput, TouchableOpacity,StyleSheet } from 'react-native';
import { useScreenStore } from '../store/store'; 

const SettingsScreen: React.FC = () => {
  const { currentScreen, setScreen } = useScreenStore();
  return (
    <View style={styles.container}>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          width: 200,
          paddingHorizontal: 10,
          borderRadius: 5,
          backgroundColor: '#fff',
        }}
        placeholder="🔎Ara..."
      />
      <Text style={styles.label}>Sıkça Arananlar</Text>
      <TouchableOpacity style={styles.SSSbuttons} onPress={() => {setScreen("mebi")}} >
        <Text>Hesabımı nasıl oluştururum?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.SSSbuttons} onPress={() => {setScreen("mebi")}} >
        <Text>Şifremi unuttum, yeni şifre nasıl alınır?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.SSSbuttons} onPress={() => {setScreen("mebi")}} >
        <Text>Aradığım ders materyaline nasıl ulaşırım?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.SSSbuttons} onPress={() => {setScreen("mebi")}} >
        <Text>Denemelere nasıl ulaşırım?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.SSSbuttons} onPress={() => {setScreen("mebi")}} >
        <Text>Denemelerin çıktısını nasıl alabilirim?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.SSSbuttons} onPress={() => {setScreen("mebi")}} >
        <Text>Öğrenci istatistiklerine nasıl ulaşırım?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.SSSbuttons} onPress={() => {setScreen("mebi")}} >
        <Text>MEBİ teknik destek bölümüne nasıl ulaşırım?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.SSSbuttons} onPress={() => {setScreen("mebi")}} >
        <Text>Sertifika verilen eğitimler nerede bulunur?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.SSSbuttons} onPress={() => {setScreen("mebi")}} >
        <Text>Video içerikleri açılmıyor, nasıl çözebilirim?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.SSSbuttons} onPress={() => {setScreen("mebi")}} >
        <Text>Öğretmen–öğrenci görevleri nasıl takip edilir?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.SSSbuttons} onPress={() => {setScreen("mebi")}} >
        <Text>Giriş yapamıyorum, ne yapmalıyım?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.homeButton} onPress={()=> {setScreen("home")}}>
        <Text style={styles.homeButtonText}>◀</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',    
    alignItems: 'center',       
    paddingTop: 40,
    gap: 14,                     
    backgroundColor: '#FFFFFF',
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
    fontSize: 15,
    fontWeight: '600',
  },
  input: {
    width: '85%',
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 12,
    fontSize: 16,
  },

  label: {
    width: '85%',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },

  SSSbuttons: {
    width: '85%',
    height: 45,
    backgroundColor: '#0A84FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default SettingsScreen;

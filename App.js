import React,{useState}from 'react';
import { StyleSheet, Text, SafeAreaView, Pressable,Modal } from 'react-native';
import Formulario from './src/components/formulario';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <SafeAreaView SafeAreaView style={styles.container}>
      <Text style={styles.title}>APP de citas medicas {'\n'}
        <Text style={styles.titleBlod}>Veterinaria</Text>
      </Text>
      <Pressable 
      onPress={()=> setModalVisible(!modalVisible)} 
      style={styles.btnNuevaCita}
      >
        <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
      </Pressable>
      <Formulario modalVisible={modalVisible}
       setModalVisible={setModalVisible}
      />

    </SafeAreaView>
  );

}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#f2f3f7ff',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: '#cd1ee4fd',
    fontWeight: '600',
    marginTop: 30,
  },
  titleBlod: {
    fontWeight: '900',
    color: '#b93cb3fd',
    fontWeight: 'bold',
    marginTop: 30,
  },
  btnNuevaCita: {
    backgroundColor: '#b93cb3fd',
    padding: 10,
    marginHorizontal: 50,
    borderRadius: 10,
  },
  btnTextoNuevaCita: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});

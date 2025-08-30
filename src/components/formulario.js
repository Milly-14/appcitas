import React,{useState}from 'react';
import { View, Text, Modal, Button, ScrollView, TextInput, StyleSheet, Pressable} from 'react-native'


export default function Form({modalVisible, setModalVisible}) {

  return (
        <Modal animationType="fade" visible={modalVisible}>
              <ScrollView style={styles.container}>
                <Text style={StyleSheet.titulo}>
                    Nueva {""}<Text style={StyleSheet.tituloBold}>Cita</Text>{""}
                </Text>
                <View style={styles.field}>
                    <Text style={styles.label}>Nombre Paciente</Text>
                  <TextInput
                   style={styles.input}
                    placeholder='Paciente'
                     />
                </View>
                <View style={styles.field}>
                    <Text style={styles.label}>Nombre Propietario</Text>
                  <TextInput
                   style={styles.input}
                    placeholder='Nombre Propietario'
                     />
                </View>
                <View style={styles.field}>
                    <Text style={styles.label}>Correro electronico</Text>
                  <TextInput
                   style={styles.input}
                    placeholder='Email'
                    keyboardType='email-address'
                     />
                </View>
                <View style={styles.field}>
                    <Text style={styles.label}>Celular</Text>
                  <TextInput
                   style={styles.input}
                    placeholder='Celular'
                    keyboardType='phone-pad'
                     />
                </View>
                <View style={styles.field}>
                    <Text style={styles.label}>Sintomas</Text>
                  <TextInput
                   style={styles.input}
                    placeholder='Sintomas'
                     />
                </View>
                <Pressable style={styles.btnCerrar}
                 onPress={()=>setModalVisible(!modalVisible)}
                >
                  <Text style={styles.btnTextoCerrar}>Cerrar</Text>
                </Pressable>
              </ScrollView>
        </Modal>
  )
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#6f57a5ff',
    },

    titulo: {
      textAlign: 'center',
      fontSize: 30,
      fontWeight: '600',
      color: '#cd1ee4fd',
    },
    tituloBold: {
      fontWeight: '900',
      color: '#b93cb3fd',
    },
    field: {
      marginTop: 20,
      marginHorizontal: 30,
    },
    label: {
      color: '#fff',
      marginBottom: 10,
      fontSize: 20,
      fontWeight: '600',
    },
    input: {
      backgroundColor: '#fff',
      padding: 15,
      borderRadius: 10,
    },
    btnCerrar: {
      marginVertical: 20,
      backgroundColor: '#b93cb3fd',
      marginHorizontal: 20,
      padding: 15,
      borderRadius: 10,
    },
    btnTextoCerrar: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: '900',
      textTransform: 'uppercase',
    },
  });
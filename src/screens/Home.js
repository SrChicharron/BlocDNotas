import { SafeAreaView, View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native'
import React from 'react'
import Colors from '../style/Colors'

export default function Home(props) {
  const { navigation } = props
  const addNote = ()=>{
    navigation.navigate('Notas')
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
      <Image 
                style={styles.notepadImage} 
                source={require('../assets/notepad.png')}
            />
    </View>
    <TouchableOpacity style={styles.loginBtn} onPress={addNote}>
            <Text style={styles.loginText}>Agregar Nota</Text> 
          </TouchableOpacity> 
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
},
notepadImage: {
    width: 360,
    height: 360,
    borderRadius: 5,
    marginTop: 20,
},
loginBtn: {
  width: "80%",
  borderRadius: 25,
  height: 50,
  alignItems: "center",
  justifyContent: "center",
  marginTop: 50,
  backgroundColor: Colors.azul1,
},
    })
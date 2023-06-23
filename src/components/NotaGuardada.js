import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import PostColors from '../style/PostColors';
const getRandomColor = () => {
  const colorKeys = Object.keys(PostColors); 
  const randomKey = colorKeys[Math.floor(Math.random() * colorKeys.length)]; 
  return PostColors[randomKey]; 
};
const rndomColor=getRandomColor()
export default function NotaGuardada({titulo,texto}) {
  return (
    <View style={styles.container}>
      <ScrollView style={[{height:220,width:390, borderRadius: 15 ,backgroundColor: getRandomColor(), }]}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.contenido}>{texto}</Text>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
      marginTop:5,
      marginBottom:5
    },
  titulo:{
    marginTop: 10,
    marginLeft: 10,
      fontWeight: 'bold',
    marginBottom: 10,
  },
  contenido:{
    marginLeft: 10,
    marginRight: 10,
      fontWeight: 'bold',
  }
  
});
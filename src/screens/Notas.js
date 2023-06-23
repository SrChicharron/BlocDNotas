import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import FormularioNotas from '../components/FormularioNotas'

import NotaGuardada from '../components/NotaGuardada'
export default function Notas() {
    const [stored, setStored] = useState([])
    console.log(stored)
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Agregar Nota</Text>
      <View>
        <FormularioNotas stored={stored} setStored={setStored}></FormularioNotas>
      </View>
      <View>

      <Text style={styles.title2}>Notas Existentes</Text>
      <View style={styles.listaNotas}>
      <FlatList
        data={stored}
        renderItem={({item}) => <NotaGuardada titulo={item.titulo} texto={item.texto}></NotaGuardada>}
        keyExtractor={item => item.id}
      />
      </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: "center",
    flex:1
  },
  title: {
    marginTop: 35,
    fontWeight: 'bold',
  },
  title2: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  listaNotas: {
    height: 370,
    width: '100%',
  }
});
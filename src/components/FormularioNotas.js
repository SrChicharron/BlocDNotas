import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Colors from '../style/Colors'
import PostColors from '../style/PostColors';
import uuid from 'react-native-uuid'; 

export default function FormularioNotas(stored, {setStored}) {
    const [titleInput, setTitleInput] = useState('')
    const [textInput, setTextInput] = useState('')
    
    const addNote = ()=>{
        const nota={ id:uuid.v4(),titulo: titleInput, texto: textInput }
        if (stored===[]) {
            stored.setStored(nota)
          }else{
            stored.setStored(current => [...current,  nota ]);
          }
        setTitleInput("")
        setTextInput("")
        setBgColor(getRandomColor())
      }

      const getRandomColor = () => {
        const colorKeys = Object.keys(PostColors); 
        const randomKey = colorKeys[Math.floor(Math.random() * colorKeys.length)]; 
        return PostColors[randomKey]; 
      };
      const [bgColor, setBgColor] = useState(getRandomColor())
    return (
    <View style={styles.container}>
      <View style={[{height:280, backgroundColor: bgColor, borderRadius:20, marginTop:10 }]}>
      <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Titulo..."
              placeholderTextColor="#003f5c"
              value={titleInput}
              onChangeText={setTitleInput}
            /> 
          </View> 
          <View style={styles.inputViewLarge}>
            <TextInput
              style={styles.TextInput}
              placeholder="Contenido..."
              placeholderTextColor="#003f5c"
              multiline
              numberOfLines = {10}
              maxLength={420}
              value={textInput}
              onChangeText={setTextInput}
            /> 
          </View>
      </View>
          <TouchableOpacity style={styles.loginBtn} onPress={addNote}>
            <Text style={styles.loginText}>Agregar Nota</Text> 
          </TouchableOpacity> 
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop:10
      },
      postIt:{
        backgroundColor:'blue',
        borderRadius: 5,
        height:290,
        width:390,
        
    },
    inputView: {
      marginTop:10,
      width: 380,
      height: 45,
      marginBottom: 5,
      alignItems: "center",
    },
    inputViewLarge: {
        width: "100%",
        height: 220,
        marginBottom: 5,
        alignItems: "center",
      },
    TextInput: {
      height: '100%',
      width: 360,
      flex: 1,
      padding: 10,
      marginLeft: 20,
      fontWeight: 'bold',
      textAlignVertical: 'top'
    },
    loginBtn: {
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 25,
      backgroundColor: Colors.azul1,
    },
  });
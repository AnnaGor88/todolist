import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

export default function ListItem({ element, deleteHandler }) {
  return (
    <TouchableOpacity onPress={() => deleteHandler(element.key)}>
<Text style={styles.text}>{element.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    text: {
        padding: 20,
        textAlign: 'center',
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: '#fafafa',
        marginTop: 20,
        width: '60%',
        marginLeft: '20%'
    }
})
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, Button, View } from 'react-native'

export default function Form({ addHandler }) {
    const [text, setText] = useState('');
const onChange = (text) => {
setText(text);
};

  return (
    <View style={styles.main}>
        <TextInput style={styles.input} onChangeText={onChange} placeholder='Впишите задачу...' />
        <Button color='blue' onPress={() => addHandler(text)} title='Добавить задачу' />
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        padding: 10,
        marginVertical: 30,
        marginHorizontal: '20%',
        width: '60%'
    }
})
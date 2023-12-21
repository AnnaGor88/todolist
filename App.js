import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import Form from './components/Form';
import { useState } from 'react';

export default function App() {
const [listOfItems, setListOfItems] = useState([
  {text: 'Купить продукты', key: '1'},
  {text: 'Купить подарки', key: '2'},
  {text: 'Оплатить подписки', key: '3'},
  {text: 'Выучить React', key: '4'},
]);

const addHandler = (text) => {
  setListOfItems((list) => {
    return [
      {text: text, key: Math.random().toString(36).substring(7)},
      ...list
    ]
  })
}

const deleteHandler = (key) => {
setListOfItems((list) => {
  return list.filter((listOfItems) => listOfItems.key != key);
})
}

  return (
    <View style={styles.main}>
      <Header />
      <Form addHandler={addHandler} />
      <View style={styles.container}>
<FlatList data={listOfItems} renderItem={({ item}) => (
  <View style={styles.cards}><ListItem element={item} deleteHandler={deleteHandler} /></View>
)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});

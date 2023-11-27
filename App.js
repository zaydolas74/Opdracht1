import React from 'react';
import {StyleSheet, View, Text, Image } from 'react-native';
import Book from './components/Book';

const App = () => {

  const books = [
    {
      id: 1,
      title: 'Book Title 1',
      author: 'Some random dude 1',
      description: 'Lorem ipsum description for Book 1.',
      iban: 'ISBN: 1234567890',
    },
    {
      id: 2,
      title: 'Book Title 2',
      author: 'Some random dude 2',
      description: 'Lorem ipsum description for Book 2.',
      iban: 'ISBN: 2345678901',
    },
    {
      id: 3,
      title: 'Book Title 3',
      author: 'Some random dude 3',
      description: 'Lorem ipsum description for Book 3.',
      iban: 'ISBN: 3456789012',
    },
    {
      id: 4,
      title: 'Book Title 4',
      author: 'Some random dude 4',
      description: 'Lorem ipsum description for Book 4.',
      iban: 'ISBN: 4567890123',
    },
  ];

  const handleRead = (title) => {
    console.log(`"${title}" read`);
  };

  const handleTitlePress = (title) => {
    console.log(`"${title}" pressed`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Bookshop</Text>
      <View style={styles.winkelkar}>
      <Image source={require('./assets/cart.png')} style={{ width: 30, height: 30, marginLeft: 10 }} />
      <Text style={{ marginLeft: 5 }}>5</Text>
      </View>
      </View>
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          description={book.description}
          iban={book.iban}
          onRead={handleRead}
          onTitlePress={handleTitlePress}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginLeft: 20,
    width: '90%',

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  winkelkar: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});

export default App;
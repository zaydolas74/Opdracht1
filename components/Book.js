import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Book = ({ title, author, description, iban, onRead, onTitlePress }) => {
  
  return (
    <View style={styles.bookContainer}>
      <TouchableOpacity onPress={() => onTitlePress(title)}>
        <Text style={styles.bookTitle}>{title}</Text>
      </TouchableOpacity>
      <Text style={styles.bookAuthor}>By {author}</Text>
      <Text style={styles.bookDescription}>{description}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.bookIban}>{iban}</Text>
        <TouchableOpacity onPress={() => onRead(title)}>
          <Text style={styles.readButton}>Read</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bookContainer: {
    marginTop: 30,
    width: '100%',
  },
  bookTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bookAuthor: {
    fontSize: 16,
  },
  bookDescription: {
    fontSize: 14,
    marginTop: 5,
  },
  bookIban: {
    fontSize: 12,
  },
  readButton: {
    color: 'blue',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default Book;


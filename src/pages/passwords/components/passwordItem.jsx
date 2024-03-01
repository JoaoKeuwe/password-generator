import React from 'react';
import {  Text, StyleSheet, Pressable } from 'react-native';

export function PasswordItem({ data, removePassword }) {
  return (
    <Pressable style={styles.container} onPress={removePassword}>
      <Text style={styles.text}>{data}</Text>
    </Pressable>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0e0e0e',
    padding: 14,
    width: '100%',
    marginTop: 14,
    marginBottom: 8,
    flexDirection: 'row',
    borderRadius: 8,
    justifyContent: 'space-between',
  },
  text: {
    color: 'white'
  }
})
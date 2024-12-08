import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText'; // Importando o ThemedText

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <ThemedText type="title" style={styles.text}>Sobre a Loja</ThemedText>
      </View>
      <View style={styles.content}>
        <ThemedText type="default" style={styles.text}>
          Bem-vindo à Viluck! Nossa loja oferece as últimas tendências da moda com
          uma variedade de produtos de alta qualidade. Estamos aqui para proporcionar
          a você uma experiência de compra única e satisfatória.
        </ThemedText>
        <ThemedText type="default" style={styles.text}>
          Nosso compromisso é com a satisfação total dos nossos clientes.
        </ThemedText>
        <ThemedText type="default" style={styles.text}>
          Oferecemos entrega rápida, segura e um excelente suporte ao cliente.
        </ThemedText>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginTop: 50,
    marginBottom: 20,
    alignItems: 'center',
  },
  content: {
    marginTop: 20,
    backgroundColor: '#fff', 
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: 'black', // Cor do texto preta
  },
  title: {
    color: '#ffff', // Se você também quiser que o título tenha cor preta
  },
});

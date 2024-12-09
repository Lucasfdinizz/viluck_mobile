import React from 'react';
import { View, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function AboutScreen() {
  const openInstagram = () => {
    Linking.openURL('https://www.instagram.com/viluck__');
  };

  const openWhatsapp = () => {
    Linking.openURL('https://wa.me/+5585986681360');
  };

  const openLocation = () => {
    Linking.openURL('https://maps.app.goo.gl/sWcQ5ozsThqv4oK4A');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <ThemedText type="title" style={styles.titleText}>Sobre a Loja</ThemedText>
      </View>

      <View style={styles.content}>
        <ThemedText type="default" style={styles.text}>
          Bem-vindo à Viluck! Nossa loja oferece as últimas tendências da moda com
          uma variedade de produtos de alta qualidade. Estamos aqui para proporcionar
          a você uma experiência de compra única e satisfatória.
        </ThemedText>
      </View>

      <View style={styles.content}>
        <ThemedText type="default" style={styles.text}>
          Nosso compromisso é com a satisfação total dos nossos clientes.
        </ThemedText>
      </View>

      <View style={styles.content}>
        <ThemedText type="default" style={styles.text}>
          Oferecemos entrega rápida, segura e um excelente suporte ao cliente.
        </ThemedText>
      </View>

      <View style={styles.header}>
        <ThemedText type="title" style={styles.titleText}>Localização</ThemedText>
      </View>

      <View style={styles.locationContent}>
        <TouchableOpacity style={styles.locationItem} onPress={openLocation}>
          <Icon name="map-marker-alt" size={35} color="#FF6347" /> 
          <ThemedText style={styles.locationText}>
            Av. Alberto Magno, Nº 1399, Montese, Fortaleza - CE
          </ThemedText>
        </TouchableOpacity>
      </View>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialItem} onPress={openInstagram}>
          <Icon name="instagram" size={35} color="#E4405F" /> 
          <ThemedText style={styles.socialText}>@Viluck__</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialItem} onPress={openWhatsapp}>
          <Icon name="whatsapp" size={35} color="#25D366" /> 
          <ThemedText style={styles.socialText}>(85)98668-1360</ThemedText>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4', 
  },
  header: {
    marginTop: 50,
    alignItems: 'center',
  },
  content: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    color: 'black',
  },
  titleText: {
    fontSize: 24,
    color: '#333',
    fontWeight: 'bold',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  socialItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 25,
  },
  socialText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#333',
  },
  locationContent: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  locationItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#333',
  },
});

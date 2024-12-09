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
      {/* Header */}
      <View style={styles.header}>
        <ThemedText type="title" style={styles.titleText}>Sobre a Loja</ThemedText>
      </View>

      {/* About Us Section */}
      <View style={styles.content}>
        <ThemedText type="default" style={styles.text}>
          Bem-vindo à Viluck! Nossa loja oferece as últimas tendências da moda com
          uma variedade de produtos de alta qualidade. Estamos aqui para proporcionar
          a você uma experiência de compra única e satisfatória.

          A Viluck foi criada com o objetivo de oferecer aos nossos clientes um espaço
          de moda acessível e cheio de estilo. Fundada em 2020, começamos nossa jornada
          online, trazendo as últimas tendências e moda de qualidade para quem busca
          estar sempre atualizado.

          Em 2023, decidimos dar um passo importante e abrir nossa loja física, no coração de Fortaleza.
          Agora, além da conveniência de comprar online, nossos clientes podem nos visitar,
          experimentar os produtos e aproveitar um atendimento personalizado, de perto.

          Estamos constantemente buscando melhorar e evoluir para proporcionar o melhor
          em moda, conforto e estilo para nossos clientes.
        </ThemedText>
      </View>

      {/* Location */}
      <View style={styles.header}>
        <ThemedText type="title" style={styles.titleText}>Localização</ThemedText>
      </View>

      <View style={styles.locationContent}>
        <TouchableOpacity style={styles.locationItem} onPress={openLocation}>
          <Icon name="map-marker-alt" size={30} color="#FF6347" style={styles.icon} />
          <ThemedText style={styles.locationText}>
            Av. Alberto Magno, Nº 1399, Montese, Fortaleza - CE
          </ThemedText>
        </TouchableOpacity>
      </View>

      {/* Social Media Section */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialItem} onPress={openInstagram}>
          <Icon name="instagram" size={35} color="#E4405F" style={styles.icon} />
          <ThemedText style={styles.socialText}>@Viluck__</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialItem} onPress={openWhatsapp}>
          <Icon name="whatsapp" size={35} color="#25D366" style={styles.icon} />
          <ThemedText style={styles.socialText}>(85)98668-1360</ThemedText>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#F9F9F9', // Cor de fundo mais suave
  },
  header: {
    marginTop: 40,
    alignItems: 'center',
    marginBottom: 20,
  },
  titleText: {
    fontSize: 28,
    color: '#333',
    fontWeight: 'bold',
  },
  content: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 25,
    marginBottom: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  text: {
    color: '#555',
    fontSize: 16,
    lineHeight: 24,
  },
  locationContent: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 25,
    marginTop: 25,
    marginBottom: 30,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  locationItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
    flexWrap: 'wrap',
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
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  socialText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
  icon: {
    transition: '0.3s', // Animação sutil para os ícones
  },
});

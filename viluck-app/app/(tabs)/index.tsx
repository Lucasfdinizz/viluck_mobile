import React from 'react';
import { Image, StyleSheet, ScrollView, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Icon from 'react-native-vector-icons/Feather';
import { useRouter } from 'expo-router'; // Importando o useRouter

export default function HomeScreen() {
  // Dados dos produtos
  const products = [
    {
      id: 1,
      name: "Blusa Elegante",
      price: "R$ 99,99",
      size: "M",
      color: "Azul",
      image: require('@/assets/images/roupa.png')
    },
    {
      id: 2,
      name: "Saia Estilosa",
      price: "R$ 129,99",
      size: "P",
      color: "Preto",
      image: require('@/assets/images/roupa.png')
    },
    {
      id: 3,
      name: "Camisa Casual",
      price: "R$ 79,99",
      size: "G",
      color: "Branca",
      image: require('@/assets/images/roupa.png')
    },
    {
      id: 4,
      name: "Calça Jeans",
      price: "R$ 149,99",
      size: "M",
      color: "Azul",
      image: require('@/assets/images/roupa.png')
    },
    // Adicione mais produtos conforme necessário
  ];

  // Instanciando o router
  const router = useRouter();

  // Funções dos botões
  const handleAddToCart = (productId: number) => {
    console.log(`Produto ${productId} adicionado ao carrinho!`);
    // Aqui você pode adicionar a lógica para adicionar ao carrinho
  };

  const handleLearnMore = (productId: number) => {
    console.log(`Saiba mais sobre o produto ${productId}`);
    // Aqui você pode exibir mais informações sobre o produto ou navegar para outra tela
  };

  // Função para renderizar cada item
  const renderProduct = ({ item }) => (
      <View style={styles.productContainer}>
        <Image source={item.image} style={styles.productImage} />
        <View style={styles.productInfo}>
          <ThemedText type="subtitle">{item.name}</ThemedText>
          <ThemedText>{item.price}</ThemedText>
          <ThemedText>Tamanho: {item.size}</ThemedText> {/* Tamanho do produto */}
          <ThemedText>Cor: {item.color}</ThemedText> {/* Cor do produto */}

          {/* Botões de visualização */}
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={() => handleAddToCart(item.id)}>
              <ThemedText type="defaultSemiBold">Adicionar ao Carrinho</ThemedText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  );

  return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
          <ThemedView style={styles.header}>
            <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
            <ThemedText type="title">Bem-vindo à Viluck!</ThemedText>
          </ThemedView>

          {/* Lista de Produtos em 2 colunas */}
          <FlatList
              data={products}
              renderItem={renderProduct}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}  // Exibir 2 produtos por linha
              columnWrapperStyle={styles.columnWrapper}  // Estilo para separar as colunas
              contentContainerStyle={styles.productList}
          />
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    padding: 20,
  },
  scrollContent: {
    paddingBottom: 20, // Remova o espaço extra para o menu fixo
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: 'black',  // Cor de fundo do cabeçalho
    padding: 20,
    borderRadius: 10,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  productList: {
    marginTop: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between', // Para separar as colunas
    marginBottom: 20,
  },
  productContainer: {
    flexDirection: 'column',  // Organizar em coluna para cada produto
    marginBottom: 20,
    padding: 5,
    flex: 1,  // Garantir que ocupe a mesma quantidade de espaço em cada coluna
  },
  productImage: {
    width: '100%',  // Ocupa toda a largura disponível
    height: 250,
    borderRadius: 10,
    marginBottom: 10,  // Espaço entre a imagem e as descrições
  },
  productInfo: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'left',  // Centralizar o texto
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#dc4895',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
  },
});

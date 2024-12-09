import React, { useEffect } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import axios from "axios";
import { Produto } from "@/types/produto";
import { ValorEmReal } from "@/helpers/Conversores";
import { API_URL, IMAGE_URL } from "@/constants/Urls";

export default function HomeScreen() {
  const [products, setProducts] = React.useState<Produto[]>([]);

  useEffect(() => {
    axios.get(`${API_URL}/produtos`).then(e => setProducts(e.data));
  }, []);

  const handleAddToCart = (productId: number) => {
    console.log(`Produto ${productId} adicionado ao carrinho!`);
  };

  const renderProduct = (row) => {
    const item = row.item;
    return (
      <View style={styles.productContainer}>
        <Image source={{ uri: `${IMAGE_URL}${item.imagem}` }} style={styles.productImage} />
        <View style={styles.productInfo}>
          <ThemedText type="title" style={styles.productName}>{item.nome}</ThemedText>
          <ThemedText type="subtitle" style={styles.productDescription}>{item.descricao}</ThemedText>
          <ThemedText style={styles.productPrice}>{ValorEmReal(item.preco)}</ThemedText>
          <ThemedText style={styles.productDetails}>Tamanho: {item.tamanho.nome}</ThemedText>
          <ThemedText style={styles.productDetails}>Cor: {item.cor}</ThemedText>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={() => handleAddToCart(item.id)}>
              <ThemedText type="defaultSemiBold" style={styles.buttonText}>Adicionar ao Carrinho</ThemedText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const headerComponent = () => (
    <ThemedView style={styles.header}>
      <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
      <ThemedText type="title" style={styles.headerTitle}>Bem-vindo à Viluck!</ThemedText>
    </ThemedView>
  );
  
  return (
    <FlatList
      ListHeaderComponent={headerComponent} // Exibe o cabeçalho antes da lista
      data={products}
      renderItem={renderProduct}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapper}
      contentContainerStyle={styles.productList}
      style={styles.flatListContainer} // Adicionado para controlar o fundo
      showsVerticalScrollIndicator={false} // Remove a barra de rolagem
    />
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',  // Cor de fundo clara
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#f7f7f7',  // Manter o fundo claro
    paddingVertical: 25, // ajuste no padding vertical para espaçamento
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 25,
  },
  headerTitle: {
    color: '#dc4895',
    fontWeight: 'bold',
  },
  productList: {
    marginTop: 0,
    marginLeft: 10,
    marginRight: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between', 
    marginBottom: 0, 
  },
  productContainer: {
    flexDirection: 'column',
    marginBottom: 12, 
    padding: 10,
    width: (width / 2) - 15, 
    backgroundColor: '#fff',  // Fundo branco para os produtos
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 5,
    resizeMode: 'cover',
  },
  productInfo: {
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 5,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  productDescription: {
    fontSize: 14,
    color: '#777',
    marginVertical: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#dc4895',
    marginVertical: 5,
  },
  productDetails: {
    fontSize: 14,
    color: '#777',
    marginVertical: 3,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#dc4895',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    flex: 1,
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  flatListContainer: {
    backgroundColor: '#f7f7f7',  // Cor de fundo clara para o FlatList
  }
});

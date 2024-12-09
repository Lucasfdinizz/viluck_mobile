export type Produto = {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    categoria: Categoria;
    tamanho: Tamanho;
    imagem: string;
    cor: string;
}

export type Categoria = {
    id: number;
    nome: string;
}
export type Tamanho = {
    id: number;
    nome: string;
}
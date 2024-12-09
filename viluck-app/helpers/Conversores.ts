export const ValorEmReal = (valor : number)=>
    valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
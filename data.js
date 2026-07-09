const produtosData = [
  { id: 1, nome: "Arroz Agulhinha 1kg", mercado: "Supermercado do Povo", tipo: "aumento", precoAnterior: 5.50, precoAtual: 5.99 },
  { id: 2, nome: "Feijão Carioca 1kg", mercado: "Atacadão da Barra", tipo: "reducao", precoAnterior: 8.40, precoAtual: 7.20 },
  { id: 3, nome: "Açúcar Refinado 1kg", mercado: "Comercial São José", tipo: "aumento", precoAnterior: 4.20, precoAtual: 4.65 },
  { id: 4, nome: "Óleo de Soja 900ml", mercado: "Center Box", tipo: "reducao", precoAnterior: 6.80, precoAtual: 5.98 },
  { id: 5, nome: "Café Torrado 250g", mercado: "Rede Baratão", tipo: "aumento", precoAnterior: 9.50, precoAtual: 10.20 },
  { id: 6, nome: "Leite Integral 1L", mercado: "Mercadinho São Francisco", tipo: "reducao", precoAnterior: 5.90, precoAtual: 5.19 },
  { id: 7, nome: "Farinha de Mandioca 1kg", mercado: "Mercadinho da Esquina", tipo: "aumento", precoAnterior: 6.00, precoAtual: 6.50 },
  { id: 8, nome: "Macarrão Espaguete 500g", mercado: "Supermercado Compre Max", tipo: "reducao", precoAnterior: 3.40, precoAtual: 2.95 },
  { id: 9, nome: "Margarina 500g", mercado: "Comercial Oliveira", tipo: "aumento", precoAnterior: 5.80, precoAtual: 6.20 },
  { id: 10, nome: "Cuscuz Flocado 500g", mercado: "Mercadinho Vila do Mar", tipo: "reducao", precoAnterior: 2.30, precoAtual: 1.99 },
  { id: 11, nome: "Sal Refinado 1kg", mercado: "Mercadinho Três Irmãos", tipo: "aumento", precoAnterior: 2.10, precoAtual: 2.40 },
  { id: 12, nome: "Biscoito Cream Cracker", mercado: "Supermercado do Povo", tipo: "reducao", precoAnterior: 4.90, precoAtual: 4.30 },
  { id: 13, nome: "Extrato de Tomate 340g", mercado: "Atacadão da Barra", tipo: "aumento", precoAnterior: 3.10, precoAtual: 3.50 },
  { id: 14, nome: "Frango Resfriado (kg)", mercado: "Açougue Central", tipo: "reducao", precoAnterior: 12.90, precoAtual: 11.50 },
  { id: 15, nome: "Carne Bovina kg (Chã)", mercado: "Açougue Central", tipo: "aumento", precoAnterior: 32.00, precoAtual: 34.90 },
  { id: 16, nome: "Ovos Brancos (Dúzia)", mercado: "Hortifruti da Praça", tipo: "reducao", precoAnterior: 9.00, precoAtual: 7.99 },
  { id: 17, nome: "Banana Prata (kg)", mercado: "Hortifruti da Praça", tipo: "aumento", precoAnterior: 4.50, precoAtual: 5.20 },
  { id: 18, nome: "Tomate kg", mercado: "Frangolândia", tipo: "reducao", precoAnterior: 7.80, precoAtual: 5.40 },
  { id: 19, nome: "Cebola kg", mercado: "Frangolândia", tipo: "aumento", precoAnterior: 5.20, precoAtual: 6.10 },
  { id: 20, nome: "Batata Inglesa kg", mercado: "Center Box", tipo: "reducao", precoAnterior: 6.50, precoAtual: 5.30 },
  { id: 21, nome: "Pão Francês kg", mercado: "Padaria Pão de Ouro", tipo: "aumento", precoAnterior: 14.00, precoAtual: 15.20 },
  { id: 22, nome: "Queijo Coalho kg", mercado: "Mercadinho da Esquina", tipo: "reducao", precoAnterior: 38.00, precoAtual: 34.90 },
  { id: 23, nome: "Presunto Cozido kg", mercado: "Rede Baratão", tipo: "aumento", precoAnterior: 24.00, precoAtual: 26.50 },
  { id: 24, nome: "Sardinha em Lata", mercado: "Comercial São José", tipo: "reducao", precoAnterior: 4.50, precoAtual: 3.99 },
  { id: 25, nome: "Sabonete em Barra", mercado: "Supermercado do Povo", tipo: "aumento", precoAnterior: 2.20, precoAtual: 2.60 },
  { id: 26, nome: "Creme Dental 90g", mercado: "Atacadão da Barra", tipo: "reducao", precoAnterior: 4.10, precoAtual: 3.45 },
  { id: 27, nome: "Detergente Líquido", mercado: "Mercadinho Três Irmãos", tipo: "aumento", precoAnterior: 2.50, precoAtual: 2.99 },
  { id: 28, nome: "Sabão em Pó 1kg", mercado: "Supermercado Compre Max", tipo: "reducao", precoAnterior: 11.40, precoAtual: 9.80 },
  { id: 29, nome: "Papel Higiênico (4 m)", mercado: "Comercial Oliveira", tipo: "aumento", precoAnterior: 5.50, precoAtual: 6.20 },
  { id: 30, nome: "Manteiga da Terra 200g", mercado: "Mercadinho Vila do Mar", tipo: "reducao", precoAnterior: 12.50, precoAtual: 10.90 }
];

const api = {
  async getProdutos(tipo = 'todos') {
    if (tipo === 'todos') return produtosData;
    return produtosData.filter(p => p.tipo === tipo);
  },
  async getResumo() {
    const aumentos = produtosData.filter(p => p.tipo === 'aumento').length;
    const reducoes = produtosData.filter(p => p.tipo === 'reducao').length;
    return {
      data: "Hoje",
      indice: "+1.4%",
      stats: {
        aumentos: aumentos,
        reducoes: reducoes,
        mercados: 15
      }
    };
  }
};
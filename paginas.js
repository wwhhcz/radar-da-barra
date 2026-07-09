// Função que gera a estrutura de cada card de alimento
function renderCard(produto) {
  // Garante que se o tipo for 'aumento', usa a classe correta, senão usa 'reducao'
  const classeTipo = produto.tipo === 'aumento' ? 'aumento' : 'reducao';
  const seta = produto.tipo === 'aumento' ? '▲ Subiu' : '▼ Baixou';
  
  return `
    <article class="cartao-produto ${classeTipo}">
      <span class="variacao">${seta}</span>
      <h3>${produto.nome}</h3>
      <span class="mercado">${produto.mercado}</span>
      <div class="preco-wrapper">
        <span style="text-decoration: line-through; color: #999; font-size: 0.9em;">R$ ${produto.precoAnterior.toFixed(2)}</span>
        <span class="preco">R$ ${produto.precoAtual.toFixed(2)}</span>
      </div>
    </article>
  `;
}

// Controla a página inicial (index.html)
async function renderIndex() {
  const container = document.getElementById('destaques');
  if (!container) return;

  try {
    if (typeof api === 'undefined') {
      console.error("Erro: O arquivo js/data.js não foi carregado corretamente.");
      return;
    }

    const resumo = await api.getResumo();
    if (document.getElementById('hoje')) document.getElementById('hoje').textContent = resumo.data;
    if (document.getElementById('indiceValor')) document.getElementById('indiceValor').textContent = resumo.indice;
    if (document.getElementById('totalAumentos')) document.getElementById('totalAumentos').textContent = resumo.stats.aumentos;
    if (document.getElementById('totalReducoes')) document.getElementById('totalReducoes').textContent = resumo.stats.reducoes;
    if (document.getElementById('totalMercados')) document.getElementById('totalMercados').textContent = resumo.stats.mercados;

    const produtos = await api.getProdutos();
    container.innerHTML = produtos.slice(0, 6).map(renderCard).join('');
  } catch (erro) {
    console.error("Erro ao renderizar a Home:", erro);
  }
}

// Controla a página de listagem completa (precos.html)
async function renderPrecos() {
  const container = document.getElementById('listaPrecos');
  if (!container) {
    console.error("Erro: Não foi encontrado o elemento id='listaPrecos' no HTML.");
    return;
  }

  try {
    if (typeof api === 'undefined') {
      container.innerHTML = `<p style="color:red; text-align:center; padding:2rem;">Erro: O banco de dados (js/data.js) não foi encontrado ou está com erro de sintaxe.</p>`;
      return;
    }

    // Detecta o filtro selecionado na URL (?tipo=todos, ?tipo=aumento, ?tipo=reducao)
    const urlParams = new URLSearchParams(window.location.search);
    const tipo = urlParams.get('tipo') || 'todos';

    // Altera visualmente qual aba está selecionada (só se as abas existirem)
    document.querySelectorAll('.aba').forEach(aba => {
      aba.classList.toggle('ativa', aba.dataset.tipo === tipo);
    });

    // Atualiza os contadores numéricos das abas com segurança
    const resumo = await api.getResumo();
    const txtAumentos = document.getElementById('contagemAumentos');
    const txtReducoes = document.getElementById('contagemReducoes');
    
    if (txtAumentos) txtAumentos.textContent = resumo.stats.aumentos;
    if (txtReducoes) txtReducoes.textContent = resumo.stats.reducoes;

    // Busca a lista de alimentos filtrada e injeta no HTML
    const produtos = await api.getProdutos(tipo);
    
    if (!produtos || produtos.length === 0) {
      container.innerHTML = `<p style="text-align:center; color:#666; padding:2rem;">Nenhum produto encontrado.</p>`;
      return;
    }

    container.innerHTML = produtos.map(renderCard).join('');
  } catch (erro) {
    console.error("Erro ao renderizar os preços:", erro);
    container.innerHTML = `<p style="color:red; text-align:center; padding:2rem;">Erro crítico ao carregar dados: ${erro.message}</p>`;
  }
}
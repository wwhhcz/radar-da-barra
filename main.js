// js/main.js
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menuBtn');
  const menuMobile = document.getElementById('menuMobile');
  
  if (menuBtn && menuMobile) {
    menuBtn.addEventListener('click', () => {
      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !isExpanded);
      if (isExpanded) {
        menuMobile.setAttribute('hidden', '');
      } else {
        menuMobile.removeAttribute('hidden');
      }
    });
  }

  const tickerTrilho = document.getElementById('tickerTrilho');
  if (tickerTrilho) {
    api.getProdutos().then(produtos => {
      const texto = produtos.map(p => 
        `${p.nome} no ${p.mercado}: R$ ${p.precoAtual.toFixed(2)} ${p.tipo === 'aumento' ? '▲' : '▼'}`
      ).join('   •   ');
      tickerTrilho.innerHTML = `<span>${texto}   •   </span><span>${texto}   •   </span>`;
    });
  }
});
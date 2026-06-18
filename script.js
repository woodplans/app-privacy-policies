const searchInput = document.getElementById('appSearch');
if (searchInput) {
  searchInput.addEventListener('input', function () {
    const q = this.value.toLowerCase().trim();
    document.querySelectorAll('[data-app-card]').forEach(function (card) {
      const name = card.getAttribute('data-name') || '';
      const cat = card.getAttribute('data-category') || '';
      const visible = name.includes(q) || cat.includes(q);
      card.style.display = visible ? 'flex' : 'none';
    });
  });
}
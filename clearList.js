function clearList() {
  postaviPitanje.style.display = 'block';
  osvojenaSuma.style.display = 'none';
  ukupnoPoena.style.display = 'none';
  osvojiliSte.style.display = 'none';

  for (var i = 0; i < zaSum.length; i++) {
    zaSum[i].style.color = 'white';
  }
};

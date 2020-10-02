
function odustani() {
  sound.playQuestionEnd();
  sound.final();
  osvojiliSte.style.display = 'block';
  osvojenaSuma.innerHTML = document.querySelector('#pt'+brojac).children[0].innerHTML + ' rsd';
  postaviPitanje.style.display = 'none';
  osvojenaSuma.style.display = 'block';
  ukupnoPoena.innerHTML = quiz.score + ' poena';
  ukupnoPoena.style.display = 'block';
  repeat();
};

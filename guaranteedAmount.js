function zagarantovanaSuma() {
    osvojiliSte.style.display = 'block';
    osvojenaSuma.style.display = 'block';
    ukupnoPoena.style.display = 'block';
    ukupnoPoena.innerHTML = quiz.score + ' poena';
  if (brojac >= 5) {
      osvojiliSte.style.display = 'block';
      osvojenaSuma.innerHTML = '3.000' +' rsd';
      osvojenaSuma.style.display = 'block';
      ukupnoPoena.innerHTML = quiz.score + ' poena';
      ukupnoPoena.style.display = 'block';
  }else {
      osvojiliSte.style.display = 'block';
      osvojenaSuma.innerHTML = '0' +' rsd';
      osvojenaSuma.style.display = 'block';
      ukupnoPoena.style.display = 'block';
      ukupnoPoena.innerHTML = quiz.score + ' poena';
  }

  if (brojac >= 10) {
    osvojiliSte.style.display = 'block';
    osvojenaSuma.innerHTML = '96.000' +' rsd';
    osvojenaSuma.style.display = 'block';
    ukupnoPoena.style.display = 'block';
    ukupnoPoena.innerHTML = quiz.score + ' poena';
  }
};

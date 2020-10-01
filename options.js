function repeat() {
  polaPolaBtn.children[0].setAttribute('src','sl/img1.png');
  pomocPrijateljaBtn.children[0].setAttribute('src','sl/img2.png');
  pomocPublikeBtn.children[0].setAttribute('src','sl/img3.png');
  ponoviBtn.style.display = 'block';
  ponoviBtn.onclick = run;
  idOpcije.innerHTML = '';
  h.innerHTML = '';
  brojac = 0;
  br1 = 0;
  br2 = 0;
  br3 = 0;
  quiz.index = 0;
  quiz.score = 0;
  quiz.error = 0;

  for (let i = 0; i < bingo.length; i++) {
    bingo[i].style.background = '#000d33';
    bingo[i].style.color = 'gold';
  }
  for (let i = 0; i < zaSum.length; i++) {
    zaSum[i].style.color = 'white';
  }
  for (var i = 0; i < col.length; i++) {
    col[i].innerHTML = '';
  }
  postaviPitanje.addEventListener('click', askQuestions);
};

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

function clearList() {
  postaviPitanje.style.display = 'block';
  osvojenaSuma.style.display = 'none';
  ukupnoPoena.style.display = 'none';
  osvojiliSte.style.display = 'none';

  for (var i = 0; i < zaSum.length; i++) {
    zaSum[i].style.color = 'white';
  }
};

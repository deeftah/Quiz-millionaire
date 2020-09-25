const ponoviBtn = document.querySelector('#ponoviBtn');
let odustaniBtn = document.querySelector('#odustani');
const postaviPitanje = document.querySelector('.pitanje');
let idOpcije = document.querySelector('#opcije');
let bingo = document.querySelectorAll('.bingo');
let h = document.querySelector('h1');
let abcd = ['* A: ','* B: ','* C: ','* D: '];
let points = document.querySelector('#points');
let zaSum = document.querySelectorAll('.belo');
let osvojiliSte = document.querySelector('#osvojiliSte');
let osvojenaSuma = document.querySelector('#osvojenaSuma');
let ukupnoPoena = document.querySelector('#ukupnoPoena');
let polaPolaBtn = document.querySelectorAll('.pomoc')[0];
let pomocPrijateljaBtn = document.querySelectorAll('.pomoc')[1];
let pomocPublikeBtn = document.querySelectorAll('.pomoc')[2];
let pomPrView = document.querySelector('#pomPrijatelja');
let col = document.querySelectorAll('.col');
let current;
let rand;
let brojac = 0;
let br1 = 0;
let br2 = 0;
let br3 = 0;
let seconds = 20;
let closse = document.querySelector('#closse');
let pomPublike = document.querySelector('#pomPublike');

window.addEventListener('load', run);

  function run() {
    clearList();
    let text = '<div class="option"></div>';
      for (let i = 0; i < 4; i++) {
        idOpcije.innerHTML += text;
      }
    };
      postaviPitanje.addEventListener('click', askQuestions);
      odustaniBtn.addEventListener('click', odustani);

          function askQuestions() {
              sound.playQuizEnd();
              sound.playQuiz();
              sound.playQuestionEnd();
              sound.playQuestion();
              sound.correctAnswerEnd();
              ponoviBtn.style.display = 'none';
              idOpcije.innerHTML = '';
              run();

            if (!quiz.end(quiz.milioner)) {
                current = quiz.getQuestion(quiz.milioner);
                h.innerHTML = current.text;
                rand = quiz.randomize(current);
                let counter = 0;
                let optionHolders = document.querySelectorAll('.option');

                let loop = setInterval(function () {
                  optionHolders[counter].innerHTML =  abcd[counter];
                  optionHolders[counter].innerHTML += rand[counter];
                  counter++;
                  if (counter == 4) {
                    clearInterval(loop);
                      if (br1 === 0) {
                        polaPolaBtn.addEventListener('click', polaPola);
                      }else {
                        polaPolaBtn.removeEventListener('click', polaPola);
                      }
                      if (br2 === 0) {
                        pomocPrijateljaBtn.addEventListener('click', pomocPrijatelja);
                      }else {
                        pomocPrijateljaBtn.removeEventListener('click', pomocPrijatelja);
                      }
                      if (br3 === 0) {
                        pomocPublikeBtn.addEventListener('click', pomocPublike);
                      }else {
                        pomocPublikeBtn.removeEventListener('click', pomocPublike);
                      }
                  }
                },100)

              for (let i = 0; i < optionHolders.length; i++) {
                    optionHolders[i].addEventListener('click',clickForAnswer);
                  };

              function clickForAnswer() {
                        brojac++;
                        this.style.background = 'orange';
                        this.style.color = 'black';
                        this.children[0].style.color = 'black';
                        quiz.answers(this,current);

                        if (quiz.error === 1) {
                            postaviPitanje.removeEventListener('click', askQuestions);
                        }

                        for (let i = 0; i < bingo.length; i++) {
                            bingo[i].style.background = '#000d33';
                            bingo[i].style.color = 'gold';
                        }

                        for (var i = 0; i < zaSum.length; i++) {
                          zaSum[i].style.color = 'white';
                        }

                        if (this.children[0].innerHTML == current.answer) {
                          for (let i = 0; i < optionHolders.length; i++) {
                                optionHolders[i].removeEventListener('click',clickForAnswer);
                              };
                                sound.correctAnswer();
                                document.querySelector('#pt'+brojac).style.background = 'orange';
                                document.querySelector('#pt'+brojac).style.color = 'black';
                                this.style.background = 'green';

                                if (brojac == 15) {
                                  osvojiliSte.style.display = 'block';
                                  osvojenaSuma.innerHTML = '3.000.000' +' rsd';
                                  osvojenaSuma.style.display = 'block';
                                  ukupnoPoena.style.display = 'block';
                                  ukupnoPoena.innerHTML = quiz.score + ' poena';
                                  repeat();
                                  postaviPitanje.style.display = 'none';
                                }

                        }else {
                          for (let i = 0; i < optionHolders.length; i++) {
                                optionHolders[i].removeEventListener('click',clickForAnswer);
                              };
                                sound.errorAnswer();
                                brojac -= 1;
                                document.querySelector('#pt'+brojac).style.background = 'orange';
                                document.querySelector('#pt'+brojac).style.color = 'black';
                                postaviPitanje.style.display = 'none';
                                zagarantovanaSuma();
                                repeat();
                        }
                        points.innerHTML = quiz.score;
                      }
                      }else {
                        repeat();
                    };

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
  };

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

  function polaPola() {
    sound.playQuestionEnd();
    sound.final();
    br1++;
    polaPolaBtn.children[0].setAttribute('src','sl/img1-2.png');
    current = quiz.getQuestion(quiz.milioner);
    rand = quiz.randomize(current);
    let optionHolders = document.querySelectorAll('.option');
    let arr = [];
    for (let i = 0; i < optionHolders.length; i++) {
      if (optionHolders[i].children[0].innerHTML.indexOf(current.answer) == -1) {
          arr.push(optionHolders[i].children[0]);
      }
    }
    arr[0].innerHTML = '';
    arr[1].innerHTML = '';
  };

  function pomocPrijatelja() {
    sound.final();
    br2++;
    pomocPrijateljaBtn.children[0].setAttribute('src','sl/img2-2.png');
    let odg = ['Nisam sigurna','Nisam sigurna','Mislim da je "A"','Mislim da je "B"','Mislim da je "C"','Mislim da je "D"','Nisam sigurna'];
    let r = Math.floor(Math.random() * odg.length);
    sound.answerFriend();
    let loop = setInterval(function () {
      seconds--;
      if (seconds === 12) {
        clearInterval(loop);
        sound.answerFriendOff();
        let loop2 = setInterval(function () {
          seconds--;
          sound.helloVoice();
          if (seconds === 7) {
            clearInterval(loop2);
            sound.helloVoiceOff();
            let loop3 = setInterval(function () {
              seconds--;
              if (seconds === 0) {
                clearInterval(loop3);
                document.querySelector('#odgPrijatelja').innerHTML = odg[r];
              }
            },1000)
          }
        },1000)
      }
    },1000)

    pomPrijatelja.style.display = 'block';
    document.querySelector('#close').onclick = function () {
      pomPrijatelja.style.display = 'none';
      document.querySelector('#odgPrijatelja').innerHTML = '';
      seconds = 20;
    }
  };

function pomocPublike() {
  sound.playQuestionEnd();
  sound.final();
  br3++;
  document.querySelector('#pomPublike').style.display = 'block';
  pomocPublikeBtn.children[0].setAttribute('src','sl/img3-2.png');
  current = quiz.getQuestion(quiz.milioner);
  rand = quiz.randomize(current);
  let optionHolders = document.querySelectorAll('.option');
  let arr = [];
  let text = '<div id="stubic"></div>';
  let arr2 = ['<div id="stubic1"></div>','<div id="stubic2"></div>','<div id="stubic3"></div>','<div id="stubic4"></div>'];

  setTimeout(function () {
    for (let i = 0; i < col.length; i++) {
        let r = Math.floor(Math.random() * arr2.length);
        col[i].innerHTML = arr2[r];
        arr2.splice(r,1);

        if (optionHolders[i].children[0].innerHTML == current.answer) {
            col[i].innerHTML = text;
        }
      }
  },10000)
    closse.onclick = function () {
      pomPublike.style.display = 'none';
    }
};

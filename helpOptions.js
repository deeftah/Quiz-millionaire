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

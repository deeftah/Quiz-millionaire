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

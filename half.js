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

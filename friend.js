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

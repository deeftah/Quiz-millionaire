class Sound {
  constructor() {
    this.start = new Audio('sl/play.mp3');
    this.question = new Audio('sl/question.mp3');
    this.win = new Audio('sl/win.mp3');
    this.lose = new Audio('sl/lose.mp3');
    this.finalAnswer = new Audio('sl/finalAnswer.mp3');
    this.answer = new Audio('sl/answer.mp3');
    this.hello = new Audio('sl/hello.mp3');
  }
  playQuiz() {
    this.start.play();
  }
  playQuizEnd() {
    this.start.load();
  }
  playQuestion() {
    this.question.play();
  }
  playQuestionEnd() {
    this.question.load();
  }
  correctAnswer() {
    this.win.play();
  }
  correctAnswerEnd() {
    this.win.load();
  }
  errorAnswer() {
    this.lose.play();
  }
  final() {
    this.finalAnswer.play();
  }
  answerFriend() {
    this.answer.play();
  }
  answerFriendOff() {
    this.answer.load();
  }
  helloVoice() {
    this.hello.play();
  }
  helloVoiceOff() {
    this.hello.load();
  }

}

let sound = new Sound();

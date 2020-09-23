
  class Quiz {
    constructor(milioner) {
      this.milioner = milioner;
      this.index = 0;
      this.score = 0;
      this.error = 0;
    }
    getQuestion(question) {
      return question[this.index];
    }
    randomize(current) {
      let rand = [];
      let copyArray = [].concat(current.options);
      for (let i = 0; i < 4; i++) {
        let r = Math.floor(Math.random() * copyArray.length);
        rand.push(copyArray[r]);
        copyArray.splice(r,1);
      }
      return rand;
    }

    answers(inner,pitanje) {
      if (inner.children[0].innerHTML == pitanje.answer) {
        this.score += pitanje.points;
      }else {
        this.error++;

      }
      this.index++;

    }
    end(num) {
      return this.index == num.length;
      console.log(this.score);
    }
  };

  let quiz = new Quiz(milioner);

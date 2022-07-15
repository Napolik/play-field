class PlayField extends HTMLElement {
  constructor() {
    super();

    this.table = [[[1,0,0,1], [1,0,0,0], [1,0,0,0], [1,0,0,0], [1,0,0,0],
                   [1,0,0,0], [1,0,0,0], [1,0,0,0], [1,0,0,0], [1,1,0,0], ]];

    //console.log(this.table[0][0].length);

    this.drawWalls();
  }

  drawWalls() {
    for (let i = 0; i < this.table[0].length; i++) {
      const cell = document.createElement('div');

      for (let j = 0; j < this.table[0][i].length; j++) {
        switch (j) {
          case 0 :
            this.drawBorder(this.table[0][i][j]);
            console.log('top');
            break;
          case 1 :
            console.log('right');
            break;
          case 2 :
            console.log('bottom');
            break;
          case 3 :
            console.log('left');
        }
      }
    }
  }

  drawBorder() {

  }
}

customElements.define('play-field', PlayField);

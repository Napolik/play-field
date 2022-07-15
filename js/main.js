class PlayField extends HTMLElement {
  constructor() {
    super();

    this.table = [[[1,0,0,1], [1,0,0,0], [1,0,0,0], [1,0,0,0], [1,0,0,0],
                   [1,0,0,0], [1,0,0,0], [1,0,0,0], [1,0,0,0], [1,1,0,0]],
                  [[0,0,0,1], [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0],
                   [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,1,0,0]],
                  [[0,0,0,1], [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0],
                   [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,1,0,0]],
                  [[0,0,0,1], [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0],
                   [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,1,0,0]],
                  [[0,0,0,1], [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0],
                   [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,1,0,0]],
                  [[0,0,0,1], [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0],
                   [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,1,0,0]],
                  [[0,0,0,1], [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0],
                   [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,1,0,0]],
                  [[0,0,0,1], [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0],
                   [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,1,0,0]],
                  [[0,0,0,1], [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0],
                   [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,1,0,0]],
                  [[0,0,1,1], [0,0,1,0], [0,0,1,0], [0,0,1,0], [0,0,1,0],
                   [0,0,1,0], [0,0,1,0], [0,0,1,0], [0,0,1,0], [0,1,1,0]]];

    this.drawWalls();

    console.log(this.randomBoolean());
    this.generateWalls();
  }

  drawWalls() {
    document.querySelector('.playfield').innerHTML = '';

    for (let y = 0; y < this.table.length; y++) {
      for (let i = 0; i < this.table[y].length; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');

        for (let j = 0; j < this.table[y][i].length; j++) {
          switch (j) {
            case 0 :
              drawBorder(this.table[y][i][j], 'top');
              break;
            case 1 :
              drawBorder(this.table[y][i][j], 'right');
              break;
            case 2 :
              drawBorder(this.table[y][i][j], 'bottom');
              break;
            case 3 :
              drawBorder(this.table[y][i][j], 'left');
              break;
          }
        }

        function drawBorder(isWall, side) {
          if (isWall) {
            cell.classList.add(side);
          }
          document.querySelector('.playfield').append(cell);
        }
      }
    }
  }

  randomBoolean() {
    const randomBoolean = Math.random() < 0.5;
    return randomBoolean;
  }

  generateWalls() {
    let result = [];
    let row = [];

    for (let i = 0; i < this.table.length; i++) {

      let cell = [];

      for (let j = 0 ; j < 4; j++) {
        const rand = this.randomBoolean();
        cell.push(Number(rand));
      }
      row.push(cell);
      console.log(row);
      result.push(row);
    }

    //console.log(result);

    this.table = result;
    this.drawWalls();
  }

}

customElements.define('play-field', PlayField);

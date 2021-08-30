// Madhuri Anandani Main Screen of the Game

var game = new Phaser.Game(gameWidth+menuWidth, numBlocksY*blockSize+blockSize, Phaser.AUTO, document.getElementById('game'));
game.state.add('Menu',Menu);
game.state.add('Game',Game);
game.state.start('Menu');

//Place whine lines on the left and right sides of the game scene
function placeSeparators(){
    var leftSeparator = game.add.graphics(0, 0);
    leftSeparator.lineStyle(3, 0xffffff, 1);
    leftSeparator.lineTo(0,game.world.height);
    var rightSeparator = game.add.graphics(gameWidth+menuWidth-3, 0);
    rightSeparator.lineStyle(3, 0xffffff, 1);
    rightSeparator.lineTo(0,game.world.height);
}

function startButton(pos) {
    var y = (pos == 1 ? 400 : 550);
    var button = game.add.button(game.world.centerX, y, 'button', startGame, this, 2, 1, 0);
    button.anchor.setTo(0.5);
}

function startButton01(pos) {
    var x = (pos == 2 ? 200 : 250);
    var y = (pos == 2 ? 400 : 550);
    var button = game.add.button(x, y, 'button', startGame01, this, 2, 1, 0);
    button.anchor.setTo(0.5);
}

function startButton02(pos) {
    var x = (pos == 3 ? 700 : 750);
    var y = (pos == 3 ? 400 : 550);
    var button = game.add.button(x, y, 'button', startGame02, this, 2, 1, 0);
    button.anchor.setTo(0.5);
}

function startGame() {
    game.state.start('Game');
}

function startGame01() {
    game.state.start('Game');
}
function startGame02() {
    game.state.start('Game');
}
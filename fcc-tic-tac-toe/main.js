// var cross = "&#10005;";
// var nought = "&#11096;";

var game = {
    first: true,
    user: '',
    computer: '',
    currentPlayer: '',
    moves: 1,
};

function start() {
    $('#start-reset').click(function() {
        $('#hiddenDiv').css('display', 'block');
        $('#start-reset').addClass('reset');
        $('.reset').attr('onclick', 'reset()')
        $('#start-reset').text('RESET');
    })
}

function setMarker(id) {
    if (id === 'cross-marker-button') {
        game.user = '<span class="fa fa-times"></span>';
        game.computer = '<span class="fa fa-circle-o"></span>';
        $('.marker-button').removeAttr('onclick');
        $('#choice')[0].innerText = "";
        $('#player-marker-cross')[0].innerText = "You";
        $('#player-marker-circle')[0].innerText = "Computer";
    } else if (id === 'circle-marker-button') {
        game.user = '<span class="fa fa-circle-o"></span>';
        game.computer = '<span class="fa fa-times"></span>';
        $('.marker-button').removeAttr('onclick');
        $('#choice')[0].innerText = "";
        $('#player-marker-circle')[0].innerText = "You";
        $('#player-marker-cross')[0].innerText = "Computer";
    }
    firstMove();
    setCurrPl('user');
}

function firstMove() {
    $('#cFive').html(game.computer);
    $('#cFive').removeAttr('onClick');
}

function icon(id) {
    if (game.currentPlayer == 'user') {
        $('#' + id).html(game.user);
        $('#' + id).removeAttr('onClick');
        gameStatus();
        setCurrPl('computer');
    } else if (game.currentPlayer == 'computer') {
        $('#' + id).html(game.computer);
        $('#' + id).removeAttr('onClick');
        gameStatus();
        setCurrPl('user');
    }
    game.moves++;
    draw();

    if (game.currentPlayer == 'computer') {
        comp();
    }
}

// COMPUTER'S LOGIC

function comp() {
    switch (true) {
        case $('#cOne').html() != game.user && $('#cOne').html() != game.computer:
            icon('cOne');
            break;
        case $('#cTwo').html() !== game.user && $('#cTwo').html() !== game.computer:
            icon('cTwo');
            break;
        case $('#cThree').html() !== game.user && $('#cThree').html() !== game.computer:
            icon('cThree');
            break;
        case $('#cFour').html() !== game.user && $('#cFour').html() !== game.computer:
            icon('cFour');
            break;
        case $('#cFive').html() !== game.user && $('#cFive').html() !== game.computer:
            icon('cFive');
            break;
        case $('#cSix').html() !== game.user && $('#cSix').html() !== game.computer:
            icon('cSix');
            break;
        case $('#cSeven').html() !== game.user && $('#cSeven').html() !== game.computer:
            icon('cSeven');
            break;
        case $('#cEight').html() !== game.user && $('#cEight').html() !== game.computer:
            icon('cEight');
            break;
        case $('#cNine').html() !== game.user && $('#cNine').html() !== game.computer:
            icon('cNine');
            break;
    }
};

// HELPER FUNCTIONS

function freezeBoard() {
    $('.cell').removeAttr('onClick');
}

function setCurrPl(curr) {
    game.currentPlayer = curr;
}

// END GAME

//      Check game status for win/draw of continue game

function gameStatus() {
    var curPlayer;

    if (game.currentPlayer == 'user') {
        curPlayer = game.user;
    } else if (game.currentPlayer == 'computer') {
        curPlayer = game.computer;
    }

    switch (true) {
        case $('#cOne').html() === curPlayer && $('#cTwo').html() === curPlayer &&
        $('#cThree').html() === curPlayer:
            show('#cOne', '#cTwo', '#cThree');
            break;
        case $('#cFour').html() === curPlayer && $('#cFive').html() === curPlayer &&
        $('#cSix').html() === curPlayer:
            show('#cFour', '#cFive', '#cSix');
            break;
        case $('#cSeven').html() === curPlayer && $('#cEight').html() === curPlayer &&
        $('#cNine').html() === curPlayer:
            show('#cSeven', '#cEight', '#cNine');
            break;
        case $('#cOne').html() === curPlayer && $('#cFour').html() === curPlayer &&
        $('#cSeven').html() === curPlayer:
            show('#cOne', '#cFour', '#cSeven');
            break;
        case $('#cTwo').html() === curPlayer && $('#cFive').html() === curPlayer &&
        $('#cEight').html() === curPlayer:
            show('#cTwo', '#cFive', '#cEight');
            break;
        case $('#cThree').html() === curPlayer && $('#cSix').html() === curPlayer &&
        $('#cNine').html() === curPlayer:
            show('#cThree', '#cSix', '#cNine');
            break;
        case $('#cOne').html() === curPlayer && $('#cFive').html() === curPlayer &&
        $('#cNine').html() === curPlayer:
            show('#cOne', '#cFive', '#cNine');
            break;
        case $('#cThree').html() === curPlayer && $('#cFive').html() === curPlayer &&
        $('#cSeven').html() === curPlayer:
            show('#cThree', '#cFive', '#cSeven');
            break;
        default:
            draw();
    }
};

// Check for draw
function draw() {
    if (game.moves === 9) {
        document.getElementById('result').innerText = "DRAW";
    }
}

// Show winning row
function show(x, y, z) {
    var x = $(x),
        y = $(y),
        z = $(z);
    x.addClass('win');
    y.addClass('win');
    z.addClass('win');
    freezeBoard();

    /*===== PROBLEMS DISPLAYING THE CORRECT WINNER, DISPLAYS ONE MARKER AS WINNER REGARDLESS OF THE RESULT OF THE GAME =====

    if ($('.win').has('.fa-times')) {
        console.log(x);
        $('#result')[0].innerHTML = '<span class="fa fa-times"></span>' + " " + "<span style='font-size: 6.5em'>WINS</span>"
    } else if ($('.win').has('.fa-circle-o')) {
        $('#result')[0].innerHTML = '<span class="fa fa-circle-o"></span>' + " " + "<span style='font-size: 6.5em'>WINS</span>"
    }

    */
}

function reset() {
    $('.cell').html('');
    game.moves = 1;
    $('.cell').attr('onClick', 'icon(this.id)');
    $('.win').removeClass('win');
    setTimeout(firstMove, 1000);
}

setTimeout(start, 600);
/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;


init();

var lastDice;


document.querySelector('.btn-roll').addEventListener('click', function () {
    //Do something here
    if (gamePlaying) {
        //1.Random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        //2. Display the result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';


        //3. Update the round score IF the rolled number was NOT a 1
        if (dice1 !== 1 && dice2 !== 1) {
            //Add score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next Player
            nextPlayer();
        }
        /*
        if (dice === 6 && lastDice === 6) {
            //Player looses score
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
        } else if (dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next Player
            nextPlayer();
        }

        lastDice = dice;

*/
    }



});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        //Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector('.final-score').value;

        // Undefined, 0, null or "" are COERECED to false
        //Anything else is COERECED to true
        if (input) {
            var winningScore = input;
        } else {
            winningScore = 100;
        }


        // Check if player won the game
        if (scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //Next Player
            nextPlayer();
        }

        lastDice = '0';
    }

    //        document.querySelector('.player-0-panel').classList.remove('active');
    //        document.querySelector('.palyer-1-panel').classList.add('active');


    //本当はプレイヤーが変わって最初の値は空にしたいと思うが好みで最終結果は表示したいのでコメントアウト
    //        document.querySelector('.dice').style.display = 'none';

});


function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //        document.querySelector('.player-0-panel').classList.remove('active');
    //        document.querySelector('.palyer-1-panel').classList.add('active');


    //本当はプレイヤーが変わって最初の値は空にしたいと思うが好みで最終結果は表示したいのでコメントアウト
    //        document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    //getElementByIdはidを取得してくるから#はいらない
    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');


}




//dice = Math.floor(Math.random() * 6) + 1;
//
//document.querySelector('#current-' + activePlayer).textContent = dice;
////document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'
////上のはHTML要素も加えて対象IDの表記にぶっこむよって感じ
//
//var x = document.querySelector('#score-0').textContent;
//console.log(x);







/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1.A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint:Always save the previous dice roll in a separate variable)
問題がある気がして6を出した時点でholdして次のプレイヤーが6を出すとスコア没収されるという理不尽な感じがするのでホールドを押したときにlastDiceを0にするように付け加え
2.Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in Javascript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSSS to position the second dice, so take a look at the code for the first one.)
*/
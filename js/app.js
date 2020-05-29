/*
 * Create a list that holds all of your cards
 */

const icons = ["fa fa-anchor", "fa fa-bolt", "fa fa-bomb", "fa fa-bicycle",
"fa fa-cube", "fa fa-diamond", "fa fa-leaf", "fa fa-paper-plane-o",
"fa fa-anchor", "fa fa-bolt", "fa fa-bomb", "fa fa-bicycle",
"fa fa-cube", "fa fa-diamond", "fa fa-leaf", "fa fa-paper-plane-o",
];

const cardsBoard = document.querySelector('#cards-board')
const stars = document.querySelector('.stars').childNodes; 

creatCardsBoard();

function creatCardsBoard() {

    // To clear the old card board 
    cardsBoard.innerHTML = "";
    // creat new ul element to append it to "cardsBoard"
    const newDeck = document.createElement('ul');
    newDeck.classList.add('deck');
    // shuffle the icons list
    let shufIcons = shuffle(icons);
    for (let i = 0; i < shufIcons.length; i++) {
        const newLi = document.createElement('li');
        newLi.classList.add('card');
        newLi.innerHTML = `<i class="${shufIcons[i]}"></i>`;
        newDeck.appendChild(newLi);
    }
    cardsBoard.append(newDeck);

    document.querySelector('.deck').addEventListener('click', clickResponse);
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


var matchArray = [];
var count = 0;
var total = 8;
function clickResponse(e) {
    if (e.target && e.target.matches("li.card") && !e.target.classList.contains("open" , "show" , "match")) {
        e.target.classList.add("open" , "show");
        var matchClass = e.target;
        setTimeout(() => {checkMatch(matchClass , matchArray)}, 800);
        }
    }
 



function checkMatch(elem , matchArray) {
    if(matchArray.length)
        {
       if (  matchArray[0].children[0].className === elem.children[0].className){
          matchArray[0].classList.add("match");
          elem.classList.add("match");
          total--;
          if(!total){
            alert("Congratulations!! You have completed the game in " + count + " moves!");
            restart();
        }
        } else {
            matchArray[0].classList.remove("open" , "show");
            elem.classList.remove("open" , "show");
            count++;
            document.querySelector('.moves').textContent = count;   
            rating();  

        }
          matchArray.pop();  
        }
    else {
        matchArray.push(elem);
    }   
}

function rating() {
       // if the moves number is between 12 and 19
       if (count === 12) {
        // remove third star
        stars[5].children[0].classList.add('hide');
        // if the moves number is 20 or more 
    } else if (count === 20) {
        // remove second star
        stars[3].children[0].classList.add('hide');
    }
}

function restart() {
    creatCardsBoard();
    count = 0;
    total = 8;
    document.querySelector('.moves').textContent = count; 
}
document.querySelector('.restart').addEventListener('click', restart);
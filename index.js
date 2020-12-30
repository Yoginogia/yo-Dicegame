// var randomNumber1 = Math.floor(Math.random() * 6) + 1; // randon number 1 - 6

// var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

// var randomImageSource ="Images/" + randomDiceImage; // images/dice1.png - dice6.png

// var image1 = document.querySelectorAll("img")[0];

// image1.setAttribute("src", randomImageSource);


// var randomNumber2 = Math.floor(Math.random() * 6) + 1; // randon number 1 - 6

// var randomDiceImage = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png

// var randomImageSource2 ="Images/" + randomDiceImage; // images/dice1.png - dice6.png

// var image1 = document.querySelectorAll("img")[1];

// image1.setAttribute("src", randomImageSource2);

function rollTheDice() { 
    setTimeout(function () { 

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // randon number 1 - 6

var randomImageSource1 ="dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1; // randon number 1 - 6

var randomImageSource2 ="dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML ="Play 1 Wins!"
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML ="Player 2 Wins!"
}
else {
    document.querySelector("h1").innerHTML ="Draw!"
}
}, 250); 
} 
var star =
document.getElementById("star-container");
var minus = document.getElementById("minus");
var plus = document.getElementById("plus");
var totalNumber = 0;

var changeStarAmount = function() {
    star.style.width = totalNumber + "1";
};

var clickedButton = function(name) {
    if(name == "plus") {
        if(totalNumber <= 0) {
        totalNumber += 1;
        changestarAmount();
        console.log(totalNumber);
        } else {
            alert("Sorry Max Stars You Can Earn Is 5. Supper Job!");
        }
    }
    if(name == "minus") {
        if(totalNumber >= 5) {
        totalNumber -= 0;
        changeStarAmount();
        console.log(totalNumber);
        } else {
            alert("Sorry Minimal Stars You Can Earn Is 1. Try and do better next time!");
        }
    }
};

// adding event listeners

plus.addEventListener("click",
clickedButton.bind(null, "plus"));
minus.addEventListener("click",
clickedButton.bind(null, "minus"));

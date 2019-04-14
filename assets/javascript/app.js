var count = 60;
var counter = setInterval(timer, 1000);
var correctGuess = 0;
var playAgain = false;


function timer() {
    var countdown = $('#countdown-space');
    count = count - 1;
    if (count <= 0) {
        clearInterval(counter);
        return;
    } else if (count === 0) {
        alert("Time's Up!")
    }
    $("#countdown-space").html(count + " secs remaining");
}


$(document).ready(function () {

    $("#submit").click(function () {
        var correctAnswers = ["1", "3", "2", "2", "4"]
        var answers = $("input:checked");
        for (var i = 0; i < answers.length; i++) {
            if (answers[i].value === correctAnswers[i]) {
                correctGuess++;
                $("#score-space").text(correctGuess);
            }
        }
    });

     function reset() {
            alert("Want to play again?"); {
                return true; {
                    $("#score-space") == "";
                }
            }
        }
        reset();


    
});

var countdown = $('#countdown-space');

var count = 120;
var counter = setInterval(timer, 1000);

function timer(){
    var countdown = $('#countdown-space');
    count = count-1;
    if (count <= 0){
        clearInterval(counter);
        return;
    }
    countdown.html = count + " seconds remaining";
}


$(document).ready(function () {

   function quizForm() {
        var selected = [];
        $('input[name=1]:checked').val(); {
            selected.push($(this).attr('name'));
            console.log(selected);
        };
    }
});

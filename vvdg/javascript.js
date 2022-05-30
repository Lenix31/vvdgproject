function test()
{
    let word = document.querySelector("#input1").value;
    alert(word)
}

function countdown()
{
    var timer = 60;

var interval = setInterval(function() {
    timer--;
    $('timer').text(timer);
    if (timer === 0) clearInterval(interval);
}, 1000);
}

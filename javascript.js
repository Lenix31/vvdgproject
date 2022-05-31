document.addEventListener("DOMContentLoaded", function()
{    
    document.querySelector('#start').addEventListener('click', () => countdown());
});



// function test()
// {
//     let word = document.querySelector("#input1").value;
//     alert(word)
// }



function startTimer(duration, display) {
    var timer = duration, seconds;
    var refreshIntervalId;
    refreshIntervalId = setInterval(function () {
  
        seconds = parseInt(timer % 60, 10);

        
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent =  seconds;

        if (--timer < 0) {
            
            
            main();
            clearInterval(refreshIntervalId);
        }
        
    }, 1000);
    
}

function countdown() {
    var seconds = 10;
        display = document.querySelector('#time');
    
    startTimer(seconds, display);
    return;
};





// readability





    // get input from user
    function main()
    {
        let text = document.querySelector("#input1").value;
        
        let numLetters = getNumLetters(text);
        let numWords = getNumWords(text);
        let numSentences = getnumSentences(text);
    
        let gradeLevel = getGradeLevel(numLetters, numSentences, numWords);
    
        printGradeLevel(gradeLevel);
    }
    
    




    function getNumLetters(text)
    {
        // loop through text, counting number of letters, words and sentences
        var l = 0
        for (let i = 0; i<`${text.length}`; i ++)
        {
            if (text[i].charCodeAt(0) > 64 && text[i].charCodeAt(0) < 123) // check is letter
            {
                l = l + 1;
            }
            
        }
        return l;
    }  
    function getNumWords(text)
    {
        var w = 0;
        for (let i = 0; i<`${text.length}`; i ++)
        {
            if (text[i].charCodeAt(0) == 32 ) 
            {
                w = w + 1;
            }
            
        }
        w = w + 1;
        return w;
    }
    function getnumSentences(text)
    {
        var s= 0;
        for (let i = 0; i<`${text.length}`; i ++)
        {
            if (text[i].charCodeAt(0) == 46 || text[i].charCodeAt(0) == 33 || text[i].charCodeAt(0) == 63) 
            {
                s = s + 1;
            }
            
        }
        return s;
    }
    function getGradeLevel(numLetters, numSentences, numWords)
    {
        var L = numLetters / numWords * 100
        var S = numSentences / numWords * 100
        var index = Math.round(0.0588 * L - 0.296 * S - 15.8)
        return index;
    }
    function printGradeLevel(gradeLevel)
    {
        display = document.querySelector('#results');

        var x = 1;
        if(gradeLevel>= 4)
        {
            display.textContent =  "You are smarter than a 10 year old! Congratulations!";
        }
        else
        {
            display.textContent =  "You're almost there, try again!";
        }
        
    }

     
    

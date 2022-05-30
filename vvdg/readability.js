document.addEventListener("DOMContentLoaded", function()
{    
    document.querySelector('#start').addEventListener('click', () => main());
});

    // get input from user
    // const len = document.getElementById("input1").value;
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
        if(gradeLevel<1)
        {
            console.log("Before Grade 1")
            return;
        }
        else if (gradeLevel >= 16)
        {
            console.log("Grade 16+")
            return;
        }
        console.log("Grade " + gradeLevel);
    }
    
    
    
    
    


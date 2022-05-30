document.addEventListener("DOMContentLoaded", function()
{    
    document.querySelector('#start').addEventListener('click', () => main());
});

    // get input from user
    const len = document.getElementById("input1").value;
    function main()
    {
        let text = document.querySelector("#input1").value;
        
        let numLetters = getNumLetters(text);
        // let numWords = getNumWords(text);
        // let numSentences = getnumSentences(text);
    
        // let gradeLevel = getGradeLevel(numLetters, numSentences, numWords);
    
        // printGradeLevel(gradeLevel);
    }
    
    
    function getNumLetters(text)
    {
        // loop through text, counting number of letters, words and sentences
        var l = 0
        for (let i = 0; i<len.lenght; i ++)
        {
            if ((text > 64 && text < 91) || (text > 96 && text < 123)) // check is letter
            {
                l = l + 1;
            }
            
        }
        console.log(l);
        return l;
    }  
    
    
    
    
    






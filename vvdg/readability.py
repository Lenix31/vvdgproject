


def getNumLetters(text):
    # loop through text, counting number of letters, words and sentences
    l = 0
    for i in text:
        if i.isalpha():
            l += 1
    return l

def getNumWords(text):
    # loop through text, counting number of letters, words and sentences
    w = 0
    for i in text:
        if i == " ":
            w += 1
    w += 1
    return w

def getNumSentences(text):

    # loop through text, counting number of letters, words and sentences
    s = 0
    for i in text:
        if i in [".", "!", "?"]:
            s += 1
    return s

def getGradeLevel(numLetters, numSentences, numWords):
    # calculate the coleman liau index
    L = numLetters / numWords * 100
    S = numSentences / numWords * 100
    index = round(0.0588 * L - 0.296 * S - 15.8)
    return index

def printGradeLevel(gradeLevel):
    if(gradeLevel< 1):
        print("Before Grade 1")
        return
    elif(gradeLevel>= 16):
        print("Grade 16+")
        return
    print("Grade", gradeLevel)

def main():
    # get input from user
    text = input("Text: ")

    numLetters = getNumLetters(text);
    numWords = getNumWords(text);
    numSentences = getNumSentences(text);

    gradeLevel = getGradeLevel(numLetters, numSentences, numWords);

    printGradeLevel(gradeLevel);

main()
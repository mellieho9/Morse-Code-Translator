const crypt = new Map([
    ['a','.-'],
    ['b','-...'],
    ['c','-.-.'],
    ['d','-..'],
    ['e','.'],
    ['f','..-.'],
    ['g','--.'],
    ['h','....'],
    ['i','..'],
    ['j','.---'],
    ['k','-.-'],
    ['l','.-..'],
    ['m','--'],
    ['n','-.'],
    ['o','---'],
    ['p','.--.'],
    ['q','--.-'],
    ['r','.-.'],
    ['s','...'],
    ['t','-'],
    ['u','..-'],
    ['v','...-'],
    ['w','.--'],
    ['x','-..-'],
    ['y','-.--'],
    ['z','--..']
]
);

const reversed = new Map([
    ['.-','a'],
    ['-...','b'],
    ['-.-.','c'],
    ['-..','d'],
    ['.','e'],
    ['..-.','f'],
    ['--.','g'],
    ['....','h'],
    ['..','i'],
    ['.---','j'],
    ['-.-','k'],
    ['.-..','l'],
    ['--','m'],
    ['-.','n'],
    ['---','o'],
    ['.--.','p'],
    ['--.-','q'],
    ['.-.','r'],
    ['...','s'],
    ['-','t'],
    ['..-','u'],
    ['...-','v'],
    ['.--','w'],
    ['-..-','x'],
    ['-.--','y'],
    ['--..','z']
]
);

//translates word from english to morse code
function translateWord(word){
    let firstLetter = ""
    for (let i = 0; i < word.length-1; i++){
            firstLetter += crypt.get(word[i])
            firstLetter += " "
    }
    firstLetter += crypt.get(word[word.length-1])
    return firstLetter
}

// makes the translation appear
function encryptWord(){
    let word = document.getElementById("inputWord").value
    document.getElementById("translateWord").value = translateWord(word)
}

function translateCode(code){
    translation = ""
    splitCode = code.split(" ")  
    for (let i=0;i<splitCode.length;i++)
    {
        translation += reversed.get(splitCode[i]) 
    } 
    return translation
}

// makes the english word appear
function encryptCode(){
    let code = document.getElementById("inputCode").value
    document.getElementById("translateCode").value = translateCode(code)
}






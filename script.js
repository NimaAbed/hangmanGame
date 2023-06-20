const secretWords = ["break","apple","moon","rice","day","night"]

let randomWord=""
let clicked = []
let result = ""
let lives = 0
function selectRandomWord(){
    randomWord=secretWords[Math.floor(Math.random()*secretWords.length)]
    console.log(randomWord)
    document.querySelector("#letters").addEventListener("click",btnHandler)
    window.addEventListener("keydown",keyHandler)
}

function underScore(){
    let splitedWord = randomWord.split("")
    let mapSplitedWord=splitedWord.map(function(item){
        if(clicked.includes(item)){
            return item
        }else{
            return "_"
        }
    })
    result=mapSplitedWord.join("")
    document.querySelector("#clue").innerHTML=`<p>${result}</p>`
}

function checkLive(letter){
    if(result == randomWord){
        document.querySelector("#image img").setAttribute("src",`assets/winner.png`)
        return
    }
    if(!(randomWord.includes(letter))){
        lives+=1
        document.querySelector("#image img").setAttribute("src",`assets/hangman${lives}.png`)
    }
}

function letterHandler(letter){
    letter = letter.toLowerCase()
    console.log(letter)
    if(clicked.indexOf(letter)==-1){
        clicked.push(letter)
        underScore()
        checkLive(letter)
    }

}

function btnHandler(event){
    // console.log(event.target)
    letterHandler(event.target.innerHTML)
    event.target.className = "used"
    
}

function keyHandler(event){
    letterHandler(event.key)
}



selectRandomWord()
underScore()
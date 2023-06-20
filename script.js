const secretWords = ["break","apple","moon","rice","day","night"]

let randomWord=""
let clicked = []
let result = ""
function selectRandomWord(){
    randomWord=secretWords[Math.floor(Math.random()*secretWords.length)]
    console.log(randomWord)
    document.querySelector("#letters").addEventListener("click",btnHandler)
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

function letterHandler(letter){
    letter = letter.toLowerCase()
    console.log(letter)
    if(clicked.indexOf(letter)==-1){
        clicked.push(letter)
        underScore()
    }

}

function btnHandler(event){
    // console.log(event.target)
    letterHandler(event.target.innerHTML)
    
}



selectRandomWord()
underScore()
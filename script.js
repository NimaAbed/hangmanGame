const secretWords = ["break","apple","moon","rice","day","night"]

let randomWord=""

function selectRandomWord(){
    randomWord=secretWords[Math.floor(Math.random()*secretWords.length)]
    console.log(randomWord)
    document.querySelector("#letters").addEventListener("click",btnHandler)
}

function btnHandler(event){
    console.log(event.target)
    
}



selectRandomWord()
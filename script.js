const secretWords = ["break", "apple", "moon", "rice", "day", "night"]
const getImg = document.querySelector("#image img")
let randomWord = ""
let clicked = []
let result = ""
let lives = 0
function selectRandomWord() {
    randomWord = secretWords[Math.floor(Math.random() * secretWords.length)]
    document.querySelector("#letters").addEventListener("click", btnHandler)
    window.addEventListener("keydown", keyHandler)
}

function underScore() {
    let splitedWord = randomWord.split("")
    let mapSplitedWord = splitedWord.map(function (item) {
        if (clicked.includes(item)) {
            return item
        } else {
            return "_"
        }
    })
    result = mapSplitedWord.join("")
    document.querySelector("#clue").innerHTML = `<p>${result}</p>`
}

function checkLive(letter) {
    if (result == randomWord) {
        document.querySelector("#image img").setAttribute("src", `assets/winner.png`)
        return
    }
    if (!(randomWord.includes(letter))) {
        lives += 1
        document.querySelector("#image img").setAttribute("src", `assets/hangman${lives}.png`)
    }
}

function letterHandler(letter) {
    letter = letter.toLowerCase()
    if (clicked.indexOf(letter) == -1) {
        clicked.push(letter)
        underScore()
        checkLive(letter)
    } else {
        alert("Clicked")
    }

}

function btnHandler(event) {
    if (lives == 6 || getImg.getAttribute("src") == "assets/winner.png") {
        document.querySelector("#clue").innerHTML = randomWord
        setTimeout(function () {
            if (confirm("Do You Want To Play Again")) {
                location.reload()
            }
        }, 100)

        return
    }
    letterHandler(event.target.innerHTML)
    event.target.className = "used"

}

function keyHandler(event) {
    if (lives == 6 || getImg.getAttribute("src") == "assets/winner.png") {
        document.querySelector("#clue").innerHTML = randomWord
        setTimeout(function () {
            if (confirm("Do You Want To Play Again")) {
                location.reload()
            }
        }, 100)

        return
    }
    letterHandler(event.key)
}



selectRandomWord()
underScore()
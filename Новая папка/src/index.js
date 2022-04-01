import './style.css'
import Img1 from './img/10 пики.jpg'
import Img2 from './img/6 пики.jpg'
import Img3 from './img/6 черви.jpg'
import Img4 from './img/7 бубны.jpg'
import Img5 from './img/7 крести.jpg'
import Img6 from './img/7 пики.jpg'
import Img7 from './img/7 черви.jpg'
import Img8 from './img/8 бубны.jpg'
import Img9 from './img/8 крести.jpg'
import Img10 from './img/10 бубны.jpg'
import Img11 from './img/10 крести.jpg'
import Img12 from './img/10 черви.jpg'
import Img13 from './img/6 бубны.jpg'
import Img14 from './img/6 крести.jpg'
import Img15 from './img/8 пики.jpg'
import Img16 from './img/8 черви.jpg'
import Img17 from './img/9 бубны.jpg'
import Img18 from './img/9 крести.jpg'
import Img19 from './img/9 пики.jpg'
import Img20 from './img/9 черви.jpg'
import Img21 from './img/валет бубны.jpg'
import Img22 from './img/валет крести.jpg'
import Img23 from './img/валет пики.jpg'
import Img24 from './img/валет черви.jpg'
import Img25 from './img/дама бубны.jpg'
import Img26 from './img/дама пики.jpg'
import Img27 from './img/дама крести.jpg'
import Img28 from './img/дама черви.jpg'
import Img29 from './img/король бубны.jpg'
import Img30 from './img/король крести.jpg'
import Img31 from './img/король пики.jpg'
import Img32 from './img/король черви.jpg'
import Img33 from './img/туз бубны.jpg'
import Img34 from './img/туз крести.jpg'
import Img35 from './img/туз пики.jpg'
import Img36 from './img/туз черви.jpg'
import ImgShirt from './img/рубашка.jpg'
import ImgWin from './img/popap1.svg'
import ImgLose from './img/popap2.svg'

const arrCard = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9,
    Img10,
    Img11,
    Img12,
    Img13,
    Img14,
    Img15,
    Img16,
    Img17,
    Img18,
    Img19,
    Img20,
    Img21,
    Img22,
    Img23,
    Img24,
    Img25,
    Img26,
    Img27,
    Img28,
    Img29,
    Img30,
    Img31,
    Img32,
    Img33,
    Img34,
    Img35,
    Img36,
]

const levelPage = document.querySelector('.fon')
const blockLevel = document.querySelector('.block-level')
const btnLevel = document.querySelectorAll('.block-btn')
const playPage = document.querySelector('.fon-play')
const playCard = document.querySelector('.play-card')
const levelDifficulty = document.querySelectorAll('.block-level-difficulty')
const levelBlock = document.querySelector('.block')
const winBlock = document.querySelector('.win')
const loseBlock = document.querySelector('.lose')
const popapWin = document.querySelector('.popap-img')
const popapLose = document.querySelector('.popap-img')

let checkLevel: string

blockLevel.addEventListener('click', (event) => {
    checkLevel = event.target.value
    for (const levelCheck of levelDifficulty) {
        let lev

        if (event.target.value === levelCheck.dataset.rating) {
            lev = levelCheck.dataset.rating

            for (const levelCheck of levelDifficulty) {
                if (lev === levelCheck.dataset.rating) {
                    levelCheck.classList.add('block-level-border')
                } else {
                    levelCheck.classList.remove('block-level-border')
                }
            }
        }
    }
})

let timeMinut = 0
let intervalID: number = setInterval()

btnLevel[0].addEventListener('click', (event) => {
    if (!checkLevel) {
        event.preventDefault()
    } else {
        levelPage.classList.add('noshow')
        playPage.classList.remove('noshow')

        if (checkLevel === '1') {
            getRandomRiver(3, arrCard)
            timeMinut = 5
            intervalID = setInterval(timerDown, 1000)
        }
        if (checkLevel === '2') {
            playCard.classList.add('play-card2')
            getRandomRiver(6, arrCard)
            timeMinut = 10
            intervalID = setInterval(timerDown, 1000)
        }
        if (checkLevel === '3') {
            getRandomRiver(9, arrCard)
            timeMinut = 20
            intervalID = setInterval(timerDown, 1000)
        }
    }
})

function getRandomRiver(n: number, arr: string[]) {
    const indexes = new Set()
    const limit = arr.length
    n = Math.min(n, limit)
    while (indexes.size < n) {
        const index = Math.floor(limit * Math.random())
        indexes.add(index)
        cardAdd = new Image()
        cardAdd.src = arrCard[index]
        cardAdd.classList.add('card')
        cardAdd.id = index
        let clone = cardAdd.cloneNode(true)
        cards.push(cardAdd)
        cards.push(clone)
    }
    shuffleArray(cards)
    return
}

let cardAdd
let cards = []
function shuffleArray(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
        playCard.appendChild(array[i])
    }
}

const timerSekShow = document.querySelector('.sek')
const timerMinShow = document.querySelector('.min')

function timerDown() {
    let seconds = timeMinut % 60
    if (timeMinut < 0) {
        clearInterval(intervalID)
        for (const cardShirt of cards) {
            cardShirt.src = ImgShirt
        }
        intervalID = setInterval(timerUp, 1000)
        let clickCard
        playCard.addEventListener('click', (event) => {
            if (clickCard === undefined) {
                clickCard = event.target.id
                console.log(clickCard)
            } else {
                if (clickCard === event.target.id) {
                    showWin()
                    btnLevel[1].addEventListener('click', () => {
                        location.reload()
                    })
                } else {
                    showLose()
                    btnLevel[2].addEventListener('click', () => {
                        location.reload()
                    })
                }
            }
        })
    } else {
        timerSekShow.textContent = seconds < 10 ? '0' + seconds : seconds
    }
    --timeMinut
}
let seconds = 0
let minutes = 0

function timerUp() {
    if (minutes === 60) {
        clearInterval(intervalID)
        showWin()
        btnLevel[1].addEventListener('click', () => {
            location.reload()
        })
    } else {
        timerSekShow.textContent = seconds < 10 ? '0' + seconds : seconds
        seconds++
        if (seconds === 60) {
            seconds = 0
            minutes++
            timerMinShow.textContent = minutes < 10 ? '0' + minutes : minutes
        }
    }
}

const playBtn = playPage.querySelector('.play-btn')

playBtn.addEventListener('click', () => {
    clearInterval(intervalID)
    cards = []
    levelPage.classList.remove('noshow')
    playPage.classList.add('noshow')
    timerSekShow.textContent = '00'
    timerMinShow.textContent = '00'
    while (playCard.firstChild) {
        playCard.removeChild(playCard.firstChild)
    }
    for (const levelCheck of levelDifficulty) {
        levelCheck.classList.remove('block-level-border')
    }
})

function showWin() {
    levelPage.classList.remove('noshow')
    winBlock.classList.remove('noshow')
    playPage.classList.add('noshow')
    levelBlock.classList.add('noshow')
    let popap = new Image()
    popap.src = ImgWin
    popapWin.appendChild(popap)
}

function showLose() {
    levelPage.classList.remove('noshow')
    loseBlock.classList.remove('noshow')
    playPage.classList.add('noshow')
    levelBlock.classList.add('noshow')
    let popap = new Image()
    popap.src = ImgLose
    popapLose.appendChild(popap)
}

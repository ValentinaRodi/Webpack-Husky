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

const levelPage = document.querySelector('.fon')!
const blockLevel = levelPage.querySelector('.block-level')!
const btnLevel = levelPage.querySelectorAll('.block-btn')!
const levelDifficulty: any = levelPage.querySelectorAll('.block-level-difficulty')!
const timerSekShowStop = levelPage.querySelectorAll('.sek')!
const timerMinShowStop = levelPage.querySelectorAll('.min')!
const playPage = document.querySelector('.fon-play')!
const playCard = playPage.querySelector('.play-card')!
const levelBlock = document.querySelector('.block')!
const winBlock = document.querySelector('.win')!
const popapWin = winBlock.querySelector('.popap-img')!
const loseBlock = document.querySelector('.lose')!
const popapLose = loseBlock.querySelector('.popap-img')!
const timerSekShow = playPage.querySelector('.sek')!
const timerMinShow = playPage.querySelector('.min')!

let checkLevel: any

blockLevel.addEventListener('click', (event: any) => {
    checkLevel = event.target.value
    for (const levelCheck of levelDifficulty) {
        let lev

        if (event.target.value === (levelCheck as HTMLElement).dataset.rating) {
            lev = (levelCheck as HTMLElement).dataset.rating

            for (const levelCheck of levelDifficulty) {
                if (lev === (levelCheck as HTMLElement).dataset.rating) {
                    levelCheck.classList.add('block-level-border')
                } else {
                    levelCheck.classList.remove('block-level-border')
                }
            }
        }
    }
})

let timeMinut = 0
let intervalID: any

btnLevel[0].addEventListener('click', (event) => {
    if (!checkLevel) {
        event.preventDefault()
    } else {
        levelPage.classList.add('noshow')
        playPage.classList.remove('noshow')
        showScreenCard()
    }
})

function showScreenCard() {
    if (checkLevel === '1') {
        getRandomRiver(3, arrCard)
        timeMinut = 5
        intervalID = setInterval(timerDown, 1000)

        setTimeout(getClikcCard, 7000)
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

function getClikcCard() {
    const playAddCard: any = playPage.querySelector('.card')!

    if (playAddCard.src === ImgShirt) {
        playCard.addEventListener('click', (event: any) => {
            getChoseCard(event)
        })
    }
}


let indexCard: any = []

export function getRandomRiver(n: number, arr: string []) {
    const indexes = new Set()
    const limit = arr.length
    n = Math.min(n, limit)
    while (indexes.size < n) {
        const index = Math.floor(limit * Math.random())
        indexes.add(index)
        cardAdd = new Image()
        cardAdd.src = arrCard[index]
        cardAdd.name = index
        cardAdd.classList.add('card')
        
        //pushNewCards(cardAdd, cards)
        let clone = cardAdd.cloneNode(true)
        cards.push(cardAdd)
        cards.push(clone)
        indexCard = index
    }
    shuffleArray(cards)
    return
}

export let cardAdd: any
export let cards: any[] = []

function shuffleArray(array: any) {
    for (let i = array.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
        array[i].id = i
        playCard.appendChild(array[i])
    }
}

function timerDown() {
    let seconds = timeMinut % 60
    if (timeMinut < 0) {
        clearInterval(intervalID)

        const playAddCard: any = playPage.querySelectorAll('.card')!
        let cardShirt: any
        for (cardShirt of playAddCard) {
            cardShirt.src = ImgShirt
        }
        intervalID = setInterval(timerUp, 1000)
    } else {
        timerSekShow.textContent = String(
            seconds < 10 ? '0' + seconds : seconds
        )
    }
    --timeMinut
}

let clickCard: any
let numberCard: any
let seconds = 0
let minutes = 0
let choseCard: any[] = []

function getChoseCard(event: any) {
    if (clickCard === undefined) {
        clickCard = event.target.id

        for (const cardShirt of cards) {
            if (clickCard === cardShirt.id) {
                numberCard = cardShirt.name
                cardShirt.src = arrCard[numberCard]
                choseCard.push(cardShirt)
            }
        }
        return
    } else {
        if (event.target.name === choseCard[0].name) {
            for (const cardShirt of cards) {
                if (event.target.id === cardShirt.id) {
                    numberCard = choseCard[0].name
                    choseCard.splice(0, 1)
                    cardShirt.src = arrCard[numberCard]
                    clickCard = undefined
                }
            }
            const foundCardShirt = cards.find(
                (cardShirt) => cardShirt.src === ImgShirt
            )
            if (foundCardShirt === undefined) {
                return showWin()
            }
            return
        } else {
            return showLose()
        }
    }
}

function timerUp() {
    if (minutes === 60) {
        clearInterval(intervalID)
        showLose()
        btnLevel[1].addEventListener('click', () => {
            location.reload()
        })
    } else {
        timerSekShow.textContent = String(
            seconds < 10 ? '0' + seconds : seconds
        )
        seconds++
        if (seconds === 60) {
            seconds = 0
            minutes++
            timerMinShow.textContent = String(
                minutes < 10 ? '0' + minutes : minutes
            )
        }
    }
}

const playBtn = playPage.querySelector('.play-btn')!

playBtn.addEventListener('click', () => {
    location.reload()
})

function showWin() {
    levelPage.classList.remove('noshow')
    winBlock.classList.remove('noshow')
    playPage.classList.add('noshow')
    levelBlock.classList.add('noshow')

    let popap = new Image()
    popap.src = ImgWin
    popapWin.appendChild(popap)

    timerSekShowStop[0].textContent = String(
        seconds < 10 ? '0' + seconds : seconds
    )
    timerMinShowStop[0].textContent = String(
        minutes < 10 ? '0' + minutes : minutes
    )
    btnLevel[1].addEventListener('click', () => {
        location.reload()
    })
}

function showLose() {
    levelPage.classList.remove('noshow')
    loseBlock.classList.remove('noshow')
    playPage.classList.add('noshow')
    levelBlock.classList.add('noshow')

    let popap = new Image()
    popap.src = ImgLose
    popapLose.appendChild(popap)

    timerSekShowStop[1].textContent = String(
        seconds < 10 ? '0' + seconds : seconds
    )
    timerMinShowStop[1].textContent = String(
        minutes < 10 ? '0' + minutes : minutes
    )
    btnLevel[2].addEventListener('click', () => {
        location.reload()
    })
}

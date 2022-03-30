import './style.css'

const levelPage = document.querySelector('.fon')
const blockLevel = levelPage.querySelector('.block-level')
const btnLevel = levelPage.querySelector('.block-btn')
const playPage = document.querySelector('.fon-play')
const block1 = playPage.querySelectorAll('.block1')
const block2 = playPage.querySelectorAll('.block2')
const block3 = playPage.querySelectorAll('.block3')
const levelDifficulty = levelPage.querySelectorAll('.block-level-difficulty')
let checkLevel

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

// for (const starCheck of star) {
//             let st;
            
//             if ( event.target.value === starCheck.dataset.rating) {
//                 st = starCheck.dataset.rating;

//                 for (const starCheck of star) {
                    
//                     if (st >= starCheck.dataset.rating) {
//                         starCheck.classList.add('starGold');
                    
//                     } else {
//                         starCheck.classList.remove('starGold');
//                     };
//                 };
//             };
//         };

btnLevel.addEventListener('click', () => {
    levelPage.classList.add('noshow')
    playPage.classList.remove('noshow')

    if (checkLevel === '1') {
        block1[0].classList.remove('noshow')
    }
    if (checkLevel === '2') {
        block2[0].classList.remove('noshow')
    }
    if (checkLevel === '3') {
        block3[0].classList.remove('noshow')
    }
})

const { it, expect } = require("@jest/globals");
const { pushNewCards } = require('./function')

const cards = []
it('should add card to object cards', () => {
    //let clone = cardAdd.cloneNode(true)
    //cards.push(cardAdd)

    const card = 1
    cards.push(card)

    if (cards.length === 0) {
        throw Error('Items equal to 0')
    }
})



// it('Select user level', () => {
//     document.body.innerHTML = `
//         <div class="block-level-difficulty">3<div/>
//         <div class="block-level">
//     `
//     require('./function.ts')

//     const newLevelDifficulty: any = document.querySelector(
//         '.block-level-difficulty'
//     )
//     const newBlockLevel: any = document.querySelector('.block-level')!

//     newLevelDifficulty.value = 'New level'
//     newBlockLevel.click()

//     expect(newLevelDifficulty.value).toBe('New level')
// })

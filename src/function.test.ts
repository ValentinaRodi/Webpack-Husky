//const { expect: any } = require('@jest/globals')
const { cards, pushNewCards } = require('./index')

it('should add card to object cards', () => {
    pushNewCards(1, 2)
    
    if (cards.length === 0) {
        throw Error('Items equal to 0')
    }
})


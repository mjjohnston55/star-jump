import Shuffle from './Shuffle'

const POOL = [
"BACKPACK",
"BALL",
"BOOK",
"BUS",
"CHAIR",
"DESK",
"HOOP",
"PEN",
"PENCIL",
"PLANT",
"SCOOTER",
"SLIDE",
"SWING"
]

export default {
    index: 0,
    words: Shuffle(POOL),
    first() {return this.words[this.index = 0]},
    next(word) {
        let newWordIndex = Math.floor( Math.random() * 13 )
        while (POOL[newWordIndex] === word) {
            newWordIndex = Math.floor( Math.random() * 13 )
        }
        this.index = newWordIndex
        return POOL[newWordIndex]
    }
}
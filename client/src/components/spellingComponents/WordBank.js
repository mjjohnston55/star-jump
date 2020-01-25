import Shuffle from './Shuffle'

const POOL = [
"MOUSE",
"CHICKEN",
"LIZARD",
"WOLF",
"FROG",
"CAT",
"DOG",
"BEE",
"PIG",
"COW",
"BAT",
"BIRD",
"LLAMA",
"MONKEY",
"FERRET"
]

export default {
    index: 0,
    words: Shuffle(POOL),
    first() {return this.words[this.index = 0]},
    next(word) {
        let newWordIndex = Math.floor( Math.random() * 15 )
        while (POOL[newWordIndex] === word) {
            newWordIndex = Math.floor( Math.random() * 15 )
        }
        this.index = newWordIndex
        return POOL[newWordIndex]
    }
}
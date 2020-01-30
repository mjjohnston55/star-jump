import Shuffle from './Shuffle'

const POOL = [
{
    id: 1,
    name: "1+2",
    total: 3,
},
{
    id: 2,
    name: "1+4",
    total: 5
},
{
    id: 3,
    name: "1+6",
    total: 7
},
{
    id: 4,
    name: "2+2",
    total: 4
},
{
    id: 5,
    name: "2+4",
    total: 6
},
{
    id: 6,
    name: "2+5",
    total: 7
},
{
    id: 7,
    name: "3+3",
    total: 6
},
{
    id: 8,
    name: "3+4",
    total: 7
},
{
    id: 9,
    name: "4+4",
    total: 8
},
{   
    id: 10,
    name: "4+6",
    total: 10
},
{
    id: 11,
    name: "6+6",
    total: 12
}
]

export default {
    index: 0,
    dominos: Shuffle(POOL),
    first() {return this.dominos[this.index = 0]},
    next(domino) {
        
        let newDominoIndex = Math.floor( Math.random() * 8 )
        while( POOL[newDominoIndex] === domino){
            newDominoIndex = Math.floor( Math.random() * 8 )
        }

        this.index = newDominoIndex
        return POOL[newDominoIndex]
    },
}
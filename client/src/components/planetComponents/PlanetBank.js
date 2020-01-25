import Shuffle from './Shuffle'

const POOL = [
"MERCURY",
"VENUS",
"EARTH",
"MARS",
"JUPITER",
"SATURN",
"URANUS",
"NEPTUNE",
]



export default {
    index: 0,
    planets: Shuffle(POOL),
    first() {return this.planets[this.index = 0]},
    // next() {return this.planets[this.index = (this.index + 1) % this.planets.length]}
    next(planet) {
        
        let newPlanetIndex = Math.floor( Math.random() * 8 )
        while( POOL[newPlanetIndex] === planet){
            newPlanetIndex = Math.floor( Math.random() * 8 )
        }

        this.index = newPlanetIndex
        return POOL[newPlanetIndex]
    },
}
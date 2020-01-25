import React, { useState, useEffect, useContext } from 'react'
import '../../App.css';
import { Link } from 'react-router-dom';
import Picture from '../planetComponents/Picture'
import PlanetBank from '../planetComponents/PlanetBank'
import PlanetButton from '../planetComponents/PlanetButton'
import swal from 'sweetalert';
import UserContext from '../../context/user/userContext';

const PlanetApp = props => {

    const [score, setScore] = useState(0)
    const [planet, setPlanet] = useState(PlanetBank.first())
    const [correctButtonIndex, setCorrectButtonIndex] = useState(Math.floor(Math.random() * 2))
    const userContext = useContext(UserContext);

    const { updateStars, user } = userContext;

    useEffect(() => {
      setScore(score)
      setPlanet(planet)
      setCorrectButtonIndex(correctButtonIndex)
  }, [score, planet, correctButtonIndex]);
  
    const correctGuess = () => {
      setScore(score + 1);
      if (score >= 7) {
        updateStars(user, 3)
        // props.history.push("/");
        setTimeout(function() {
          props.history.push("/");
        }, 1500);
        swal("You won! You've earned the star for this game!")
        }
      
      console.log(score)
      // const planet = PlanetBank.next()
      // const correctButtonIndex = Math.floor(Math.random() * 2)
  
      console.log(PlanetBank.next())
      setPlanet(PlanetBank.next(planet))
      setCorrectButtonIndex(Math.floor(Math.random() * 2))
      console.log("CORRECT GUESS")
    }
  
          return (
            <div className="banner"> Can you guess the planet based on the picture?
            <Link to='/'>
            <div className='back-arrow'></div>
            </Link>
            <div className="grid-container">
              <Picture planet={planet}/>
              <div className="item2">
                <PlanetButton onClickEvent={correctGuess} buttonIndex={0} correctButtonIndex={correctButtonIndex} planet={planet} />
                <PlanetButton onClickEvent={correctGuess} buttonIndex={1} correctButtonIndex={correctButtonIndex} planet={planet} />
              </div>
            </div>
            </div>
          )
  
  }
  
  export default PlanetApp;
  



// function PlanetApp() {
//     return (
//         <div>
//             <h1>Planet App</h1>
//             <Link to='/'>
//                 <div className='back-arrow'></div>
//             </Link>
//         </div>
//     );
// }

// export default PlanetApp;


{/* <Link to='/'>
<div className='back-arrow'></div>
</Link> */}
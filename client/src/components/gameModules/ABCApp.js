import React, { useContext } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import UserContext from '../../context/user/userContext'; //////

function ABCApp() {
    const userContext = useContext(UserContext); //////

    const { updateStars, user } = userContext; //////

    const put = () => {
        /* THIS IS FOR TESTING UPDATE STARS */
        updateStars(user, 2);
    };

    return (
        <div>
            <h1>ABC App</h1>
            <Link to='/mainapp'>
                <div className='back-arrow'></div>
            </Link>
            <button onClick={put}></button>
        </div>
    );
}

export default ABCApp;

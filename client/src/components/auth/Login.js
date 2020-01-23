import React, { useState, useContext, useEffect } from 'react';
import UserContext from '../../context/user/userContext';
import AlertContext from '../../context/alert/alertContext';

const Login = props => {
    const userContext = useContext(UserContext);
    const { login, error, clearErrors, isAuthenticated } = userContext;

    const alertContext = useContext(AlertContext);
    const { setAlert /* removeAlert */ } = alertContext;

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/');
        }

        if (error === 'Invalid Credentials') {
            // setting the error value in state
            setAlert(error, 'danger'); // calling set alert with the previously set error value
            clearErrors(); // setting error value back to null
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const { email, password } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (email === '' || password === '') {
            setAlert('Please fill in all fields', 'danger');
        } else {
            login({
                email,
                password
            });
        }
    };

    return (
        <div className='container w-50 p-3'>
            <h1 className='text-light font-weight-bold'>
                Account
                <span className='text-primary'> Login</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className='form-group text-left text-light font-weight-bold'>
                    <label htmlFor='email'>Email Address:</label>
                    <input
                        className='form-control'
                        type='text'
                        name='email'
                        value={email}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className='form-group text-left text-light font-weight-bold'>
                    <label htmlFor='password'>Password:</label>
                    <input
                        className='form-control'
                        type='password'
                        name='password'
                        value={password}
                        onChange={onChange}
                        required
                    />
                </div>
                <input
                    type='submit'
                    value='Login'
                    className='btn btn-primary btn-block font-weight-bold'
                />
            </form>
        </div>
    );
};

export default Login;

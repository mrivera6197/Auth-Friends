import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components'

const StyledLogin = styled.div`
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    input, button {
        padding: 0.65rem 1.5rem;
        border: none;
        box-shadow: 1px 1px 4px #4873EA;
        border-radius: 1px;
        margin: 0.1rem;
    }

    .header {
        background: #EDF0F5;
        filter: drop-shadow(26px 26px 60px #4873EA) invert(2%);
        width: 100%;
        text-align: left;
    }

    .login-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 12rem;
    }

    h1{ 
        margin-left: 1rem;
        letter-spacing: 0.075rem;
        color: #4873EA;
    }

    .small-header {
        padding: 0.05rem 0.05rem;
        border-radius: 5px;
        margin-left: 5rem;
        width: 40%;
    }


`

const initialFormValues = {
    username: '',
    password: '',
}

const Login = (props) => {
    const [ formValues, setFormValues ] = useState(initialFormValues)

    const handleChange = e => {
        setFormValues({
            ...formValues, 
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(formValues)
        axios 
        .post('http://localhost:5000/api/login', formValues)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.payload)
            props.history.push('/api/friends')
        })
        .catch(err => {
            console.log(err.response)
        })
    }

    return (
        <StyledLogin>
            <div className='container'>
                <div className='header'>
                    <div className='small-header'>
                        <h1>friends</h1>
                    </div>
                </div>
                <div className='login-container'>
                    <p>Log into Friends</p>
                    <form onSubmit={handleSubmit}>
                        <input
                        type='text'
                        name='username'
                        placeholder='username'
                        value={formValues.username}
                        onChange={handleChange}
                        />
                        <input
                        type='text'
                        name='password'
                        placeholder='password'
                        value={formValues.password}
                        onChange={handleChange}
                        />
                        <button>login</button>
                    </form>
                </div>
            </div>
        </StyledLogin>
    )
}

export default Login 
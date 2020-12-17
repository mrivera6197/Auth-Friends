import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components'

import { axiosWithAuth } from '../utils/axiosWithAuth'

const StyledForm = styled.div`

`

const initialState = {
    name: '',
    age: '',
    email: '',
}

const NewFriendForm = (props) => {
    const [newFriend, setNewFriend] = useState(initialState)

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(newFriend)
        axiosWithAuth()
        .post('/friends', newFriend)
        .then(res=>{
            props.fetchFriends()
        })
        .catch(err => {
            console.log('error',err)
        })
    }

    return (
        <StyledForm>
            <div>

            </div>
            <div>
            <form onSubmit={handleSubmit}>
                <input
                type='text'
                name='name'
                placeholder='name'
                value={newFriend.name}
                onChange={handleChange}
                />
                <input
                type='text'
                name='age'
                placeholder='age'
                value={newFriend.age}
                onChange={handleChange}
                />
                <input
                type='text'
                name='email'
                placeholder='email'
                value={newFriend.email}
                onChange={handleChange}
                />
                <button>add friend</button>
            </form>
            </div>
        </StyledForm>

    )
}

export default NewFriendForm 
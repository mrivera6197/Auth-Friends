import axios from 'axios'
import React, { useState, useEffect } from 'react'

import { axiosWithAuth } from '../utils/axiosWithAuth'
import NewFriendForm from './NewFriendForm'
import Friend from './Friend'

import styled from 'styled-components'

const StyledFriendList = styled.div`
 .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
    }

    form {
        display: flex;
        align-items: center;
        margin: 1rem;
    }
    input, button {
        padding: 0.65rem 0.5rem;
        border: none;
        box-shadow: 1px 1px 4px #4873EA;
        border-radius: 1px;
    }

    button {
        padding: 0.2rem 2rem;
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

    h1, h2{ 
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

    .friendList {
        margin-top: 7rem;
        display: flex;
        flex-direction: column;
    }

    .list {
        display: flex;
        flex-direction: column;
        background: #EDF0F5;
        filter: drop-shadow(1px 1px 4px #4873EA) invert(2%);
        margin-top: 1rem;
        padding: 0.5rem 10rem;
    }

    p {
        line-height: 0rem;
    }
`

const FriendList = () => {
    const [friendlist, setFriendList] = useState([])

    const fetchFriends = () => {
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            console.log(res.data)
            setFriendList(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(()=> {
        fetchFriends()
    }, [])

    return (
        <StyledFriendList>
            <div className='container'>
                <div className='header'>
                    <div className='small-header'>
                        <h1>friends</h1>
                        <NewFriendForm fetchFriends={fetchFriends}/>
                    </div>
                </div>
                <div className='friendList'>
                <h2>friendList</h2>
                {friendlist.map(friend => {
                    return (
                        <div className='list'>
                            <p>name: {friend.name}</p>
                            <p>age: {friend.age}</p>
                            <p>email: {friend.email}</p>
                        </div>
                    )
                })}
                </div>
            </div>
        </StyledFriendList>
    )
}

export default FriendList 
import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import axios from 'axios'

const Friend = (props) => {
    const [friend, setFriend] = useState({})

    useEffect(()=> {
        console.log("hi", props)
    })

    return (
        <div>
            <p>Friend</p>
            <p>{friend.name}</p>
        </div>
    )
}

export default Friend 
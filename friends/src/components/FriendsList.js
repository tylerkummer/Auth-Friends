import React, { useState } from 'react';

const FriendsList = (props) => {
    return (
        <div className='display-friends'>
            <p>Name: {props.friends.name}</p>
        </div>
    )
} 

export default FriendsList
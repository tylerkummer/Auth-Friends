import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions/actions';

const FriendsList = ({ getFriends, friends, error }) => {
    useEffect(() => {
        getFriends();
    }, [getFriends])

    if(error){
        return(
            <p>{error}</p>
        )
    }

    return(
        <>
            {friends.map(friend => {
                return(
                    <div key={friend.id}>
                        <h2>Name: {friend.name}</h2>
                        <h2>Age: {friend.age}</h2>
                        <h2>Email: {friend.email}</h2>
                    </div>
                )
            })}
        </>
    )
} 

const mapStateToProps = state => {
    return {
        friends: state.friends,
        error: state.error
    }
}

export default connect(mapStateToProps, { getFriends})(FriendsList);
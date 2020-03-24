import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postFriends } from '../actions/actions';

const FriendsForm = props => {
    const [friendsPost, setFriendsPost] = useState({
        name: "",
        age: "",
        email: ""
    });

    const handleChanges = e => {
        setFriendsPost({
            ...friendsPost,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.postFriends(friendsPost);
        setFriendsPost({
            name: "",
            age: "",
            height: ""
        })
    };

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="name"
                    placeholder="Friend Name"
                    value={friendsPost.name}
                    onChange={handleChanges}
                />
                <input 
                    type="text"
                    name="age"
                    placeholder="Friend Age"
                    value={friendsPost.age}
                    onChange={handleChanges}
                />
                <input 
                    type="text"
                    name="email"
                    placeholder="Friend Email"
                    value={friendsPost.email}
                    onChange={handleChanges}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

const mapStateToProps = state => {
    return {
        friends: state.friends,
        error: state.error
    }
}

export default connect(mapStateToProps, { postFriends })(FriendsForm);
import axios from "axios";

export const GET_FRIENDS_FETCHING = "GET_FRIENDS_FETCHING";
export const UPDATE_FRIENDS_FETCHING = "UPDATE_FRIENDS_FETCHING";
export const SET_ERROR_FETCHING = "SET_ERROR_FETCHING";

export const getFriends = () => dispatch => {
    dispatch({type: GET_FRIENDS_FETCHING});
    axios.get('http://localhost:5000/friends')
        .then(res => {
            dispatch({type: UPDATE_FRIENDS_FETCHING, payload: res.data});
        })
        .catch(err => {
            dispatch({type: SET_ERROR_FETCHING, payload: "SET_ERROR_FETCHING", err});
        })
};
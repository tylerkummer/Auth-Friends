import { axiosWithAuth } from "../utils/axiosWithAuth";

export const GET_FRIENDS_FETCHING = "GET_FRIENDS_FETCHING";
export const UPDATE_FRIENDS_FETCHING = "UPDATE_FRIENDS_FETCHING";
export const SET_ERROR_FETCHING = "SET_ERROR_FETCHING";

export const GET_FRIENDS_POSTING = "GET_FRIENDS_POSTING";
export const UPDATE_FRIENDS_POSTING = "UPDATE_FRIENDS_POSTING";
export const SET_ERROR_POSTING = "SET_ERROR_POSTING";

export const getFriends = () => dispatch => {
    dispatch({type: GET_FRIENDS_FETCHING});
    axiosWithAuth().get('/api/friends')
        .then(res => {
            console.log("GET_FRIENDS_FETCHING",res.data)
            dispatch({type: UPDATE_FRIENDS_FETCHING, payload: res.data});
        })
        .catch(err => {
            dispatch({type: SET_ERROR_FETCHING, payload: "SET_ERROR_FETCHING", err});
        })
};

export const postFriends = friendsPost => dispatch => {
    dispatch({type: GET_FRIENDS_POSTING});
    axiosWithAuth().post('/api/friends', friendsPost)
        .then(res => {
            dispatch({type: UPDATE_FRIENDS_POSTING, payload: res.data});
        })
        .catch(err => {
            dispatch({type: SET_ERROR_POSTING, payload: "SET_ERROR_POSTING", err});
        })
};
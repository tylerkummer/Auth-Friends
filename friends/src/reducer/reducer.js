import { GET_FRIENDS_FETCHING, UPDATE_FRIENDS_FETCHING, SET_ERROR_FETCHING, GET_FRIENDS_POSTING, UPDATE_FRIENDS_POSTING, SET_ERROR_POSTING } from '../actions/actions';

const initialState = {
    friends: [],
    isFetchingFriends: false,
    isPostingFriends: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FRIENDS_FETCHING:
            return {
                ...state,
                friends: [],
                isFetchingFriends: true,
                error: ""
            };
        case UPDATE_FRIENDS_FETCHING:
            return {
                ...state,
                friends: action.payload,
                isFetchingFriends: false,
                error: ""
            };
        case SET_ERROR_FETCHING:
            return {
                ...state,
                isFetchingFriends: false,
                error: action.payload
            };
        case GET_FRIENDS_POSTING:
            return {
                ...state,
                friends: [],
                isPostingFriends: true,
                error: ""
            };
        case UPDATE_FRIENDS_POSTING:
            return {
                ...state,
                friends: action.payload,
                isPostingFriends: false,
                error: ""
            };
        case SET_ERROR_POSTING:
            return {
                ...state,
                isPostingFriends: false,
                error: action.payload
            };
        default:
            return state;
    }
}
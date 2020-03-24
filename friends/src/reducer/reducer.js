const initialState = {
    friends: [],
    isFetchingFriends: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_FRIENDS_FETCHING:
            return{
                ...state,
                friends: [],
                isFetchingFriends: true,
                error: ""
            };
        case UPDATE_FRIENDS_FETCHING:
            return{
                ...state,
                friends: action.payload,
                isFetchingFriends: false,
                error: ""
            };
        case SET_ERROR_FETCHING:
            return{
                ...state,
                isFetchingFriends: false,
                error: action.payload
            };
        default:
            return state;
    }
}
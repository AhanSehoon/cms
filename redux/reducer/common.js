import { combineReducers } from 'redux';
import { LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FIALURE } from '../action/common';

const initialState = {
    isLogin: false
};

const LoginHandler = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
            });
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isLogin : action.isLogin
            });
        case LOGIN_FIALURE:
            return Object.assign({}, state, {
            });
        default:
            return state;
    }
};

const CommonHandler = combineReducers({
    LoginHandler
});

export default CommonHandler;
import {
    EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    LOGOUT_USER
} from '../actions/types';

const INITIAL_STATE ={ 
    email:'',
    password:'',
    user: null,
    error: '',
    loading: false,
    isLoggedIn:false
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);

    switch(action.type){
        case EMAIL_CHANGED: 
            return { ...state, email: action.payload};
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload};
        case LOGIN_USER:
            return { ...state, loading: true, error: ''};
        case LOGOUT_USER:
            return { ...state,
                email:'',
                password:'',
                user: null,
                error: '',
                loading: false, 
                isLoggedIn:false };
        case LOGIN_USER_SUCCESS:
            return { ...state,
                password:'',
                error: '',
                loading: false, 
                isLoggedIn:true,
                user: action.payload}
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed.', password: '', loading: false}    
        default:
            return state;
    }
};
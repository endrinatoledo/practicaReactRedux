
import {AuthActionType } from '../actions/AuthAction'

const authState = {
    isLogginIn: false,
    user: {
        name: "",
        expires_at:"",
        jwttoken:"",
        authorities:[]
    },
}

const authreducer = (state=authState, action) =>{

    switch (action.type) {
        case AuthActionType.REGISTER_SUCCESS:
            return{
                isLogginIn: false,
                user:action.payload
            };
        case AuthActionType.REGISTER_FAIL:
            return state;     
        default:
            return state;
    }
    
}

export default authreducer;
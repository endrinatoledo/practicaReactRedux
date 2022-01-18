import axios from 'axios';

const AuthActionType = {
    REGISTER_SUCCESS : "REGISTER_SUCCESS",
    REGISTER_FAIL    : "REGISTER_FAIL",

}

const RegisterAuthAction = (userState)=>{

    return async(dispatch) => {
        try{
            const res = await axios.post("", userState);
            const {data} = res;
            console.log('data', data)
            dispatch({type: AuthActionType.REGISTER_SUCCESS, payload: data})

        }
        catch (error){
            console.log(error);
            dispatch({type: AuthActionType.REGISTER_FAIL, payload:{}})

        }
    }

}

export {RegisterAuthAction, AuthActionType };
import streams from '../apis/streams';
import { SIGN_IN, SIGN_OUT, CREATE_STREAM } from './types';
export const signIn = (userId)=> {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = ()=> {
    return {
        type: SIGN_OUT
    };
};

export const createStream = formValue => async dispatch => {
    const response = await streams.post('/streams',formValue);

    dispatch({ type: CREATE_STREAM, payload: response.data });
};

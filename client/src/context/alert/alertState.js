import React, { useReducer } from 'react';
import {v1 as uuidv4} from "uuid";
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';

import { 
    SET_ALERT,
    REMOVE_ALERT
} from '../types';

const AlertState = props => {
    const initialState = [];
    const [state, dispatch] = useReducer(AlertReducer, initialState);

    const setAlert = (msg, type, timeout = 500) => {
        const id = uuidv4();
        dispatch({
            type: SET_ALERT,
            payload: {msg, type, id}
        });
        setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 5000);
    }


    return (
        <AlertContext.Provider value={{
            state: state,
            setAlert
        }}>
            {props.children}
        </AlertContext.Provider>
    );
}

export default AlertState;
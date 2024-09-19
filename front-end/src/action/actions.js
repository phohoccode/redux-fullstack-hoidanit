import { INCREMENT, DECREMENT, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from './types'
import axios from 'axios';

export const increaseCounter = () => {
    return {
        type: INCREMENT,
    };
};

export const decreaseCounter = () => {
    return {
        type: DECREMENT,
    };
};

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess = (payload) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload
    }
}

export const fetchUserError = () => {
    return {
        type: FETCH_USER_ERROR
    }
}

export const fetchAllUser = () => {
    return async (dispath, getState) => {
        dispath(fetchUserRequest())
        
        try {
            const response = await axios.get('http://localhost:8080/users/all')
            const data = response && response.data ? response.data : []
            dispath(fetchUserSuccess(data))
        } catch (error) {
            console.log(error)
            dispath(fetchUserError())
        }
    }
}
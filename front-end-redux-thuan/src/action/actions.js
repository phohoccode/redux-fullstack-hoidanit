import {
    INCREMENT,
    DECREMENT,
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR,
    CREATE_USER_ERROR,
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    DELETE_USER_ERROR,
    DELETE_USER_SUCCESS,
    DELETE_USER_REQUEST
} from './types'
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

// create user
export const createUserRequest = () => {
    return {
        type: CREATE_USER_REQUEST
    }
}

export const createUserSuccess = () => {
    return {
        type: CREATE_USER_SUCCESS
    }
}

export const createUserError = () => {
    return {
        type: CREATE_USER_ERROR
    }
}

export const createNewUserRedux = (data) => {
    return async (dispath, getState) => {
        dispath(createUserRequest())

        try {
            const response = await axios.post('http://localhost:8080/users/create', { ...data })

            if (response && +response.data.errCode === 0) {
                dispath(createUserSuccess())
                dispath(fetchAllUser())
            }

        } catch (error) {
            console.log(error)
            dispath(createUserError())
        }
    }
}

// delete user
export const deleteUserRequest = () => {
    return {
        type: DELETE_USER_REQUEST
    }
}

export const deleteUserSuccess = () => {
    return {
        type: DELETE_USER_SUCCESS
    }
}

export const deleteUserError = () => {
    return {
        type: DELETE_USER_ERROR
    }
}

export const deleteUserRedux = (id) => {
    return async (dispath, state) => {

        dispath(deleteUserRequest())
        try {
            const response = await axios.post(`http://localhost:8080/users/delete/${id}`)

            if (response && +response.data.errCode === 0) {
                dispath(deleteUserSuccess())
                dispath(fetchAllUser())
            }
        } catch (error) {
            console.log(error)
            dispath(deleteUserError())
        }
    }
}
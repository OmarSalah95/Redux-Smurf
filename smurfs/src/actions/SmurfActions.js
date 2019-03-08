import axios from 'axios';

export const ADDING_SMURF = 'FETCHING'
export const SMURF_ADDED = 'FETCHING_SUCCESS'
export const ADD_SMURF_FAILED = 'FAILURE'

export const addSmurf = newSmurf => dispatch => {
    console.log('addSmurf clg');
    dispatch({type:ADDING_SMURF})
    return axios.post('http://localhost:3333/smurfs', newSmurf)
        .then(res => dispatch({ type: SMURF_ADDED, payload: res.data }))
        .catch(err => dispatch({ type:ADD_SMURF_FAILED, payload: err }))
};
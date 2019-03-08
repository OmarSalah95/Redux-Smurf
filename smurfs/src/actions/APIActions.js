import axios from 'axios';

export const FETCHING_DATA = 'FETCHING'
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS'
export const FETCHING_FAILURE = 'FAILURE'

export const getData = () => dispatch => {
    console.log('action fired');
    dispatch({ type: FETCHING_DATA })
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => dispatch({type: FETCHING_SUCCESS, payload:res.data}))
        .catch(err => dispatch({type: FETCHING_FAILURE, payload: err}))
}


